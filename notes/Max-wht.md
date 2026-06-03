---
timezone: UTC+8
---

# Max

**GitHub ID:** Max-wht

**Telegram:** @Max2557

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
今天组队，准备黑客松
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

今天休息一天。逛了挺多店，吃了很多好吃的😋
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->



上下文是ai agent审计的核心。用ai审计任何大型合约都需要管理好上下文，否则幻觉会特别特别大
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




今天买个GPT Pro套餐，好贵
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





skill的局限就是太依赖AI的理解能力了，把所有的workflow都用自然语言描述。

如果有时间，还是构建一个agent吧
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->






这两天都到研究skill，现在的审计coverage还挺高的。至少所有被AI comfirm的findings都是对的
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->







继续bug bounty
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->








\# Designing a Line-Level Root-Cause Tagging System for Smart Contract Codebases

\## Executive summary

A robust line-level labeling system for smart-contract code should not start from hundreds of vulnerability names. It should start from a \*\*small, stable internal root-cause cover\*\* and then map outward to external taxonomies such as OWASP SCWE, SWC/EIP-1470, EEA EthTrust, and CVE/NVD. That design choice is justified by the roles those artifacts actually play: SCWE is a maintained smart-contract weakness enumeration intended as a complement to CWE and a bridge between OWASP SCSVS and SCSTG; EIP-1470 defines SWC as a smart-contract-specific weakness classification loosely aligned to CWE; the live SWC registry explicitly warns that it is no longer actively maintained and may contain omissions; EthTrust provides a certification-oriented specification and checklist; and CVE/NVD provide real-world disclosed vulnerability identifiers, affected-version context, and severity metadata rather than a root-cause ontology.

The most practical architecture is a \*\*two-layer model\*\*. Layer one is a proposed seven-set semantic cover over all executable lines: \*\*authority and trust boundary\*\*, \*\*input/encoding/commitment validation\*\*, \*\*external interaction and control transfer\*\*, \*\*state transition and workflow invariants\*\*, \*\*arithmetic/accounting/economic constraints\*\*, \*\*resource/ordering/environment assumptions\*\*, and \*\*platform/compiler/storage/upgrade model\*\*. Layer two is a \*\*composable tag ontology\*\* that records concrete evidence: AST constructs, dataflow, control-flow, compiler versions, storage layout context, cryptographic operations, access-control checks, upgradeability mechanics, gas and liveness signals, and mitigations. This separation lets the internal model stay stable while still interoperating with evolving external standards and newly disclosed CVEs. That stability goal is also consistent with academic work such as OpenSCV, which argues that earlier schemes such as SWC had become heterogeneous or outdated as the ecosystem evolved.

For implementation, the strongest foundation is compiler-native provenance. Solidity’s compiler can emit ASTs, storage layout, metadata, and bytecode source maps; source mappings exist both at AST level and bytecode-instruction level. Vyper can emit ASTs, source maps, storage layout, JSON compilation outputs, and reproducible archive artifacts with version and integrity information. Slither adds source-located detectors, a custom detector API, Vyper support, and a SlithIR SSA-based representation suitable for dataflow and taint analysis. MythX adds static analysis, symbolic analysis, and greybox fuzzing and associates locations with SWC IDs, while Mythril provides local symbolic execution but explicitly does not cover business-logic errors soundly.

Persist the \*\*full per-line inventory\*\* in a canonical JSONL store, and publish only the \*\*review-worthy subset\*\* in SARIF. GitHub’s SARIF ingestion is useful for CI and pull requests, but it expects SARIF 2.1.0, relies on stable locations and `partialFingerprints` to deduplicate results across runs, and enforces practical limits on uploaded result counts. That makes SARIF an interchange/reporting format, not the canonical storage format for “every executable line.” Keep raw line tags, derived set scores, provenance, suppressions, and diff history in JSONL or a database; export only suspicious, high-priority, or changed findings into SARIF.

Finally, treat \*\*version and dependency context as first-class evidence\*\*, not as metadata garnish. Real NVD records for Vyper and OpenZeppelin show that compiler versions, library versions, code-generation bugs, signature validation assumptions, duplicated delegatecalls, governance frontrunning, ERC2771 caller reconstruction, and financial accounting defects can all be version-specific. A useful root-cause tagging system therefore needs build-aware contextual tags on affected lines, not just syntax-based detectors.

\## Taxonomy foundation and the seven root-cause sets

Before defining the seven sets, it helps to clarify what each external source contributes to the design.

| Framework | What it is | Best use in this system |

|---|---|---|

| \*\*OWASP SCWE\*\* | A maintained list of common security and privacy weaknesses in smart contracts; OWASP describes it as complementary to CWE and as a bridge between SCSVS and SCSTG. It distinguishes \*\*weaknesses\*\* from \*\*vulnerabilities\*\* and organizes entries by SCSVS controls. | Use as a maintained weakness vocabulary and as a source of example mappings and mitigations. |

| \*\*SWC / EIP-1470\*\* | EIP-1470 defines SWC as a smart-contract-specific weakness classification scheme loosely aligned to CWE and intended to create a common language across developers, tools, and auditors. The live SWC registry warns that it has not been thoroughly updated since 2020 and may contain errors and omissions. | Use for backward compatibility, legacy test cases, and interop with older tools and audit reports. |

| \*\*EEA EthTrust\*\* | A certification-oriented specification and companion checklist; the March 2025 checklist says the checklist is a convenience document and the specification is authoritative. EthTrust certification is explicitly framed as a claim that tested code is not vulnerable to a number of known attacks or failures to operate as expected, not as a blanket security guarantee. | Use as a normative requirements layer, especially for compiler/version policy, external calls, access control, and upgrade governance. |

| \*\*CVE / NVD\*\* | The CVE program identifies, defines, and catalogs publicly disclosed vulnerabilities, while NVD is NIST’s standards-based vulnerability management repository and enrichment layer. CVE IDs uniquely identify vulnerabilities and NVD adds affected-version information, references, and metrics. | Use as empirical evidence for real-world exemplar mappings, affected-version tagging, and dependency/compiler risk context. |

The proposed internal model treats the codebase as a set of executable source-code lines after compiler source-map projection.

Let:

\- $L\_{exec}$ = all executable source-code lines in the analyzed codebase

\- $R = \\{R\_{auth}, R\_{validate}, R\_{flow}, R\_{state}, R\_{value}, R\_{env}, R\_{platform}\\}$

The design goal is:

\- $R\_i \\subseteq L\_{exec}$ for every root-cause set $R\_i$

\- $\\bigcup\_i R\_i = L\_{exec}$

This is a \*\*cover\*\*, not a partition. Lines may belong to multiple sets. That is necessary because major smart-contract failures are often multi-causal. Reentrancy, for example, is both an \*\*external interaction/control-transfer\*\* problem and a \*\*state-transition sequencing\*\* problem; `delegatecall` can be both a \*\*control-transfer\*\* issue and a \*\*platform/upgrade/storage-context\*\* issue. Solidity’s own security documentation and EthTrust’s checks-effects-interactions requirements make that multi-causal structure explicit.

The seven proposed root-cause sets are as follows.

| Root-cause set | Semantic question the line answers | Typical tagged lines | Representative external alignment |

|---|---|---|---|

| \*\*Authority and trust boundary\*\* | _Who is allowed to do this, and under which trust assumptions?_ | Caller checks, role checks, upgrade authorization, pause/unpause, selfdestruct authorization, meta-tx caller reconstruction | SCWE-016 and SCWE-018 cover insufficient authorization and `tx.origin`; SWC-115 and SWC-106 cover `tx.origin` authorization and unprotected selfdestruct; EthTrust includes \*\*No `tx.origin`\*\* and \*\*Enforce Least Privilege\*\*; NVD CVE-2023-40014 shows caller-identity reconstruction failure in `ERC2771Context`. |

| \*\*Input, encoding, and commitment validation\*\* | _Are bytes, parameters, hashes, signatures, nonces, lengths, domains, and critical addresses valid and unambiguous?_ | Zero-address checks, calldata/returndata length checks, `abi.decode`, EIP-712 domain checks, nonce checks, replay-protection logic, `abi.encodePacked` on dynamic inputs | SCWE-022, SCWE-074, SCWE-120, SCWE-122, and SCWE-143 address replay, hash collisions, return-data length, calldata length, and critical address validation; SWC-121, SWC-117, and SWC-133 cover replay, malleability, and packed-encoding collisions; CVE-2022-31172 shows a real signature-validation assumption failure. |

| \*\*External interaction and control transfer\*\* | _Does control leave the contract or trust boundary safely, and are failure modes handled correctly?_ | Low-level calls, `delegatecall`, `staticcall`, ETH/token transfers, callback surfaces, external call-return handling | SCWE-046, SCWE-048, and SCWE-134 cover reentrancy, unchecked call return, and low-level calls to non-contract addresses; SWC-104, SWC-107, and SWC-112 cover unchecked calls, reentrancy, and delegatecall to untrusted callees; EthTrust requires low-level returns to be checked and uses CEI to protect against reentrancy. |

| \*\*State transition and workflow invariants\*\* | _Are state changes sequenced correctly and do workflow invariants hold before, during, and after execution?_ | Effect ordering, stale reads, accounting synchronization, governance action construction, duplicate execution, invariant assertions | SCWE-137 highlights read-only reentrancy via stale view state; SCWE-052 and SCWE-037 capture order dependence and front-running; CVE-2023-30542 and CVE-2023-49798 are concrete workflow/invariant failures in governance and multicall execution. |

| \*\*Arithmetic, accounting, and economic constraints\*\* | _Do numeric and economic invariants hold under overflow, truncation, price movement, and accounting updates?_ | Balance/supply/debt updates, rounding logic, share-price math, slippage bounds, caps, min/max checks | SCWE-047 covers integer overflow/underflow; SCWE-124 covers inconsistent rounding in financial math; SCWE-090 covers missing slippage protection; SWC-101 covers overflow/underflow; EthTrust includes overflow and rounding requirements; NVD CVE-2023-26488 is a concrete accounting inconsistency. |

| \*\*Resource, ordering, and environment assumptions\*\* | _Are gas, liveness, timestamps, ordering, randomness, and validator-controlled environment inputs being used safely?_ | Unbounded loops, timestamp-sensitive branches, `blockhashprevrandao` randomness, frontrunnable governance or pricing, deadline checks | Solidity warns that unbounded loops can stall contracts; SCWE-024, SCWE-052, SCWE-077, SCWE-084, SCWE-141, and SCWE-153 cover weak randomness, order dependence, rate limiting, blockhash misuse, deadlines, and `prevrandao`; MythX also detects timestamp and environment-variable influence on control flow and unbounded loops; NVD CVE-2023-34234 is a real frontrunning case. |

| \*\*Platform, compiler, and storage or upgrade model\*\* | _Does the platform’s actual execution model preserve the developer’s intent across compiler, storage, library, and proxy semantics?_ | Compiler-version context, inline assembly/Yul, proxy upgrade lines, storage-layout-sensitive code, known-bug trigger patterns, dependency-version-sensitive paths | SCWE-039, SCWE-061, SCWE-089, SCWE-099, and SCWE-150 cover inline assembly, outdated compiler versions, outdated libraries, and storage layout collisions; Solidity publishes a machine-readable known-bugs list and compiler metadata; EthTrust heavily emphasizes modern compilers and compiler bugs; Vyper versioning explicitly calls out security fixes; NVD records for Vyper and OpenZeppelin show real compiler/library semantics failures. |

The reason to use these seven sets instead of directly tagging lines with SCWE or SWC IDs is that external taxonomies are too fine-grained and too unstable to be the \*\*primary semantic layer\*\*. OpenSCV’s critique of older schemes, together with the SWC registry’s own stale-maintenance warning, strongly suggests that a production system should keep a small internal root layer and treat SCWE, SWC, EthTrust, and CVE as \*\*mapping targets and evidence vocabularies\*\*, not as the universal semantic substrate.

\## Tag ontology and tag-to-set mapping rules

The ontology should be \*\*structured\*\*, \*\*composable\*\*, and \*\*provenance-rich\*\*. A flat label list is not expressive enough for line-level reasoning because the same line may simultaneously carry construct information, dataflow evidence, mitigation evidence, platform context, and one or more derived root-cause memberships.

A practical schema uses eight tag families.

| Tag family | Purpose | Example | Value form | Cardinality per line |

|---|---|---|---|---|

| `ctx.*` | Inherited build and environment context | `ctx.compiler.solc=0.8.24`, `ctx.proxy.pattern=uups` | parametric | one or more |

| `node.*` | Direct AST/IR construct facts | `node.call.kind=delegatecall` | enum or boolean | one or more |

| `flow.*` | Dataflow, taint, dominance, and call-graph relations | `flow.user_input_to_call_target=true` | boolean or relation | zero or more |

| `sem.*` | Operational semantics or business role of the line | `sem.state.balance_write=true` | boolean or enum | one or more for executable lines |

| `guard.*` | Positive mitigations and hardening controls | `guard.flow.nonreentrant=present` | enum | zero or more |

| `risk.*` | Derived hazard hypotheses | `risk.env.unbounded_loop=true` | boolean or scored enum | zero or more |

| `prov.*` | Evidence provenance | `prov.slither.detector=reentrancy-eth` | parametric | one or more |

| `root.*` | Final root-set membership and score | `root.flow=0.97` | score in $\[0,1\]$ | exactly one primary, optional secondary |

Use \*\*lowercase dot-separated namespaces\*\* and prefer \*\*parameterized values\*\* over exploding the namespace into many near-duplicates. For example, `guard.sig.replay_protection=nonce+domain` is better than creating separate ad hoc tags for every replay-protection combination. Likewise, `ctx.dependency.openzeppelin.contracts=4.9.4` is better than inventing a separate tag name for each affected version. This also matches the way Solidity metadata, EthTrust conformance context, and Vyper archives expose versioned build information as structured data rather than free text.

Boolean tags are appropriate for crisp predicates such as “line contains a low-level call.” Parametric tags are preferable for versions, roles, slots, gas modes, proxy patterns, trust levels, and replay-protection strength. The line record should therefore support:

\- \*\*boolean values\*\* for direct facts

\- \*\*enums\*\* for controlled categorical values

\- \*\*numbers/ranges\*\* for versions, line spans, gas, and slot indices

\- \*\*relations\*\* for taint/control-flow edges

\- \*\*scores\*\* for derived root-set confidence

The tag-to-set relation is best modeled as a two-step derivation:

1\. \*\*facts → derived risk or semantic tags\*\*

2\. \*\*derived tags → one or more root-cause sets\*\*

That keeps the system explainable. The line should show not only that it maps to `R_flow`, but _why_: for example, because it is a low-level external call, its target is tainted from external input, and its return value is unchecked.

\`\`\`mermaid

flowchart LR

C\[ctx.\* context tags\] --> D\[derived semantic and risk tags\]

N\[node.\* construct tags\] --> D

F\[flow.\* dataflow and CFG tags\] --> D

S\[sem.\* semantic-role tags\] --> D

G\[guard.\* mitigation tags\] --> D

P\[prov.\* provenance tags\] --> D

D --> A\[Authority and trust boundary\]

D --> V\[Input, encoding, and commitment validation\]

D --> X\[External interaction and control transfer\]

D --> T\[State transition and workflow invariants\]

D --> M\[Arithmetic, accounting, and economic constraints\]

D --> E\[Resource, ordering, and environment assumptions\]

D --> L\[Platform, compiler, and storage or upgrade model\]

\`\`\`

A good rule engine uses both deterministic mappings and heuristics.

| Rule class | Example | Determinism | Suggested confidence |

|---|---|---|---|

| \*\*Exact syntax\*\* | `node.call.kind=delegatecall` | deterministic | 0.95–1.00 |

| \*\*Compiler-known-bug trigger\*\* | build version in affected range \*\*and\*\* bug predicate satisfied | deterministic | 1.00 |

| \*\*Intra-procedural CFG\*\* | state write dominated by external call and not by reentrancy guard | near-deterministic | 0.85–0.95 |

| \*\*Inter-procedural taint\*\* | user-controlled address reaches call target or auth predicate | heuristic but strong | 0.75–0.90 |

| \*\*Semantic-context inheritance\*\* | line is inside a proxy upgrade path or replay-protected permit path | heuristic/contextual | 0.60–0.85 |

| \*\*Fallback parent inheritance\*\* | line has no direct evidence, inherit dominant set from smallest executable AST parent | coverage heuristic | 0.35–0.60 |

A simple, explainable scoring function is:

$$

score(r, l)=1-\\prod\_{e \\in E(r,l)}(1-w\_e)

$$

where $E(r,l)$ is the set of evidence items supporting root set $r$ on line $l$, and $w\_e$ is the evidence weight. The line gets one \*\*primary\*\* root set $argmax\_r score(r,l)$ and any \*\*secondary\*\* sets above a threshold. This makes the system mathematically total while keeping the UI interpretable.

The most important mapping principle is \*\*coverage without overconfidence\*\*. Because the user requirement is to label \*\*every executable line\*\*, each executable line should get at least one primary set even when it is not presently vulnerable. In other words, the system tags the line’s \*\*security responsibility domain\*\*, not just exploitable defects. A benign `require(msg.sender == owner)` line still belongs to \*\*authority\*\*; a safe balance update still belongs to \*\*state\*\* and often \*\*value\*\*; a guarded external call still belongs to \*\*flow\*\*. This is the cleanest way to ensure $\\bigcup\_i R\_i = L\_{exec}$ without pretending that every line is a finding.

\## Per-line analysis model and automation architecture

The line-level model should be compiler-faithful. For Solidity, the compiler provides AST source ranges and bytecode-to-source mappings; AST mappings use the compact `s:l:f` form, while bytecode source maps use compressed `s:l:f:j:m` instruction-level entries. The standard JSON compiler interface can emit AST, metadata, storage layout, and source maps in one reproducible build. Solidity also publishes machine-readable known-bug data with affected version ranges and triggering conditions. For Vyper, the compiler can emit AST, source maps, storage layout, and JSON output, while Vyper archives include compiler version, settings, integrity, and optional storage layout overrides. Vyper also emphasizes security, auditability, bounded loops, no recursion, and built-in reentrancy protection through `@nonreentrant`.

That leads to the following per-line evidence model.

| Signal family | What to extract | Preferred source | Dominant root sets |

|---|---|---|---|

| \*\*AST and source-span facts\*\* | call kind, modifiers, assertions, loops, arithmetic ops, `abi.decode`, `ecrecover`, `selfdestruct`, assembly blocks | `solc` AST and source maps; Vyper AST and source maps | all, especially validation, value, platform |

| \*\*IR and dataflow\*\* | sources of taint, sinks, SSA defs/uses, user input to auth, amount, call target, storage write | Slither and SlithIR; custom Vyper-normalized IR | authority, validation, flow, value |

| \*\*CFG and dominance\*\* | call-before-write sequencing, guard coverage, reentrancy surfaces, stale read patterns, liveness paths | Slither CFG; custom passes | flow, state, environment |

| \*\*Compiler and dependency context\*\* | compiler version, optimizer/edit mode, known-bug ranges, dependency versions, metadata hash | Solidity metadata and bugs list; Vyper versioning and archives; lockfiles | platform |

| \*\*External-call semantics\*\* | low-level call kind, value transfer, return handling, target trust level, callback surfaces | AST, IR, detectors, ABIs | flow |

| \*\*Storage and upgradeability\*\* | proxy pattern, storage layout, slot overlap risk, storage gap usage, upgrade function context | `storageLayout`, Vyper layout, proxy recognizers | platform, state |

| \*\*Access control\*\* | role checks, owner checks, `_msgSender()`, meta-tx context, timelocks, multisig-sensitive operations | AST, call graph, inherited context | authority |

| \*\*Cryptography and commitments\*\* | EIP-712 domain separation, nonce use, signature recover flow, `abi.encodePacked`, VRF callback validation | AST, taint, semantic passes | validation |

| \*\*Gas, liveness, and ordering\*\* | unbounded loops, gas forwarding, timestamp branches, block randomness, order-sensitive governance/pricing | AST, CFG, taint, detectors | environment |

| \*\*Proof or invariant signals\*\* | `assert`, proof targets, discharged invariants, counterexamples | Solidity SMTChecker | state, value |

Slither is especially useful here because it identifies source locations, supports Solidity and Vyper, integrates with CI and Hardhat/Foundry-oriented builds, and exposes a detector API on top of its IR. The Slither paper also explicitly calls out SSA form, dataflow, and taint tracking as core capabilities. MythX complements this with static analysis, symbolic analysis, and greybox fuzzing when an API-backed service is acceptable. Mythril is a good local symbolic-execution fallback, but its own documentation says it is targeted at common vulnerabilities and does not discover business-logic problems soundly, so it should be treated as an optional evidence source rather than the sole truth.

\`\`\`mermaid

flowchart LR

A\[Solidity and Vyper source\] --> B\[Compiler stage\]

B --> B1\[solc standard-json\]

B --> B2\[vyper-json or archive\]

B1 --> C\[AST source maps metadata storageLayout\]

B2 --> C

C --> D\[Normalizer\]

D --> E\[Line and range index\]

D --> F\[Context inheritance engine\]

E --> G\[Slither and custom analyzers\]

F --> G

G --> H\[Fact tags ctx node flow sem guard prov\]

A --> I\[Optional symbolic and fuzzing backends\]

I --> I1\[MythX adapter\]

I --> I2\[Mythril local backend\]

I1 --> J\[Additional provenance and evidence\]

I2 --> J

H --> K\[Risk derivation engine\]

J --> K

K --> L\[Root-set scorer\]

L --> M\[Canonical JSONL store\]

L --> N\[SARIF export subset\]

M --> O\[Human review and suppression overlay\]

O --> P\[Rule tuning and regression corpus\]

P --> K

\`\`\`

A few implementation caveats matter:

\- Solidity bytecode source maps are \*\*instruction-level\*\*, not byte-level; the mapper must understand that a `PUSH` spans multiple bytes but a single source-map entry.

\- Source maps may point to compiler-generated or internal sources using file id `-1`, and Solidity explicitly warns that `verbatim` can invalidate source mappings; the system should mark those cases as \*\*synthetic or reduced-fidelity evidence\*\*, not silently project them onto arbitrary user lines.

\- Vyper should get \*\*language-default contextual tags\*\*. Because Vyper excludes inheritance, modifiers, inline assembly, recursion, and unbounded loops by design, those tags should often be marked `impossible-by-language` or `not-applicable` instead of merely absent. At the same time, Vyper’s `raw_call`, compiler-version changes, storage layout overrides, and callback semantics still require first-class tagging.

For CI, use an \*\*incremental multi-speed pipeline\*\*:

\- a \*\*fast changed-files pass\*\* on every push

\- a \*\*PR gating pass\*\* on changed functions plus impact-expanded callers/callees

\- a \*\*nightly full pass\*\* over the whole repository plus benchmarks and historical CVE regressions

This lets the system remain useful on large repos while still supporting the universal line-label objective.

\## Persistence, provenance, validation, and storage formats

The canonical persistence format should be \*\*JSONL\*\*, with one record per executable line or per canonical executable range projected onto a line. SARIF should be treated as an \*\*export layer\*\* for review workflows, IDEs, and code scanning. That recommendation is grounded in both structure and scale: GitHub only supports SARIF 2.1.0 for code scanning, uses `partialFingerprints` to suppress duplicates across runs, depends on stable physical locations, and enforces practical limits on results per run. In contrast, a full “every executable line” labeling inventory can easily exceed what code-scanning UIs are designed to show. SARIF’s schema and GitHub’s ingestion model do support additional metadata through property bags and location structures, which makes SARIF a good \*\*projection\*\* of the JSONL truth store.

A good JSONL record should carry at least:

\- repository, commit, and artifact identity

\- file path, line number, and optional column/range

\- language and compiler/dependency context

\- raw tags

\- derived root-set scores

\- provenance and evidence sources

\- review and suppression overlay references

\- stable fingerprints for diff matching

A concise sample JSON Schema is below.

\`\`\`json

{

"$schema": "[https://json-schema.org/draft/2020-12/schema](https://json-schema.org/draft/2020-12/schema)",

"title": "sc-line-tag-record",

"type": "object",

"required": \[

"repo",

"commit",

"artifact",

"location",

"language",

"tags",

"rootSets",

"rootScores",

"provenance"

\],

"properties": {

"repo": { "type": "string" },

"commit": { "type": "string" },

"artifact": {

"type": "object",

"required": \["path", "sha256"\],

"properties": {

"path": { "type": "string" },

"sha256": { "type": "string" },

"role": { "type": "string", "enum": \["first\_party", "dependency", "generated"\] }

}

},

"location": {

"type": "object",

"required": \["startLine", "endLine"\],

"properties": {

"startLine": { "type": "integer", "minimum": 1 },

"endLine": { "type": "integer", "minimum": 1 },

"startColumn": { "type": "integer", "minimum": 1 },

"endColumn": { "type": "integer", "minimum": 1 },

"astNodeIds": {

"type": "array",

"items": { "type": "integer" }

}

}

},

"language": { "type": "string", "enum": \["solidity", "vyper"\] },

"buildContext": {

"type": "object",

"properties": {

"compiler": { "type": "string" },

"compilerVersion": { "type": "string" },

"evmVersion": { "type": "string" },

"optimizer": { "type": "boolean" },

"proxyPattern": { "type": "string" }

}

},

"tags": {

"type": "array",

"items": {

"type": "object",

"required": \["name", "family", "value"\],

"properties": {

"name": { "type": "string" },

"family": { "type": "string" },

"value": {},

"confidence": { "type": "number", "minimum": 0, "maximum": 1 }

}

}

},

"rootSets": {

"type": "array",

"items": {

"type": "string",

"enum": \[

"AUTH",

"VALIDATE",

"FLOW",

"STATE",

"VALUE",

"ENV",

"PLATFORM"

\]

}

},

"rootScores": {

"type": "object",

"properties": {

"AUTH": { "type": "number", "minimum": 0, "maximum": 1 },

"VALIDATE": { "type": "number", "minimum": 0, "maximum": 1 },

"FLOW": { "type": "number", "minimum": 0, "maximum": 1 },

"STATE": { "type": "number", "minimum": 0, "maximum": 1 },

"VALUE": { "type": "number", "minimum": 0, "maximum": 1 },

"ENV": { "type": "number", "minimum": 0, "maximum": 1 },

"PLATFORM": { "type": "number", "minimum": 0, "maximum": 1 }

}

},

"fingerprints": {

"type": "object",

"properties": {

"lineFingerprint": { "type": "string" },

"statementFingerprint": { "type": "string" },

"functionFingerprint": { "type": "string" }

}

},

"provenance": {

"type": "array",

"items": {

"type": "object",

"required": \["source", "kind"\],

"properties": {

"source": { "type": "string" },

"kind": { "type": "string" },

"rule": { "type": "string" },

"evidenceRef": { "type": "string" }

}

}

},

"review": {

"type": "object",

"properties": {

"status": {

"type": "string",

"enum": \["unreviewed", "accepted", "suppressed", "waived", "fixed"\]

},

"rationale": { "type": "string" },

"expiresAt": { "type": "string", "format": "date-time" }

}

}

}

}

\`\`\`

For SARIF export, keep the normal SARIF `locations` and `physicalLocation` data for the line/range, put rule metadata in the standard rule objects, and attach the tag inventory and root-set scores under a custom property namespace such as `sc.*`. Also emit `partialFingerprints` for stable deduplication across commits, because GitHub explicitly uses them to decide when two results are logically identical.

The persistence strategy should also handle provenance and reviewer overlays explicitly.

| Concern | Recommended design |

|---|---|

| \*\*Location identity\*\* | Store both line and canonical span. Use file hash, AST path, nearest function signature, and normalized statement text to build stable fingerprints. |

| \*\*Version provenance\*\* | Persist compiler version, compiler settings, EVM target, dependency versions, metadata hash, and analyzer versions. EthTrust requires compiler options and metadata in conformance claims; Solidity metadata and Vyper archives already expose the needed fields. |

| \*\*Diff handling\*\* | Recompute only changed files and affected functions, but keep cross-commit result identity via line and statement fingerprints plus `partialFingerprints` in SARIF export. |

| \*\*False-positive management\*\* | Never overwrite raw analyzer output. Layer a reviewer overlay keyed by fingerprint and taxonomy version, with expiry dates for suppressions and mandatory rationale. |

| \*\*Language specificity\*\* | Mark impossible or not-applicable tags explicitly for language-constrained cases, especially in Vyper. |

| \*\*Generated or low-fidelity mappings\*\* | Use a `coverageMode` such as `exact`, `derived`, `inherited`, or `synthetic` to distinguish trustworthy labels from inherited or compiler-generated projections. |

Validation should be both \*\*benchmark-driven\*\* and \*\*human-reviewed\*\*. SmartBugs is valuable because its paper describes a precision dataset with 143 annotated vulnerable contracts and 208 tagged vulnerabilities, plus a much larger real-world dataset. G-Scan is valuable because it shows that line-level localization is feasible and reports strong F1 on line-level reentrancy localization. At the same time, MythX and Mythril both make clear that automation does not remove the need for human review, especially for business logic.

A rigorous evaluation plan should therefore measure at least four layers:

| Metric family | What to measure |

|---|---|

| \*\*Tag quality\*\* | precision, recall, and F1 for individual tags |

| \*\*Root-set quality\*\* | macro/micro F1 for the seven sets; primary-set exact match accuracy |

| \*\*Localization quality\*\* | exact-line match, line-window recall, and span overlap |

| \*\*Operational quality\*\* | reviewer acceptance rate, suppression rate, calibration of confidence scores, and analysis latency per PR |

A strong human-in-the-loop workflow is:

1\. analyzer emits provisional line tags and root-set scores

2\. reviewer triages only lines above risk or uncertainty thresholds

3\. disagreements are adjudicated into a gold corpus

4\. rules and score thresholds are tuned against the adjudicated set

5\. nightly regressions run on CVE repros, SmartBugs, and internal historical findings

\## Prioritized tags, annotated examples, roadmap, and source priorities

The following thirty tags are the best starting set for a prototype because they cover the highest-value semantic surfaces across Solidity and Vyper/EVM while remaining composable.

| Tag | Primary set | Secondary set | Short definition | Example pattern |

|---|---|---|---|---|

| `sem.auth.role_check` | AUTH | — | Caller is checked against owner, role, or ACL | `require(hasRole(X, msg.sender))` |

| `risk.auth.tx_origin` | AUTH | — | Authorization depends on `tx.origin` | `require(tx.origin == owner)` |

| `sem.auth.privileged_operation` | AUTH | PLATFORM | Line performs upgrade, pause, mint, sweep, or destructive admin action | `_upgradeTo(newImpl)` |

| `ctx.auth.meta_tx` | AUTH | VALIDATE | Caller identity comes from a forwarder-aware context | `_msgSender()` |

| `guard.auth.timelock` | AUTH | ENV | Sensitive action requires delay window | `require(block.timestamp >= eta)` |

| `guard.input.zero_address` | VALIDATE | AUTH | Critical address is validated against zero address | `require(to != address(0))` |

| `guard.input.length_check` | VALIDATE | FLOW | Bytes or returndata length is checked | `require(data.length >= 4)` |

| `sem.abi.decode_user_bytes` | VALIDATE | — | User-controlled bytes are decoded | `abi.decode(payload, (...))` |

| `risk.hash.encode_packed_dynamic` | VALIDATE | AUTH | Ambiguous hashing over multiple dynamic values | `keccak256(abi.encodePacked(a, b))` |

| `guard.sig.replay_protection` | VALIDATE | AUTH | Nonce, domain separator, or used-hash replay guard exists | `require(!used[digest])` |

| `sem.call.low_level` | FLOW | — | Low-level external interaction is used | `.call(...)`, `raw_call(...)` |

| `sem.call.delegatecall` | FLOW | PLATFORM | Execution context is delegated to external code | `delegatecall(data)` |

| `flow.user_input_to_call_target` | FLOW | AUTH | External input can influence call destination | `target.call(data)` |

| `sem.call.value_transfer` | FLOW | VALUE | The external interaction transfers ETH/value | `.call{value: amt}("")` |

| `risk.call.unchecked_return` | FLOW | STATE | External result is ignored or weakly handled | `callee.call(data);` |

| `guard.flow.nonreentrant` | FLOW | STATE | Reentrancy guard is present | `nonReentrant`, `@nonreentrant` |

| `risk.flow.state_write_after_call` | FLOW | STATE | Shared state is updated after a call-out | write after `.call(...)` |

| `sem.state.balance_write` | STATE | VALUE | Line mutates balances, supply, debt, allowances, or shares | `balances[to] += amt` |

| `guard.state.invariant_check` | STATE | VALUE | Invariant is asserted or required | `assert(total <= cap)` |

| `risk.state.stale_view_dependency` | STATE | FLOW | Line participates in stale-read or read-only reentrancy pattern | value read before pending effect settles |

| `risk.math.unchecked` | VALUE | PLATFORM | Wrapping arithmetic or unsafe cast path exists | `unchecked { total += x; }` |

| `risk.math.rounding_value_sensitive` | VALUE | STATE | Rounding direction can change economic outcome | share/asset math with division |

| `guard.value.slippage_bound` | VALUE | ENV | Economic tolerance or min/max bound exists | `require(amountOut >= minOut)` |

| `risk.env.unbounded_loop` | ENV | FLOW | Loop bound depends on user or storage growth | `for(i; i < users.length; ++i)` |

| `risk.env.timestamp_sensitive` | ENV | AUTH | Value-sensitive or authorization-sensitive logic uses timestamp | `if(block.timestamp > expiry)` |

| `risk.env.chain_randomness` | ENV | VALIDATE | Randomness depends on validator-controlled chain data | `blockhash`, `prevrandao` |

| `risk.env.tod_sensitive` | ENV | STATE | Line participates in transaction-order-dependent behavior | frontrunnable proposal or price path |

| `ctx.compiler.version_risky` | PLATFORM | — | Current build version falls in risky or floating range | affected compiler or pragma context |

| `ctx.storage.proxy_layout_sensitive` | PLATFORM | STATE | Line executes in proxy/shared-storage context | upgrade or proxy-sensitive function |

| `ctx.platform.inline_assembly` | PLATFORM | VALIDATE | Line is inside `assembly {}` or Yul-sensitive path | `assembly { sstore(...) }` |

Some of those tags are more useful when treated as \*\*parametric\*\* rather than merely present or absent. For example:

\- `guard.sig.replay_protection = none | nonce | nonce+domain | nonce+domain+usedhash`

\- `ctx.proxy.pattern = none | transparent | uups | beacon | minimal`

\- `ctx.compiler.version_risky = none | floating | outdated | known_bug_match`

\- `risk.env.timestamp_sensitive = low | medium | high`

\- `flow.user_input_to_call_target = direct | indirect_storage | role_gated`

The tag-to-set mapping table for those thirty tags is summarized below.

| Tag group | Maps to root sets |

|---|---|

| `sem.auth.*`, `risk.auth.*`, `guard.auth.*` | AUTH primarily |

| `guard.input.*`, `sem.abi.*`, `risk.hash.*`, `guard.sig.*` | VALIDATE primarily |

| `sem.call.*`, `risk.call.*`, `guard.flow.*`, `flow.*` with call sink | FLOW primarily |

| `sem.state.*`, `guard.state.*`, `risk.state.*` | STATE primarily |

| `risk.math.*`, `guard.value.*`, `sem.state.balance_write` | VALUE primarily |

| `risk.env.*`, timestamp/randomness/order/loop tags | ENV primarily |

| `ctx.compiler.*`, `ctx.storage.*`, `ctx.platform.*`, assembly or compiler-known-bug tags | PLATFORM primarily |

A few short annotated examples show how multi-label line mapping should work.

| ID | Language | Snippet fragment | Key tags | Root sets | Comment |

|---|---|---|---|---|---|

| A | Solidity | `require(tx.origin == owner);` | `risk.auth.tx_origin`, `sem.auth.role_check` | AUTH | Direct caller-auth bug surface |

| B | Solidity | `(bool ok,) = msg.sender.call{value: share}("");` | `sem.call.low_level`, `sem.call.value_transfer` | FLOW, VALUE | External interaction owns the line semantics |

| C | Solidity | `shares[msg.sender] = 0;` \*\*after\*\* B | `risk.flow.state_write_after_call`, `sem.state.balance_write` | STATE, FLOW, VALUE | Same vulnerability family, different causal line |

| D | Solidity | `bytes32 h = keccak256(abi.encodePacked(admins, users));` | `risk.hash.encode_packed_dynamic` | VALIDATE, AUTH | Ambiguous commitment affecting authorization |

| E | Vyper | `success: bool = raw_call(target, payload, revert_on_failure=False)` | `sem.call.low_level`, `risk.call.unchecked_return` if `success` unused | FLOW | Vyper-specific call form |

| F | Solidity | `_upgradeToAndCall(newImpl, data);` | `sem.auth.privileged_operation`, `ctx.storage.proxy_layout_sensitive` | AUTH, PLATFORM, STATE | Upgrade lines inherit storage/proxy context |

The recommended prototype roadmap is three phases.

| Phase | Scope | Estimated duration | Main deliverables |

|---|---|---|---|

| \*\*Foundation\*\* | Compiler normalization, executable-line indexing, initial ontology, JSONL store, first 12–15 deterministic tags | \*\*3–4 weeks\*\* | Solidity and Vyper ingestion, AST/source-map projection, initial root-set scorer |

| \*\*Signal fusion\*\* | Slither integration, CFG and taint passes, compiler/dependency risk context, SARIF subset export, top-30 tag coverage | \*\*4–6 weeks\*\* | CI-ready engine with provenance, fingerprints, suppressions, and score explanations |

| \*\*Validation and tuning\*\* | SmartBugs/SWC/CVE regression corpus, reviewer UI or workflow, calibration, false-positive reduction, policy gates | \*\*3–5 weeks\*\* | Benchmark report, threshold tuning, review playbook, rollout criteria |

The highest-priority sources to consult and operationalize are these.

| Source family | Why it matters |

|---|---|

| \*\*OWASP SCWE and SCSVS\*\* | SCWE is maintained, explicitly distinguishes weaknesses from vulnerabilities, and is designed to bridge SCSVS and SCSTG; it is the best maintained weakness vocabulary for mapping examples and mitigations. |

| \*\*SWC registry and EIP-1470\*\* | Still widely referenced by tools and reports; EIP-1470 explains the SWC conceptual model and test-case purpose, even though the registry is stale. |

| \*\*EEA EthTrust specification and checklist\*\* | Best normative source for version-aware requirements, external calls, compiler policy, least privilege, and certification-style review criteria. |

| \*\*NVD/CVE records for compilers and libraries\*\* | Necessary for version-aware context tags and regression tests grounded in real incidents. Vyper and OpenZeppelin CVEs are especially valuable. |

| \*\*Solidity docs\*\* | Essential for source maps, standard-json outputs, metadata, known compiler bugs, security considerations, storage layout, and SMTChecker. |

| \*\*Vyper docs\*\* | Essential for source maps, layout, JSON interface, archives, integrity, bounded loops, `@nonreentrant`, and release/versioning policy. |

| \*\*Slither docs and paper\*\* | Best open frontend for AST/IR/dataflow/taint with CI integration, custom detectors, source locations, and Vyper support. |

| \*\*MythX and Mythril docs\*\* | Useful for optional symbolic/fuzzing evidence and for understanding the limits of generic automation on business logic. |

| \*\*SmartBugs and G-Scan\*\* | SmartBugs is a practical evaluation corpus; G-Scan is strong evidence that line-level localization is achievable and measurable. |

| \*\*OpenSCV\*\* | Helpful intellectual support for why an internal stable root-cause layer should be separated from external vulnerability catalogs. |

\*\*Open questions and limitations.\*\* This report specifies the design for \*\*Solidity and Vyper on the EVM\*\*. Other smart-contract ecosystems and languages are intentionally left unspecified. It also assumes that per-line labeling is a \*\*security-semantic responsibility model\*\* rather than a claim that each labeled line is exploitable. That distinction is important, because SCWE itself also distinguishes weaknesses from vulnerabilities, and real-world tools such as MythX and Mythril explicitly do not eliminate the need for human review on business logic.
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->









我去这一期有1000多人啊！！！

今天开源了我写的skill，有点成就感哈哈哈
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->










It has been six months since I began my journey into Web3 security.

I started with almost no knowledge — learning the fundamentals step by step, then moving into audit contests and bug bounties. Slowly, my confirmed findings went from 0 to 1, then 2, then 3...

I’m truly grateful to have discovered such a fascinating field before the age of 20. These past six months have been some of the most exciting and rewarding experiences of my life.
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->











## \# 区块链智能合约系统漏洞的根因集合分析

\## 执行摘要

本文把“智能合约漏洞”严格建模为一个\*\*证据语料诱导的全集\*\* $U\_C$，而不是一个无法穷尽的开放世界全集 $U^\\\*$。之所以这样定义，是因为 OWASP SCWE 明确区分了 _weakness_（弱点）与 _vulnerability_（漏洞）：弱点是在一定条件下可导向漏洞的条件，漏洞则是会导致不良安全后果的可利用缺陷；EIP-1470 也把漏洞定义为一个或多个弱点导致智能合约系统进入不希望状态。基于这一点，本文将 OWASP Top 10 2026、OWASP SCWE v1.0、SWC/EIP-1470、学术论文与 NVD/CVE 中可归约到合约系统安全失败的“漏洞样本或 exploit-enabling 弱点实例”统一并入 $U\_C$。这一做法既保留了工程可验证性，又与 NIST Bugs Framework 把漏洞理解为“弱点链”这一形式化思路一致。

在该全集上，我给出一个\*\*七子集根因覆盖\*\*：

$R\_{\\text{auth}}$ 授权与身份绑定失效、$R\_{\\text{logic}}$ 业务规则与不变量建模失效、$R\_{\\text{order}}$ 时序/重入/排序失效、$R\_{\\text{arith}}$ 数值/记账/资源边界失效、$R\_{\\text{trust}}$ 外部依赖与信任边界失效、$R\_{\\text{runtime}}$ 语言/编译器/EVM/升级语义失效、$R\_{\\text{validate}}$ 输入/编码/签名/消息验证失效。每个根因都被形式化为一个谓词 $P\_i(v)$，对应子集 $R\_i=\\{v\\in U\_C\\mid P\_i(v)\\}$。这些子集\*\*不是划分\*\*，因为真实漏洞通常多因叠加；但它们构成一个\*\*覆盖\*\*：$\\bigcup\_i R\_i = U\_C$。同时，我把闪电贷单独视为一个\*\*放大算子\*\* $A\_{\\text{flash}}$，而不是原生根因；这与 OWASP 2026 对 flash loan 的表述——“本身不是漏洞，而是放大底层弱点的攻击工具”——一致，也与 2025 年针对真实攻击的 SoK 所提出的“exploit chains”观点一致。

对工程实践最重要的结论有三点。第一，\*\*最高频和最高危的根因并不只是经典代码 bug\*\*。OWASP 2026 的 incident-based 排名把访问控制、业务逻辑、预言机操纵、升级代理等都提升到前列；2025 incident data 也表明 Business Logic 与 Access Control 的频率和损失都极高。第二，\*\*智能合约根因必须超越“代码语法错误”来理解\*\*：学术综述已经把根因扩展到认证授权、外部依赖、语言/工具链、Ethereum 设计实现，而真实世界 SoK 又进一步把根因提升到协议逻辑、生命周期/治理、外部依赖和经典漏洞四层。第三，\*\*当前自动化工具覆盖极不均衡\*\*：静态分析、符号执行与模糊测试在重入、整数错误等方面有效，但对现实中的协议逻辑、治理、跨协议依赖与 exploit chain 覆盖不足；现有研究甚至发现自动化工具对高影响现实攻击的命中率远低于人们期待。

需要预先说明的是：本文\*\*范围聚焦公开链上的 EVM 智能合约系统\*\*，默认以 Solidity 为主，兼顾 EVM 相关语言/编译器（如 Vyper、Yul、L2 编译器）与 EVM 兼容链；对非 EVM 平台只做“相似 root cause 的保守注记”，不做同等强度的形式化归纳。NIST 将智能合约定义为区块链上的代码与数据集合，并明确指出不是所有区块链都运行智能合约；OWASP 2026 则在重入、闪电贷、升级机制等条目中多次说明非 EVM 链存在\*\*类似模式\*\*。

\## 范围、假设与方法

\### 范围与假设

本文的对象是\*\*公共智能合约平台\*\*上的合约系统，核心样本来自 Ethereum 与 EVM-compatible chains。默认语言为 Solidity，因为 EEA EthTrust 的认证规范就是“写给 Solidity 智能合约”的；同时，工具链与语言层样本还包括官方 Solidity 文档列出的编译器/平台已知 bug 维度，以及 NVD 中可直接映射到 EVM 语言或编译器的问题，如 Vyper `_abi_decode`、OpenZeppelin `SignatureChecker`、ZKsync Yul 求值顺序缺陷。

威胁模型上，本文假定攻击者可以作为任意外部调用者、恶意合约、治理参与者、矿工/构建者允许范围内的排序参与方、以及被错误信任的预言机/桥/代币/外部协议参与系统交互；但本文\*\*不把钓鱼、私钥失窃、交易所被黑、恶意面试、供应链社工\*\*等纯链下或非合约向量并入 $U\_C$。这一界限与 OWASP 2026 将“Beyond Smart Contracts: Alternate Top 15 Web3 Attack Vectors”单列处理相一致。

对非 EVM 平台，本文不声称“七根因集合”已经被同样充分验证。OWASP 2026 在 flash loans、reentrancy、proxy/upgradeability 等条目中指出，非 EVM 链存在\*\*对应概念\*\*，例如单批次短时巨额持仓、cross-program recursion、程序升级权限等；但这些平台的执行模型、资源模型与类型系统不同，因此本文只将其作为\*\*外推性注记\*\*而非主结论。

\### 资料优先级

我按下表确定资料优先级，并据此决定何者用于定义、何者用于补样、何者用于例证。

| 优先层级 | 主要来源 | 在本文中的用途 | 备注 |

|---|---|---|---|

| 规范与官方基准 | OWASP Smart Contract Top 10 2026、SCWE v1.0、SCSTG、Solidity 官方文档、EEA EthTrust、NIST IR 8202、NIST SP 800-231、NVD/CVE | 定义漏洞/弱点术语、当前主流风险类别、EVM 官方安全语义、测试方法学、漏洞形式化背景 | OWASP 2026 明确给出基于 2025 incident 与 practitioner survey 的排序；SCWE 明确 weakness/vulnerability 区分；SWC 官方页面则声明其内容自 2020 后不再积极维护，应参考 EthTrust/SCSVS。 |

| 学术综述与 SoK | Atzei 2017、ZEUS 2018、MAIAN 2018、Sereum 2019、Chen 2020、Khan & Namin 2020、Chu 2023、Rezaei 2025 | 提炼根因分层、覆盖性论证、工具能力边界、现实攻击中的 exploit chain | Chen 2020 将根因扩展到认证授权、外部依赖、Solidity/toolchain、Ethereum 设计实现；Rezaei 2025 则归纳出 protocol logic、lifecycle/governance、external dependencies、classic vulnerabilities 四层。 |

| 产业一线安全实践 | Trail of Bits、ConsenSys Diligence、[ethereum.org](http://ethereum.org) 的 Trail of Bits Token Integration Checklist | 为每类根因补充 reviewer/developer 实践、升级/代理/外部代币集成等具体防御建议 | Trail of Bits 特别强调 upgradeability`delegatecall` 带来的复杂度与风险；ConsenSys 强调 EVM 特性、顺序可任意、时间不精确、随机性复杂、以及外部调用危险。 |

| 历史目录与编号体系 | SWC Registry、EIP-1470 | 术语对齐、与历史审计报告/工具的编号兼容 | SWC 重要但已陈旧；EIP-1470 对 weakness、vulnerability、test case 三者关系的定义依然非常有用。 |

\### 方法

方法上，本文采用“\*\*样本汇聚—根因归约—谓词化—覆盖验证\*\*”四步。首先，用 OWASP Top 10 2026、SCWE v1.0、SWC/EIP-1470、官方 Solidity 文档、NVD 中的 EVM 相关案例，以及学术综述/SoK 作为样本池，形成证据语料 $C$。其次，将“漏洞模式名”压缩为“触发 exploit 的必要条件”，得到候选根因。再次，把每个候选根因写成谓词 $P\_i(v)$。最后，将 OWASP Top 10 与一组代表性弱点/漏洞样本映射到这些谓词上，验证并论证 $\\bigcup\_i R\_i=U\_C$ 对语料全集成立。这里的 $U\_C$ 指“由证据语料诱导的漏洞全集”；对尚未出现的未来漏洞，本文只给出开放世界外推，不声称严格完备。

\## 全集与根因集合模型

\### 形式化对象

从 EIP-1470 与 OWASP SCWE 的定义出发，本文把单个漏洞样本 $v$ 抽象为一个五元组：

$$

v=\\langle S,\\sigma\_0,\\tau,\\mathcal{I},\\Omega\\rangle

$$

其中 $S$ 是智能合约系统，$\\sigma\_0$ 是初始链上状态，$\\tau$ 是攻击者可实现的调用/交易/回调/排序轨迹，$\\mathcal{I}$ 是系统应保持的安全/经济/治理不变量集合，$\\Omega$ 是可观察的负面后果（如资金损失、权限劫持、状态破坏、永久锁死、不可用等）。若存在某条可实现轨迹 $\\tau$ 使得执行后违反某个 $I\\in \\mathcal{I}$ 并产生 $\\Omega$，则对应样本被视为 $U\_C$ 中的一个元素。这个定义与 OWASP 对 weakness/vulnerability 的区分、以及 NIST Bugs Framework 把漏洞看成“弱点链”的形式化思路是一致的。

于是，本文的\*\*操作性漏洞全集\*\*定义为：

$$

U\_C=\\{v \\mid v \\text{ 出现在证据语料 }C\\text{ 中，且可被映射为 exploit-enabling 弱点或漏洞实例}\\}

$$

这里的 $C$ 由 OWASP Top 10 2026、OWASP SCWE v1.0、SWC/EIP-1470、官方 Solidity 文档、选定学术综述/经典工具论文、以及 NVD 中的 EVM 相关案例构成。这样定义的好处是：一方面足够严谨，可以做覆盖论证；另一方面又尊重现实世界——因为 SCWE 枚举的是“弱点”，Top 10 枚举的是“高风险漏洞类别”，NVD 记录的又常常是库/编译器/语言实现问题，三类资料天然并不在同一抽象层。

\### 根因覆盖而非根因划分

本文不把根因集看成一个 partition，而看成一个\*\*可重叠覆盖\*\*。原因很简单：真实 exploit 往往是多因叠加。OWASP 2026 对 flash loan 的描述已经明确指出，它通常把 business logic、oracle、arithmetic 或 access control 方面的小缺陷放大成灾难；2025 年的 SoK 更进一步指出，现实攻击通常不是“单一 bug”，而是“human, operational, economic design flaws 与 implementation bugs”串接而成的 exploit chains。

因此，本文采用：

$$

R\_i=\\{v\\in U\_C\\mid P\_i(v)\\}

$$

并允许 $\\exists v: v\\in R\_i\\cap R\_j$；例如，签名重放既是身份/授权问题，也是消息验证问题；存储碰撞型升级漏洞既是 runtime/upgradeability 语义问题，也常伴随 access control 问题；重入既是时序失效，也必然涉及外部交互信任边界。

下图给出本文的根因集合结构。其关键点是：\*\*闪电贷不是根因子集，而是正交的放大集\*\*。

\`\`\`mermaid

flowchart TD

U\["证据语料诱导的漏洞全集 U\_C"\]

U --> R1\["R\_auth\\n授权与身份绑定失效"\]

U --> R2\["R\_logic\\n业务规则与不变量建模失效"\]

U --> R3\["R\_order\\n时序、重入与交易排序失效"\]

U --> R4\["R\_arith\\n数值、记账与资源边界失效"\]

U --> R5\["R\_trust\\n外部依赖与信任边界失效"\]

U --> R6\["R\_runtime\\n语言、编译器、EVM 与升级语义失效"\]

U --> R7\["R\_validate\\n输入、编码、签名与消息验证失效"\]

A\["A\_flash\\n闪电贷放大集"\] -.放大而非根因.-> R1

A -.-> R2

A -.-> R4

A -.-> R5

\`\`\`

这张图与 OWASP 2026 的 Top 10 结构、SCWE 家族划分、Chen 2020 的根因洞见，以及 Rezaei 2025 的 exploit-chain 观点是相容的：我们的七集合可以看成对“协议逻辑—生命周期/治理—外部依赖—经典漏洞”四层框架的进一步细分。

\## 根因分类与形式化定义

下表给出七个根因子集的形式定义。表中“形式谓词”不是规范原文，而是基于 OWASP、EIP-1470、NIST Bugs Framework 与学术根因工作构造出的工作定义，用于做覆盖与最小覆盖论证。

| 根因子集 | 形式谓词 $P\_i(v)$ | 直观含义 | 代表样本 |

|---|---|---|---|

| $R\_{\\text{auth}}$ | 存在敏感状态迁移 $a$ 与调用者 $u$，使得 $u\\notin Allow(a,\\sigma)$ 但仍可执行或等价绕过授权，从而实质性促成利用。 | “谁能做这件事”被绑定错了。 | 缺失 `onlyOwnertx.origin` 认证、角色管理失效、未保护初始化、单点管理员、Meta-tx 未鉴权。 |

| $R\_{\\text{logic}}$ | 存在一条由类型正确、低层检查通过、且未必需要越权/溢出的轨迹 $\\tau$，其执行后违反业务/经济不变量 $I\_{biz}$。 | 代码“按写出来的规则”运行，但规则本身可被套利或破坏。 | 错误奖励分配、缺少供给上限、缺失健康检查、路径依赖状态机、协议经济约束建模失真。 |

| $R\_{\\text{order}}$ | 存在同一组动作在不同交易顺序、回调重入或跨模块交错下得到不同安全结果，且对手可选择不安全顺序。 | “什么时候/以什么顺序发生”被低估了。 | 经典重入、只读重入、跨函数重入、交易顺序依赖、前跑、可提取价值排序。 |

| $R\_{\\text{arith}}$ | 存在整数、精度、缩放、gas、队列或资源边界语义与设计意图不一致，导致记账或可用性不变量被破坏。 | “算得不对”或“资源边界建模不对”。 | 精度损失、向下取整偏差、份额膨胀、overflow/underflow、gas griefing、无界循环、队列增长。 |

| $R\_{\\text{trust}}$ | 合约把某个边界外实体/数据 $x$ 当作可信，而 $x$ 的行为或数据在攻击模型下可被操纵、陈旧、伪造或偏置。 | 错信了外部世界。 | 价格预言机操纵、低流动性 spot、陈旧 oracle、恶意 token/hook、桥消息/证明、区块变量随机数。 |

| $R\_{\\text{runtime}}$ | 利用的实质依赖于语言、编译器、EVM`delegatecall`、代理/升级、存储布局或生命周期语义，而非纯业务逻辑本身。 | “平台/语义层”的坑。 | 代理存储碰撞、未受保护升级、函数选择器冲突、编译器 bug、Yul 求值次序、Vyper `_abi_decode`。 |

| $R\_{\\text{validate}}$ | 存在外来数据 $d$ 被接受为合法，但其格式、长度、范围、目标、nonce、deadline、chainId、domain 或签名语义未被充分验证。 | “接受了不该接受的数据”。 | 缺失长度检查、零地址/坏地址、签名重放、domain separator 缺失、slippage/deadline 缺失、跨链消息校验不足。 |

这一七分法不是凭空发明的。它可以被看成对三条既有研究脉络的统一：

其一，中文综述和英文综述都常用“Solidity/EVM/Blockchain”三层威胁模型；其二，Chen 2020 把根因往“认证授权、外部依赖、Solidity/toolchain、Ethereum design/implementation”推进；其三，Rezaei 2025 又把现实攻击根因提炼成“protocol logic、lifecycle and governance、external dependencies、classic vulnerabilities”四层。本文的七集合正好把这些层次折叠为能直接用于漏洞映射与工程治理的根因谓词。

\## 映射、覆盖性与最小覆盖集

\### 与 OWASP Top 10 的对应关系

先把 OWASP 2026 Top 10 直接映射到根因集合。这里最值得强调的是：\*\*SC04 Flash Loan–Facilitated Attacks 不作为根因集合成员，而作为放大集 $A\_{\\text{flash}}$\*\*。

| OWASP 2026 条目 | 根因映射 | 说明 |

|---|---|---|

| SC01 Access Control Vulnerabilities | $R\_{\\text{auth}}$ | 典型的“谁可调用敏感行为”绑定失效。 |

| SC02 Business Logic Vulnerabilities | $R\_{\\text{logic}}$ | 规则本身可被利用。 |

| SC03 Price Oracle Manipulation | $R\_{\\text{trust}}$ | 外部数据/信任边界失效。 |

| SC04 Flash Loan–Facilitated Attacks | $A\_{\\text{flash}}$ | 放大 $R\_{\\text{logic}},R\_{\\text{arith}},R\_{\\text{trust}},R\_{\\text{auth}}$ 等弱点，而非原生漏洞根因。 |

| SC05 Lack of Input Validation | $R\_{\\text{validate}}$ | 输入、签名、边界值、消息载荷验证失效。 |

| SC06 Unchecked External Calls | $R\_{\\text{trust}} \\cup R\_{\\text{validate}}$ | 既是外部边界问题，也常含返回值/存在性/返回长度验证不足。 |

| SC07 Arithmetic Errors | $R\_{\\text{arith}}$ | 精度、舍入、单位换算与份额计算失效。 |

| SC08 Reentrancy Attacks | $R\_{\\text{order}} \\cup R\_{\\text{trust}}$ | 本质是时序失效，经由外部调用边界触发。 |

| SC09 Integer Overflow and Underflow | $R\_{\\text{arith}}$ | 典型数值语义错误。 |

| SC10 Proxy & Upgradeability Vulnerabilities | $R\_{\\text{runtime}} \\cup R\_{\\text{auth}}$ | 语义/生命周期问题常与升级权限控制叠加。 |

\### 代表性漏洞到根因的映射表

下面不是穷举 SCWE 全表，而是抽取足以覆盖主流漏洞家族的代表性样本。它展示的是\*\*从“已知漏洞名”到“根因谓词”的归约\*\*。

| 已知漏洞或弱点模式 | 代表来源 | 主根因 | 常见次根因 |

|---|---|---|---|

| 经典重入 | SCWE-046；Solidity Security Considerations | $R\_{\\text{order}}$ | $R\_{\\text{trust}}$ |

| 只读重入 / 回调读到陈旧状态 | SCWE-137；OWASP SC08 2026 | $R\_{\\text{order}}$ | $R\_{\\text{trust}}$ |

| 交易顺序依赖 / Front-running / MEV | SCWE-052、SCWE-037、SCWE-142 | $R\_{\\text{order}}$ | $R\_{\\text{logic}}$ |

| 价格预言机操纵 | SCWE-028；SC03 2026 | $R\_{\\text{trust}}$ | $R\_{\\text{logic}}$ |

| 低流动性 spot/TWAP 过短/陈旧数据 | SCWE-112、SCWE-113、SCWE-086 | $R\_{\\text{trust}}$ | $R\_{\\text{validate}}$ |

| 闪电贷治理操纵 | SCWE-101；SC04 2026 | $R\_{\\text{logic}}$ | $R\_{\\text{auth}}$，并受 $A\_{\\text{flash}}$ 放大 |

| 访问控制缺失 / 特权角色管理错误 | SCWE-016、SCWE-017；SC01 2026 | $R\_{\\text{auth}}$ | — |

| 用 `tx.origin` 做授权 | Solidity docs；SCWE-018 | $R\_{\\text{auth}}$ | — |

| Permit/签名重放、缺失 domain separator、过期时间缺失 | SCWE-105、SCWE-055、SCWE-147、SCWE-131 | $R\_{\\text{validate}}$ | $R\_{\\text{auth}}$ |

| 缺失 slippage / deadline / 零地址 / decode 长度检查 | SCWE-090、SCWE-141、SCWE-143、SCWE-122、SCWE-154 | $R\_{\\text{validate}}$ | $R\_{\\text{logic}}$ |

| 未检查外部调用返回值 / 不安全外部调用 | SCWE-048、SCWE-042；ConsenSys 外部调用建议 | $R\_{\\text{trust}}$ | $R\_{\\text{validate}}$ |

| ERC777 hook / ERC721/1155 safe callback / fee-on-transfer / rebase token 集成问题 | SCWE-104、SCWE-138、SCWE-110、SCWE-111；Token Integration Checklist | $R\_{\\text{trust}}$ | $R\_{\\text{order}}$ 或 $R\_{\\text{arith}}$ |

| 精度损失、向下取整、份额/LP 记账偏差 | SC07 2026；SCWE-124；ERC4626 inflation | $R\_{\\text{arith}}$ | $R\_{\\text{logic}}$ |

| 整数溢出/下溢 | SCWE-047；NVD CVE-2018-13783 | $R\_{\\text{arith}}$ | — |

| Gas griefing / 无界循环 / 队列增长 / Block gas DoS | SCWE-059、SCWE-109、SCWE-126、SCWE-058 | $R\_{\\text{arith}}$ | $R\_{\\text{logic}}$ |

| 缺失供给上限、缺失健康检查、错误奖励逻辑 | SCWE-116、SCWE-125；SC02 2026 | $R\_{\\text{logic}}$ | $R\_{\\text{arith}}$ |

| 代理/升级中的 storage collision、初始化前跑、未受保护升级 | SCWE-099、SCWE-098、SCWE-118、SC10 2026 | $R\_{\\text{runtime}}$ | $R\_{\\text{auth}}$ |

| `delegatecall` 误用、选择器/函数碰撞、存在性检查绕过 | Trail of Bits upgrade anti-patterns；SCWE-035、SCWE-144 | $R\_{\\text{runtime}}$ | $R\_{\\text{trust}}$ 或 $R\_{\\text{validate}}$ |

| 语言/编译器/库缺陷导致错误安全语义 | NVD: OZ SignatureChecker、Vyper `_abi_decode`、ZKsync Yul 求值顺序 | $R\_{\\text{runtime}}$ | $R\_{\\text{validate}}$ 或 $R\_{\\text{order}}$ |

| 弱随机数、区块变量作熵源、时间戳依赖 | SCWE-024；OWASP SC08:2023 Insecure Randomness；Solidity docs | $R\_{\\text{trust}}$ | $R\_{\\text{order}}$ |

| 跨链消息 proof/nonce/chainId/decimals 校验不足 | SCWE-034、SCWE-107、SCWE-108、SCWE-133、SCWE-132 | $R\_{\\text{trust}}$ | $R\_{\\text{validate}}$ 与 $R\_{\\text{arith}}$ |

如果把视角提升到 SCWE 家族层面，映射关系会更清楚：SCSVS-AUTH 大体落在 $R\_{\\text{auth}}$；SCSVS-ORACLE、SCSVS-BLOCK、SCSVS-COMM、SCSVS-BRIDGE 的相当一部分落在 $R\_{\\text{trust}}$ 与 $R\_{\\text{validate}}$；SCSVS-DEFI 中 gas/queue/cap/health-check 问题主要落在 $R\_{\\text{arith}}$ 与 $R\_{\\text{logic}}$；SCSVS-CODE 中 overflow/rounding/assembly/outdated compiler/ABI 等则分散到 $R\_{\\text{arith}}$、$R\_{\\text{runtime}}$、$R\_{\\text{validate}}$；GOV 家族中的 quorum/front-running/rate limit 等则落在 $R\_{\\text{logic}}$、$R\_{\\text{order}}$、$R\_{\\text{auth}}$。因此，从 SCWE 家族到七根因集合的归约是\*\*满覆盖\*\*的。

\### 覆盖性论证

覆盖性的关键并不在于“把每个漏洞名都抄一遍”，而在于证明\*\*每类漏洞都至少满足一个谓词\*\*。这件事可以从三个方向同时验证。

第一，OWASP 2026 Top 10 已经被完整归约。SC01、SC02、SC03、SC05、SC07、SC08、SC09、SC10 都能直接落到七根因中的某一个或几个；SC06 落在 $R\_{\\text{trust}}$ 与 $R\_{\\text{validate}}$ 的交集上；SC04 则被处理为放大算子而不是根因。

第二，SCWE v1.0 的家族结构与这套七分法天然兼容。SCWE 自身已经按 AUTH、ORACLE、BLOCK、BRIDGE、DEFI、COMP、CRYPTO、CODE、GOV、COMM 等家族组织，而这些家族几乎都能被视为七个谓词在不同抽象层上的展开。由于 SCWE 明确把“弱点”当作漏洞前置条件，这种映射不仅覆盖“漏洞”，还覆盖了 exploit-enabling 条件本身。

第三，学术根因工作给出了相同方向的支持。Chen 2020 指出，14 类代表性漏洞中相当部分由认证授权失败、外部依赖、Solidity/toolchain 缺陷与 Ethereum 设计实现问题引起，并强调“incompetent Ethereum smart contract programming”与 Solidity 的不可靠性是独立根因；Rezaei 2025 则表明现实世界高损失攻击可追溯到 protocol logic、lifecycle and governance、external dependencies、classic smart contract vulnerabilities 四层。本文的七根因集合只是把这些层次再细化，使其足够可操作地对接 OWASP Top 10 与工程检测。

下面这张实体关系图表达的是“全集—子集—放大集”的关系。

\`\`\`mermaid

erDiagram

U\_C ||--o{ R\_auth : "contains"

U\_C ||--o{ R\_logic : "contains"

U\_C ||--o{ R\_order : "contains"

U\_C ||--o{ R\_arith : "contains"

U\_C ||--o{ R\_trust : "contains"

U\_C ||--o{ R\_runtime : "contains"

U\_C ||--o{ R\_validate : "contains"

R\_auth }o--o{ R\_runtime : "overlaps"

R\_auth }o--o{ R\_validate : "overlaps"

R\_order }o--o{ R\_trust : "overlaps"

R\_arith }o--o{ R\_logic : "overlaps"

R\_trust }o--o{ R\_validate : "overlaps"

A\_flash }o--o{ R\_auth : "amplifies"

A\_flash }o--o{ R\_logic : "amplifies"

A\_flash }o--o{ R\_arith : "amplifies"

A\_flash }o--o{ R\_trust : "amplifies"

\`\`\`

\### 最小覆盖集论证

严格说，开放世界里的“绝对最小根因基”无法被有限证明，因为未来还会出现新漏洞；但对本文定义的证据全集 $U\_C$，可以给出\*\*相对最小\*\*或至少\*\*不可约\*\*的覆盖论证。证明方法是构造一个\*\*见证集\*\* $W\\subseteq U\_C$，使得每个根因集合都有一个“去掉它就无法覆盖”的见证漏洞。

| 见证样本 | 见证的必要根因 | 说明 |

|---|---|---|

| 任何人可 `transferOwnership` 或 `tx.origin` 授权 | $R\_{\\text{auth}}$ | 这是纯授权绑定问题，不需要外部 oracle、精度、升级或复杂输入才能成立。 |

| 错误奖励逻辑 / 缺失 supply cap / 缺失 health check | $R\_{\\text{logic}}$ | 即使没有溢出、没有越权、没有重入，规则本身也可被利用。 |

| 经典 withdraw-before-update 重入 | $R\_{\\text{order}}$ | 本质必须诉诸可重入交错执行。 |

| 份额精度损失 / 向下取整套利 | $R\_{\\text{arith}}$ | 不需要 oracle、delegatecall 或授权失败即可单独成立。 |

| 低流动性现货价格预言机操纵 | $R\_{\\text{trust}}$ | 即使输入格式合法，也因信任了可操纵的外部价格而失败。 |

| 代理升级中的 storage collision / re-initialize | $R\_{\\text{runtime}}$ | 这类漏洞依赖 proxy/delegatecall/storage layout/initialize 语义。 |

| calldata 长度未验证 / 签名重放 / domain 缺失 | $R\_{\\text{validate}}$ | 这是“把不合法数据当合法”的独立失败模式。 |

因此，若去掉七集合中的任意一个，见证集 $W$ 中都至少有一个元素无法被覆盖。于是，\*\*相对于见证集 $W$\*\*，七集合是最小的；\*\*相对于证据全集 $U\_C$\*\*，七集合至少是不可约的、且在当前语料上没有显著冗余。考虑到 OWASP 2026 与现实 incident 数据已经把 access control、business logic、arithmetic、oracle、reentrancy、upgradeability、input validation 分别列为高重要度项，这个“七集合最小覆盖”不仅数学上可辩护，也与工程世界的风险结构一致。

\## 检测与缓解策略

现有工具与方法并非“一个工具打天下”。OWASP SCSTG 试图把测试方法学标准化，Slither 提供静态分析，Echidna 提供性质驱动模糊测试，Manticore 提供符号执行，SMTChecker 提供编译期形式化验证，Sereum 展示了面向部署后重入的运行时监测可能性。但针对现实世界攻击，学术研究已经指出自动化工具总体仍偏向于检测可模板化的经典代码漏洞，而对真实 exploit chain、逻辑缺陷、治理缺陷和跨协议依赖的支持仍明显不足。

| 根因子集 | 优先检测方法 | 主要缓解策略 |

|---|---|---|

| $R\_{\\text{auth}}$ | 基于 SCSTG 的 identity / least privilege / critical function 测试；静态审计特权函数；角色矩阵与升级角色审计。 | 最小权限、显式 RBAC、双步所有权转移、多签、timelock、禁用 `tx.origin`、初始化/再初始化显式保护。 |

| $R\_{\\text{logic}}$ | 以不变量为中心的 specification review、Echidna 性质测试、SMTChecker `assert` 证明、分阶段主网上线。 | 先定义业务不变量，再写代码；加入 supply cap / health check / rate limit / pause / emergency stop；对关键路径做 scenario-based 审计。 |

| $R\_{\\text{order}}$ | 交易序列模糊测试、符号执行、重入 runtime monitor、跨函数/跨模块 sequence tests。 | CEI、pull over push`nonReentrant`、谨慎处理 hook/callback、对敏感流程采用 commit-reveal 或 MEV 保护、把“任意顺序调用”视为默认威胁。 |

| $R\_{\\text{arith}}$ | 固定点/份额计算边界测试、极值与 first-depositor 场景测试、差分测试与不变量测试、SMTChecker 检查算术断言。 | 明确舍入方向、统一 decimals/scale、对多步计算保持单一精度语义、检查零供给/极端比例情形、把 gas/queue/resource 上限写成显式约束。 |

| $R\_{\\text{trust}}$ | external call review、oracle integration review、token integration checklist、桥证明/消息验证测试。 | 去中心化 oracle、TWAP/staleness 验证、circuit breaker、把任意 token 当成“不标准 ERC”、校验 callback/hook 副作用、桥消息做 sender/proof/chainId/nonce 验证。 |

| $R\_{\\text{runtime}}$ | 编译器版本锁定、已知 bug 检查、upgradeability diff、storage layout check、代理/实现分层审计。 | 尽量偏向简单和不可升级设计；若必须升级，用初始化保护、append-only storage discipline、实施前后 layout diff、减少 inline assembly/low-level call；升级治理附带 timelock 和回滚计划。 |

| $R\_{\\text{validate}}$ | 参数边界测试、calldata 长度测试、EIP-712/domain/nonce/expiry 测试、桥 payload schema test。 | 所有外来数据一律 schema-first：长度、范围、地址、deadline、slippage、chainId、nonce、domain、proof、返回数据长度都做显式检查。 |

一个额外但非常关键的实践结论是：\*\*外部代币集成必须被当成独立审计面\*\*。Trail of Bits 的 token integration checklist 明确提醒，不同 ERC20/777/721 的行为远非“同质”，包括 `transfer` 是否返回 `bool`、是否有 hook、是否存在 allowance race、是否是 fee-on-transfer 或 rebase token 等；这意味着“把外部 token 当成普通整数余额容器”的做法在根上就属于 $R\_{\\text{trust}}$ 与 $R\_{\\text{validate}}$ 的双重风险。

另一个不能忽略的现实是：\*\*升级性以修复能力换来攻击面\*\*。ConsenSys 指出可升级、模块化、复用并不总是安全的同义词；Trail of Bits 则更直接，认为升级模式显著增加复杂度与 low-level 风险。把“可补丁”当作绝对安全收益，往往会低估 $R\_{\\text{runtime}}$ 与 $R\_{\\text{auth}}$ 的系统性扩张。

\## 研究空白、局限与参考资料

\### 研究空白

最明显的空白，是\*\*漏洞研究与现实攻击根因之间的错位\*\*。2025 SoK 明确指出，许多高损失事件并不是孤立的 implementation bug，而是设计、治理、外部依赖与代码弱点组合成的 exploit chain；而对工具效果的研究又显示，自动化工具更擅长 reentrancy 这类模式化问题，对现实高影响攻击的广覆盖仍不足。

第二个空白，是\*\*数据集与标签体系缺乏统一的多根因表达\*\*。NIST Bugs Framework 为“弱点链”提供了形式化基础，但智能合约领域的主流公开目录仍然在弱点、漏洞、攻击技法与事故根因之间摇摆；SWC 重要但已不再积极维护，OWASP SCWE 正在补位，学术界也仍在反复讨论数据集构造缺陷与覆盖不足。

第三个空白，是\*\*非 EVM 与跨链系统的同构/异构根因迁移\*\*。OWASP 2026 已经开始在 flash loan、reentrancy、upgradeability 等条目中注明“非 EVM 链上的类似模式”，但目前严谨的形式化与工具链大多仍以 EVM 为中心。桥、跨链消息、proof 验证、链 ID 与跨域签名问题，实际上提示我们未来更需要“跨执行环境根因图谱”。

\### 局限与开放问题

本文最重要的局限是：$\\bigcup\_i R\_i = U\_C$ 的结论是对\*\*证据语料诱导全集\*\*成立，而不是对“所有未来智能合约漏洞”作先验数学证明。由于 smart contract security landscape 持续变化，OWASP 本身也在按年度 incident data 与 practitioner survey 重排类别，根因体系应被视为\*\*当前最稳健的工作基\*\*，不是永久定理。

另一个局限是：本文把 flash loan 明确从“根因集合”中拿出来，放到“放大算子”里。这个处理在分析上更严格，但也意味着某些行业报告里把“flash loan attack”当作独立漏洞类别时，读者需要做一次抽象层转换。OWASP 2026 自己也承认 flash loan 常常是放大底层逻辑、定价、算术、治理弱点的机制，因此本文选择了更强的因果解释。

还需要开放讨论的问题包括：如何给治理/升级/跨链事件建立更细粒度的形式不变量；如何把运行时监测与形式化验证组合起来；以及如何构造真正反映 exploit chain 的多标签 benchmark。现有文献已指出工具覆盖、数据集构造与现实攻击复杂性之间存在系统性缺口。

\### 参考资料

本报告最核心的一手规范与基准资料包括：OWASP Smart Contract Top 10 2026、OWASP SCWE v1.0、OWASP SCSTG、Solidity 官方安全文档、EEA EthTrust、NIST IR 8202、NIST SP 800-231，以及 NVD/CVE 的 EVM 相关条目。它们分别承担了风险排序、弱点定义、测试方法、平台语义、认证规范、形式分类和真实漏洞样本的角色。

学术脉络方面，最重要的主干包括：Atzei 等的以太坊攻击 SoK、ZEUS、MAIAN、Sereum、Chen 等的 Ethereum systems security survey、Khan & Namin 的 20 类漏洞综述、Chu 等关于数据源/检测/修复的综述，以及 Rezaei 等针对 2022–2025 真实攻击根因的 SoK。这些材料共同支持了本文从“漏洞模式”走向“根因集合”的归纳。

产业实践方面，Trail of Bits 的升级/代理与 token integration 指南、Slither/Echidna/Manticore 工具体系，以及 ConsenSys Diligence 对外部调用、EVM 特性、顺序与失败安全的建议，为每个根因提供了落实到开发与审计流程的检查项。

\###### 综合起来，本文的最终判断是：在 EVM 公链智能合约系统中，把漏洞全集 $U\_C$ 归约为七个可重叠根因子集，再把 flash loan 视作正交放大算子，是当前最有解释力、也最适合连接\*\*规范、审计、工具、数据集和现实攻击\*\*的一种分析框架。它既能覆盖 OWASP 2026 与 SCWE v1.0 的主流样本，也能解释为什么现实世界的高损失事件往往不是“一个 bug”，而是一串可以被资本、排序、治理与外部依赖放大的根因链。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->












If we want to build a real audit agent, the most valuable input is not just “more code.” High-signal sources should include: OWASP SCWE A modern weakness taxonomy for smart contracts. [https://scs.owasp.org/SCWE/](https://scs.owasp.org/SCWE/) EEA EthTrust Turns security risks into concrete security requirements and checklists. [https://entethalliance.org/specs/ethtrust-sl/](https://entethalliance.org/specs/ethtrust-sl/) [https://entethalliance.org/specs/ethtrust-sl/v3/checklist.html](https://entethalliance.org/specs/ethtrust-sl/v3/checklist.html) SWC / EIP-1470 Legacy but still useful for mapping old reports, tools, and vulnerability IDs. [https://swcregistry.io](https://swcregistry.io) [https://eips.ethereum.org/EIPS/eip-1470](https://eips.ethereum.org/EIPS/eip-1470) NVD / CVE Real-world vulnerability cases, especially compiler, library, and dependency issues. [https://cve.org](https://cve.org) [https://nvd.nist.gov/vuln](https://nvd.nist.gov/vuln) Solidity / Vyper docs Compiler behavior, source maps, storage layout, known bugs, and language-specific assumptions. [https://docs.soliditylang.org](https://docs.soliditylang.org) [https://docs.vyperlang.org](https://docs.vyperlang.org) Static analysis / symbolic execution outputs Slither, Mythril, fuzzing traces, invariant violations, call graphs, and source-level evidence. [https://github.com/crytic/slither](https://github.com/crytic/slither) [https://github.com/ConsenSysDiligence/mythril](https://github.com/ConsenSysDiligence/mythril) The key is not to dump all sources into the agent. The key is to turn them into structured tags: access control, validation, external calls, state transitions, accounting, environment assumptions, and platform/compiler risks. An audit agent should not only “read code.” It should know which security responsibility each line of code carries.
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
