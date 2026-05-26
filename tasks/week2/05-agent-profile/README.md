# Week 2｜Agent Identity｜Agent Profile 与能力声明草图

## 案例：Zapier Agents 中的 Sales Lead Qualification Agent

---

## 1. 选择对象

本文选择的真实 agent 产品是 Zapier Agents，并围绕其中一个典型业务场景——Sales Lead Qualification Agent，即销售线索筛选 Agent——进行分析。

Zapier Agents 是 Zapier 推出的 AI agent 产品。官方页面将其描述为可以在几分钟内创建的 AI teammates，并且可以接入公司知识，在 9,000+ apps 中执行工作。因此，本文不是凭空设计一个不存在的 agent，而是基于 Zapier Agents 这一真实产品，选择销售线索筛选这个具体 workflow，整理一个 agent profile 草图。

销售线索筛选 Agent 的典型任务是：当潜在客户通过表单、邮件、网站、CRM 或广告活动留下信息后，Agent 自动读取线索信息，判断客户质量，补充公司背景资料，更新 CRM，并通知销售团队。

---

## 2. 为什么选择这个 Agent？

我选择 Zapier Agents 的 Sales Lead Qualification workflow，主要有三个原因。

第一，它是真实存在的 agent 产品，不是概念性案例。Zapier Agents 官方页面明确说明，用户可以创建 AI teammates，让它们基于公司知识并跨大量应用执行任务。

第二，它和营销、销售、客户管理等商业场景关系密切。相比 Devin 或 Claude Code 这类 coding agent，Zapier Agents 更适合分析 marketing workflow，因为它可以连接 CRM、表单、邮件、Slack、表格等工具。

第三，它非常适合用课程里的 identity、capability、interoperability 和 reputation 框架来分析。销售线索筛选不是单一步骤，而是一个跨工具、跨数据源、需要验证与责任边界的完整 agent workflow。

---

## 3. Agent Identity：它是谁？

### 3.1 基本身份

| 项目 | 内容 |
| ---- | ---- |
| Agent 名称 | Sales Lead Qualification Agent |
| 基础产品 | Zapier Agents |
| 维护方 | Zapier 提供平台能力；具体 Agent 由企业用户或团队配置和维护 |
| Agent 类型 | 业务流程自动化 Agent / 销售线索筛选 Agent |
| 主要领域 | Marketing、Sales、CRM、Lead Management |
| 目标用户 | 市场团队、销售团队、增长团队、创业公司、B2B 企业 |
| 运行环境 | Zapier Agents 平台，以及与其连接的业务应用 |
| 核心身份 | 一个用于自动识别、评分、整理和分发销售线索的 AI workflow agent |

### 3.2 Identity 分析

这个 Agent 的 identity 不只是一个名字。它至少包含以下几层：

- **产品身份**：它基于 Zapier Agents 这个真实平台。
- **维护身份**：Zapier 维护底层平台、集成能力和 agent 基础设施；企业用户维护具体业务规则、知识库、字段映射和执行权限。
- **业务身份**：它被设计为销售线索筛选 Agent，而不是通用聊天机器人。
- **调用身份**：它可以通过 Zapier 平台、连接应用、自动触发器或自然语言任务被调用。
- **责任身份**：它的输出应被销售或运营团队审核，尤其是在高价值客户分配、自动外发邮件或 CRM 修改等场景中。

因此，identity 解决的是"这个 agent 是谁、谁维护它、它在什么业务场景中承担什么角色"的问题。

---

## 4. Capability：它能做什么？

Sales Lead Qualification Agent 的 capability 可以拆成几个具体能力，而不是笼统地说"它能自动化销售"。

### 4.1 核心能力

| 能力类别 | 具体能力 |
| ---- | ---- |
| 线索读取 | 从表单、邮件、CRM、广告活动或表格中读取潜在客户信息 |
| 信息整理 | 提取姓名、公司、职位、邮箱、预算、需求、来源渠道等字段 |
| 线索补全 | 根据公司名称、邮箱域名或公开资料补充公司背景 |
| 线索评分 | 根据职位、公司规模、行业、预算、需求紧迫性等条件打分 |
| 优先级判断 | 将 lead 分为 high / medium / low priority |
| CRM 更新 | 将评分、状态、备注和后续动作写入 HubSpot、Salesforce 或其他 CRM |
| 团队通知 | 在 Slack、Teams 或邮件中通知销售团队 |
| 邮件草拟 | 为销售人员生成 follow-up email 草稿 |
| 人工转交 | 对信息不足或高风险线索标记为 needs human review |
| 任务记录 | 保留执行记录，便于后续检查和优化 |

Zapier Agents 的价值在于它可以跨应用执行工作，而不是只停留在对话中。官方页面强调 Agents 可以接入公司知识，并在大量 apps 中完成工作。这使它非常适合销售线索筛选这种跨工具 workflow。

### 4.2 能力边界

这个 Agent 不应该被理解为完全替代销售团队。它更适合作为销售流程中的初筛和辅助决策工具。

| 不应承担的任务 | 原因 |
| ---- | ---- |
| 独立决定重大客户策略 | 高价值客户需要人类销售判断 |
| 自动承诺价格、折扣或合同条款 | 涉及商业风险和权限问题 |
| 编造客户信息 | 会破坏 CRM 数据质量 |
| 在未经审核时自动发送高风险邮件 | 可能造成品牌或合规风险 |
| 处理敏感账户信息、私钥、token 或真实支付凭证 | 存在安全风险 |
| 代替法律、财务或合规判断 | 超出销售线索筛选 Agent 的能力边界 |

---

## 5. 输入与输出

### 5.1 输入

Sales Lead Qualification Agent 的输入可以来自多个渠道。

| 输入类型 | 示例 |
| ---- | ---- |
| 表单提交 | 网站上的 demo request、contact sales、newsletter signup |
| 邮件内容 | 潜在客户发来的询价邮件 |
| CRM 记录 | Salesforce / HubSpot 中的新 lead |
| 广告活动数据 | 来自 Google Ads、LinkedIn Ads 或 Meta Ads 的线索 |
| 表格数据 | Google Sheets / Airtable 中的新客户信息 |
| 公司知识库 | ICP 标准、销售话术、产品介绍、FAQ |
| 用户指令 | "把来自日本市场的 enterprise leads 标记为高优先级" |
| 业务规则 | 公司规模超过 500 人、预算明确、职位为 Director 以上则提高评分 |

### 5.2 输出

| 输出类型 | 示例 |
| ---- | ---- |
| Lead score | 85 / 100 |
| 优先级标签 | High priority / Medium priority / Low priority |
| CRM 更新 | 更新 lead status、owner、notes、next step |
| 销售通知 | 在 Slack 通知对应销售人员 |
| 邮件草稿 | 生成 follow-up email，但不一定自动发送 |
| 风险标记 | 信息不足、疑似垃圾线索、需要人工审核 |
| 执行记录 | 保存 agent 做了什么、基于什么信息判断 |

一个典型输出可以是：

```json
{
  "lead_name": "Tanaka Yuki",
  "company": "Example Retail Japan",
  "priority": "High",
  "score": 87,
  "reason": [
    "Company appears to match B2B target segment",
    "Lead requested a product demo",
    "Job title indicates decision-making influence"
  ],
  "next_action": "Notify sales team and draft follow-up email",
  "human_review_required": true
}
```

---

## 6. 协作对象

这个 Agent 的 interoperability 非常重要。它需要和多个系统协作，而不是单独完成任务。

| 协作对象 | 协作目的 |
| ---- | ---- |
| 人类销售人员 | 审核高价值线索、决定是否跟进、修改邮件内容 |
| 市场团队 | 提供 campaign 信息、ICP 标准、线索来源解释 |
| CRM 系统 | 读取和更新客户记录 |
| 表单工具 | 接收网站或活动页提交的 lead |
| 邮件工具 | 读取询价邮件、生成 follow-up 草稿 |
| Slack / Teams | 通知销售团队或负责人 |
| Google Sheets / Airtable | 保存或同步线索数据 |
| 公司知识库 | 提供产品资料、FAQ、目标客户画像 |
| 数据 enrichment 工具 | 补充公司规模、行业、地区等信息 |
| 审计 / 日志系统 | 记录 Agent 的执行过程和修改行为 |

因为 Zapier Agents 的优势是跨应用执行任务，所以这个案例的重点不是"Agent 会不会聊天"，而是它如何在多个工具之间移动信息、执行动作和留下记录。Zapier 官方页面也强调 Agents 能够在 9,000+ apps 中工作。

---

## 7. 如何被调用？

### 7.1 手动调用

销售或市场人员可以在 Zapier Agents 中直接输入任务，例如：

> Please review new leads from this week, score them based on our ICP, update HubSpot, and notify the sales team about high-priority leads.

### 7.2 自动触发

当某个应用中出现新事件时，Agent 可以自动执行任务。例如：

| 触发条件 | Agent 动作 |
| ---- | ---- |
| Typeform 收到新表单 | 读取信息并评分 |
| HubSpot 新增 lead | 判断优先级并补充备注 |
| Gmail 收到询价邮件 | 提取客户需求并创建 CRM 记录 |
| Google Sheets 新增一行 | 检查字段完整性并通知销售 |
| Slack 中被销售人员 tag | 查询某条 lead 的状态并总结 |

### 7.3 与其他 workflow 连接

它还可以作为更大销售自动化流程中的一个节点。例如：

> New lead submitted → Sales Lead Qualification Agent scores lead → CRM updated → Slack notification sent → Follow-up email drafted → Salesperson reviews and sends

---

## 8. 如何收费？

Zapier Agents 的使用依赖 Zapier 平台和其定价体系，具体费用以 Zapier 官方定价或企业合同为准。Zapier Agents 官方页面提供"Get started free""View pricing"等入口，说明其属于 Zapier 的产品化服务。对企业用户来说，费用通常由平台订阅、功能权限、自动化任务执行量、连接应用数量或团队使用规模等因素共同决定。

在 Sales Lead Qualification Agent 这个具体案例中，可能涉及以下成本：

| 成本类型 | 说明 |
| ---- | ---- |
| Zapier 平台费用 | 使用 Zapier Agents 和相关自动化能力 |
| 连接应用费用 | CRM、邮件、表单、数据工具本身可能收费 |
| 数据补全费用 | 如果调用付费 company enrichment API，可能按次计费 |
| 人工审核成本 | 高价值 lead 仍需要销售团队审核 |
| 企业治理成本 | 权限、审计、安全和团队管理 |

如果未来接入机器支付协议，Agent 还可以在调用付费 API 或数据源时自动完成小额支付。

---

## 9. 如何被验证？

Sales Lead Qualification Agent 的输出不能只凭"看起来合理"来判断。它应该通过业务结果、数据质量和人工审核进行验证。

### 9.1 验证方式

| 验证对象 | 验证方式 |
| ---- | ---- |
| Lead 信息是否准确 | 检查 Agent 提取的姓名、公司、职位、邮箱是否正确 |
| 评分是否合理 | 对照公司 ICP 和历史成交客户特征 |
| CRM 更新是否正确 | 检查字段映射、owner 分配、状态更新 |
| 通知是否发送给正确对象 | 检查 Slack / Teams 通知频道和负责人 |
| 邮件草稿是否合适 | 由销售人员审核语气、内容和承诺 |
| 是否遗漏高价值客户 | 定期抽查低分 lead，防止误判 |
| 是否误判垃圾线索 | 检查高分 lead 中的无效客户比例 |
| 是否遵守权限边界 | 检查 Agent 是否越权读取或修改数据 |
| 业务效果 | 比较转化率、响应速度、销售跟进效率 |

### 9.2 Reputation 信号

这个 Agent 的 reputation 不应该来自头像、名字或简单介绍，而应该来自长期运行记录。

| Reputation 信号 | 说明 |
| ---- | ---- |
| 线索评分准确率 | 高分 lead 最终转化率是否更高 |
| 人工修改率 | 销售人员需要改多少 Agent 判断 |
| CRM 错误率 | 字段写错、重复记录、分配错误的比例 |
| 响应速度 | 从 lead 进入到通知销售的时间 |
| 成交贡献 | Agent 筛选出的高优先级 lead 是否带来收入 |
| 投诉或误触发次数 | 是否错误发送通知或草拟不合适邮件 |
| 审计通过率 | 是否符合公司权限和数据治理规则 |

---

## 10. 失败点与失败处理

### 10.1 可能失败点

| 失败点 | 具体表现 |
| ---- | ---- |
| 输入信息不完整 | 表单只留下邮箱，没有公司、职位或需求 |
| 字段映射错误 | 把预算写进职位字段，或把 lead owner 分配错 |
| 线索误判 | 把低价值客户标成 high priority，或漏掉重要客户 |
| 数据来源过时 | 公司规模、行业、联系人职位已经变化 |
| CRM 权限不足 | Agent 无法读取或更新某些字段 |
| 重复记录 | 同一客户被创建多次 |
| 自动通知过度 | Slack 频道被大量低质量通知打扰 |
| 邮件内容不当 | 草稿语气不合适，或承诺了不存在的服务 |
| 隐私风险 | 处理了不应被自动处理的个人或客户信息 |
| 外部工具失败 | CRM、邮件、表单或 enrichment API 暂时不可用 |

### 10.2 失败处理方式

| 失败类型 | 处理方式 |
| ---- | ---- |
| 信息不足 | 标记为 needs more information，而不是强行评分 |
| 低置信度判断 | 输出 confidence: low，并要求人工审核 |
| CRM 写入失败 | 保留错误日志，通知管理员或销售运营人员 |
| 字段冲突 | 不覆盖原始数据，创建备注等待人工确认 |
| 高价值客户 | 默认 human-in-the-loop，不直接自动处理完 |
| 邮件外发 | 默认生成草稿，由销售人员确认后发送 |
| 数据源不可用 | 返回部分结果，说明哪些信息没有获取到 |
| 重复 lead | 先查询 CRM 中是否已有相同邮箱或公司 |
| 严重错误 | 暂停自动执行，进入人工排查和流程修正 |

---

## 11. Agent Profile 草图

```yaml
agent_profile:
  name: Sales Lead Qualification Agent
  base_product: Zapier Agents
  real_world_status: Existing agent product / configurable workflow
  maintainer:
    platform_provider: Zapier
    workflow_owner: Sales or marketing operations team
    responsibility:
      - Zapier maintains the platform and app integrations
      - The business team maintains lead scoring rules, CRM fields, permissions, and knowledge sources

  identity:
    type: Business workflow automation agent
    domain: Sales, marketing, CRM, lead management
    description: >
      A sales lead qualification agent built with Zapier Agents.
      It reads incoming leads, enriches lead information, scores lead quality,
      updates CRM records, notifies sales teams, and drafts follow-up messages.
    target_users:
      - marketing teams
      - sales teams
      - growth teams
      - B2B companies
      - startups

  capabilities:
    - read_new_leads_from_forms_emails_crm_or_sheets
    - extract_contact_company_and_intent_information
    - enrich_company_or_contact_context
    - score_leads_against_icp_rules
    - classify_leads_as_high_medium_or_low_priority
    - update_crm_records
    - notify_sales_team_in_slack_or_teams
    - draft_follow_up_email
    - flag_uncertain_cases_for_human_review
    - keep_task_execution_logs

  limitations:
    - cannot guarantee that lead scoring is always correct
    - should not automatically promise pricing discounts or contract terms
    - should not replace human sales judgment for strategic accounts
    - should not process secrets, private keys, tokens, or sensitive payment credentials
    - should not send high-risk external communications without review

  inputs:
    required:
      - lead_source
      - contact_information
      - company_or_email_domain
      - qualification_rules_or_icp
    optional:
      - campaign_source
      - budget
      - company_size
      - job_title
      - region
      - product_interest
      - previous_crm_history
      - company_knowledge_base

  outputs:
    - lead_score
    - priority_label
    - crm_update
    - sales_notification
    - follow_up_email_draft
    - qualification_reasoning
    - confidence_level
    - human_review_flag
    - execution_log

  invocation:
    manual:
      - user asks the agent to review and qualify a batch of leads
    trigger_based:
      - new_form_submission
      - new_crm_lead_created
      - new_email_received
      - new_google_sheets_row
      - sales_team_mentions_agent_in_chat
    workflow_example: >
      New lead submitted -> Agent reads and scores lead -> Agent updates CRM ->
      Agent notifies sales team -> Agent drafts follow-up email -> Human reviews

  pricing:
    model: platform_subscription_or_usage_based
    note: >
      Pricing depends on Zapier's product plan, connected applications,
      task volume, and enterprise requirements. Exact pricing should follow
      Zapier's official pricing page or enterprise agreement.
    possible_additional_costs:
      - CRM subscription
      - data enrichment API usage
      - email or communication tool usage
      - human review cost

  verification:
    methods:
      - check lead field extraction accuracy
      - compare scoring with ICP criteria
      - audit CRM updates
      - review email drafts before sending
      - track conversion rate of high-priority leads
      - monitor false positive and false negative lead classifications
      - inspect task execution logs
      - conduct periodic human review
    reputation_signals:
      - lead_scoring_accuracy
      - crm_error_rate
      - human_override_rate
      - response_speed
      - conversion_rate_of_agent_qualified_leads
      - audit_pass_rate

  failure_handling:
    missing_information: mark_as_needs_more_information
    low_confidence: require_human_review
    crm_write_error: log_error_and_notify_admin
    duplicate_lead: check_existing_records_before_creation
    external_tool_failure: return_partial_result_and_explain_failed_step
    risky_email: save_as_draft_instead_of_sending
    severe_error: pause_automation_and_escalate_to_workflow_owner

  security_and_governance:
    permission_scope:
      - read_only_access_where_possible
      - limited_write_access_to_selected_crm_fields
      - human_approval_for_external_messages
    forbidden_data:
      - private_keys
      - seed_phrases
      - api_keys
      - tokens
      - real_payment_credentials
      - unauthorized confidential customer data
```

---

## 12. 加分部分：MCP vs MPP

### 12.1 MCP：解决 Agent 如何连接工具和外部系统

MCP，即 Model Context Protocol，是一个开放标准，用于连接 AI applications 和 external systems。官方文档说明，MCP 可以让 AI applications 连接数据源、工具和 workflow，例如本地文件、数据库、搜索引擎、计算器或其他工作流。

放到 Sales Lead Qualification Agent 中，MCP 主要解决的是：Agent 如何安全、标准化地访问 CRM、表格、邮件、数据库、公司知识库和外部工具。

| 场景 | MCP 的作用 |
| ---- | ---- |
| 读取 CRM 中的新 lead | 提供标准化工具接口 |
| 查询公司知识库 | 让 Agent 获取 ICP、产品资料、FAQ |
| 调用邮件工具 | 读取邮件或生成草稿 |
| 查询数据表 | 获取 lead 来源、campaign 信息 |
| 调用 enrichment API | 补充公司背景信息 |

MCP 适合解决的是 **agent-tool / agent-data interface** 问题。它关注的是：Agent 如何发现工具、如何调用工具、如何获取上下文、如何把外部系统纳入工作流、如何降低每个 AI 应用单独适配每个工具的成本。

### 12.2 MPP：解决 Agent 如何付款

MPP，即 Machine Payments Protocol，是面向机器对机器支付的开放标准。MPP 官方文档将其定义为通过 HTTP 402 实现 machine-to-machine payments 的开放标准。Stripe 也说明，MPP 是一种 internet-native way for agents to pay，可以让 businesses 接受 agents 的付款。

放到 Sales Lead Qualification Agent 中，MPP 主要解决的是：当 Agent 需要调用付费 API、购买数据、访问付费服务或完成小额结算时，如何自动付款。

| 场景 | MPP 的作用 |
| ---- | ---- |
| 调用付费 company enrichment API | Agent 自动为每次查询付款 |
| 购买某个企业数据库的单次访问 | Agent 通过机器支付完成授权 |
| 调用高级邮件验证服务 | 按次支付验证费用 |
| Agent 之间有偿协作 | 一个 Agent 支付另一个 Agent 完成子任务 |
| 使用付费报告摘要服务 | Agent 为内容访问付款 |

MPP 适合解决的是 **agent payment / machine payment** 问题。它关注的是：Agent 如何代表用户或企业支付、服务端如何向 Agent 收款、如何处理小额高频自动化的机器支付、如何让 agent economy 中的服务调用不依赖人工手动付款。

### 12.3 MCP 与 MPP 的区别

| 比较维度 | MCP | MPP |
| ---- | ---- | ---- |
| 核心问题 | Agent 如何连接工具、数据和外部系统 | Agent 如何为服务、API 或数据付款 |
| 所在层级 | 接口层 / 上下文层 / 工具调用层 | 支付层 / 经济结算层 |
| 典型对象 | CRM、数据库、文件、搜索工具、工作流 | 付费 API、数据服务、内容访问、agent 服务 |
| 在本案例中的作用 | 让 Sales Lead Agent 读取和更新业务系统 | 让 Sales Lead Agent 为付费数据补全服务付款 |
| 是否解决身份信誉 | 不是核心目标 | 不是核心目标 |
| 是否解决 agent-agent 协作 | 不是核心目标 | 只解决其中的付款部分 |
| 关键词 | tool connection, context, workflow | payment, HTTP 402, machine-to-machine transaction |

一句话总结：**MCP 解决"Agent 怎么接工具"，MPP 解决"Agent 怎么付钱"。**

在 Sales Lead Qualification Agent 中，MCP 可以帮助 Agent 连接 CRM、邮件、表格和知识库；MPP 可以帮助 Agent 在需要付费查询公司资料或调用高级 API 时完成自动支付。两者不是竞争关系，而是位于不同层级，可以共同组成更完整的 agent workflow。

---

## 13. 结论

本文选择 Zapier Agents 中的 Sales Lead Qualification workflow 作为案例，分析了一个真实业务型 Agent 的 identity、capability、输入输出、协作对象、调用方式、收费方式、验证机制和失败处理。

这个案例说明，Agent 不只是"会聊天的 AI"，而是一个需要被清楚描述、被安全调用、被持续验证、并能嵌入真实业务流程的协作单元。

一个完整的 Agent Profile 至少应该回答以下问题：

- **Identity**：它是谁？由谁维护？属于什么业务场景？
- **Capability**：它能做什么？不能做什么？
- **Input / Output**：它接收什么输入？产生什么输出？
- **Interoperability**：它和哪些工具、系统或人协作？
- **Pricing**：它如何收费？是否涉及平台订阅或付费 API？
- **Verification**：它的输出如何被检查？
- **Reputation**：别人为什么可以信任它？
- **Failure Handling**：它失败时如何说明、修正和升级处理？

在这个案例中，Zapier Agents 提供了真实的 agent 平台基础，Sales Lead Qualification workflow 则提供了具体业务场景。MCP 和 MPP 的比较进一步说明，不同协议解决的是 agent 系统中的不同问题：MCP 更偏工具连接和上下文交换，MPP 更偏机器支付和 agent 经济活动。

因此，真正有价值的 Agent Profile 不是给 Agent 起一个名字，而是把身份、能力、调用、验证、协作、支付和失败处理连接成一个完整链路。
