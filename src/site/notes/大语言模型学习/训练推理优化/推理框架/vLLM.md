---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/训练推理优化/推理框架/vLLM","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/训练推理优化/推理框架/vLLM/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-30T22:28:46.000+08:00","updated":"2025-05-06T10:29:38.000+08:00"}
---



## vLLM
vLLM是一个开源的大模型推理加速框架，通过PagedAttention高效地管理attention中缓存的张量，实现了比HuggingFace Transformers高24倍的吞吐量，其原理是基于PagedAttention的。

### Prefill
预填充阶段。在这个阶段中，我们把整段prompt喂给模型做forward计算。如果采用KV cache技术，在这个阶段中我们会把prompt过 $W_k, W_v$ 后得到的 $X_k, X_v$ 保存在cache_k和cache_v中。这样在对后面的token计算attention时，我们就不需要对前面的token重复计算 $X_k, X_v$ 了，可以帮助我们节省推理时间。
![Pasted image 20250430223027.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250430223027.png)


### Decode
生成response的阶段。在这个阶段中，我们根据prompt的prefill结果，一个token一个token地生成response。由于Decode阶段的是逐一生成token的，因此它不能像prefill阶段那样能做大段prompt的并行计算，所以在LLM推理过程中，Decode阶段的耗时一般是更大的。


### 常规KV cache分配
痛点：由于推理所生成的序列长度大小是无法事先预知的，所以大部分框架会按照 (batch_size, max_seq_len) 这样的固定尺寸，在gpu显存上预先为一条请求开辟一块连续的矩形存储空间。然而，这样的分配方法很容易引起“gpu显存利用不足”的问题，进而影响模型推理时的吞吐量。
![Pasted image 20250430223040.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250430223040.png)
