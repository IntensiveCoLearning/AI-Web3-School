---
timezone: UTC+8
---

# Chunfield

**GitHub ID:** Chunfield

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->
CAW 的核心特点总结

1\. MPC 数学级安全，而非软件级信任

— 私钥分片加密，Agent 物理上不持有完整私钥，无法单方面签名，这是数学保证而非"最佳实践"。

2\. Pact 动态契约制，而非静态权限

— 每次任务动态生成一份 Pact，定义意图、边界、策略、过期条件，任务完成即失效，基础设施层强制执行。

3\. Recipe 预验证技能，杜绝 LLM 幻觉

— 链上操作不依赖大模型"即兴发挥"，而是执行预验证的标准化剧本，消除编造合约地址、参数错误等风险。

4\. 可控自主权（Controlled Autonomy）

— 在"完全托管"和"完全自主"之间找到了第三条路：Agent 可以在边界内自由执行，但永远无法越权。

5\. 开放生态 & 低门槛集成

— 开源、多 SDK、MCP 原生支持、一键安装、覆盖主流 AI 框架和 80+ 公链，开发者几乎零摩擦接入。

6\. 多重防御纵深

— 三层策略引擎 + 双重签名组 + 紧急冻结（一键撤销所有活跃 Pact）+ 不可篡改审计日志 + 用户独立恢复路径。

7\. 从高频到高价值全覆盖

— MPC 模式守护大额操作，Custodial 模式支撑微支付/DCA 等高频场景，统一 API 无缝切换。
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->

**createOpenClawTools**这个核心函数在开头会解析4类东西

1.  配置和运行时的配置
    

```
  const resolvedConfig = options?.config ?? openClawToolsDeps.config;
  const runtimeSnapshot = getActiveSecretsRuntimeSnapshot();
  const availabilityConfig = selectApplicableRuntimeConfig({
    inputConfig: resolvedConfig,
    runtimeConfig: runtimeSnapshot?.config,
    runtimeSourceConfig: runtimeSnapshot?.sourceConfig,
  });
```

这段代码表示工具的可见性不止看静态的配置，也会看runtime Snapshot（由配置文件解析、校验、secret注入、provider初始化后生成的运行时状态对象）  
2\. 当前的session属于哪个 Agent

```
const { sessionAgentId } = resolveSessionAgentIds({
  sessionKey: options?.agentSessionKey,
  config: resolvedConfig,
  agentId: options?.requesterAgentIdOverride,
});
```

根据当前请求的 session 信息 + 已解析配置 + 可选的 agent 覆盖参数，算出这次工具调用应该归属哪个 sessionAgentId  
3\. workspace路径

```
  const inferredWorkspaceDir =
    options?.workspaceDir || !resolvedConfig
      ? undefined
      : resolveAgentWorkspaceDir(resolvedConfig, sessionAgentId);
  const workspaceDir = resolveWorkspaceRoot(options?.workspaceDir ?? inferredWorkspaceDir);
  const spawnWorkspaceDir = resolveWorkspaceRoot(
    options?.spawnWorkspaceDir ?? options?.workspaceDir ?? inferredWorkspaceDir,
  );

```

workspaceDir是当前 agnet 的工作目录，spawnWorkspaceDir 是子 agent 的工作目录  
workspace 路径决定了 agent 的操作边界、项目上下文和多 agent 的隔离方式。  
4\. delivery / sandbox / media plan

```
  const deliveryContext = normalizeDeliveryContext({
    channel: options?.agentChannel,
    to: options?.agentTo,
    accountId: options?.agentAccountId,
    threadId: options?.agentThreadId,
  });

  const sandbox =
    options?.sandboxRoot && options?.sandboxFsBridge
      ? { root: options.sandboxRoot, bridge: options.sandboxFsBridge }
      : undefined;

  const optionalMediaTools = resolveOptionalMediaToolFactoryPlan({
    config: availabilityConfig ?? resolvedConfig,
    workspaceDir,
    authStore: options?.authProfileStore,
    toolAllowlist: options?.pluginToolAllowlist,
    toolDenylist: options?.pluginToolDenylist,
  });
```

当前在哪个 channel 回复、是否在沙箱里、媒体工具该不该启，都在装配前先定好。  
然后开始封装工具（OpenClaw 的工具**不是统一注册后全部暴露，而是逐类按条件构造**）

```
const tools: AnyAgentTool[] = [
    ...(embedded
      ? []
      : [
          nodesTool,
          createCronTool({ ... }),
        ]),
    ...(messageTool && includeMessageTool ? [messageTool] : []),
    ...collectPresentOpenClawTools([heartbeatTool]),
    createTtsTool({ ... }),
    ...(includeTranscriptsTool ? [createTranscriptsTool({ config: resolvedConfig })] : []),
    ...collectPresentOpenClawTools([imageGenerateTool, musicGenerateTool, videoGenerateTool]),
    ...(embedded
      ? []
      : [
          createGatewayTool({ ... }),
        ]),
    createAgentsListTool({ ... }),
    ...(includeUpdatePlanTool ? [createUpdatePlanTool()] : []),
    createSessionsListTool({ ... }),
    createSessionsHistoryTool({ ... }),
    ...(embedded
      ? []
      : [
          createSessionsSendTool({ ... }),
        ]),
    ...(includeSubagentSpawnTool
      ? [
          createSessionsSpawnTool({ ... }),
        ]
      : []),
    createSessionsYieldTool({ ... }),
    createSubagentsTool({ ... }),
    createSessionStatusTool({ ... }),
    ...collectPresentOpenClawTools([webSearchTool, webFetchTool, imageTool, pdfTool]),
  ];

```

这段代码体现了Agent默认可挂载的能力、工具装配策略，也就是 agent 的默认能力边界。包括：

-   定时任务 createCronTool
    
-   消息发送 messageTool
    
-   TTS createTtsTool
    
-   transcripts 读取
    
-   图片/音乐/视频生成
    
-   gateway 调用
    
-   agent/session 管理
    
-   spawn 子 agent
    
-   web search / web fetch
    
-   image / pdf 处理  
    但是这些能力不是硬编码在 Agent 本体里，而是通过这段工具注册逻辑动态(像是有embedded ? \[\] : \[...\]这样的判断条件)拼出来的。  
    此外，它还会再按条件将插件提供的工具也给并进来，组成最终的allTools
    

```
›   if (!options?.disablePluginTools) {
      const existingToolNames = new Set<string>();
      for (const tool of tools) {
        existingToolNames.add(tool.name);
      }
      allTools = [
        ...tools,
        ...resolveOpenClawPluginToolsForOptions({
          options,
          resolvedConfig,
          existingToolNames,
        }),
      ];
    }
```

上述代码中，tools是前面那批官方/内置工具，resolveOpenClawPluginToolsForOptions则是会根据配置和上下文，解析出插件贡献的工具。为了防止插件工具和官方/内置工具重名，还会将前面注册好的工具名收集起来，给后面的插件解析过程做冲突检查。

```
  return allTools.map((tool) =>
    isToolWrappedWithBeforeToolCallHook(tool)
      ? tool
      : wrapToolWithBeforeToolCallHook(tool, hookContext),
  );
```

最后在最终返回工具列表之前，给每个 tool 统一套上一层调用前钩子（beforeToolCall hook）。这个hook的作用是给所有工具加一个统一的**拦截层**，这个拦截层通常会用来做这些事：

-   工具调用前记录日志
    
-   埋点 / telemetry
    
-   权限检查
    
-   参数检查或标准化
    
-   注入上下文
    
-   调用前事件通知
    
-   调试追踪  
    这也是平台化架构的特点。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


OpenClaw是什么？简单来说OpenClaw是一个自托管的网关，它将你平时常用的通讯软件和渠道与AI智能体连接起来。

它的特点有啥？自托管、多渠道、开源

OpenClaw的骨架大致是Channels -> Gateway -> Agent Runtime -> Tools/Workspace/Memory -> Reply back to Channels

-   Gateway  
    常驻运行的控制面。负责把外部世界和内部 agent 连接起来。
    
-   Channels  
    各种消息入口，比如 Telegram、WhatsApp、Slack、Discord、iMessage 等。
    
-   Agent Runtime  
    真正和模型交互、调用工具、处理任务的执行核心。
    
-   Workspace  
    agent 的长期文件上下文，里面放规则、身份、记忆、技能等。
    
-   Sessions  
    每一次持续对话/任务链的运行单位。
    
-   Tools / Plugins / Skills  
    agent 能做什么，取决于它挂了哪些工具、插件和技能。
    
-   Memory  
    让 agent 不只是“当前这一轮对话”，而是带着长期信息工作。  
    OpenClaw里的Agent就像一个实例，它有自己的workspace、规则、权限、session、memory、绑定的channel。
    

OpenClaw里的Agent实现：在相关的实现代码中，会有**createOpenClawTools**这个核心函数，这个函数主要做下面几个事情 ：

-   接收当前运行上下文
    
-   判断当前环境能暴露哪些工具
    
-   创建这些工具
    
-   可选地把插件工具也并进来
    
-   最后统一包上一层 before\_tool\_call hook
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



最近看了 `openclaw` 和`hermes-agent` 两个项目。它们都可以被归到“agent”这个大类里，但如果只看介绍页，很容易把它们理解成同一种东西：都有多平台接入、都有工具、都有会话、都有长期运行能力、都有扩展机制。

但真正翻到源码后，会发现两者其实在回答完全不同的问题。

`OpenClaw` 关心的是：**如何把一个长期在线、跨多个通信渠道、带工具和子会话能力的个人 AI 助手，做成一个稳定的系统平台。**

`Hermes` 关心的是：**如何把一个能持续对话、会调用工具、会搜索历史、会积累技能、会委派子任务的 agent，做成一个强大的主循环运行时。**

所以虽然两者表面上有大量功能重叠，但它们的架构重心并不相同。一个更像 assistant platform，一个更像 agent runtime。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->




Web3 基础概念笔记

1\. account

在 Web3 里，account 可以理解成你在区块链上的账户身份。它不是传统网站那种“用户名+密码账户”，而是由一套密钥控制的链上身份。很多操作，比如转账、签名、调用合约，都是以这个账户为主体完成的。

2\. address

address 是账户在链上的公开地址，类似银行账号，但它是公开可见的。别人给你转资产、给你空投、或者你去调用合约时，通常都要用这个地址。地址可以公开分享，但它本身不能拿来控制账户。

3\. wallet

wallet 是你管理链上账户的工具，比如 MetaMask、OKX Wallet、Rabby。钱包本质上不是“币放在里面”，因为资产实际在链上；钱包真正做的是帮你保管密钥、发起交易、签名消息、连接 DApp。

4\. seed phrase

seed phrase 就是助记词，通常是一组英文单词，用来恢复整套钱包和账户。它可以看成是钱包最高级别的恢复凭证。谁拿到助记词，通常就等于拿到这个钱包控制权，所以绝对不能截图、不能发给别人、不能存到不安全的云端。

5\. private key

private key 是私钥，是直接控制某个链上账户的核心秘密。拥有私钥的人就能代表这个账户签名和发交易。私钥和助记词都非常敏感，但私钥通常对应某个具体账户，而助记词往往可以恢复整个钱包体系。

6\. signature

signature 是签名，可以理解成“我用私钥证明这条消息或这笔交易确实是我授权的”。签名不会直接暴露私钥，但能让链上或应用验证“这件事确实是这个地址同意的”。很多登录 Web3 网站、授权操作、链上交易，本质上都依赖签名。

7\. transaction

transaction 是交易，是你提交到区块链上的一条操作请求。它不一定只是转账，也可能是调用智能合约、授权代币、铸造 NFT。交易通常需要钱包确认、支付 gas，然后被网络打包上链，最终成为可验证的链上记录。

8\. gas

gas 可以理解成链上执行手续费。你在区块链上做任何操作，通常都要消耗网络资源，所以要支付 gas。普通转账 gas 较少，复杂合约调用 gas 更多。测试网虽然常常用测试币支付，但机制和主网是一样的。

9\. smart contract

smart contract 是部署在链上的程序。它会按照预先写好的规则自动执行，比如发币、兑换、NFT mint、质押等。你平时在 Web3 里“点按钮完成某个功能”，很多时候本质上就是钱包帮你向某个智能合约发起调用。

10\. contract call

contract call 就是调用合约方法。比如你点“Approve”或“Swap”，其实是在调用智能合约里的函数。调用成功后，链上状态会变化，所以通常需要钱包确认并发送交易。

11\. approve

approve 是 Web3 里很常见的授权动作，尤其在代币场景。它表示你允许某个合约在一定额度内使用你的代币。很多新手容易把 approve 当成“转账”，其实它更像是“先给权限”，后续合约才能代你执行扣款或交换。

12\. on-chain verification

on-chain verification 就是链上验证，意思是通过区块浏览器或链上数据确认某个操作是否真实发生。比如你做了测试网交易，可以通过交易哈希、地址记录、合约事件来验证是否成功，而不是只看前端页面提示。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





User Input -> Prompt -> Model -> Agent Decision -> Tool Call -> Tool Result -> Model -> Final Answer

langchain组织模型、工具、Agent的链路

Model：最底层，负责生成文本、结构化输出或调用函数。

Tool：是模型可调用的外部能力封装，比如搜索、数据库查询、执行代码、读文件。Tool 本质上是带名字、描述和输入 schema 的函数。

Agent：是调度层。它拿到用户目标后，决定：

-   直接回答
    
-   还是调用哪个 tool
    
-   tool 返回后是否继续推理
    
-   什么时候结束
    

Prompt：负责告诉模型当前角色、目标、约束和可用工具说明，通常是 Agent 的行为基础。

Memory：用来保存对话历史、用户偏好或中间状态，让 Agent 有连续性。

Chain / Runnable：是执行组织方式。LangChain 现在更偏 Runnable 风格，把模型、prompt、parser、tool 调用串成可组合流水线。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->






Memory对于Agent的意义：

1.  连续性： 没有 memory，Agent 每次都像冷启动。 有了 memory，Agent 才能跨会话延续。
    
2.  行为约束：它决定 Agent 会不会用你偏好的表达方式回复、遵守你的工程习惯、避开之前踩过的坑、在相似任务里复用已有的策略
    
3.  能力放大：memory能对抗上下文窗口限制的问题、能确保长期任务的进行、保证用户需求的一致性，将瞬时工作积累成经验。
    

未来我觉得会从人工维护走向自动整理
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->







### **大模型底层原理探索笔记：从矩阵到 Transformer 架构**

**1\. 什么是矩阵？**

-   **提问**：什么是矩阵？
    
-   **笔记**：矩阵本质上就是一个**按长方形阵列排列的数字表格**（比如 Excel 表格）。在深度学习中，它是数据的核心载体。无论是输入给模型的文本、图片，还是模型内部的计算过程，全都是用矩阵来表示和运算的。你可以把它理解为承载信息的“集装箱”。
    

**2\. Logits 和 ID 是如何对应的？**

-   **提问**：既然是原始得分（Logits），怎么将原始得分和对应的 ID 字段对应起来呢？
    
-   **笔记**：Logits 和 ID 并不需要专门去“对应”，它们在数据结构上是**天然绑定**的。
    
    -   大模型的词汇表（Vocabulary）就像一个按顺序排好号的字典（ID 0 是“的”，ID 1 是“我”……）。
        
    -   LM Head 输出的 Logits 是一个超长向量，**这个向量的“索引（下标）”就直接对应了 Token 的 ID**。
        
    -   比如 Logits 向量的第 12345 个位置的数字最大，计算机就知道 ID 为 12345 的那个词得分最高，直接去字典里查 12345 对应的字即可。
        

**3\. Patchscopes 的意义是什么？**

-   **提问**：Patchscopes 的意义是什么？
    
-   **笔记**：Patchscopes 是大模型可解释性研究领域的**“大一统框架”**，可以看作是 Logit Lens 的超级进化版。
    
    -   **统一与超越**：它把 Logit Lens 等零散工具统一了起来，并解决了老方法在模型浅层失效的问题。
        
    -   **翻译**：它不再受限于模型自身的表达能力，而是借用另一个（甚至更强的）目标模型，配合精心设计的 Prompt，把原本看不懂的隐藏向量“翻译”成人类能听懂的自然语言。
        

**4\. 什么是 Representation？Patchscopes 只是简单替换吗？**

-   **提问**：Representation 是什么？Patchscopes 是怎么做到的？只是将中间层的 Representation 替换吗？
    
-   **笔记**：
    
    -   **Representation（表征/隐藏状态）**：就是大模型内部的**“思维状态”**（即 K 维向量）。它承载了模型对当前文本在特定思考阶段的全部理解。
        
    -   **Patchscopes 的原理**：它确实是通过“替换”实现的，但这是一种精密的**跨模型思维移植手术**。
        
        1.  **提取**：从源模型中提取某个词在特定层的 Representation（思维样本）。
            
        2.  **准备**：给目标模型准备一个带有“填空题”（插槽）的 Prompt。
            
        3.  **移植（Patching）**：当目标模型处理到插槽时，强行中断计算，把源模型的 Representation **直接替换（Patch）** 进去。
            
        4.  **诱导**：让目标模型继续计算，它会用自然语言把刚刚被植入的“思维”说出来。
            
    -   它不仅是替换，更是**跨模型借力**和**自然语言解码**。
        

**5\. Patchscopes 是通过对比来研究更好的模型吗？**

-   **提问**：Patchscopes 的意义是什么？如果说是用来研究更好的模型的话，是通过对比的方式么？
    
-   **笔记**：是的，**“对比”是 Patchscopes 最核心的研究手段**。它像一个精密的“思维手术台”，通过控制变量进行对比实验：
    
    -   **跨模型对比**：把小模型的思维移植给大模型表达，发现小模型其实“懂知识但表达弱”，指明了提升小模型表达能力的方向。
        
    -   **跨层级对比**：在模型推理出错时，人工注入正确的中间向量，发现模型往往是在中间某一步“断片”或“想歪了”，为设计自我纠正模型指明方向。
        
    -   **跨方法对比**：证明了自己比 Logit Lens 等老工具分辨率更高、穿透力更强。
        

**6\. 什么是 Network 架构？**

-   **提问**：什么是 network 架构？
    
-   **笔记**：在大模型语境下，Network 架构指的是**神经网络的“骨架”或“蓝图”**。
    
    -   如果把训练大模型比作建大厦，架构就是**结构设计图纸**（规定了多少层、每层什么功能、怎么连接），而模型参数（权重）是砖块水泥。
        
    -   核心要素包括：层（Layers）、连接方式（如全连接、自注意力）、核心组件（如多头注意力、前馈神经网络）。目前主流的大模型架构是 **Transformer**。
        

**7\. Transformer 架构详解**

-   **提问**：给我讲一下 transformer 架构。
    
-   **笔记**：Transformer 是当今所有大语言模型（如 GPT、LLaMA）的基石，它是一个**高度并行化的向量加工厂**。
    
    -   **整体蓝图**：最初由 Encoder（编码器，负责阅读理解）和 Decoder（解码器，负责写作表达）组成。现在的流行大模型（如 GPT）大多只保留了 Decoder 部分。
        
    -   **核心流水线**：
        
        1.  **输入**：词嵌入（变向量）+ 位置编码（加语序信息）。
            
        2.  **自注意力机制（Self-Attention）**：让每个字都能“看见”并参考句子里的其他所有字，搞清楚指代和逻辑。
            
        3.  **前馈神经网络（FFN）**：对融合了上下文信息的向量进行单独加工和深度提炼。
            
        4.  **残差连接与层归一化**：防止信息丢失，保证训练稳定。
            
    -   **优势**：彻底抛弃了传统的 RNN，解决了长距离遗忘问题，且能大规模并行计算。
        

**8\. 什么是 Attention？**

-   **提问**：什么是 attention？
    
-   **笔记**：Attention（注意力机制）是 Transformer 里的**核心“信息筛选与加权”系统**。
    
    -   **核心逻辑**：让模型在处理当前字时，知道应该重点去参考上下文中的哪些其他字（比如读到“它”，就重点参考“苹果”）。
        
    -   **Q、K、V 机制**：
        
        -   **Query (Q)**：查询，代表“我想找什么”。
            
        -   **Key (K)**：键，代表“我能提供什么”。
            
        -   **Value (V)**：值，代表“我的实际内容”。
            
    -   **计算流程**：拿着 Q 和所有词的 K 比对算出分数 -> 归一化算出权重 -> 按权重对 V 进行加权求和。
        

**9\. 什么是 RoPE？**

-   **提问**：reop 是什么技术？
    
-   **笔记**：推测你想问的是 **RoPE（Rotary Positional Embedding，旋转位置编码）**，这是目前主流大模型（如 LLaMA、Qwen）都在使用的核心技术。
    
    -   **作用**：给向量加上位置信息，让模型知道语序。
        
    -   **原理**：根据词在句子中的位置，把词向量在多维空间里**旋转一个特定的角度**。位置越靠后，旋转角度越大。
        
    -   **优势**：能精准捕捉词与词之间的相对距离，且具备极强的外推性（训练时看短文，推理时能处理长文）。
        

**10\. 什么是加权运算？为什么 Attention 最后要进行加权运算？**

-   **提问**：什么是加权运算，为什么在 attention layer 这层会最后进行一个加权运算？
    
-   **笔记**：
    
    -   **加权运算**：就是“带着权重的计算”，权重代表了重要性。比如期末成绩中，期末考试占比 70%，这 70% 就是权重。
        
    -   **Attention 中的加权**：这是 Attention 机制的最终目的——**融合上下文信息**。
        
        -   模型通过 Q 和 K 算出每个词的“相关度权重”后，必须拿着这个权重去对每个词的 V（实际内容）进行加权求和。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->








为什么大模型有上下文的窗口限制？为什么gemni当时可以做到大上下文，可以塞入整本的卡拉蒙语的字典？

大模型的上下文窗口限制，本质上是由其核心架构——Transformer 中的自注意力机制（Self-Attention）决定的。在计算时，模型为了让每个Token都能理解与其他Token的关系，需要让序列中的每一个 Token 都去和它前面所有的 Token 做一次“相关性计算”。这就导致了一个数学上的硬伤：计算量和内存占用会随着输入长度（n）的增加呈平方级增长（O(n²)）。

为了延长上下文，就有了稀疏注意力机制（Sparse Attention）：传统的注意力机制是“全盘计算”，而稀疏注意力机制让模型学会“偷懒”。它不再让每个 Token 都和所有 Token 计算关联，而是只对部分关键的、局部的 Token 进行计算。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->









今天主要了解了生成式AI的一些基本原理，知道了大模型如何实现文生图、生成语音的基本原理。

大模型其实是在做一个文字接龙的游戏，通过你给出的文字来推理下一个关联可能性最大的文字，大模型生图则是通过推理像素位置来进行但是现在都不这么做，因为单靠推理像素会产生太多的运算，现在则是通过将一张图片拆分成不同的小块，每个小块通过token描述，最后通过解码器统一渲染，这就像使用泥巴捏一只小狗（前者）和使用有说明书的乐高积木搭建一个小狗（后者）类似。后续准备继续深入了解总结
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->










Hermes特点

-   **自主沉淀技能**：当它成功完成一个复杂任务后，会自动反思并将操作步骤提炼、封装成一个可复用的技能文件（Skill），下次遇到同类任务时就能直接调用，越用越熟练。
    
-   **自我优化迭代**：随着使用次数的增加，它会自动优化已有的技能。实测数据显示，持续运行一段时间后，其任务处理效率可提升 40% 以上。
    
-   **模型不绑定**：它不依赖特定的大模型，兼容 OpenAI、Claude、Kimi、Ollama（本地模型）等超过 200 种主流大语言模型，你可以随时通过简单的命令自由切换。
    
-   **多端接入与运行**：支持从命令行（CLI）、Telegram、飞书、钉钉等 15 个以上的消息平台与它交互。它的运行环境也与交互入口解耦，既可以部署在本地电脑、手机（通过 Termux），也可以跑在云端服务器或 Docker 中。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->












1.  资产子托管，如何提高安全性、降低管理私钥的复杂度？将鸡蛋放进不同篮子里，即采用主账号+子账号，资产分开放；MPC结合云端备份；多签钱包。
    
2.  没有中心化机构/税收时，公共基础设施谁来维护，如果有税收又如何分配？公共基础设施的维护靠的是**“代币激励+全球节点协作”**，在 PoS（权益证明）机制下，验证者通过质押代币来参与共识、打包交易。作为回报，他们会获得网络产生的**区块奖励和 Gas 费（交易手续费）**。
    
3.  没有审查且隐私很强时，如何界定并治理有害信息/黑产？社区共同治理，形成透明公开合理的公约规则。
    
4.  去中心协作下，如何实现公平、可信的分配？**智能合约**
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->













1.  今天主要完成了配置Hermes Agent的任务，基本的链路和流程都走通了，体验了Agent在担任个人学习助手方面的应用场景，明天的计划是开始进一步使用Agent来帮忙进行学习路径的规划，记录遇到的问题。
    
2.  今天理了一下大模型相关的知识，特别是输出结果这一方面，比如在模型幻觉处理方面的解决方案除了prompt和来源引用，还可以加入schema校验，审计日志等方式。以及对LLM输出内容对判定可以根据LLM在应用的层级来设计。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














1.  比较web2的支付流程和web3的支付流程的区别，我觉得比较重要的一点是**信任**；web2信任的是**机构**，而web3信任的是 **区块链共识**和**密码学**上的设计；还有一点是**安全**，安全在web3是源于设计的核心属性，这点在开发上和我原来的web2领域有点区别，像是密钥丢失、合约漏洞等场景后续会进一步了解一下，安全这点也是后续了解web3比较感兴趣方向
    
2.  了解了钱包的一些基本概念，Web3 钱包不是保存资产的地方，是管理私钥、生成地址、签名交易和与区块链交互的工具。钱包的私钥非常重要，要尽可能保护私钥的安全。
    

今天主要还是学习了web3的知识，总体上感觉课上讲的web3知识有些了解，但现在个人梳理不了一个链的流程，后续会加快基础知识的巩固，尽快形成一个web3知识链路
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
