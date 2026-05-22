---
timezone: UTC+8
---

# yuannnn

**GitHub ID:** Yuannnauy

**Telegram:** @Yuan_022

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
### **RAG：让回答有来源、有版本、有边界**

-   第一性原理：要知道检索结果不是事实，要做到回答的东西关键点可在原文追溯，找不到答案要能让模型说不确定，而不是产生幻觉。
    
-   chunking：将文档切分成合理长度，做到语义完整，节省token。 比较稳的做法是按结构切：标题、API endpoint、函数说明、标准小节、FAQ 问答、审计或变更记录。每个 chunk 保留来源 URL、标题路径、更新时间和版本。
    
-   vector DB：存储embedding，按相似度检索相关段落，可以快速找到语义相近的内容。 注：语义相似不一定就正确，可能会有旧版本，或是很像官方的民间产物都语义相似。因此vector DB要存储源、版本、chain、更新时间、可信等级、是否废弃。检索时先过滤，再排序。
    
    -   复习：embedding：模型通过embedding把得到的信息（文本、代码或其他对象）映射成向量，这样就能衡量语义是否接近（距离）。
        
-   retriever：根据用户问题选择的检索方式的组件。如：向量检索、关键词检索、混合检索、图检索，也可以加上 metadata filter。不止要看语义相似度，理想情况是能明白用户问的时间、版本、检索区域等（不是单纯的向量检索）
    
    1.  关键词检索（Keyword Search / Sparse Retrieval） 就像在图书馆系统里搜“番茄”，系统就只把书名、正文里包含“番茄”这两个字的书找出来。如果有一本书通篇写的是“西红柿”，但一个字都没提“番茄”，那它就绝对搜不出来。  
        **在 AI 里**：它是最传统的检索方式，AI 领域常用 BM25 算法（一种基于词频和逆文档频率的打分机制）。  
        **优点**：极其精准。如果搜特定型号（如“iPhone 15 Pro”）、专有名词或特定代码，它能一击必中。  
        **缺点**：不懂人话，无法理解同义词、近义词和背后的语境。
        
    
    2.  向量检索（Vector Search / Dense Retrieval） 搜“番茄的种植方法”，AI 懂意思，不仅能帮你把包含“西红柿”的书找出来，甚至能把“草本植物栽培指南”也找出来。因为它不看字面，看的是意思（语义）。  
        **在 AI 里**：AI（Embedding 模型）会把每一个词、每一句话甚至每一张图片，转化成一串长长的数字（这就叫高维向量，比如一个 1536 维的数组）。  
        在这个由数字构成的虚拟多维空间里，“番茄”和“西红柿”因为意思相近，它们对应的向量距离就会非常非常近。检索时，把你提的问题也变成向量，然后去数据库里找距离最近（比如用余弦相似度 Cosine Similarity 计算）的文档。它属于稠密向量检索，能够跨越字面限制，实现语义理解和概念匹配，是当前 RAG（检索增强生成）系统的基石。
        
    
    3.  混合检索（Hybrid Search） 向量检索虽然聪明，但有时候会“想太多”导致跑偏。比如你搜特定的系统报错代码“ERR\_CONNECTION\_TIMED\_OUT”，向量检索可能会把它理解为“网络连接不好”，然后给你找一堆网络修理指南，偏偏漏掉了这行一模一样的报错解决方案。关键词检索 + 向量检索 = 混合检索。  
        **它是怎么工作的：**  
        你提一个问题，系统同时派两个小兵出去：一个用关键词检索死磕字面，一个用向量检索去捕捉语义。  
        两个小兵各自带回一堆结果，最后通过一个叫 RRF（倒数排名融合） 的算法或者专门的 Rerank（重排模型），把两份名单科学地合并、打分，筛选出最完美的答案。  
        混合检索将关键词检索（稀疏检索）的高精准度与向量检索（稠密检索）的语义泛化能力相结合。通常在两路检索出各自的候选集后，利用倒数排名融合（RRF）或交叉重排模型（Rerank）进行分数归一化和二次排序。它克服了单一检索方式的短板，是目前大模型工业级应用中最常用的方案。
        
    
    4.  图检索（Graph Search / Knowledge Graph Search） 无论是关键词还是向量，它们找资料都是“单点式”的。但如果你问 AI：“乔布斯创立的公司的现任 CEO 的母校是哪所？”传统的向量检索可能会懵掉，因为它需要跨越好几层人物关系。而图检索手里有一张“知识图谱（Knowledge Graph）”，里面全是：【乔布斯】—(创立)—>【苹果公司】—(现任CEO)—>【蒂姆·库克】—(母校)—>【奥本大学】。AI 只要沿着线“顺藤摸瓜”连连看，就能精准找到答案。  
        在 AI 里是怎么用的？  
        它是把数据做成由“节点（实体）”和“边（关系）”组成的网状结构。现在最前沿的技术叫 GraphRAG（图增强检索），把图检索和向量检索结合起来，让 AI 拥有极强的全局推理和关联思考能力。  
        图检索基于知识图谱（Knowledge Graph）或图数据库。它将信息组织为实体（Nodes）和关系（Edges）的拓扑结构。在 AI 应用中，图检索通过图遍历或图神经网络（GNN）在网状多跳（Multi-hop）关联中抽取结构化知识，擅长处理复杂的实体关系推理、全局摘要以及跨领域的复杂关联查询。
        
-   rerank：初步检索后根据候选材料的好坏（完整度、可信度等）进行排序。常用于候选结果很多、相似度接近或混合检索的场景。Rerank 会增加延迟和成本，所以要根据实际判断是否使用。
    
-   citation：让答案的关键结论可以找到来源。**\* Citation 不是装饰，是用户验证答案的入口。每句话应能追溯到：出自哪份文档/链上记录、来源是否官方、文档版本或更新时间、哪些结论只是模型归纳、哪些地方没有足够证据。**
    
-   **\* 在 AI×Web3 中的位置**：RAG 位在 Knowledge Base 和模型之间，帮 Agent 查资料、补上下文、引用证据，但不负责最终执行。具体场景：
    
    -   协议文档问答（用户问"这个函数怎么用" → RAG 从 SDK 文档检索 → 带引用回答）
        
    -   合约接口解释（检索 ABI 和 NatSpec 注释）
        
    -   治理提案和论坛摘要
        
    -   审计报告检索
        
    -   SDK / API Copilot
        
    -   交易解释时补充项目背景
        
    -   **\* 关键原则：当 RAG 结果要影响链上动作时，还需要接 simulation、policy 和 human check。文档说某函数"可以调用"，不等于当前用户"应该签名"。**
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

### **今日课程：web 3 运行原理**

-   一笔交易怎么走：签名 传播 排队 排序 出块/证明 可查询
    
    -   私钥：类似银行账号的密码，授权各种操作（注：私钥无法更改）
        
        ![image](https://private-user-images.githubusercontent.com/253259717/595360175-3ccf8a18-3c9a-4bc2-a658-88da0e41d9d3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzYwMTc1LTNjY2Y4YTE4LTNjOWEtNGJjMi1hNjU4LTg4ZGEwZTQxZDlkMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZTkzNTM0MThmNjVjNmE1ZmI5YjcxZTQ0ZWY3MDQ1ZjMwMmIzNGM0MDUxOWE4MjU3Yzg5MWU2NGM5NWY1MDUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.2kdMZmegKtTpVnt_68PuyW1qkgrmrVZstjg8kZ5UVjM)
    -   助记词：一对多派生，帮助备份私钥
        
    -   地址：由私钥产生，类似银行账号
        
        ![image](https://private-user-images.githubusercontent.com/253259717/595358908-2df6487a-6808-40a6-a732-7f7261cc5493.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzU4OTA4LTJkZjY0ODdhLTY4MDgtNDBhNi1hNzMyLTdmNzI2MWNjNTQ5My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNDVkNDhlMjA4NTBhZjkzMDRkZGViMDlmZmJiNDMzZDU2MGU0MjJkYTNkMDYwMzY0YmU3NTYyYTRlNzA3NTRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.Gnceg8ZBKIrypMApI2i8rbRcfvt73neWb3JDNVAATrI)

资产不在钱包里，而是在网上，区块链里。因此一个银行账号不能跨行管理其他银行的资产，但web3可以，只要有私钥。

-   交易与签名
    
    -   交易：
        
        ![image](https://private-user-images.githubusercontent.com/253259717/595360997-a60c743a-1223-4042-ba03-0fb6af0cdd0f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzYwOTk3LWE2MGM3NDNhLTEyMjMtNDA0Mi1iYTAzLTBmYjZhZjBjZGQwZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00N2JhZTg3NTZlY2Y0ZTIxMzVkMDRiODBjMzhjYWVjYjM5NDQ0MTE2Mzc0Y2Y3Y2JiOTNkOTdmNzdhNjVjMWE4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.0ULo9AfZOrB33qv1-rWcXfOaYXtkswUKdvsOSL5ipxA)![image](https://private-user-images.githubusercontent.com/253259717/595367634-56571f6a-9b29-49de-a16c-1a10d32a9834.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzY3NjM0LTU2NTcxZjZhLTliMjktNDlkZS1hMTZjLTFhMTBkMzJhOTgzNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YjZiZTFlYjU2NjhjZjk5YTJkMjI3MTE3YWQ2NDdmNTg4OWFlMDc1OGZjZDczMGQxMzYxMTZjYmJiNTNiOTQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.Ab5NqUn0KN3-ap3-3miCGEaZbD2B9F1q78-qyierWuU)
        
        由私钥生成签名、广播，告知所有人交易执行(调用RPC，许多接收方会接收到请求：1.原始信息 2.生成的地址（谁发的信息） 3.由信息生成的签名；接收方会反推谁签的，验证地址是否相同，确定是私钥拥有人操作的）)
        
        -   gas fee(手续费)：
            
            ![image](https://private-user-images.githubusercontent.com/253259717/595371225-ddf1be7a-dfe7-4503-8f30-5591374d13c0.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzcxMjI1LWRkZjFiZTdhLWRmZTctNDUwMy04ZjMwLTU1OTEzNzRkMTNjMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZDRlOWJkZTJmM2E1N2JmZDI1OGZjNzg2YzYyNTgzZDQyM2YxMGEzNDBjMDkzMzBkYjhmZDUzN2QzYWEyMjdmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.rpVDLtb39L2-IEkT37ap7bZ4T8k9wVFkvhn95d-pH_U)
-   区块链怎么运行
    
    ![image](https://private-user-images.githubusercontent.com/253259717/595373465-407f7ed7-7390-4e78-8fa6-3ea5ded65b35.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzczNDY1LTQwN2Y3ZWQ3LTczOTAtNGU3OC04ZmE2LTNlYTVkZWQ2NWIzNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hN2ZiMDViMjFlMjNlMThkZjJlZDUxNTNkMmI5ZDlmODQ4NjczZTJmMWQ3YTFiZDIyYjllYTQ5MzVhYmZkMDhkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.jJ6eznAhnNwA_FKQ5aJ_PUr1mIegPDHAlQ3jviOoOx8)
    -   builder排序：对交易进行排序，钱多，小费多的靠前。
        
    -   validator：鉴证这个块是真实的 没有伪造 \*刚出的块会引用上一个块，刚出容易被攻击，不一定会很稳定，需要大约12min，确认块安全稳定，代表交易被执行。
        
        ![image](https://private-user-images.githubusercontent.com/253259717/595378595-72843ddf-0a31-47f4-a09c-b60ad94153bd.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1Mzc4NTk1LTcyODQzZGRmLTBhMzEtNDdmNC1hMDljLWI2MGFkOTQxNTNiZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NTU5ZDJkYmRlYjFiMDVlZGY0ZDk2YmE0ZWU4N2JkYTI2Y2YzYzRkMDVlOGNkOWYwMjk3MDNiYThjM2NlZjBjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.IzzEkkZ1QO_ZzfY78eEUzVD0rnOWEu6-TSbNMZ9aZaA)
-   钱包、RPC、节点、网络：如何链接
    
    ![image](https://private-user-images.githubusercontent.com/253259717/595381591-372a4502-f799-498b-a0fa-319623036f6b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzgxNTkxLTM3MmE0NTAyLWY3OTktNDk4Yi1hMGZhLTMxOTYyMzAzNmY2Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMWI0ZmMwOGUzZWEwYWM2ODAxNzI1MDc2ODk4MmRhMjVlMDJkZDdjNGM4ZTBjOTllYWIxN2ZmZjdiMzNkY2ExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.VqwlF8cDBk72Qr6Qkk1VglrrBYT405QqJsMTcoASoDE)

![image](https://private-user-images.githubusercontent.com/253259717/595387481-76c3b620-4073-4359-a4bb-de76fa711702.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1Mzg3NDgxLTc2YzNiNjIwLTQwNzMtNDM1OS1hNGJiLWRlNzZmYTcxMTcwMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMTc2MDMxNDAwZTU5ODIyMmQ1OGIzNGE0ZjhkZmFjOGQwMjdjNjQ1MmM2ZGJhMDdlMWY3ZGVmYzgwNTIxMjFhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.SHS-6fb4altpfWWUYu1_1t-uenfzN-kVlM01wd85ylk)![image](https://private-user-images.githubusercontent.com/253259717/595388427-615218c1-b9b0-4316-ae91-7a1f99b37683.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1Mzg4NDI3LTYxNTIxOGMxLWI5YjAtNDMxNi1hZTkxLTdhMWY5OWIzNzY4My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yM2IwMDIxMzZkYjhlNTQ3YjBjY2Q0MzQzYTdmNzBjNmJlZGQyNWI0NTA2MzdiZTI0NDRkZjc3MzljNTRiMzcyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.Rd97ylRvTkhtLnJkrSC63t7g8eNYhgv-h5MKoaWrlJ8)

-   **_连接：Web3 讲课 × Context 章节_**_：今天其实学的是同一件事的两面——讲课讲了「交易怎么在链上跑」（签名 → 广播 → 排序 → 出块 → 确认），Context 讲的是「模型做判断前需要看到什么」。如果未来要做一个 AI Agent 帮你判断「这笔交易能不能签」，它需要的 Context 恰好就是交易流程里的每一个环节：chain ID、from、to、value、data、gas、当前区块高度、simulation 结果。Context 章节教的是怎么把这些信息分层喂给模型（哪些是事实层、哪些是外部参考、哪些必须实时查），Web3 讲课教的是这些信息在链上是怎么产生和传播的。_
    

### **Context：模型的上下文**

**第一性原理：为了提高模型提取信息的真实性，要：**

-   可信来源要显式标注：系统状态、用户输入、检索文档、工具结果要分区放置。
    
-   上下文要可刷新：状态、配置、权限、价格、版本和任务进度不能长期缓存后继续使用。
    
-   记忆要可撤销：用户偏好和历史任务可以提升体验，但不能变成隐藏权限或永久身份假设。
    
-   context window：模型一次请求能处理的最大上下文范围，越长的上下文越容易让ai抓不住重点无法精准提取关键有用信息，因此要这样：“在实际产品里，context window 应该配合检索、摘要和结构化数据使用。关键状态直接给，长文档按需取，低可信内容隔离标注。”
    
    结构化数据： 这里就用到JSON 等格式。把散乱的信息变成规范的结构，AI 读起来才不容易抓错重点。
    
    摘要： 如果上下文实在太长，系统会在后台先调动一个小模型，把次要内容总结成几句话，再喂给主模型。
    
    关键状态直接给：有些信息是决定整个对话走向的“绝对前提”。比如当前对话的时间、软件当前处于什么界面、用户的核心操作指令等。这些信息字数不多，但极其重要，所以必须作为最高优先级的系统信息，直接放进窗口里，确保 AI 随时带着这些前提在工作。
    
    长文档按需取：如果面对一本 500 页的说明书，系统会先把它切成几百个小块存起来。当用户提问时，系统先用传统的搜索技术找出最相关的两三块，然后只把这“按需取”出来的部分扔进 Context Window 让 AI 去读。这就是现在非常火的 RAG（检索增强生成）技术。
    
    低可信内容隔离标注：为了防“幻觉”和安全问题。就例如Transformer 擅长组合解释，但没有事实裁决权。如果输入给 AI 的数据里，有一部分是网上的匿名帖子或者不可靠的搜索结果。可以要求在代码层面，用明确的标签把这段内容包起来（比如 这里是网友评论），并告诉 AI：“这部分内容仅供参考，不要盲目相信”。这样能防止 AI 被错误信息带偏。
    
-   context engineering: 设计上下文，尽量让交给模型的文本信息最高效的能由ai处理，规定哪些是可信数据源，哪些是外部信息，上一次结果如何等。
    
-   memory：跨请求保留的信息，可提前设置，方便每次使用，但隐患是可能现在需求与memory冲突，会造成问题。因此”所有涉及身份、权限、资产或外部副作用的记忆，都必须重新绑定当前会话和当前授权。”
    
    -   **\* Web3 场景**：如果 Agent 记住了我的私钥/常用地址/高 gas 偏好，下次自动用了——这就是 Memory 越界变成安全漏洞。所有涉及身份和资产的 Memory 每次都得重新确认，不能靠”上次你同意了”就跳过。
        
-   knowledge base：模型可检索的外部知识库，需要维护来保证正确，知识的新鲜。
    
    -   **\* Knowledge Base vs Memory 的区别**：Memory 存的是「用户偏好/历史行为」（比如我的常用地址、偏好语言），可撤销；Knowledge Base 存的是「外部文档/协议规范」（比如以太坊黄皮书、Solidity 文档），需要维护版本号和更新时间。两者都会进入 Context，但来源和治理方式不同——前者是"你上次怎么用的"，后者是"官方怎么规定的"。
        

**在AI web3中的位置**

context 决定模型看到的是用户幻想、过期文档，还是可验证的链上事实。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





**首先记录一下经过乱七八糟error终于成功接入tg的claude code:**

1.vscode或者cursor安装cc 感觉vscode更方便界面更清晰一些，还有node和git，最好这些东西都塞进c盘（并不知道对不对）  
[2.cc](http://2.cc) switch 配置cc 用的ds v4 pro 由于不是原生 导致用cc自带的接入tg方法大失败 发送消息后能看到tg bot在打字但是没有回复 问cc后它说它可以收到消息 也能主动给我发送（测试成功） 但是种种原因 最重要的就是接入的不是cc的ai而是ds导致的 它没法自动回复我  
3.调查后选择尝试用cc connect，交给cc自动配置 终于成功接入并对话  
4.将prompt发给tg bot后有的网站它无法读取，可能是cc的安全配置原因 请教大家后 下载官方读网站的mcp（好像依旧不太行） 用curl绕过限制终于成功抓取！

**LLM**

-   第一性原理：llm并不是百分百正确的事实，是执行工具，越是需要准确真实知识或信息的动作越需要自主校验
    
-   token：处理文本的基本单位。代码、JSON、长标识符、表格和混合语言文本经常比普通段落更吃token。
    
-   embedding：把文字/代码转成数字向量，让计算机比较「含义是否接近」。
    
    -   简单例子：
        
        -   知识库有 3 句话：A "MetaMask 是以太坊钱包" / B "比特币是加密货币" / C "今天天气很热"
            
        -   用户问 "怎么用以太坊钱包" → 系统把这句话也转成向量 → 跟 A 最接近，跟 C 最远
            
        -   RAG 系统先把 A 抓出来喂给 LLM 做参考
            
    -   关键认知：Embedding 负责匹配「意思接近」，不是判断「是否正确」。
        
    -   RAG: 用来让回答更准确 真实（当用户提出问题时，系统先从知识库里找相关材料，再让模型基于这些材料回答。）
        
        -   chunking：用合理的方法把长文本切分，可以有效节省token，方便ai检索。 方法： 比较稳的做法是按结构切：标题、API endpoint、函数说明、标准小节、FAQ 问答、审计或变更记录。每个 chunk 保留来源 URL、标题路径、更新时间和版本。
            
-   transformer:核心是：
    
    -   Attention（注意力机制） 在 Transformer 诞生之前，旧的 AI 读书就像是“狗熊掰棒子”，读到第 100 个字时，前面的第 1 个字 差不多就忘光了，或者很难把它们联系起来。而 Attention（注意力机制） 彻底改变了这一点。现在 AI 读一段话，就像人类拿了一把高光荧光笔。 当它读到“他”这个字时，它会立刻用荧光笔把前文的“张三”划上重点； 当它读到“bank”这个字时，它会同时注意到上下文里出现的“河岸”还是“贷款”，从而瞬间判断出这里的 “bank”是指地理名词还是金融机构。 这就是它能极其丝滑、毫无违和感地和你对话，并且看懂上万字复杂长文的原因。它能同时兼顾上下文里所 有的细节和它们之间的微妙关系。 但这只是联系上下文，没有真实的数据库，不能保证完全正确。
        
-   Hallucination：（想要避免的）生成的结果不真实或无法验证。或在执行时用了错误的参数，权限解释等
    
-   Multimodal：多模态，让ai可以处理多种类型的文件，这样可以读懂更多真实的工作界面。
    
-   **LLM 在 AI×Web3 全栈中的位置：理解层（Understanding Layer）**
    
    -   负责：把用户目标转成可讨论的计划，把复杂链上数据解释成人能读的语言，把文档和代码串成可执行思路
        
    -   配套需要的层：
        
        1.  数据层：RPC、索引器、预言机、向量库、项目文档
            
        2.  编排层：Prompt、Context、RAG、Agent workflow
            
        3.  执行层：工具调用、钱包、Smart Account、合约交互
            
        4.  安全层：Guard、simulation、权限策略、人工确认、日志
            
    -   **关键原则：LLM 越靠近执行层，越要把它的自然语言输出变成可验证对象。**
        

**Prompt：给模型指令让它来工作**

-   第一性原理：
    
    -   指令分层要清楚：系统规则、开发者规则、用户目标、检索内容不能混在一起。
        
    -   输出格式要机器可检验：关键结果尽量用 JSON schema、函数参数或明确字段承载。
        
    -   高风险动作不能只靠 prompt 拦截：写入数据库、发送消息、调用外部工具、执行支付或签名类动作，都必 须再经过代码层校验和 human check。
        
-   instruction: 给模型建立规则，要做什么不能做什么，输出什么。
    
    -   实用写法
        
        -   任务目标
            
        -   可用输入
            
        -   禁止行为
            
        -   输出格式和失败格式
            
-   few-shot: 当无法完全文字说清时，直接给模型一些示例进行模仿。（弊端：维护成本增高，当真实操作更新后示例可能会落后而误导模型）
    
-   structured output: 结构化输出，规定模型返回结果的结构，方便后续检查测试等
    
-   prompt injection：外界注入新的prompt引导模型做事，如泄露信息，调用危险工具等。
    
    -   应对方法：
        
        -   把外部内容标记为不可信数据
            
        -   工具调用前做参数校验
            
        -   敏感动作强制走 allowlist 和 human approval
            
        -   不把密钥、主权限和不可撤销动作交给模型
            
-   **Prompt 在 AI×Web3 全栈中的位置：接口层（Interface Layer）**
    
    -   Prompt 处在用户目标和模型行为之间——把「帮我看看这笔交易」变成模型可执行的任务：读哪些字段、怎么解释资产变化、哪些风险要标记、什么时候必须说不知道
        
    -   更稳的 6 层安全链路：
        
        1.  Prompt → 定义任务和输出格式
            
        2.  Context → 提供可信数据和来源边界
            
        3.  Model → 生成解释或候选动作
            
        4.  Code → 校验 schema 和业务规则
            
        5.  Guard / Simulation → 检查链上影响
            
        6.  Human check → 确认高风险动作
            
    -   **关键原则：Prompt 是软约束，不是安全边界。真正的边界必须由代码、权限、校验和审计来承担。**
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






[https://www.notion.so/AI-web3-3647977eeab480d1b0e5fbf128bfa11e?source=copy\_link](https://www.notion.so/AI-web3-3647977eeab480d1b0e5fbf128bfa11e?source=copy_link)

![image.png](attachment:7fe443bc-87ea-4891-9177-67061b082049:image.png)

Web 2很多环节是基于信任进行（上图，信任bank institution不造假），web3想要解决这些：将bank institution换成block chain（支付流程）。原因：钱包：解决用户如何控制自己的资产。

![image.png](attachment:87101c2a-1de3-495a-97b7-101fbc6d3bf5:image.png)

-   钱包：解决用户如何控制自己的资产。
    

private key保密，一串随机数，和消息结合，通过算法在不泄露private key的基础上产出signature进行交易。（b站：lindell）

![image.png](attachment:10c169b1-330e-4443-a0f8-dd0cfa5cd650:image.png)

![image.png](attachment:77457cf7-2331-4fe6-a5f8-05702434de8e:image.png)

钱包分类：

![image.png](attachment:f2071935-b8b7-4f4d-9aea-a9a0534129d9:image.png)

-   交易的关键参数：
    

Gas让交易更快上链（多少钱给矿工）

nounce：保证交易顺序，确保交易不会重复提交

calldata：evm（python）的解析器，让交易多样

-   如何确定交易成功：
    

![image.png](attachment:d180c87b-7dca-4046-93bb-6784888b2d7a:image.png)

kya/kyt：合规检测是否有效

-   交易模拟：
    

签名前，不用签名模拟交易，看看此交易会对哪些相关方产生影响，减少风险。

tee 1, tee 2: 多签系统，非常安全的签名环境，保证key不泄露

![image.png](attachment:4511a729-3b8e-4110-9d5d-c70ce29fb310:image.png)

由于web3交易不可逆，因此对安全要求极高

![image.png](attachment:decc5914-6f81-413b-babf-35f1cf7c5307:image.png)

[https://updraft.cyfrin.io/career-tracks](https://updraft.cyfrin.io/career-tracks) 这里有web3各种职位的相应的学习路径和教程
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
