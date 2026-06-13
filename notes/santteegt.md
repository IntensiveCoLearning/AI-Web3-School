---
timezone: UTC+8
---

# Santiago Gonzalez Toral

**GitHub ID:** santteegt

**Telegram:** @santteegt

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-13
<!-- DAILY_CHECKIN_2026-06-13_START -->
Spent the day exploring other LLM providers options: a) Tested Venice.ai limit quota by staking VVV tokens. Free monthly credits are now enough for using frontier open-source models. b) Explored different models using OpenRouter to check token budget expenditure.  
  
Finally setup my Hermes instance with three providers: GLM (main), [Venice.ai](http://Venice.ai) and OpenRouter as fallback using Minimax M3 preview model as it is currently on discount.  
  
Going to explore mixing ClaudeCode for ful task decomposition per-feature, and then run local models like Gemma in Ollama to implement opened issues using the planning made by a frontier model
<!-- DAILY_CHECKIN_2026-06-13_END -->

# 2026-06-12
<!-- DAILY_CHECKIN_2026-06-12_START -->

**What I did today:**

Final build day for GuildOS. Merged submitted PRs and implemented a PoC that integrates Cobo Agentic Wallet with moloch-agent — validating that a CAW-controlled wallet can participate in a Moloch v3 DAO as a first-class economic actor (fund commit, proposal, vote, settle). We hit quota limits on both ClaudeCode and the [Z.AI](http://Z.AI) plan mid-day, which blocked completing the full E2E loop and recording the demo before the submission deadline. The project won’t be submitted as a finished hackathon entry, but the core architecture and integrations are real, tested, and documented.

**What I learned:**

The CAW + moloch-agent PoC made something click: the same trust boundary design that governs on-chain spending (CAW Pacts) maps cleanly to every other agent permission layer — GitHub tokens, API scopes, A2A message types. Least-privilege isn’t a Web3 concept or an AI concept; it’s the right model for agents in any environment. This cohort gave me the full picture of how these layers connect: from LLM prompting all the way to on-chain settlement, with A2A as the coordination layer in between.

**Blockers / questions:**

Quota exhaustion on ClaudeCode and [Z.AI](http://Z.AI) plans was the final blocker. No technical or architectural dead-ends — the integrations validated across Days 8–11 all held. Will continue building toward a complete demo post-cohort.
<!-- DAILY_CHECKIN_2026-06-12_END -->

# 2026-06-11
<!-- DAILY_CHECKIN_2026-06-11_START -->


**What I did today:**

Day 10 build kickoff for GuildOS. Organized the full sprint into individual GitHub issues grouped by vertical (Web3 infrastructure vs. agentic coordination), assigned to milestones. Set up g0n3zbot — a coding sub-agent running inside Hermes — with its own GitHub account and minimal-scoped tokens (repo write + PR submission). Assigned all Day 10 base infrastructure tasks to g0n3zbot. Coding started on three parallel tracks: (1) guild formation and membership proposal module, (2) Orchestrator MCP server with 7 tool stubs, (3) A2A full coordination layer (invite → quote → send → deliver → accept).

**What I learned:**

Setting up a GitHub agent with minimal-scoped tokens is a direct application of the principle behind CAW Pacts — agents should operate under least-privilege constraints, not full credentials. The same pattern applies whether the boundary is on-chain (spending ceiling) or off-chain (repo scope). Organizing issues by vertical also made it immediately clear which components require human sign-off vs. which can be fully delegated to g0n3zbot.

**Blockers / questions:**

None blocking — Day 10 coding is in flight. Will confirm g0n3zbot’s first PR lands correctly before end of day.
<!-- DAILY_CHECKIN_2026-06-11_END -->

# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->



**What I did today:**

Completed all integration validation for the GuildOS hackathon build. AgentFightClub full flow is working — `experiments/agent-fight-club/moloch_agent_test.py` executes the complete sequence (launch → commit → propose → vote → settle); the proposal sponsorship timing issue from Day 8 is resolved. A2A coordination loop validated — all 5 message gates passing (agent card, send, quote, deliver, accept) with no schema issues. Reviewed [Z.AI](http://Z.AI) track alignment, deployed a Hermes agent instance as the Specialist, and built + locked a long-horizon task prompt for the demo. All three critical integration stacks are now confirmed. Project development starts tomorrow (Day 10).

**What I learned:**

Hermes is a self-evolving, agent-first framework with a ReAct-style synchronous core loop, three-tier memory system (in-prompt snapshot, FTS5 session search, external providers), and runtime skill learning via GEPA. The “agent improves the longer you use it” model comes from its skill curator garbage-collecting idle agent-authored skills while pinning critical ones. For GuildOS, Hermes as the Specialist stack is well-suited: it has persistent memory across task sessions and a hard 90-turn cap that prevents infinite loops — both critical properties for a long-horizon execution agent. Financial harnesses (CAW Pacts / mandate-as-sandbox) validate spend _before settlement_ — the spending validation layers (rules → intent matching → model evaluation) map directly to the GuildOS Gate 2 pre-check sequence.

**Blockers / questions:**

None — all integrations cleared. Day 10 opens with ERC-8004 agent registration and guild formation before the A2A execution flow begins. Need to pre-fund agent wallets with Base mainnet ETH before starting.
<!-- DAILY_CHECKIN_2026-06-10_END -->

# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->




**What I did today:**

Kicked off Week 4 hackathon sprint (Day 8 — Validation Day). Fixed the Cobo CAW wallet issue: TSS local node restart resolved the signing failure; full x402 payment pipeline is now working end-to-end with CAW as the primary agent wallet. Validated AgentFightClub integration — probe script (`experiments/agent-fight-club/moloch_agent_test.py`) is live and functional; proposal sponsorship timing issue identified and will be fixed tomorrow. Critical discovery: AFC moloch-agent only runs on Base mainnet (no Base Sepolia contracts, no subgraph) — switched all on-chain operations from Base Sepolia to Base mainnet (chain\_id 8453). A2A and GLM-5.1 testing deferred to tomorrow morning.

**What I learned:**

CAW’s TSS node is a local signing service — if it goes down, a simple restart recovers it. The failure mode is operational (node crash), not architectural (API is solid). AgentFightClub/Moloch v3 is tightly coupled to Base mainnet deployment — the subgraph indexer and ClawBank service both depend on specific contract addresses that only exist on mainnet. This has a key implication: demo transactions cost real ETH (small amounts, but must pre-fund wallets before building tomorrow). ERC-4337 session keys (ZeroDev) are now a design exhibit rather than a demo dependency — CAW Pacts give the same spending-ceiling guarantee with less complexity.

**Blockers / questions:**

AFC proposal sponsorship timing issue — the `moloch_agent_test.py` probe hits a timing constraint that blocks certain proposal actions. Fixing tomorrow. Need to pre-fund agent wallets with Base mainnet ETH before Day 9 build starts.
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->





**What I did today:**

Completed all Week 3 deliverables: 14 WCB tasks submitted (~350 pts) including 6 Must Submit, 3 Sponsor Workshop, 3 Bonus. Updated GuildOS Project Proposal to v1.2 — added full A2A commerce protocol (5 message types, 7 stages), ERC-8004 6-field on-chain reputation write via `recordDelivery()`, 4 human confirmation gates, hybrid harness architecture, finalized tech stack (Cobo CAW, Base Sepolia, GLM-5.1, A2A SDK v1.0.0). Wrote 395-line Week 3 PoW covering 8 pre-research component analyses and a complete Week 4 ready pack. Set up guild-os repo skeleton with full directory structure and docs. Submitted Casual Hackathon registration.

**What I learned:**

Harness independence via A2A as coordination bus enables heterogeneous agent stacks to collaborate without coupling implementation choices. Session keys separate “what can be automated” from “what requires human confirmation” — the core design principle for safe agent wallets. ERC-8004’s caller constraint on `giveFeedback()` (caller cannot be the agent’s own wallet) is a non-obvious gotcha requiring guild contract or human EOA as the tx signer.
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->






**What I did today:**

Completed the x402 × Cobo Agentic Wallet payment loop prototype (`experiments/caw-payment-loop/`). The full loop runs end-to-end on Base Sepolia: agent gets a 402 challenge from the stub server, decodes the `PAYMENT-REQUIRED` header, signs an EIP-712 `TransferWithAuthorization` (EIP-3009), retries with the `PAYMENT-SIGNATURE` header, and receives a 200 with an audit log entry and on-chain tx hash via the [x402.org](http://x402.org) facilitator. CAW Pact constraints are enforced (per-call ceiling $0.01, rolling 24h budget $0.10, 1-hour auto-revoke). Risk boundaries are documented. Currently running with a local signer workaround because `X402_INSUFFICIENT_BALANCE` turned out to be a Cobo node indexing outage on Base Sepolia — not a balance API bug. Restore to the production CAW path (`txApi.payment()`) is documented and ready to flip once Cobo confirms infrastructure recovery. Also reviewed Verifiable Compute and MCP permission model concepts, and catalogued all 19 WCB tasks due tomorrow into today’s daily note.

**What I learned:**

-   The `X402_INSUFFICIENT_BALANCE / available: "0"` Cobo error is a node indexing issue, not a balance bug. Workaround: bypass the CAW signing path with a local viem signer — the rest of the x402 flow is identical.
    
-   Pact-scoped API keys are a clean permission boundary: once a human approves a pact, the agent uses only the pact key (scoped to destination address, amount ceiling, and time window) — never the owner key. Maps directly to GuildOS’s controllable-agent requirement for the Cobo track.
    
-   For Proof of Inference, the right proof mechanism depends on the goal, not model size: signed logs for service accountability, TEE for binary+model verification, ZK for minimal third-party trust.
    

**Blockers / questions:**

1.  **Cobo node indexing outage (Base Sepolia):** Root cause identified — `X402_INSUFFICIENT_BALANCE` is a Cobo infra issue. Local signer bypass active. Awaiting Cobo recovery to restore production CAW path (steps documented in `DEMO.md` Section 8).
    
2.  **AgentFightClub API stability:** Not yet tested — Week 4 Day 1 priority (June 8).
    
3.  **19 WCB tasks due June 7:** Must Submit + time-gated items (13:00 UTC) are highest priority for tomorrow.
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->







**What I did today:**

Tough day — limited new progress. Continued with the A2A protocol deep-dive (agent discovery, task exchange, and how A2A complements agent identity). Reviewed the five-layer Agent Context framework (Instruction → Task → Fact → Knowledge → Memory). Spent time on GuildOS blocker resolution: received a response from the Cobo team confirming the USDC token mapping issue on Base Sepolia (`token_not_mapped`) is now fixed on their end. However, a new error immediately surfaced: `X402_INSUFFICIENT_BALANCE` despite the wallet holding sufficient funds — likely a Cobo balance API bug. Opened a follow-up with the team.

**What I learned:**

-   A2A’s collaboration layer handles agent discovery and task delegation — maps directly to the Orchestrator → Specialist handoff in GuildOS Steps 3–5.
    
-   The five-layer Agent Context framework is a useful mental model for designing what an agent should know at each step: live on-chain facts (Fact layer) must refresh from external systems, while coordination rules live in the Instruction layer.
    
-   Agent planning checklist (tools, read/write classification, high-risk policy gates, completion verification) is essential for Web3 workflows where on-chain actions are irreversible.
    

**Blockers / questions:**

1.  `X402_INSUFFICIENT_BALANCE` **(Cobo CAW):** USDC token mapping fixed but balance API returning incorrect result — in contact with Cobo team. Fallback: test ETH/WETH as payment token for the demo loop.
    
2.  **AgentFightClub API stability:** Not yet tested against live API — highest priority for Week 4 Day 1 (June 7).
    
3.  **Wallet architecture decision:** Cobo CAW Skill-based (self-owned) vs. human-paired — still pending, must be resolved before hackathon start.
<!-- DAILY_CHECKIN_2026-06-06_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->








**What I did today:**

Continued GuildOS hackathon preparation with a focus on Cobo Agentic Wallet architecture and AI security concepts. Researched the Cobo Agentkit Wallet integration paths in depth — reviewed the Skill-based wallet creation flow, the MCP server option, and the Pact policies and completion conditions reference. Drafted a frontier research prompt for the AgentFightClub tech stack component (`prompts/AGENTFIGHTCLUB_RESEARCH.md`) and a reusable research prompt template (`prompts/FRONTIER_RESEARCH_TEMPLATE.md`) for the remaining GuildOS components (A2A, ERC-8004, GLM-5.1, Cobo CAW). Continued reviewing OWASP AI security material on Excessive Agency and its root causes and mitigations. Read about context window strategies (retrieval, summarization, structured data) and dispute resolution design for escrow/settlement in AI × Web3 scenarios.

**What I learned:**

Four things stood out today. First, on Cobo Agentkit: there’s a meaningful architectural difference between an agent using the Skill to self-create a wallet (agent becomes owner with no restrictions) vs. pairing the agent with an existing Cobo wallet (human retains controller role) — this distinction directly maps to GuildOS’s human-in-loop gate design. Second, Excessive Agency as an OWASP vulnerability class is broader than prompt injection: it includes hallucination-triggered actions and over-permissioned tools, with mitigations that map cleanly to GuildOS’s scoped wallet and governance gate design (minimize extensions, require approval, complete mediation). Third, hallucination in AI × Web3 contexts isn’t a prompt problem alone — it requires external verification at every output boundary (schema validation, rule checks, human confirmation, audit logs), especially for on-chain data. Fourth, dispute resolution design requires upfront answers to: who initiates, what it costs, what counts as evidence, and how adjudication works — these become reputation signals in A2A markets and are currently mocked in the GuildOS MVP.

**Blockers / questions:**

1.  **Cobo wallet architecture decision:** The Skill-based self-owned wallet vs. human-paired wallet tradeoff affects GuildOS’s demo story (agent autonomy vs. controllability). Need to decide before Day 1 of the hackathon which model better serves the Cobo track’s “controllable” evaluation criterion.
    
2.  **Dispute resolution scope:** The GuildOS MVP mocks dispute handling (deliverable rejected → manual path). For the hackathon, is a mock sufficient or do judges expect a defined dispute path (even if not implemented)?
    
3.  **AgentFightClub API** — still not directly tested. The research prompt is ready; testing is the next concrete step.
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->









**What I did today:**

Read AI Coding and AI Security handbook chapters and noted the key principles around agent role boundaries and untrusted-context safety. Built a working x402 + Cobo Agentkit Wallet payment loop prototype (`experiments/caw-payment-loop`) — hit a concrete Cobo testnet blocker in the process (see below). Finalized Week 2 repo housekeeping: updated `AGENTS.md` with a full generated-resources index (Section 15), added README index files to `tasks/`, `submissions/`, `prompts/`, and `experiments/`, and wrote the `hackathon/PROTOTYPING_RESOURCES.md` annotated resource list for the hackathon build week. Updated the main repo README with a Direction & Hackathon section summarizing direction choices, rationale, GuildOS project status, and relevant document links. Turned the direction analysis into a one-page proposal memo (`tasks/directions/DIRECTION_MEMO.md`) for team formation and mentor/sponsor discussions, including a solo-human + two-agent fallback plan that mirrors the GuildOS coordination model.

**What I learned:**

Two things stood out from the AI Coding and AI Security reading. In AI Coding, the key discipline is that agents own generation, modification, search, and routine engineering actions while humans own direction, constraints, and acceptance criteria — AI coding paired with rigor means enforcing the full workflow (issue → branch → commit → test → review → merge), not coding by feeling. In AI Security, the critical distinction is that untrusted external data injected into context must never be able to bypass core safety constraints, regardless of how the system instructions are written — the boundary is architectural, not just instructional. The Cobo testnet experiment surfaced a practical gap: USDC is not mapped on Base Sepolia in Cobo’s registry, which blocks the x402 payment flow at the token-lookup stage before any balance or signing logic is reached.

**Blockers / questions:**

1.  **Cobo CAW — USDC not mapped on Base Sepolia:** `token_not_mapped` error for `0x036CbD53842c5426634e7929541eC2318f3dCF7e` (Circle USDC) on chain `TBASE_SETH` (eip155:84532). The chain is in `supported_x402_chains` but the token is missing from the registry. This is a Cobo-side fix. Need to confirm: is ETH/WETH a viable substitute for the hackathon demo payment loop, or should I switch to a different testnet?
    
2.  **Cobo CAW vs. Wiretap wallet decision:** The x402 testnet blocker makes this more urgent — if Cobo doesn’t resolve USDC mapping before hackathon week, the payment demonstration needs a different token or a different wallet provider.
    
3.  **AgentFightClub API stability:** Not yet tested directly — still a blocker for Week 4 Day 1.
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->










**What I did today:**

Completed the Week 2 Direction Deep-Dive Pack and Initial Project Proposal deliverables. This included: updating the learning repo’s [AGENTS.md](http://AGENTS.md) with a full index of generated resources for future agent sessions (Section 15); creating README index files for the `tasks/`, `submissions/`, `prompts/`, and `experiments/` subdirectories; drafting the `hackathon/PROTOTYPING_RESOURCES.md` document with 8 annotated resources (AgentFightClub/Moloch v3, ERC-8004, A2A Protocol, GLM-5.1, Cobo Agentkit, Base/Basescan, EAS, Snapshot) mapped to the GuildOS MVP; and writing the Week 2 Proof-of-Work pack covering the problem space map, direction selection rationale, workflow breakdown, initial GuildOS proposal, and direction backlog. Outside of the Cowork session: read OpenAI’s multi-layered prompt injection defense article and completed the Cobo Agentic Wallet developer onboarding + testnet faucet setup.

**What I learned:**

Two things from today’s review conversation stood out. First, the four core evaluation dimensions (AI role, Web3 mechanism, verification method, risk boundaries) are well-covered in the analysis documents generated over Week 2, but verification method and risk-per-direction are underrepresented in the wiki knowledge base itself — the wiki is strong on definitions but doesn’t systematically surface failure modes. Second, working through the GuildOS prototyping resources document made the wallet architecture decision (Cobo CAW vs. Wiretap) feel more urgent — it has downstream effects on both the primary hackathon track claim and the on-chain signing flow for both agents, and needs to be resolved before Day 1 of the hackathon.

**Blockers / questions:**

1.  AgentFightClub API stability — need to validate the fallback path (DAOhaus SDK + direct Moloch v3 on Base Sepolia) before the hackathon build week starts.
    
2.  ERC-8004 write access — unclear whether the reputation write-back after deliverable acceptance is a registry API call or a direct `eth_sendTransaction`. Need to confirm before designing the settlement flow.
    
3.  Cobo CAW vs. Wiretap wallet decision — must be finalized before Day 1 as it determines the primary track claim and the transaction signing architecture.
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->











**What I did today:** Wrapped up Week 2 by completing the GuildOS project proposal — a programmable agent coordination studio using A2A, AgentFightClub (Moloch treasury), and ERC-8004 on-chain reputation. Also reviewed key Handbook concepts around Prompt Design and On-chain Data handling as context for the proposal.

**What I learned:**

-   Prompts are executable communication protocols, not just instructions — they need task goals, input boundaries, prohibited behaviors, and output format to be reliable
    
-   High-risk actions can’t rely on prompt interception alone; they need code-layer verification as a second guard
    
-   On-chain data requires full context (chain ID, block number, contract address, method, return value, read time) to prevent models from confusing data across chains and timestamps
    

**Blockers / questions:** None blocking. Week 3 starts tomorrow — plan is to finish any remaining Week 2 task deliverables, do another review pass on the proposal, then dive into Week 3 material.
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->












**What I did today:** Completed the final Week 2 deliverables sprint. Enriched the AI × Web3 problem space map with real-user profiles, best learning form judgments, verification methods, and risk boundaries for all 6 directions — grounded in the Agentic Commerce workflow’s 3-layer verification chain. Applied the Direction Evaluation Matrix (5 criteria) formally to the main and secondary tracks in the direction selection document: both pass all five criteria. Generated 5 direction analysis documents (deep dives for Identity/Capability and Governance; overviews for Payment, Wallet, and Privacy) each with Mermaid flowcharts, typical scenarios, counterexamples, key risks, and minimal validation plans. Generated 5 direction task deliverables working through each aim concretely. Rebuilt the Identity/Capability task file using a real ERC-8004-registered agent (DataAnalyst Pro, Base mainnet token 22300) — analysed its live MCP manifest, A2A agent card, on-chain registration JSON, and 8004scan compliance report; documented 8 gaps for the profile.

**What I learned:** The Direction Evaluation Matrix forced clarity on why Identity/Capability passes all five criteria structurally and not just intuitively: the problem predates hot projects (structural demand ✓), the demo is a read-only registry query + LLM matching (verifiability ✓), the prototype needs only existing ERC-8004 infrastructure (minimal entry ✓), no keys or funds at the initial layer (risk boundaries ✓), and the build feeds directly into the Week 3 proposal and hackathon (follow-through ✓). Analysing a real ERC-8004 agent revealed what the standards look like in production: owner and agent wallet are the same address on DataAnalyst Pro — a common shortcut that creates a security gap where owner key compromise equals agent key compromise. Most production agents on 8004scan score metadata completeness around 77–85%, indicating the ecosystem is still maturing on the profile completeness front.
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->













**What I did today:** Light study day — spent the time on ambient research rather than structured handbook reading. Listened to podcasts on recent AI agent developments and frontier model news to gather inspiration and directional signal for the hackathon project. This is part of the ideation phase: scanning what’s being built in the space, what problems practitioners are actually hitting, and where the gaps are that my chosen track (Identity / Reputation / Capability / Interoperability) might address.
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->














**What I did today:** Ran 3 spaced-repetition quizzes — MCP Permission Model, AI Oracle, and Direction Evaluation Matrix — reinforcing the tool interface layer, oracle risk-layering patterns, and the five-criteria framework (Structural Demand, Verifiability, Minimal Entry Point, Risk Boundaries, Follow-Through) for evaluating AI × Web3 directions. Watched the Neo-Cypherpunk & Privacy session recording (neo-cypherpunk framing: privacy as collective defense, not individual retreat; key actions: personal privacy stack + Ethereum Cypherpunk Manifesto). Built the AI × Web3 Problem Space Map as an HTML infographic and markdown summary covering all 6 foundational directions with AI role, Web3 mechanism, and why-both-required breakdown for each. Used this output to complete the direction selection analysis and formally chose **Identity / Reputation / Capability / Interoperability** as the main track and **Governance / Coordination** as the secondary.

**What I learned:** From the Direction Evaluation Matrix quiz: the five criteria function as a filter, not a checklist — a direction can score well on verifiability and entry point but fail on structural demand (demand only exists because one hot project appeared). From building the problem map: the clearest sign that a direction is genuinely AI × Web3 is that removing either domain breaks the system in a different and non-substitutable way. From the Neo-Cypherpunk session: the neo-cypherpunk framing reframes privacy as infrastructure for pluralism, not a retreat — “transparency for the powerful, anonymity for the powerless” applied to agent systems means audit trails for agent actions, not surveillance of agent users. From the direction analysis: Identity/Capability is most tractable as developer tooling (semantic agent discovery + capability matching) rather than a protocol-layer contribution; the right minimal entry point is the interface layer on top of ERC-8004/A2A, not the standards themselves.

**Blockers / questions:**`hackathon/TRACK_SELECTION.md` still needs full rationale + direction backlog filled in. Week 2 deliverables 3–7 (problem breakdown, proposal, reference list, deep-dive package, backlog) all still pending.
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->















**What I did today:** Ran 6 spaced-repetition quizzes across Agent Planning, RAG, Evaluation, Agent Profile, Context Window, and Agent Reflection — quiz cache now at 15 topics (resets May 29). Skimmed Week 2 introductory materials on the WCB learning page and extracted problem space notes into the knowledge base: Problem Space & Direction Map and AIxWeb3 Bridge Introduction. Read all 15 chapters of the AIxWeb3 Bridge section (Chain-aware Context, Web3 Tool Use, Agent Workflow, Agent Wallet, Machine Payment, Settlement & Escrow, Agent Identity, Agent Trust & Reputation, AI Oracle, Verifiable AI, AI Security, AI Privacy, AI Sovereignty, Governance AI, Decentralized AI). Built a full mental model diagram for 8 core bridge modules — layered dependency flow showing execution spine + identity/trust foundation, with standards, design principles, and connection table (HTML + SVG + Markdown). Watched the Cobo Agentic Wallet session replay.

**What I learned:** From the AIxWeb3 Bridge chapters: the 8-step reference pattern for an agent acting in Web3 (user goal → context read + plan → read/write split → read tools auto-run → write tools enter policy → simulation → user confirms high-risk → wallet executes + logs). From Cobo Agentic Wallet session: four key risk scenarios when giving agents wallet access (prompt injection, unscoped authority, shadow operations, zombie permissions). The Cobo Pact approach — structured delegation combining Intent + Execution Plan + Policies + Completion Conditions — reframes the problem as “give agents Pacts, not wallets.” From the quizzes: RAG retrieval results are candidate evidence, not facts; reflection is a quality-improvement mechanism, not a safety mechanism — code-enforced guardrails still required for safety. From the mental model: the two most underimplemented modules in demos are Settlement & Escrow and Agent Trust & Reputation, both prerequisites for real agentic commerce.

**Blockers / questions:** Track selection and project definition not yet finalized — scheduled for tomorrow (May 29). 13 minimal practice exercises still pending. Week 2 deliverables require a problem map, direction selection note, problem breakdown, and initial proposal — all targeted for this week.
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->
















**What I did today:** Completed Week 1 closure. Designed and published two AI × Web3 workflow diagrams: an Agentic Commerce swimlane (Human Operator → Requester Agent → Data Provider Agent → On-chain/L2, 9 steps with full risk annotations and a 6-layer verification chain) and a Restricted Web3 Assistant workflow (read-only chain access with human confirmation gate before any write action). Ran a comparative analysis report on two AI × Web3 projects (Bankr and [Venice.AI](http://Venice.AI)) covering problem space, solution design, and developer tools. Wrote the Week 1 Proof-of-Work Pack (`submissions/Week1-PoW.md`) and Week 1 Learning Summary (`submissions/Week1-Learning-Summary.md`) as formal Week 1 wrap-up deliverables. Submitted workflow and project analysis tasks via WCB.

**What I learned:** From building the workflow diagrams: mapping an AI × Web3 system to a concrete swimlane forces you to identify every trust boundary. The six-layer verification model (prompt → context → model → code → guard → human) emerged from that exercise — it’s more useful than any individual framework because it tells you _which_ layers need automation vs. human confirmation vs. on-chain enforcement. Most demos only implement layers 1 and 3; production systems need all six. From the project analysis: Bankr and [Venice.AI](http://Venice.AI) both address agent execution in Web3 contexts but from very different angles — one optimizing for consumer UX (natural language → intent execution) and the other for privacy-preserving inference at the infrastructure level.
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->

















**What I did today:** Watched the Week 2 session replay “Long-term Memory for AI Agents: Persistent Context and Long-term Consistency.” Built an interactive quiz artifact for the learning journey: designed and wrote `skills/quiz/SKILL.md` — a 9-step quiz procedure that reads from the wiki knowledge base, randomly selects a concept topic, generates 5 factual multi-choice questions with instant feedback and concept explainers on wrong answers, and manages a 72-hour spaced-repetition cache. Set up a Cowork scheduled task running the quiz every 2 hours. Documented the design in `prompts/INTERACTIVE_LEARNING_ARTIFACT.md` and updated `AGENTS.md` Section 14. Also cleaned up heading link formatting across the knowledge base Web3 chapter notes.

**What I learned:** From the Long-term Memory session: memory builds through work and forms continuity across sessions — it has two key axes (time: short-term/long-term; content: episodic/semantic/procedural) plus side-running scratchpads. The memory lifecycle is capture selectively → retrieve selectively → revise continuously, and requires RAG + context engineering to work well. A project’s [CLAUDE.md](http://CLAUDE.md) is itself a form of evolving long-term procedural memory. From building the quiz: the local filesystem constraint (Cowork artifacts run in a browser sandbox and can’t read local files directly) drove the [SKILL.md](http://SKILL.md) + `show_widget` architecture — orchestration logic stays in Claude’s context while the interactive UI renders via widget buttons wired to `sendPrompt`.

**Blockers / questions:** Are third-party memory plugins using graph-based knowledge stores meaningfully better than plain-text memory engines (like in Openclaw)? What are good benchmark frameworks for evaluating a custom memory layer? Thirteen minimal practice exercises still pending. Five Week 1 WCB tasks still open.
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->


















**What I did today:** Completed the remaining AI Foundations chapters: read Evaluation, Fine-tuning, and Inference in full and saved structured notes to the knowledge base. Skimmed all 9 Web3 Foundations chapters (Cryptography, Wallet, Smart Contract, Dev Stack, Network, Account Abstraction, DeFi, Oracle, Indexing, Security) — used the Handbook as source material to update the wiki and regenerate the concept cards deck. Completed and submitted proof-of-work for testnet interaction and smart contract deployment/execution exercises on WCB.

**What I learned:** From Evaluation: evaluation is a first-class engineering concern in AI × Web3 — errors can affect assets, permissions, and on-chain execution. A golden set of real tasks and regression tests, combined with online observability, is what makes a system improvable over time. From Fine-tuning: fine-tuning improves consistency on a class of tasks, not factual knowledge — the dataset is the core asset, and goal, data, and evaluation must all be defined before starting. From Inference: inference is a tradeoff across latency, cost, context, quality, privacy, and operational complexity; in AI × Web3 systems specifically, the inference layer must leave auditable records since on-chain actions are hard to reverse.

**Blockers / questions:** 10 minimal practice exercises now pending (7 carried from earlier days + 3 new: Evaluation eval harness, Fine-tuning pre-eval, Inference comparison). Week 1 wrap-up document and five Week 1 WCB tasks (Build an Interactive AI Learning, Compare EOAs, Draw a Minimal AI, Week 1 Proof-of-Work Pack, AI × Web3 Learning Summary) still need to be closed.
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->



















**What I did today:** Read three Handbook chapters: Frameworks, Vibe Coding, and MCP. Took structured notes in the knowledge base for all three. Reviewed the WCB task status — three previously submitted recordings (How Web3 Works, Week 1 Review Meeting, Open Agentic Economy) were approved. Two expiring Week 1 tasks (Weekly Review Sharing and Watch 5.21 Recording) unfortunately expired before submission. No new experiments completed today — all five carry-over minimal practice exercises remain pending, and two new ones were added from today’s reading (framework comparison and MCP server build).

**What I learned:** From the Frameworks chapter: a framework organizes models, tools, state, retrieval, and deployment into a maintainable system, but should be exit-able and never replace product-layer permission boundaries — in AI × Web3, the product layer must define user goals, permission flows, and failure handling, not the framework. From Vibe Coding: AI coding agents shorten the engineering feedback loop, but cannot replace engineering judgment — chain-related code is higher risk and requires review, simulation, and multi-party confirmation. From MCP: the protocol abstracts the connection layer between model and external tools; tools need properly defined schemas and permission models; in AI × Web3, MCP handles tool discovery and call format while the web3 account system handles final permission and execution boundaries.

**Blockers / questions:** Minimal practice exercises continue to accumulate (now 7 pending). Two Week 1 WCB tasks expired without submission. Two earlier submissions remain rejected — resubmission possible once sensitive info is removed. Remaining AI Foundations chapter (Evaluation), all Web3 Foundations chapters, and the Week 1 wrap-up are all deferred to the coming days.
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




















**What I did today:** Watched three live session recordings: “How Web3 Works” (May 20), “Week 1 Review Meeting” (May 22), and “Open Agentic Economy” (May 23). Read the Agent chapter from the Handbook. Also began building knowledge-base notes and concept card tooling for the wiki. Submitted check-ins for all three recordings on WCB. Hands-on coding experiments remain pending and are carried to tomorrow.

**What I learned:** From the recordings: full Ethereum transaction flow (mnemonic → private/public key → address derivation → digital signature → EIP-1559 gas → PoS consensus); how Ethereum provides neutral coordination and property rights for both humans and agents; ERC-8004 as an emerging trust layer for agent identity and reputation; CROPS as a design principle for agent infrastructure (Censorship-resistant, OSS, Privacy, Security). From the Agent chapter: an agent is a constrained execution loop, not autonomy itself — it must know what it can do, how to verify completion, how to stop on failure, and how to be audited. In Web3 contexts, agents sit between model capability and on-chain execution. Key personal insight from the Week 1 review: treat learning as an executable workflow, not a tools survey — I want to explore deploying a fork of my learning agent to an open framework like Hermes or OpenClaw.
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





















**What I did today:** Read the Context chapter and the RAG chapter in full, taking structured notes in the repo knowledge base. Both chapters revealed how LLMs are connected to real systems and external data sources beyond their training. Coding experiments from Days 1 and 2 remain pending and are carried over to tomorrow.

Also built an Obsidian vault as a wiki-like knowledge base for my notes with its corresponding skill to an agent can update the wiki incrementally in the future. Also sketched a concept cards skill that creates a MARP-based presentation based on concepts extracted from the wiki. All of this are already on the repo, while tasks with evidencce will be submitted tomorrow.

**What I learned:** Context is not a simple text buffer — it is an information governance problem. A well-structured agent context layers instructions, tasks, facts, knowledge, and memory, each annotated with source, freshness, permissions, and trust level. RAG is an evidence chain that feeds the model with external knowledge while keeping answers sourced, versioned, and bounded. A key insight: retrieved results are candidate evidence, not facts — which means a good retriever can’t rely on pure vector search alone; it must also use session context and metadata. Citations are a critical part of any RAG system because they link model conclusions back to versioned, attributable sources.

**Blockers / questions:** No hard blockers. Both hands-on experiments (on-chain analysis and RAG retrieval) are still pending due to time — carried over to Day 3.
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






















**What I did today:** Read the AI × Web3 School Handbook intro page to get a first overview of how both domains connect. Then read the LLM chapter and the Prompt chapter in full, taking structured notes in the repo knowledge base. Also completed the three setup tasks on WCB: “Set Up the Course Tools”, “Create Your Course GitHub”, and “Complete Learning Agent Setup”. Deferred hands-on coding experiments to Day 2.

**What I learned:** LLMs generate probabilistically reasonable output — not trustworthy facts by default. The closer an LLM gets to the execution layer in an AI × Web3 system, the more its natural-language output must be converted into verifiable, deterministic objects. On the prompting side: a prompt is interface design, not just a question. A good prompt lets the model know when to stop rather than pushing it to be more confident. Critically, prompts should not be the sole security layer — guardrails and human handoffs are required for high-risk actions. Prompt injection is a first-class security risk, especially in agent scenarios with access to internal systems.

**Blockers / questions:** No hard blockers today. Experiments (on-chain analysis with real transaction data) were deferred to Day 2 due to time constraints.
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->























**What I did today:**

Completed full learning environment setup for AI × Web3 School Cohort 0. Bootstrapped the personal learning repo with Sensei (Claude/Cowork agent), created [AGENTS.md](http://AGENTS.md), [profile.md](http://profile.md), 4-week learning plan, daily note template, and full directory structure. Reviewed the Handbook overview and confirmed program structure.

**What I learned:**

\- The program runs 4 weeks: AI + Web3 foundations → AI × Web3 intersections → practice deepening + hackathon kickoff → hackathon sprint + demo

\- My priority AI gaps: LLM → Prompt → Context → RAG → Agent → Frameworks → MCP → Evaluation

\- Sensei agent is live and ready to support daily learning from tomorrow

**Blockers / questions:**

-   Experimenting with a mix of Claude Cowork + Claude Code made me realise some issues related to shared memory management and external API execution on sandboxed environments within cowork. Should I move over to a more open-ended agent like hermes/openclaw?
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
























-   Reviewed the handbook's recommended startup prompt to create a learning agent
    

-   Made a full review of the [learning agent](https://aiweb3.school/learning-agent.en.txt) prompt to know how the agent will behave
    
-   Reviewed the [Career Build Agent API](https://web3career.build/llms.txt) to understand how the agent will interact with the learning platform
    
-   Setup Claude Code as the default agent tool for the course. Also installed Hermes on my home node to explore further
    
-   Next steps include bootstrapping the learning agent and creating my workspace Github repository. My goal is to connect it with a second-brain instance to manage a Wiki-like knowledge base for the course
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

























-   Attended the first co-learning session. Even if it was mostly for the Chinese audience, I noticed there was a walkthrough on setting up a Hermes agent. It should be worth exploring Hermes vs my current Openclaw instance for this bootcamp
    
-   Watched the replay session about web3 fundamentals with a focus on how blockchain txs work, wallets and private keys.
    
-   Configured Obsidian, a workspace and a few plugins to build a knowledge base that will be used later as a building block via Claude, so I can complete task 1: build a learning agent or "second brain" for this bootcamp.
    
-   Skim through some AI Fundamental concepts. Tomorrow, I'll dig more into them by reviewing the handbook and recommended links.
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


























-   Watched the \[opening ceremony\]([https://x.com/i/broadcasts/1YGNrZnBMrZGw](https://x.com/i/broadcasts/1YGNrZnBMrZGw)) livestream. There was a presentation from [z.ai](http://z.ai) that was the only one in English that could understand. Then skimming through the video I saw the organizers gave a walkthrough over the learning platform, however presentation was in Chinese.
    
-   Translated and reviewed the \[Notion's FAQ and learning guide\]([https://www.notion.so/ethpanda/Q-A-326bbd63be8780118f8fc40cac9d8ca0](https://www.notion.so/ethpanda/Q-A-326bbd63be8780118f8fc40cac9d8ca0))
    
-   _Went through Week 1 curriculum to identify the most important resources estimate the time needed to go through them this week_
    
    -   _Module B can be mostly skipped. Just revisit advanced wallet features to refresh your knowledge_
        
    -   _Consider setting up a second brain agent to manage the learning path  
        _
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
