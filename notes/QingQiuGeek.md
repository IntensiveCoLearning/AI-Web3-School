---
timezone: UTC+8
---

# QingQiuGeek

**GitHub ID:** QingQiuGeek

**Telegram:** @qingqiugeek

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->
打卡
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->

打卡
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->



在做 RAG 时，文字变成向量很简单（用 Embedding 模型）。但如果知识库里有图片（如商品图、设计图、架构图），该怎么让大模型检索到它？目前企业里有两种主流做法：

## CLIP 向量化（图文跨模态对齐）

CLIP 是 OpenAI 开源的一个多模态模型。能把“图片”和“文字”映射到了同一个向量空间里，和向量化的文本一起存储。

怎么做： 把图片喂给 CLIP，它会输出一串向量（比如 512 维的数字），直接存入向量数据库。

效果： 向量空间里，一张“猫咪在草地上滚玩”的图片向量，和“一只猫在草坪上玩耍”的文本向量，距离极其接近。

当用户搜文本“绿色草地上的宠物”时，即使库里没有这几个字的文本，也能直接通过向量相似度把那张猫的图片检索出来。

优点： 速度极快，计算成本极低，天然支持“以图搜图”和“以文搜图”。

缺点： 属于“粗粒度”理解。**如果图片里包含复杂的字（如架构图里的组件名、报表里的数字），CLIP 往往看不懂细节。**

## MLLM 描述（多模态大模型转文字）

怎么做： 在把数据切片入库前，用 MLLM 充当“速记员”：“请详细描述这张图片的内容，如果是架构图，请写出所有组件和流程；如果是商品，请写出型号和外观特征。”

效果： MLLM 会把图片吐成一段几百字的详细纯文本描述。接着，你把这段文本拿去走传统的文本 Embedding 和 BM25 入库。

优点： 理解力极强（细粒度）。能把图片里的隐藏逻辑、文字、甚至是表格数据完全挖掘出来。

缺点： 贵且慢。入库阶段每张图都要调用一次 MLLM，如果企业有百万张图片，API 费用和处理时间会飙升。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->




## BM25

BM25 是经典搜索引擎（如 Elasticsearch / 电脑本地文件搜索）背后的核心算法。

外号： 稀疏向量检索

它的逻辑： 死磕字面，绝对忠诚，不管语义。 你搜什么词，我就去文章里数这个词出现了几次。

它的三大绝招：

-   词频（TF）： 词在文章里出现越多，分越高。但有上限（饱和度），出现 100 次和 50 次在它看来差不多。
    
-   稀缺度（IDF）： 如果你搜“我的冰美式”，“我”和“的”到处都是，不值钱；“冰美式”很罕见，谁有“冰美式”谁拿高分。
    
-   篇幅惩罚： 同样出现 3 次“冰美式”，一篇 50 字的短文肯定比一篇 1 万字的长文更相关。
    

## 向量检索

利用深度学习的 Embedding 模型，把文字、图片变成一串由数字组成的坐标（向量）。

它的外号：密集向量检索。

它的逻辑： 不看字面，只懂意思。

它的绝招： 它能听懂潜台词。你搜“提神提气的苦咖啡”，文章里可能一个相同的字都没有，但向量检索能通过“意思接近”，帮你把写有“冰美式”的文章捞出来。

## 混合检索

BM25 和 向量检索 是两条不同的“捞数据”路径，而混合检索是把两者的优势结合。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->






\> 学习来源：A2A Protocol 官方文档 \[Life of a Task\](https://a2a-protocol.org/latest/topics/life-of-a-task/) ## 建立总图 客户端向 Agent 发送一条消息后，Agent 通常有两种响应方式： 1. 返回一个无状态的 \`Message\` 2. 创建一个有状态的 \`Task\` 如果是 \`Message\`，说明这次交互可以立即完成，不需要后续追踪。比如简单确认、能力协商、范围说明、轻量回答，都可以只用 \`Message\`。 如果是 \`Task\`，说明 Agent 接下来要处理一段可跟踪的工作。这个任务可能需要一段时间，可能会不断更新状态，可能会请求用户补充输入，也可能会产出文件、结构化数据、图片等 artifact。 可以把它理解成： \`\`\`text Message = 一次性的对话回复 Task = 可追踪的工作单元 \`\`\` A2A 交互方式有三种：请求/响应（轮询）、SSE、服务端主动推送 ## \`contextId\`：把相关交互放进同一个上下文 \`contextId\` 是理解 Task 生命周期的第一把钥匙。 它不是某一个任务的 ID，而是一个更大的上下文 ID。\*\*一个 \`contextId\` 可以关联多个 \`Task\`\*\*，也可以关联多个独立的 \`Message\`。当客户端第一次发起交互时，Agent 会返回一个新的 \`contextId\`。如果这次交互创建了任务，响应里还会包含 \`taskId\`。 后续客户端如果继续围绕同一个目标对话，就应该带上相同的 \`contextId\`。这样 Agent 就知道：这不是一个全新的孤立请求，而是在延续之前的上下文。 它的作用可以概括为三点： 1. 让多轮交互保持连续性 2. 让多个任务围绕同一个目标协作 3. 让 Agent 内部可以基于上下文管理对话记忆或 LLM context 举个例子： \`\`\`text 用户：生成一张帆船图片 Agent：创建 task-1，contextId = ctx-a 用户：把船改成红色 Agent：创建 task-2，仍然使用 contextId = ctx-a，并引用 task-1 \`\`\` 这里第二次请求不是重启对话，而是在同一个上下文里对前一个结果做 refinement。 ## \`taskId\`：定位某一个具体工作单元 如果说 \`contextId\` 表示“这一串交互属于同一个上下文”，那么 \`taskId\` 表示“这一项具体工作”。 一个上下文里可以有多个任务。每个任务都有自己的输入、状态、产物和历史。客户端在后续消息里可以附带 \`taskId\`，表示这条消息和某个具体任务有关。 更常见的做法是使用 \`referenceTaskIds\` 来提示 Agent：当前请求和之前哪些任务有关。比如修改一张图片时，客户端可以引用生成原图的 task。 需要注意的是，\`taskId\` 不等于会话 ID。不要把所有后续交互都塞回同一个任务里。A2A 的设计更倾向于把每一次明确的新工作、新请求、新 refinement 建成新的任务，再用 \`contextId\` 和引用关系把它们串起来。 ## 什么时候返回 \`Message\`，什么时候创建 \`Task\` 官方文档把这个选择交给 Agent，因为不同 Agent 的能力边界不同。但可以用下面的判断方式来学习。 适合返回 \`Message\` 的情况： 1. 可以立即完成 2. 不需要持续追踪状态 3. 不会产生需要版本管理的 artifact 4. 更像一次说明、确认、拒绝或澄清 适合创建 \`Task\` 的情况： 1. 工作可能耗时较长 2. 需要客户端查询或订阅进度 3. 过程中可能需要用户补充输入 4. 会产出 artifact，例如文件、图片、报告、结构化结果 5. 后续可能围绕结果继续 refinement 一个实用判断是：如果客户端未来可能会问“这个工作现在到哪一步了？”或者“上一版结果是什么？”，那它大概率应该是 \`Task\`。 ## Task 的生命周期状态 \`Task\` 创建之后，会进入一个生命周期。它不会永远停留在“处理中”，它会持续更新，直到进入中断状态或终态。 官方文档里提到的中断状态包括： 1. \`input-required\` 2. \`auth-required\` 终态包括： 1. \`completed\` 2. \`canceled\` 3. \`rejected\` 4. \`failed\` 中断状态的意思是：任务还没有结束，但 Agent 无法继续，需要外部动作。比如缺少必要参数，就进入 \`input-required\`；需要用户授权，就进入 \`auth-required\`。 终态的意思是：任务结束了。无论是成功、取消、拒绝还是失败，它都不应该被重新启动。 可以画成一个简化状态图： \`\`\`text message.send | v Task created | v working / progressing | +--> input-required --用户补充信息--> 新消息继续处理 | +--> auth-required --用户授权------> 新消息继续处理 | +--> completed | +--> canceled | +--> rejected | +--> failed \`\`\` 这个生命周期设计的价值是把 Agent 执行过程显式化。客户端不必猜 Agent 在做什么，也不必把长任务伪装成同步请求。 ## Task 是不可变的：终态之后不要重启 \`Task\` 一旦进入终态，就不能重新启动。 这是文档中非常重要但容易被忽略的一点。比如一个图片生成任务已经 \`completed\`，用户又说“把船改成红色”。这不是把原任务重新打开，而是在同一个 \`contextId\` 下创建一个新的任务。 这样做有几个好处： 1. 输入和输出的映射更清楚 2. 任务历史更容易审计 3. orchestration 更容易做 4. 客户端可以稳定引用某个任务的状态和产物 5. refinement 不会破坏原始任务结果 这也是 A2A 和很多临时拼接式 Agent API 的不同之处。A2A 更像是在定义一个可追踪的工作账本：每一个明确的工作单元都应该留下自己的记录。 ## Agent Card Agent Card 用于描述 agent 身份、能力(SSE、推送、轮询)、请求端点、技能及认证要求的 JSON 元数据文档。 帮助客户端发现agent，并了解如何安全有效地使用。 ## Agent 注册发现策略 ### 通过 Well-Known URI 适用于公共代理或在特定领域内。 A2A 服务器通过在其域名中托管一个标准化且知名的 URI 来使其代理卡可被发现。标准路径是 https://{agent-server-domain}/.well-known/agent-card.json。发现流程： 1. client agent 发现潜在 A2A 服务器的域名（例如smart-thermostat.example.com） 2. client agent 对 https://smart-thermostat.example.com/.well-known/agent-card.json 执行 HTTP GET 请求 3. 如果 Agent Card 存在且可访问，服务器会以 JSON 响应的形式返回。 ### 基于Catalog的发现 适用于企业环境或公共市场，Agent Card通常由中央注册局管理。策划的注册库作为一个中央仓库，允许客户端根据“技能”或“标签”等标准查询和发现Agent。 1. A2A 服务器会将其Agent Card发布到注册表。 2. client agent 查询注册库的 API，并根据“特定技能”等条件进行搜索。 3. 注册处返回匹配的Agent Card或参考。 ## 直接配置 / 私有部署 适用于紧耦合系统、私有代理或开发用途，客户端直接配置代理卡信息或 URL。 ## Artifact：任务产物不是任务本身 \`Task\` 可以产生 \`artifacts\`。artifact 是任务的输出结果，可以是文件、图片、结构化数据等。 在官方例子里，Agent 先生成一张帆船图片，任务完成后返回一个 artifact，例如： \`\`\`text task-boat-gen-123 artifact: sailboat\_image.png \`\`\` 之后客户端要求“把帆船改成红色”。Agent 不会修改原 task，而是创建一个新 task，并产生新的 artifact： \`\`\`text task-boat-color-456 artifact: sailboat\_image.png \`\`\` 注意这里 artifact 的名字可以保持一致，但 \`artifactId\` 应该不同。这意味着它是同一个逻辑产物的不同版本。 文档建议 serving agent 在生成 refinement 结果时使用一致的 artifact name。这样客户端更容易把不同版本识别为同一类产物。 ## Artifact mutation 应该由客户端追踪 官方文档明确指出：artifact 的变更链路不应该由 serving agent 负责维护，也不是 A2A 协议规范的一部分。 这点很有意思。因为直觉上我们可能会想：既然 Agent 生成了新 artifact，那 Agent 应该知道哪个 artifact 是哪个 artifact 的新版。但 A2A 的设计选择是把这个责任交给客户端。 原因是客户端更适合判断： 1. 哪个结果被用户接受 2. 哪个版本是当前有效版本 3. 哪个 artifact 应该被继续 refinement 4. 哪些版本应该展示给用户或隐藏起来 所以客户端需要维护自己的版本关系。例如： \`\`\`text sailboat\_image.png v1: artifact-boat-v1-xyz, from task-boat-gen-123 v2: artifact-boat-v2-red-pqr, from task-boat-color-456 \`\`\` 如果客户端再次请求 refinement，最好显式引用自己认为“最新且可接受”的 artifact。不要假设 Agent 一定能猜对。 ## refinement 的正确建模方式 refinement 指的是基于已有任务结果继续提出修改、补充、扩展或重新生成。 在 A2A 里，refinement 的推荐模式是： 1. 使用相同的 \`contextId\` 2. 创建新的 \`Task\` 3. 使用 \`referenceTaskIds\` 引用相关旧任务 4. 如果要修改特定 artifact，尽量在 part metadata 中带上 \`artifactId\` 和 \`taskId\` 5. 新任务生成新的 artifact 6. 客户端维护 artifact 版本链 如果客户端没有明确指出要修改哪个 artifact，Agent 可以尝试根据 \`contextId\` 推断。但如果上下文里有多个候选 artifact，Agent 不应该强行猜测，而应该返回 \`input-required\`，要求客户端澄清。 这是一个很好的协议设计细节：不确定时，把不确定性显式暴露出来，而不是默默做一个可能错误的决定。 ## 客户端实现时要承担的责任 从客户端视角看，Life of a Task 不只是理解字段，还要设计好本地状态管理。 客户端至少应该记录： 1. 当前 \`contextId\` 2. 当前上下文下的所有 \`taskId\` 3. 每个任务的状态 4. 每个任务的 artifacts 5. artifact 的版本链 6. 用户接受的是哪个 artifact 版本 7. 哪些任务处于 \`input-required\` 或 \`auth-required\` 客户端在发起后续请求时，应该尽量带上： 1. \`contextId\` 2. 相关的 \`referenceTaskIds\` 3. 如果 refinement 针对某个产物，带上 artifact 引用 4. 用户补充输入或授权结果 一个客户端的数据模型可以粗略设计为： \`\`\`text Context id messages\[\] tasks\[\] Task id contextId status artifacts\[\] history\[\] ArtifactVersion artifactId artifactName taskId previousArtifactId acceptedByUser createdAt \`\`\` A2A 不强制你这么建模，但如果要做一个可靠的 Agent 客户端，这些结构迟早会出现。 ## Agent 实现时要承担的责任 从 Agent 服务端视角看，关键不是把所有请求都变成任务，而是正确判断交互复杂度。 Agent 应该做到： 1. 对简单交互返回 \`Message\` 2. 对可追踪工作创建 \`Task\` 3. 为首次交互生成 \`contextId\` 4. 为新任务生成 \`taskId\` 5. 在任务推进时更新状态 6. 需要输入时进入 \`input-required\` 7. 需要授权时进入 \`auth-required\` 8. 任务结束后进入明确终态 9. 不重启已经终态的任务 10. 对 refinement 创建新任务 11. 生成 refinement artifact 时尽量保持 artifact name 一致 如果 Agent 使用 LLM，那么 \`contextId\` 可以帮助它管理内部上下文。但这不意味着 LLM 的完整上下文一定要暴露给客户端。\`contextId\` 是协议层的连续性标识，LLM memory 是服务端内部实现细节。 ## 常见误区 误区一：把 \`contextId\` 当成 \`taskId\` \`contextId\` 是上下文，\`taskId\` 是任务。一个上下文可以有多个任务。 误区二：把 refinement 写回旧任务 终态任务不可重启，refinement 应该创建新任务。 误区三：让 Agent 负责 artifact 版本树 A2A 建议客户端维护 artifact mutation。Agent 可以帮助保持命名一致，但不负责判断哪个版本是用户认可的最新版本。 误区四：上下文不清时让 Agent 猜 如果多个 artifact 都可能是目标，正确做法是进入 \`input-required\`，请求客户端明确。 误区五：所有请求都建成 Task 简单、立即、自包含的交互用 \`Message\` 更自然。过度任务化会让系统变复杂。 ## 用一个例子串起来 假设用户要用 Agent 生成一份产品海报。 第一轮： \`\`\`text 用户：帮我生成一张咖啡新品海报 Agent：创建 task-001，contextId = ctx-001 结果：poster.png, artifactId = art-001 状态：completed \`\`\` 第二轮： \`\`\`text 用户：把标题改得更高级一点 客户端：发送相同 contextId，并引用 task-001 / art-001 Agent：创建 task-002 结果：poster.png, artifactId = art-002 状态：completed \`\`\` 第三轮： \`\`\`text 用户：把刚才那张图做成小红书封面 客户端：引用当前接受版本 art-002 Agent：创建 task-003 结果：poster-xhs.png, artifactId = art-003 状态：completed \`\`\` 在这个过程中： 1. \`ctx-001\` 把所有交互放在同一个上下文里 2. \`task-001\`、\`task-002\`、\`task-003\` 是三个独立工作单元 3. \`art-001\`、\`art-002\`、\`art-003\` 是不同产物或版本 4. 客户端负责知道用户当前接受的是 \`art-002\` 还是 \`art-003\`
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->







\## 抽象合约  
  
当合约中至少有一个函数没有被实现，或者合约没有为其所有的基本合约构造函数提供参数时，合约必须被标记为 abstract。  
  
抽象合约不能被直接实例化，如果一个抽象合约本身实现了所有定义的功能，这也是可以的。  
  
子合约如果没有实现抽象父合约中所有未实现的函数，则子合约也是抽象的  
  
\`\`\`c  
pragma solidity >=0.6.0 <0.9.0;  
  
//Feline仅定义未实现  
abstract contract Feline {  
function utterance() public virtual returns (bytes32);  
}  
\`\`\`  
  
\## 接口合约  
  
接口合约不能实现任何函数，不能继承其他合约，不能声明构造函数，不能声明状态变量，不能声明修饰器，但是可以继承其他接口合约。  
  
在接口合约中所有声明的函数必须是 external 类型的，接口合约中声明的函数都是隐式的 virtual 的类型，任何重写它们的函数都不需要 override 关键字。  
  
\`\`\`c  
interface Token {  
enum TokenType { Fungible, NonFungible }  
struct Coin { string obverse; string reverse; }  
function transfer(address recipient, uint amount) external;  
}  
\`\`\`  
  
\## 库合约  
  
库合约的三个核心特点：  
  
\- 无状态：库合约不能定义状态变量（也就是不能存钱、存数据）。  
  
\- 不能收钱：它不能接收以太币（没有 payable）。  
  
\- 不能自毁：它是一个纯粹的逻辑集合，一旦部署就稳稳地在那里。  
  
调用库合约的函数时，它是通过 delegatecall 执行的，代码运行在库合约里。但状态（Storage）、\*\*余额（Balance）和语境（msg.sender）\*\*全是调用者合约的。就像是请了一个“外援”来你家里，用你家里的厨具（你的存储空间）帮你做饭。  
  
\## 多继承、 C3 线性化规则  
  
\`\`\`c  
  
contract Destructible is owned {  
function destroy() virtual public {  
if (msg.sender == owner) selfdestruct(owner);  
}  
}  
  
contract Base1 is Destructible {  
function destroy() public virtual override {super.destroy(); }  
}  
  
  
contract Base2 is Destructible {  
function destroy() public virtual override {super.destroy(); }  
}  
  
contract Final is Base1, Base2 {  
//因为子合约同时is了Base1和Base2，所以必须写成override(Base1, Base2)，不能仅写其中一个  
function destroy() public override(Base1, Base2) {  
/\*\*  
super.destroy()调用的是Base1还是Base2取决于Base1, Base2的先后顺序，遵循 C3 线性化（C3 Linearization） 规则，super 会寻找继承链条中“最右边”（也就是最新派生）的那个父类。  
  
下面调用的就是Base2.destroy()  
\*/  
super.destroy();  
}  
}  
\`\`\`  
  
\`\`\`c  
pragma solidity >=0.4.0 <0.9.0;  
  
contract X {}  
contract A is X {}  
//代码编译出错的原因是 C 要求 X 重写 A （因为定义的顺序是 A, X ）， 但是 A 本身要求重写 X， 这是一种无法解决的冲突。  
contract C is A, X {}  
\`\`\`  
  
\## virtual、override  
  
如果父合约有函数要被子合约重写，则父合约的函数必须加上virtual，子合约重写的函数必须加上override。  
  
如果抽象合约写了一个没有函数体 {} 的函数，它必须被标记为 virtual。因为要有子合约来实现。  
  
如果父合约的函数不允许被修改（强制所有子类都用这一套逻辑），就不能加 virtual。  
  
如果子合约重写父合约函数的同时还希望自己的函数被子合约重写，则可以同时用virtual override！  
  
从Solidity 0.8.8开始，当重写一个接口函数时，不需要 override 关键字，除非该函数被定义在多个基础上。  
  
\`\`\`c  
// SPDX-License-Identifier: MIT  
pragma solidity ^0.8.0;  
  
// 父合约  
contract Employee {  
// 使用 virtual 关键字，表示这个函数可以被子类重写  
function getBonus() public pure virtual returns (uint) {  
return 100;  
}  
}  
  
// 子合约  
contract Manager is Employee {  
// 使用 override 关键字，表示正在重写父类的同名函数  
function getBonus() public pure override returns (uint) {  
return 200;  
}  
}  
  
// 演示多态  
contract Company {  
function checkBonus() public pure returns (uint, uint) {  
Employee emp = new Employee();  
Employee mgr = new Manager();  
// 虽然变量类型都是 Employee，但执行的是各自“最新”的逻辑  
return (emp.getBonus(), mgr.getBonus());  
// 结果是: 100, 200  
}  
}  
\`\`\`  
  
\## 状态可变性的转换  
  
状态可变性本质上是权限的转换。子类可以比父类更严格，但是不能比父类更宽松  
  
\- payable：权限最宽（能读状态、写状态、收钱）。  
  
\- nonpayable (默认)：普通权限（能读状态、写状态，但不能收钱）。  
  
\- view：受限权限（只能读状态，不能写状态）。  
  
\- pure：最严权限（既不能读状态，也不能写状态）。  
  
所以nonpayable 可以被 view 和 pure 重写，view 可以被 pure 重写。  
  
\- external函数可以变为public，反过来不行  
  
\## external 比 public 更省 Gas  
  
\- external 函数：参数直接存储在 calldata 中。calldata 是只读的、不可修改的，且是由调用者直接发送的原始数据块。  
  
\- public 函数：由于 public 函数既支持外部调用，也支持内部（internal）调用，为了兼容内部调用，EVM 必须将参数从 calldata 拷贝到 memory（内存）中。  
  
\## CALL、DELEGATECALL、STATICCALL  
  
!\[\](image-1.png)  
  
\- CALL：你是去别人家借锅做饭。  
  
A 去调 B。A 跑到 B 的厨房（上下文），用 B 的锅（存储），做出来的饭也留在 B 家。B 看到的厨师是 A。  
  
\- DELEGATECALL：你是请外援来你家做饭。  
  
A 去调 B。A 把 B 这种“名厨”请到 A 自己的厨房里。B 用的是 A 的锅（存储），做出来的饭留在 A 家。重点是，B 看到的厨师依然是你（msg.sender 不变）。  
  
库合约就是这种模式。如果 B 写的逻辑是“把第一个抽屉打开”，它打开的是 A 的第一个抽屉！如果 A 和 B 的\*\*变量布局（Layout）不一致\*\*，会发生严重的内存错乱。  
  
\- STATICCALL：A去别人家参观，不准动手。  
  
这是 view 和 pure 函数底层使用的指令，A可以看 B 的数据，但如果尝试在 B 里写一行代码修改状态，EVM 会立刻报错（Revert）。  
  
\### 什么是变量布局  
  
变量布局（Storage Layout） 是指合约变量在区块链“硬盘”（Storage）上的排队位置。  
  
可以把合约的存储空间想象成一个无限长的储物柜，每个抽屉都有一个编号，从 0 开始。这些抽屉被称为 插槽（Slot），每个插槽的大小固定为 32 字节。  
  
当定义变量时，Solidity 会按照写的先后顺序，把它们一个一个放进这些插槽里。第一个定义的变量 占 Slot 0。第二个定义的变量 占 Slot 1（EVM中一个标准的插槽大小是 32 字节，如果变量很小，比如 uint8只有1个字节，Solidity 会尝试把多个变量挤进同一个 Slot 以节省空间，这叫变量打包）。  
  
在DELEGATECALL调用中，是A把B的逻辑拿回自己家运行，逻辑代码并不看“变量名”，它只看存储的“插槽编号”，如果A和B的存储变量布局不一致，可能会出现B要改的变量在A中不是实际要改的变量，这就是“存储碰撞”，导致数据被写乱了。  
  
\### 如何保证变量布局一致  
  
1\. 继承同一个“存储合约”  
  
创建一个专门存放变量的 Storage 合约。父合约和子合约（或者代理合约和逻辑合约）都继承它，确保插槽位置完全对齐。  
  
\`\`\`c  
// 专门管账本的合约  
contract BaseStorage {  
uint public count;  
address public owner;  
mapping(address => uint) public balances;  
}  
  
// 逻辑合约继承它  
contract LogicV1 is BaseStorage {  
function increment() public {  
count += 1; // 这里的 count 永远在 Slot 0  
}  
}  
  
// 代理合约也继承它，确保 Slot 0, 1, 2 的位置完全对齐  
contract MyProxy is BaseStorage {  
// ... delegatecall 逻辑  
}  
\`\`\`  
  
2\. 使用“存储占位符”  
  
如果以后想给父合约增加新变量，该怎么办？直接加在后面会把子合约的布局顶乱，比较好的方法是最初定义变量前预留一些“空位”。  
  
\`\`\`c  
contract Base {  
uint public count;  
address public owner;  
  
// 预留 50 个插槽，现在它们是空的  
uint256\[50\] private \_\_gap;  
}  
  
contract BaseV2 is Base {  
// 当你想升级时，可以“占用”一个 gap 的位置  
// 但因为有上面的 \_\_gap，后续变量的位置不会被移动  
uint public newVariable;  
uint256\[49\] private \_\_gapV2; // 更新剩下的空位  
}  
\`\`\`  
  
3\. 非结构化存储（Unstructured Storage）  
  
OpenZeppelin 等主流框架使用的终极方案，既然按顺序排队容易撞车，那就不按顺序排。把重要的变量（比如逻辑合约的地址）存到一个“超级远”的插槽里，\*\*远到几乎不可能发生碰撞\*\*。  
  
这个插槽的地址通常是根据一个特定的字符串做哈希（Keccak256）算出来的，例如：  
slot = keccak256("org.zeppelinos.proxy.implementation") - 1  
  
\`\`\`c  
// 这种写法直接操作汇编，跳过自动排序  
bytes32 internal constant implSlot = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;  
  
function setImplementation(address newImpl) internal {  
bytes32 slot = implSlot;  
assembly {  
sstore(slot, newImpl) // 直接存到很远远的插槽里  
}  
}  
\`\`\`  
  
\## using for  
  
using A for B 分成两个主要用途：“成员函数（点调用）” 和 “运算符重载”。  
  
1\. 把库里所有的逻辑“嫁接”给某种类型，比如unint，然后直接.调用函数。  
  
\`\`\`c  
library MathLib {  
// 第一个参数必须是它要附加到的类型（比如 uint）  
function triple(uint self) internal pure returns (uint) {  
return self \* 3;  
}  
}  
  
contract Test {  
using MathLib for uint; // 将 MathLib 的函数给到 uint  
  
function demo(uint x) public pure returns (uint) {  
// x 现在就像对象一样，可以直接用 . 调用 triple  
// x 会自动作为第一个参数传给 triple  
return x.triple();  
}  
}  
\`\`\`  
  
\`\`\`c  
library UniversalLib {  
function isZero(uint x) internal pure returns (bool) { return x == 0; }  
function isEmpty(string memory s) internal pure returns (bool) { return bytes(s).length == 0; }  
}  
  
contract MyContract {  
//开启全能模式，库 UniversalLib 里的函数，只要参数类型对得上，任何变量都能用。  
using UniversalLib for \*;  
  
function check() public pure {  
uint n = 0;  
string memory str = "";  
  
n.isZero(); // 有效，因为 n 是 uint  
str.isEmpty(); // 有效，因为 str 是 string  
}  
}  
\`\`\`  
  
2\. 函数列表与运算符重载 (高级用法)  
  
Solidity（0.8.19+）引入的功能，允许自定义 +、-、\\\* 等符号的行为，但是只适用于“用户定义的值类型”。  
  
\`\`\`c  
// 1. 合约外面定义一个自定义类型（本质是 uint256，但类型名不同）  
type Price is uint256;  
  
// 2. 合约外面定义一个自由函数  
function addPrices(Price a, Price b) pure returns (Price) {  
return Price.wrap(Price.unwrap(a) + Price.unwrap(b));  
}  
  
// 3. 全局绑定：把这个函数绑定到 Price 类型的 + 号上  
// global：表示这个规则在整个项目的所有文件中都有效。  
using {addPrices as +} for Price global;  
  
contract Shop {  
function total(Price p1, Price p2) public pure returns (Price) {  
// 现在可以直接用 + 号连接两个 Price 类型了  
return p1 + p2;  
//否则要写成Price.wrap(Price.unwrap(p1) + Price.unwrap(p2));增加代码量  
}  
}  
\`\`\`  
  
\*\*为什么需要using {addPrices as +} for Price global这种写法\*\*，比如uint256 applePrice = 100;uint256 myAge = 25;，如果不小心写成applePrice + myAge，编译器不会报错。然而在逻辑上，“价格”加“年龄”是毫无意义的。为了让代码更安全，Solidity 允许创建用户定义的值类型，也就是type Price is uint256;  
  
这就像是给 uint256 套了一个特制的“马甲”。虽然它的底层还是数字，但编译器会认为 Price 和 uint256 是完全不同的东西。  
  
因为 Price 是创造的新变量，它默认没有 +、-、\\\* 等操作。这就轮到 using {f as +} for Price global; 出场了。  
  
它告诉编译器：当看到两个 Price 类型的东西在做 + 运算时，请自动去运行 addPrices 函数。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->








\[参考\](https://github.com/ogalias/OGBC-Intern-Project/blob/master/stage1/stage1.md) ## Polymarket 的核心数据模型 > 数据模型：事件 (Event)、市场 (Market)、条件 (Condition)、集合 (Collection)、头寸 (Position 或 TokenId) 在 Polymarket 中，事件代表一个预测主题，例如"某次美联储利率决议"。一个事件下可以包含一个或多个市场。每个市场对应该事件下的一个具体预测问题。例如，对于事件"2024年美国大选"可以有多个市场："候选人 A 当选总统？"、"候选人 B 当选总统？"等，每个市场通常是一个二元预测（Yes/No）。 - Market（市场） 对应具体的 Yes/No 问题，是交易发生的基本单位。一些事件只有一个市场（例如简单的二元事件），而有些事件包含多个市场形成一个多结果事件，此时通常采用 Polymarket 的"负风险 (NegativeRisk)"机制来提高资金效率。 - NegativeRisk（负风险） 当一个事件包含多个互斥市场（即"赢家通吃"的多选一事件）时，Polymarket 引入 NegRiskAdapter 合约，将这些市场关联起来，提高流动性利用率。具体来说，\*\*在同一事件下，一个市场的 NO 头寸可以转换为该事件中所有其他市场的 YES 头寸\*\*。NegRiskAdapter 合约提供了 convert 功能，实现 NO → YES 的头寸转换。 🎯 场景设定：2024 美国总统大选 假设只有两个主要候选人： 市场 A：特朗普获胜，市场 B：哈里斯获胜。这是一个互斥事件，只有一方获胜。 > ❌ 没有 NegRiskAdapter 时： > > 1.用户小明 认为“特朗普不会赢”，去市场 A 买入 NO (特朗普输)。 > > 成本：假设 NO 价格是 $0.60。小明花 $60 买了 100 股 NO。 > > 结果：如果特朗普输了（哈里斯赢），小明赚 $40。 > > 2.用户小红 认为“哈里斯会赢”。去市场 B 买入 YES (哈里斯赢)。 > > 成本：假设 YES 价格是 $0.55。小红花 $55 买了 100 股 YES。 > > 结果：如果哈里斯赢了，小红赚 $45。 虽然小明的观点（特朗普输）和小红的观点（哈里斯赢）在逻辑上是完全等价的，\*\*但他们的资金被锁在两个不同的市场池子里\*\*，最后获利也不一样。 > ✅ 引入 NegRiskAdapter 后： > > Polymarket 将这两个市场通过 NegRiskAdapter 合约关联起来，形成一个事件组合。核心逻辑公式：在互斥事件中持有“市场 A 的 NO” = 持有“除了 A 以外所有结果的 YES”，即：NO(特朗普) ≡ YES(哈里斯)，此时交易如下： > > !\[\](image.png) > > !\[\](image-1.png) NegRiskAdapter机制优势： 1. 流动性合并 通过转换机制，同一事件所有市场的 NO 流动性都可以瞬间变成任意其他市场的 YES 流动性，让不同候选人市场里的资金形成了一个巨大的共享资金池。\*\*大户想进出大单，不会因为某个单一市场深度不够而滑点巨大。\*\* 2. 资本效率 做市商不需要为每个结果都单独准备资金，可以只在一个市场（比如最热门的那个）提供 NO 流动性，然后通过 convert 自动满足其他市场 YES 的买单需求。 3. 无摩擦套利 如果市场价格出现偏差，例如：Price(NO\_Trump) = $0.60，Price(YES\_Harris) = $0.70，套利者可以瞬间买入 NO\_Trump，通过 Adapter 转换成 YES\_Harris，然后卖出！ Polymarket 使用 Gnosis 开发的条件代币框架 (Conditional Token Framework, CTF) 来实现预测市场的头寸代币化。 ### Condition（条件） 每个市场在链上的"登记身份"。创建市场时，会调用 CTF 合约的 prepareCondition 方法注册一个条件。ConditionId 是通过keccak256计算得出的\*\*唯一标识\*\*： \`\`\`solidity /\*\* oracle 是预言机合约地址（Polymarket 目前使用 UMA Optimistic Oracle 作为预言机）。 questionId 是问题的标识符（通常由问题内容等信息哈希得到，或 UMA Oracle 的 ancillary data 哈希）。 outcomeSlotCount 是结果选项数量。对于二元市场，值为 2。 \* \*/ conditionId = keccak256(oracle, questionId, outcomeSlotCount) \`\`\` ### Position（头寸） 头寸指用户持有的某市场某结果的份额。Polymarket 将每个头寸实现为一个 ERC-1155 标准的可交易代币（又称 PositionId 或 TokenId）。每种结果对应一个不同的 TokenId，用于区分 YES 和 NO 两种头寸。 ### CollectionId（集合 ID） 在条件代币框架中，中间引入了集合的概念，用于表示特定条件下某个结果集合。计算方法为： \`\`\`solidity /\*\* parentCollectionId 对于独立的条件通常为 bytes32(0)（Polymarket 所有市场都是独立条件，没有嵌套条件，因此 parentCollectionId 一律为 0）。 indexSet 是一个二进制位掩码，表示选取哪些结果槽位。对于二元市场，有两个可能的 indexSet： YES 头寸的 indexSet = 1 (0b01，表示选取第一个结果槽)。 NO 头寸的 indexSet = 2 (0b10，表示选取第二个结果槽)。 \* \*/ collectionId = keccak256(parentCollectionId, conditionId, indexSet) \`\`\` ### TokenId（PositionId） 最后，用抵押品代币地址和集合 ID 一起计算得到 ERC-1155 的 Token ID： \`\`\`solidity tokenId = keccak256(collateralToken, collectionId) \`\`\` 在 Polymarket 中，对于每个市场，会产生两个 TokenId，一个对应 YES 份额，一个对应 NO 份额。这两个 TokenId 是在该市场上交易的标的资产，代表了对同一预测问题的两种相反结果的头寸。 ### Collateral（抵押品） Polymarket 市场的押注资金均以稳定币 USDC (Polygon 上为 USDC.e) 作为抵押品。\*\*每份 Outcome Token 背后对应 1 USDC 的抵押\*\*，当市场结算时兑现。 价格含义：比如价格 0.60 USDC 意味着花 0.60 USDC 可购买该市场 1 份 YES 代币。如果该结果最终发生，持有者可赎回 1 USDC（获得净盈利 0.40 USDC）；如果未发生，则该代币价值归零，损失全部本金 0.60 USDC。因此，二元期权代币价格可以理解为市场对该事件发生概率的定价。 ## Polymarket 链上日志在"市场创建 → 交易 → 结算"全过程中的作用 ## 链上日志解析
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->









* * *

* * *

[以太坊节点、客户端](https://ethereum.org/zh/developers/docs/nodes-and-clients/#execution-clients)

“节点”是指任何以太坊客户端软件的实例，它连接到其他也运行以太坊软件的计算机，形成一个网络。 **一个节点需要运行两种客户端软件：共识客户端和执行客户端**。

-   执行客户端（也称为执行引擎、EL 客户端或旧称“以太坊 1”客户端）侦听网络中广播的新交易，并在 EVM 中执行，并保存所有当前以太坊数据的最新状态和数据库。
    
-   共识客户端（也称为信标节点、CL 客户端或旧称“以太坊 2”客户端）**实现权益证明共识算法**，**使网络能够根据来自执行客户端的经验证数据达成一致**。 此外还有名为“验证者”的第三种软件，它们可被添加到共识客户端中，使节点能参与保护网络安全。节点分布可以看 [Etherscan 节点地图](https://etherscan.io/nodetracker) 、[以太坊节点](https://ethernodes.org/)
    

## 节点类型

客户端可以运行三种类型的节点：轻节点、全节点和归档节点。

### 轻节点

轻节点只下载区块头，不会下载每个区块。这些区块头包含区块内容的摘要信息。轻节点会向全节点请求其所需的任何其他信息。然后轻节点可以根据区块头中的状态根独自验证收到的数据。

轻节点可以让用户加入以太坊网络，无需运行全节点所需的功能强大的硬件或高带宽。**轻节点不参与共识（不能成为矿工/验证者）**，但可以访问功能和安全保障和全节点相同的以太坊区块链。

### 全节点

**全节点对区块链进行逐块验证**，包括下载和验证每个块的块体和状态数据。有些全节点从创世区块开始，验证区块链整个历史中的每一个区块（完全同步）。有些全节点则从更近期的区块开始验证（比如 Geth 的**快照同步**），而且它们信任这些区块是有效的。

但是全节点并不保存全部区块链数据，而是只保存相对较新的数据，那么又如何逐块验证呢？

全节点会同步历史数据。如上所说，如果从创世开始验证，那么**全节点会从创世区块开始**，逐块下载、执行并验证每一笔交易，从头构建完整的状态树，这是最彻底、最慢的方式，但能获得 100% 自验证的信任。

如果从近期区块开始验证，则会从某个最近的区块开始，逐块下载、执行并验证每一笔交易，这种方式显然更快，但是要 100%信任逐块下载的初始区块。

在逐块验证后，会进行**修剪**。区块链的“状态”是指所有账户余额、合约代码和存储变量的**当前值**。当执行交易时，会产生大量**中间状态**。修剪机制会安全地删除那些不再被最新区块引用的旧状态数据，只保留从创世状态推导出最新状态所必需的“状态树”路径上的关键节点。

### 归档节点

归档节点从创世块开始验证每个区块的全节点，存储全节点中保存的所有内容不删除任何下载的数据，并建立历史状态存档。

以归档以外的任何方式同步客户端将导致区块链数据被修剪。**这意味着不存在包含所有历史状态的归档，但全节点能够在需要时构建它们。**

## 信标链

信标链（Beacon Chain）是以太坊 2.0 的核心升级，它不处理日常交易，而是作为整个网络的“中央调度员”，负责管理验证者、分配共识任务，并协调未来的分片链。

## 同步模式

### 完全同步

完全同步会下载所有区块（包括区块头和区块体），并通过执行自创世块以来的每个区块，以增量方式重新生成区块链的状态。

### 快速同步

与完全同步一样，快速同步会下载所有区块（包括区块头、交易和收据）。 不过，快速同步并不重新处理历史交易，而是依赖**收据**，直至到达最近的头部时，再切换到导入和处理区块，以提供一个完整的节点。

收据（Receipt）是交易被成功打包进区块并执行完毕后生成的“官方凭证”，它记录了交易的交易哈希、执行结果、状态变化、消耗 Gas、状态跟等信息，是快速同步机制中信任历史交易的关键依据。

### 快照同步

快照同步从一个最近的已知为真实区块链一部分的受信任检查点开始。节点会定期保存检查点，同时删除早于某个时间的数据。这些快照被用于在需要时重新生成状态数据，而不是永久储存它。

### 轻量同步

轻客户端模式下载所有区块头和区块数据，并对其中一些进行随机验证。 仅从可信的检查点同步链的头部。

## 共识层同步模式

### 乐观同步

乐观同步是一种合并后同步策略，专为选择加入和向后兼容而设计，允许执行节点通过已确立的方法进行同步。

执行引擎可以**在不进行完全验证的情况下乐观地导入信标区块**，找到最新区块头，然后使用上述方法开始同步链。接着在执行客户端更新之后通知共识客户端信标链中交易的有效性。

### 检查点同步

检查点同步也称为**弱主观性同步”**，它基于弱主观性假设，从最近的弱主观性检查点而不是从创世块同步信标链。检查点同步可大幅加快初始同步速度，意味着节点会连接到远程服务，以下载最近的最终确定状态并从该点继续验证数据。**提供数据的第三方会受到信任，因此要谨慎选择。**

## 执行客户端

-   Go Ethereum：简称 Geth，Go 语言实现，以太坊协议的原始实现之一。 目前，它是使用最为广泛的客户端，拥有最大的用户群，为用户和开发者提供各种工具。
    
-   Erigon：Go 实现，以前称为 Turbo‐Geth，最初是 Go Ethereum 的一个分叉，注重速度和磁盘空间效率。
    
-   Nethermind：C#、.NET 实现。
    
-   Besu：Java 实现，企业级以太坊客户端，面向公共网络和许可网络。 它运行所有以太坊主网功能（从追踪到 GraphQL），可进行大范围监控。
    
-   Reth：Rust 实现，以太坊全节点。
    
-   EthereumJS：TypeScript 实现。
    

## 共识客户端

-   Lighthous：Rust
    
-   Grandine：Rust
    
-   Lodestar：TypeScript
    
-   Nimbus：Nim
    
-   Teku：Java
    
-   Prysm： Go
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->










Gas 是 EVM 执行操作的单位。每条指令消耗固定的 gas，具体可以看\[以太坊 操作码\](https://ethereum.org/zh/developers/docs/evm/opcodes/)，gas 优化目标是减少交易所需的总 gas，提高用户体验并降低成本。  
  
\*\*区块链数据存储位置有三种：storage（存储，也就是磁盘）、memory（内存，临时的）、calldata（只读数据）\*\*  
  
\## 常见优化技巧  
  
\### 减少对 storage 操作  
  
\- 首次读取 \`storage\` 需 2100 gas（后续是热读取需 100 gas），而读取 \`memory\` 仅 3 gas。推荐多次访问同一存储数据时，将其缓存到 \`memory\` 以减少 SLOAD 次数。  
  
\- 首次初始化写入 \`storage\` 的成本高达 20,000 gas，修改 \`storage\` 中已有的存储值成本是 2,900 - 5,000；\`storage\`成本远高于\`memory\`，所以能用 \`memory\` 就不要用 \`storage\`。  
  
!\[\](image.png)  
  
示例：  
  
\`\`\`c  
// 公共状态变量，存储在storage中  
uint256 public totalScore;  
  
// ❌ 非优化写法  
function updateScore(uint256\[\] memory scores) public {  
for (uint256 i = 0; i < scores.length; i++) {  
// 每一轮循环都在读写storage  
totalScore += scores\[i\];  
}  
}  
  
// ✅ 优化写法  
function updateScore(uint256\[\] memory scores) public {  
// 1. 仅读取一次storage到内存 (SLOAD)  
uint256 tempScore = totalScore;  
for (uint256 i = 0; i < scores.length; i++) {  
// 2. 在内存中操作 (MLOAD/MSTORE)，每次仅需 3 Gas  
tempScore += scores\[i\];  
}  
// 3. 将最终结果写回storage (SSTORE)，仅需一次写存储  
totalScore = tempScore;  
}  
\`\`\`  
  
\### 使用位压缩（Bit Packing）  
  
EVM 存储是以 32 字节（256 位）为基本单位的。定义一个 uint256 会占满一整个插槽；定义一个 uint8，它只需要 1 字节，但如果不进行压缩，剩下的 31 字节就会被浪费掉。位压缩的目的就是通过多个连续小尺寸变量，让它们在物理上存储在同一个插槽内。  
  
示例：  
  
\`\`\`c  
struct Packed {  
//占1字节  
uint8 a;  
//占3字节  
uint24 b;  
}  
\`\`\`  
  
\### 循环优化  
  
减少不必要的运算，如 \`array.length\` 缓存到变量中定义在循环外，而非每次都在循环中反复定义。  
  
示例：  
  
\`\`\`c  
// ❌ 非优化  
for (uint256 i = 0; i < arr.length; i++) {  
uint256 len = arr.length;  
...  
}  
// ✅ 优化  
uint256 len = arr.length;  
for (uint i = 0; i < len; ++i) {  
...  
}  
\`\`\`  
  
\### 函数可见性选择  
  
\`external\` 比 \`public\` 更节省 gas，适用于仅被外部调用的函数。  
  
由于 public 函数既可以被外部调用，也可以被合约内部函数调用。为了兼容内部调用，Solidity 编译器通常会将 calldata 中的参数\*\*拷贝到内存（Memory）\*\*中，这样就会消耗 gas。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->











打卡，今天投了简历
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->












\[x参考\](https://x.com/virtuals\_io/status/2031042423288426979)  
  
\## 核心观点  
  
\*\*如果想让 AI Agent 生态真正去中心化，就必须建立开放的商业体系（commerce）。\*\*  
  
原因：  
  
\- AI Agent 之间需要 \*\*买卖服务、合作、交易资金\*\*  
\- 如果这些交易依赖某个平台或公司，就会重新变成中心化  
  
因此必须有：\*\*开放、无需许可、无人控制的商业基础设施\*\*，而 \*\*区块链 + 智能合约\*\* 是实现这一点的方式。  
  
\## 为什么 Agent 经济需要去中心化商业  
  
AI Agent 未来会成为 \*\*经济参与者\*\*，例如：  
  
\- AI 生成图片  
\- AI 写代码  
\- AI 分析金融数据  
\- AI 管理投资组合  
\- AI 审查法律文件  
  
这些都是 \*\*有价值的服务\*\*。未来的经济模式可能变成\*\*Agent ↔ Agent 的自动交易网络\*\*。  
  
\## Agent 经济面临的核心问题：信任  
  
当两个 Agent 交易时如果：  
  
\- 客户先付钱 → 服务方可能不交付  
\- 服务方先交付 → 客户可能不付款  
  
传统互联网的解决方式是平台负责托管资金、规则执行、评价系统、争议处理，但问题是平台可以改规则、冻结资金、下架用户、关闭服务。这会导致 \*\*中心化控制\*\*。  
  
\## 区块链如何解决这个问题  
  
\*\*用智能合约作为“中立执行者”\*\*  
  
智能合约负责：托管资金、记录任务状态、执行支付或退款  
  
优点：公开透明、不可篡改、无需信任平台  
  
同时链上还能提供：\*\*可验证历史记录\*\*  
  
例如：  
  
\- 完成过哪些任务  
\- 谁评价过  
\- 交付内容的 hash  
  
这些记录可以构成：\*\*Agent 的信誉系统（Reputation）\*\*  
  
\## ERC-8183：Agent 商业标准  
  
核心概念：  
  
\*\*Job（任务）\*\*  
  
每个任务包含三方：  
  
| 角色 | 说明 |  
| --------- | ---------- |  
| Client | 客户 |  
| Provider | 服务提供者 |  
| Evaluator | 评估者 |  
  
三方都只是 \*\*钱包地址\*\*。  
  
\---  
  
\### Job 的工作流程  
  
具体流程：  
  
1️⃣ Client 创建任务并支付资金（托管）  
2️⃣ Provider 完成工作并提交结果  
3️⃣ Evaluator 评估结果  
  
结果：  
  
\- \*\*Complete\*\* → 钱给 Provider  
\- \*\*Reject\*\* → 钱退给 Client  
\- \*\*Expired\*\* → 自动退款  
  
整个流程 \*\*自动执行，不需要平台\*\*。  
  
\---  
  
\### Evaluator（评估者）  
  
评估者可以是：  
  
1️⃣ \*\*AI Agent\*\*  
  
\- 用 LLM 判断任务质量  
  
2️⃣ \*\*智能合约\*\*  
  
\- 验证 ZK proof  
\- 自动判断正确性  
  
3️⃣ \*\*DAO / 多签\*\*  
  
\- 用于高价值交易  
  
协议不限制评估方式。  
  
\## Hooks：可扩展模块  
  
ERC-8183 设计成 \*\*最小核心协议\*\*。复杂逻辑通过 \*\*Hooks（插件合约）\*\*实现，例如：  
  
1\. 资金管理任务  
  
\- DeFi 投资  
\- token swap  
  
2\. 竞价任务  
  
多个 provider 竞价  
  
3\. Reputation gating  
  
只允许高信誉 agent 接单  
  
4\. 隐私任务  
  
使用 ZK 或 TEE 保护数据  
  
5\. 风险管理  
  
需要抵押或担保  
  
\## 与 ERC-8004 的关系  
  
ERC-8004 是\*\*Agent 身份和信誉系统\*\*，和ERC-8183两个标准形成循环：  
  
\`\`\`  
ERC-8004 发现 Agent  
↓  
ERC-8183 进行交易  
↓  
交易产生信誉记录  
↓  
ERC-8004 更新信誉  
\`\`\`  
  
形成 \*\*Agent 自组织经济系统\*\*。  
  
\## ERC-8183 不只是支付协议  
  
作者强调：\*\*支付 ≠ 商业\*\*  
  
商业需要：  
  
\- 任务定义  
\- 资金托管  
\- 交付验证  
\- 评价记录  
\- 争议处理  
  
ERC-8183 试图把这些 \*\*全部做成链上标准\*\*。  
  
\## 为什么这个标准重要  
  
AI 时代会出现大量新“商家”：  
  
例如：  
  
\- AI 微服务  
\- 自动化工具  
\- API Agent  
\- 个人 AI  
  
这些参与者：  
  
\- 没公司  
\- 没网站  
\- 没历史记录  
  
传统支付系统 \*\*无法审核他们的风险\*\*。  
  
但 ERC-8183：  
  
\- 不需要审核  
\- 不需要许可  
\- 只需要钱包地址  
  
并通过链上记录逐渐建立信誉。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->













今天学习了solidity

  
\## error、revert、event  
  
\- error 用于自定义错误，然后由开发者抛出给客户端  
  
\- panic 表示“程序内部严重故障”，由 EVM 或编译器自动抛出，开发者无法自定义 Panic 消息  
  
!\[\](image-2.png)  
  
!\[\](image-3.png)  
  
\- revert 关键字类似 Java 的 throw，用于主动终止当前交易的执行，并回滚所有状态更改。它可以配合自定义错误（custom error） 使用，也可以单独使用。  
  
\- event 关键字用于定义事件，事件将被发送给客户端（区块链网络）  
  
\`\`\`c  
//定义一个名为Coin的智能合约  
contract Coin {  
  
/\*  
关键字 "public"会自动生成一个函数，使得该变量可以被其他合约访问。生成的函数大致如下：  
function minter() external view returns (address) { return minter; }  
\*/  
address public minter;  
  
//mapping可以被看作是被初始化的哈希表，每一个可能的键从一开始就存在，并被映射到一个值，其字节表示为全零的值。但是无法获得所有的键或所有的值  
mapping(address => uint) public balances;  
  
// 使用event关键字定义事件，允许客户端对声明的特定合约变化做出反应  
event Sent(address from, address to, uint amount);  
  
// 构造函数代码只有在合约第一次部署创建时运行，因此部署者将成为minter，才有权限铸币。  
constructor() {  
minter = msg.sender;  
}  
  
// 向一个地址发送一定数量的新创建的代币，但只能由合约创建者minter调用  
function mint(address receiver, uint amount) public {  
require(msg.sender == minter);  
balances\[receiver\] += amount;  
}  
  
// 使用 error 关键字自定义错误  
error InsufficientBalance(uint requested, uint available);  
  
// 从调用者那里发送一定数量的代币到一个地址也就是转账  
function send(address receiver, uint amount) public {  
if (amount > balances\[msg.sender\])  
// 使用 revert 抛出自定义的错误（类似 throw），终止并恢复所有变化  
revert InsufficientBalance({  
requested: amount,  
available: balances\[msg.sender\]  
});  
  
balances\[msg.sender\] -= amount;  
balances\[receiver\] += amount;  
  
//发送事件，以太坊客户端如网络应用，可以监听区块链上发出的这些事件，事件一旦发出，监听器就会被动收到参数 from， to 和 amount，这使得跟踪交易成为可能。  
emit Sent(msg.sender, receiver, amount);  
}  
}  
  
\`\`\`  
  
\## EVM 存储数据的三个区域  
  
\- 存储  
  
每个账户都有一个称为\`存储\`的数据区，持久化存储。存储是一个键值存储，将 256 位的字映射到 256 位的字。 无法枚举存储，读取的成本相对较高，初始化和修改存储的成本更高。  
  
\- 内存  
  
合约在每次消息调用时都会获得一个新清除的实例，内存是线性的，可以在字节级寻址，但读的宽度限制在 256 位，而写的宽度可以是 8 位或 256 位。  
  
\- 栈  
  
EVM 不是基于寄存器的，而是基于栈的，因此所有的计算都在一个被称为 栈（stack） 的区域执行。 栈最大有 1024 个元素，每个元素长度是一个字（256 位）。  
  
\## 委托调用和库  
  
存在一种特殊的消息调用，被称为委托调用（delegatecall），比如 msg.sender 和 msg.value。  
  
这意味着合约可以在\*\*运行时动态地\*\*从不同的地址加载代码。存储、当前地址、余额仍然指的是调用合约，只是代码取自被调用的地址。  
  
\## 创建、停用、自毁  
  
从区块链上删除代码的唯一方法是当该地址的合约执行 selfdestruct 操作。 存储在该地址的剩余以太币被发送到一个指定的目标，然后存储和代码被从状态中删除。如果有人向被删除的合约发送以太币，以太币就会永远丢失。  
  
\## 单位和全局可用变量  
  
\`\`\`  
1 wei == 1  
  
1 gwei == 1e9  
  
1 szabo == 1e12 (Solidity 0.7.0 版本中被正式弃用)  
  
1 finney == 1e15 wei (Solidity 0.7.0 版本中被正式弃用)  
  
1 ether == 1e18 == 1ETH  
  
由于 \`闰秒\` 会造成不是每一年都等于365天，甚至不是每一天都有24小时，而且因为闰秒是无法预测的，所以需要借助外部的预言机来对一个确定的日期代码库进行时间矫正！因此在 0.5.0 版本中删除了后缀 years  
  
1 == 1 seconds  
  
1 minutes == 60 seconds  
  
1 hours == 60 minutes  
  
1 days == 24 hours  
  
1 weeks == 7 days  
  
\`\`\`  
  
\## 全局变量  
  
\- blockhash(uint blockNumber) returns (bytes32)： 给某个区块生成哈希值 - 只对最近的 256 个区块有效。在 0.4.22 版本中被废弃，在 0.5.0 版本中被删除。  
  
\- blobhash(uint index) returns (bytes32)： 用于在智能合约中读取当前交易附带的 Blob 数据的哈希值，让合约能验证和引用链下或 L2 提交的“大块数据”（Blobs）而不暴露原始数据内容，而无需将这些数据全部存入昂贵的链上存储。 （ EIP-4844 ）。  
  
\- block.basefee (uint)： 当前区块的基本费用 （ EIP-3198 和 EIP-1559 ）  
  
\- block.blobbasefee (uint): 当前区块的 blob 基础费用（ EIP-7516 和 EIP-4844）  
  
\- block.chainid (uint)： 当前链的 ID  
  
\- block.coinbase (address payable)： 当前区块矿工的地址  
  
\- block.difficulty (uint)： 当前区块的难度值（ EVM < Paris ）。对于其他 EVM 版本，它是 block.prevrandao 的一个废弃的别名，将在下一个重大改变版本中被删除。  
  
\- block.gaslimit (uint)： 当前区块的燃料上限  
  
\- block.number (uint)： 当前区块的区块号  
  
\- block.prevrandao (uint)： 由信标链提供的随机数（ EVM >= Paris ）（见 EIP-4399 ）。  
  
\- block.timestamp (uint)： 当前区块的时间戳，自 Unix epoch 以来的秒数  
  
\- gasleft() returns (uint256)： 剩余燃料，前身是 msg.gas， 在 0.4.21 版本中被弃用，在 0.5.0 版本中被删除。  
  
\- msg.data (bytes)： 完整的调用数据  
  
\- msg.sender (address)： 消息发送方（当前调用）  
  
\- msg.sig (bytes4)： 调用数据的前四个字节（即函数标识符）。  
  
\- msg.value (uint)： 随消息发送的 wei 的数量  
  
\- tx.gasprice (uint)： 交易的燃料价格  
  
\- tx.origin (address)： 交易发送方（完整调用链上的原始发送方）  
  
\## 错误处理  
  
\- assert(bool condition) 用于测试，内部错误。如果条件不满足，会导致异常，状态回滚  
  
\- require(bool condition) 用于输入或外部组件的错误。如果条件不满足，状态回滚。  
  
\- require(bool condition, string memory message) 提供一个错误消息。  
  
\- revert() 终止运行并状态回滚。  
  
\- revert(string memory reason) 提供一个解释性的字符串。  
  
\## 密码函数  
  
\`\`\`c  
//计算 (x + y) % k，加法会在任意精度下执行，并且加法的结果即使超过 2\*\*256 也不会被截取。从 0.5.0 版本的编译器开始会加入对 k != 0 的校验（assert）。  
addmod(uint x, uint y, uint k) returns (uint)  
  
//计算 (x \* y) % k，乘法会在任意精度下执行，并且乘法的结果即使超过 2\*\*256 也不会被截取。从 0.5.0 版本的编译器开始会加入对 k != 0 的校验（assert）。  
mulmod(uint x, uint y, uint k) returns (uint)  
  
//计算输入的 Keccak-256 哈希值。  
keccak256(bytes memory) returns (bytes32)  
  
//计算输入的 SHA-256 哈希值。  
sha256(bytes memory) returns (bytes32)  
  
//计算输入的 RIPEMD-160 哈希值。  
ripemd160(bytes memory) returns (bytes20)  
  
//利用椭圆曲线签名恢复与公钥相关的地址，错误返回零值。  
ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address)  
/\*\*函数参数对应于签名的 ECDSA 值  
r = 签名的前32字节  
s = 签名的第二个32字节  
v = 签名的最后1个字节  
ecrecover 返回一个 address，而不是 address payable。\*/  
\`\`\`  
  
\## address 类型的成员  
  
\`\`\`c  
//以 Wei 为单位的 地址类型 的余额。  
<address>.balance （ uint256 ）  
  
//在 地址类型 的代码（可以是空的）。  
<address>.code （ bytes memory ）  
  
//地址类型 的代码哈希值  
<address>.codehash （ bytes32 ）  
  
//向 地址类型 发送数量为 amount 的 Wei，失败时revert，自动回滚，发送2300燃料的矿工费，不可调节。  
<address payable>.transfer(uint256 amount)  
  
//向 地址类型 发送数量为 amount 的 Wei，失败时返回 false，不会自动revert，2300燃料的矿工费用，不可调节。  
<address payable>.send(uint256 amount) returns (bool)  
  
/\*\*  
在 EVM（以太坊虚拟机）中，所有合约交互最终都通过以下操作码实现：  
CALL → 普通调用  
DELEGATECALL → 代理调用  
STATICCALL → 只读调用  
  
Solidity 的 .call()、.delegatecall()、.staticcall() 就是对上述操作码的封装，这些函数都是低级别的函数，应该谨慎使用。因为任何未知的合约都可能是恶意的，调用未知合约就意味着把控制权交给了该合约，而该合约又可能回调到原合约中，所以要准备好在调用返回时改变您合约的状态变量。  
\*/  
  
//低级调用，向目标地址发起普通消息调用，执行其代码，使用目标合约的存储、余额和上下文，返回是否成功的结果和数据，发送所有可用燃料，燃料费可调节。应避免在执行另一个合约函数时使用 .call()，因为它绕过了类型检查、函数存在性检查和参数打包.  
<address>.call(bytes memory) returns (bool, bytes memory)  
  
//代理调用，在当前合约的上下文中，执行目标合约的代码，返回是否成功的结果和数据，发送所有可用燃料，燃料费可调节。  
<address>.delegatecall(bytes memory) returns (bool, bytes memory)  
  
//发起一次只读调用，禁止任何状态修改（包括发送 ETH、写 storage 等），返回是否成功的结果和数据，发送所有可用燃料，燃料费可调节。  
<address>.staticcall(bytes memory) returns (bool, bytes memory)  
  
\`\`\`  
  
!\[\](image-1.png)  
  
\## 合约相关  
  
\- this 指当前合约，可以显示转换为地址类型  
  
\- super 指上级合约  
  
\- selfdestruct(address payable recipient) 销毁当前合约，将其资金发送到给定的 地址类型 并结束执行。  
  
\- 每个合约定义后，其名称本身就是一个类型。  
  
\`\`\`c  
//如果 Child 继承自 Parent，那么 Child 实例可隐式转为 Parent 类型：  
Parent p = new Child();  
  
//任何合约实例都可以显式转为 address：  
MyToken token = new MyToken();  
address addr = address(token);  
  
\`\`\`  
  
\## 保留关键词  
  
!\[\](image.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->














今天学了the graph。

\[官网\]([https://thegraph.com/docs/en/subgraphs/quick-start/](https://thegraph.com/docs/en/subgraphs/quick-start/))

\`\`\`bash

npm install -g @graphprotocol/graph-cli@latest

graph init

npm install

graph codegen

graph build

graph auth <DEPLOY\_KEY>

graph deploy <SUBGRAPH\_SLUG>

\`\`\`

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/QingQiuGeek/images/2026-05-19-1779196582805-image.png)

**\## 踩坑**

name中是下划线\\\_，但是在slug中则是-

![image-1.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/QingQiuGeek/images/2026-05-19-1779196568013-image-1.png)

  

本地graph init创建的name要和studio的一致，否则最后部署会出现

\`\`\`

× Failed to deploy to Graph node [https://api.studio.thegraph.com/deploy/](https://api.studio.thegraph.com/deploy/): Subgraph not found

\`\`\`

部署后  

![image-4.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/QingQiuGeek/images/2026-05-19-1779196542721-image-4.png)

deploy 后：自己已经可以查，也可以接应用做开发/演示

publish 后：别人也能把它当正式网络服务来用
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->















今天学了 foundry的模糊测试、不变量测试、差异测试

\## 模糊测试  
  
模糊测试让测试框架自动生成大量随机输入，反复运行测试函数，以发现边界条件下的 bug。  
  
\`\`\`solidity  
pragma solidity 0.8.10;  
  
import {Test} from "forge-std/Test.sol";  
  
contract Safe {  
receive() external payable {}  
  
function withdraw() external {  
payable(msg.sender).transfer(address(this).balance);  
}  
}  
  
contract SafeTest is Test {  
Safe safe;  
  
receive() external payable {}  
  
function setUp() public {  
safe = new Safe();  
}  
// 自动为 uint256 生成：0, 1, MAX\_UINT, 随机大数、小数等，任何一次运行 revert 或断言失败 → 整个测试失败，默认运行256次  
function testFuzz\_Withdraw(uint256 amount) public {  
payable(address(safe)).transfer(amount);  
uint256 preBalance = address(this).balance;  
safe.withdraw();  
uint256 postBalance = address(this).balance;  
assertEq(preBalance + amount, postBalance);  
}  
//testFuzz\_Withdraw测试结果是失败，因为测试合约的默认以太币数量是 2\*\*96 wei（在 DappTools 中），所以必须将 amount 类型限制为 uint96 ，以确保我们不会尝试发送超过uint96的值，如下：  
  
function testFuzz\_Withdraw(uint96 amount) public {  
payable(address(safe)).transfer(amount);  
uint256 preBalance = address(this).balance;  
safe.withdraw();  
uint256 postBalance = address(this).balance;  
assertEq(preBalance + amount, postBalance);  
}  
}  
  
\`\`\`  
  
\### 模糊测试固定  
  
当你想确保一组特定的值被用作模糊参数的输入时，可以定义模糊测试固定装置。这些固定装置可以在测试中被声明为：  
  
\- 以 fixture 为前缀的存储数组，后跟要进行模糊处理的参数名称。例如，要用于模糊处理 uint32 类型的参数 amount 的固定装置可以定义如下：  
  
\> uint32\[\] public fixtureAmount = \[1, 5, 555\];  
  
\- 以 fixture 为前缀命名的函数，后跟要进行模糊处理的参数名称。\*\*函数应返回一个（固定大小或动态的）数组\*\*，作为模糊处理所需的值。例如，要用于模糊处理名称为 owner 的 address 类型的参数的固定装置可以定义为具有以下签名的函数：  
\> function fixtureOwner() public returns (address\[\] memory)  
  
如果提供的固定值的类型与要进行模糊处理的命名参数的类型不一致，则会被拒绝并引发错误。  
  
\## 不变量测试  
  
无论系统如何变化（执行任意操作序列），某些“不变性质”必须始终成立。  
  
Foundry 会随机组合 transferToUser1, transferBetweenUsers, burnFromOwner 等操作（例如：先转 100，再 burn 50，再转 200...），每执行几步，就检查一次 invariant\_XXX 是否成立  
，如果任何一次不成立 → 测试失败，并输出导致失败的操作序列，如下:  
  
\`\`\`solidity  
// SPDX-License-Identifier: MIT  
pragma solidity ^0.8.13;  
  
import {Test} from "forge-std/Test.sol";  
import "./MyToken.sol"; // 假设这是 ERC20 合约  
  
contract TokenInvariantTest is Test {  
MyToken token;  
address owner = address(this);  
address user1 = makeAddr("user1");  
address user2 = makeAddr("user2");  
  
uint256 initialSupply = 10000 ether;  
  
function setUp() public {  
token = new MyToken("Test", "TST", initialSupply);  
vm.label(address(token), "Token");  
vm.label(user1, "User1");  
vm.label(user2, "User2");  
}  
  
// ===== 操作函数（Fork 的“动作”）=====  
function transferToUser1(uint256 amount) public {  
vm.assume(amount <= token.balanceOf(owner));  
token.transfer(user1, amount);  
}  
  
function transferBetweenUsers(uint256 amount) public {  
vm.assume(amount <= token.balanceOf(user1));  
vm.prank(user1);  
token.transfer(user2, amount);  
}  
  
function burnFromOwner(uint256 amount) public {  
vm.assume(amount <= token.balanceOf(owner));  
token.burn(amount);  
}  
  
// ===== 不变量断言（必须永远成立）=====  
  
// 不变量 1：总供应量 = 所有账户余额之和  
function invariant\_totalSupplyEqualsSumOfBalances() public {  
uint256 totalBalance = token.balanceOf(owner)  
\+ token.balanceOf(user1)  
\+ token.balanceOf(user2);  
assertEq(token.totalSupply(), totalBalance);  
}  
  
// 不变量 2：余额永不为负（Solidity 保证，但可显式检查）  
function invariant\_balancesNonNegative() public {  
assertGe(token.balanceOf(owner), 0);  
assertGe(token.balanceOf(user1), 0);  
assertGe(token.balanceOf(user2), 0);  
}  
}  
\`\`\`  
  
\## 差异测试  
  
对同一输入，两个不同实现（或不同环境）应产生相同输出。如果不一致，说明至少有一个实现有 bug。常用于：  
  
\- 验证新实现 vs 老实现  
  
\- 验证优化版 vs 原始版  
  
\- 验证 L2 合约 vs 主网行为  
  
Forge 用大量随机 x 值调用 testDifferential\_Sqrt，如果 MyMath.sqrt(100) = 10，但 Math.sqrt(100) = 9 → 立即失败  
  
\`\`\`solidity  
// SPDX-License-Identifier: MIT  
pragma solidity ^0.8.13;  
  
import {Test} from "forge-std/Test.sol";  
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";  
  
// 自定义 sqrt 实现（可能有 bug）  
library MyMath {  
function sqrt(uint256 x) internal pure returns (uint256) {  
if (x == 0) return 0;  
uint256 z = (x + 1) / 2;  
uint256 y = x;  
while (z < y) {  
y = z;  
z = (x / z + z) / 2;  
}  
return y;  
}  
}  
  
contract DifferentialTest is Test {  
// 差异测试：比较 MyMath.sqrt 和 OpenZeppelin Math.sqrt  
function testDifferential\_Sqrt(uint256 x) public {  
// 限制输入范围（避免溢出或无效值）  
vm.assume(x <= type(uint128).max);  
  
uint256 result1 = MyMath.sqrt(x);  
uint256 result2 = Math.sqrt(x);  
  
// 关键：两者结果必须一致！  
assertEq(result1, result2, "sqrt implementations differ");  
}  
}  
\`\`\`
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
