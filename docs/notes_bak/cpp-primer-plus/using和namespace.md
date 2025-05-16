---
dg-publish: true
dg-permalink: /cpp/using
permalink: /cpp/using/
dgPassFrontmatter: true
noteIcon:
created: 2024-12-28T11:52:53.000+08:00
updated: 2025-01-01T22:39:15.000+08:00
title: using和namespace
createTime: 2025/05/13 17:33:52
---


# C++ 中的 `using` 编译指令和名称空间

在 C++ 中，`using` 关键字和名称空间（`namespace`）是两个非常重要的概念，它们帮助你管理代码的结构和简化代码中的命名问题。

## 1. `namespace`（名称空间）

`namespace` 是一种组织代码的方式，允许你将变量、函数、类等放入不同的命名空间中，以避免名称冲突。假设你有多个库，每个库中都有一个叫做 `print` 的函数，如果不使用命名空间，它们会互相冲突。使用命名空间可以将这些函数放在不同的命名空间下，从而避免冲突。

**示例：**

```cpp
#include <iostream>

// 定义一个名为 A 的命名空间
namespace A {
    void print() {
        std::cout << "This is A's print function." << std::endl;
    }
}

// 定义另一个名为 B 的命名空间
namespace B {
    void print() {
        std::cout << "This is B's print function." << std::endl;
    }
}

int main() {
    // 调用 A 和 B 中的 print 函数
    A::print();  // 输出: This is A's print function.
    B::print();  // 输出: This is B's print function.
    return 0;
}```
## 2.  **`using` 关键字**
using 关键字允许你在特定的范围内直接使用某个命名空间中的成员，而不必每次都写出完整的命名空间路径。这使得代码更加简洁。
```cpp
#include <iostream>

// 定义命名空间 A 和 B
namespace A {
    void print() {
        std::cout << "This is A's print function." << std::endl;
    }
}

namespace B {
    void print() {
        std::cout << "This is B's print function." << std::endl;
    }
}

int main() {
    // 使用 using 关键字来避免每次写完整命名空间
    using namespace A;  // 现在我们可以直接使用 A 中的成员

    print();  // 直接调用 A::print()

    // 如果需要调用 B 的 print，还是需要指定命名空间
    B::print();  // 输出: This is B's print function.
    
    return 0;
}

```
