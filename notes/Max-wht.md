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
# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->
If we want to build a real audit agent, the most valuable input is not just “more code.” High-signal sources should include: OWASP SCWE A modern weakness taxonomy for smart contracts. [https://scs.owasp.org/SCWE/](https://scs.owasp.org/SCWE/) EEA EthTrust Turns security risks into concrete security requirements and checklists. [https://entethalliance.org/specs/ethtrust-sl/](https://entethalliance.org/specs/ethtrust-sl/) [https://entethalliance.org/specs/ethtrust-sl/v3/checklist.html](https://entethalliance.org/specs/ethtrust-sl/v3/checklist.html) SWC / EIP-1470 Legacy but still useful for mapping old reports, tools, and vulnerability IDs. [https://swcregistry.io](https://swcregistry.io) [https://eips.ethereum.org/EIPS/eip-1470](https://eips.ethereum.org/EIPS/eip-1470) NVD / CVE Real-world vulnerability cases, especially compiler, library, and dependency issues. [https://cve.org](https://cve.org) [https://nvd.nist.gov/vuln](https://nvd.nist.gov/vuln) Solidity / Vyper docs Compiler behavior, source maps, storage layout, known bugs, and language-specific assumptions. [https://docs.soliditylang.org](https://docs.soliditylang.org) [https://docs.vyperlang.org](https://docs.vyperlang.org) Static analysis / symbolic execution outputs Slither, Mythril, fuzzing traces, invariant violations, call graphs, and source-level evidence. [https://github.com/crytic/slither](https://github.com/crytic/slither) [https://github.com/ConsenSysDiligence/mythril](https://github.com/ConsenSysDiligence/mythril) The key is not to dump all sources into the agent. The key is to turn them into structured tags: access control, validation, external calls, state transitions, accounting, environment assumptions, and platform/compiler risks. An audit agent should not only “read code.” It should know which security responsibility each line of code carries.
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
