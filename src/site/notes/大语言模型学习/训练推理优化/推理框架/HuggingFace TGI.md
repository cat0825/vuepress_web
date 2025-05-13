---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/训练推理优化/推理框架/HuggingFace-TGI","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/训练推理优化/推理框架/HuggingFace-TGI/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-30T22:30:46.000+08:00","updated":"2025-05-06T10:29:38.000+08:00"}
---



## ![Pasted image 20250430223133.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250430223133.png)
从图中可以看出，若干个客户端同时请求Web Server的“/generate”服务后，服务端会将这些请求在“Buffer”组件处整合为Batch，并通过gRPC协议转发请求给GPU推理引擎进行计算生成。至于将请求发给多个Model Shard，多个Model Shard之间通过NCCL通信，这是因为显存容量有限或出于计算效率考虑，需要多张GPU进行分布式推理。



## Prefill和Decode
出于效率考虑，推理框架一般会将第1次推理(生成第1个Token)和余下的推理（生成其余Token）分别设计为Prefill和Decode两个过程。

Prefill是将1个请求的Prompt一次性转换为KV Cache,并生成第1个Token的过程。假设Prompt的长度为 $L$ ，MultiHead Attention的头数为 $H$ （Head），每个头的维度为 $HS$ （Head Size，暂不考虑GQA/MQA）。计算该过程时，输入Attention的Q、K、V维度均为 $[L,H, HS]$ ,输入FFN的hidden（隐藏层向量）维度为 $[L, H *HS]$ 。完成模型计算后，仅对最后一个Logit进行解码得到第1个生成的Token；中间过程计算得到的K、V将被保留在显存中（即KV Cache，用于避免后续Decode过程重复计算这些K、V导致算力浪费）。

从第2个Token开始，将上一次推理的输出（新生成的1个Token）作为输入进行一次新的推理，这就是Decode的过程。假设BatchSize=1，已生成的新子序列长度为 $N$， 在计算该过程时，输入Attention的Q维度为 $[1,H, HS]$ , K、V维度则为 $[L+N+1,H, HS]$ ，输入FFN的hidden维度为 $[1, H*HS]$ 。完成模型计算后，对唯一的Logit进行解码得到新生成的Token；中间过程计算得到的K、V追加到KV Cache中（原因同上）。重复Decode流程持续生成Token直到模型输出<EOS>(End of Sentence,表示输出结束的特殊Token)。

很明显，将推理分为Prefill和Decode两个流程，是考虑到生成第1个Token和其余Token时计算模式的差异较大，分开实现有利于针对性的优化。



## Concatenate和Filter
上述讨论仅在BatchSize=1的情况下讨论，从计算维度可以看出，Prefill环节在Prompt较长时计算强度足够高（可以这样“不准确地”理解：Prompt有 $L$ 个Token，则Prefill相当于按BatchSize= $L$ （单并发）进行推理），不会造成性能瓶颈；然而Decode环节的计算强度相对就低得多了（BatchSize=1（单并发）），对于NV新的A/H系列GPU而言是吃不满算力的。一个自然的想法是将多个请求合并成1个Batch进行推理，然而相对CV等经典应用场景，LLM进行Batch推理还有难点需要处理：

对Late-joining Requests的处理。相对常见的CV业务而言，占用GPU推理的时间是漫长的（<1S VS 数秒到数十秒）。所以如果没有一个将新请求插入到推理Batch的机制，还是还像之前场景那样等前面的请求都推理结束后才进行推理，用户增加排队的时间会很长。因此需要设计一个机制来动态处理这些Late-joining Requests，以提高整体效率。
