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
