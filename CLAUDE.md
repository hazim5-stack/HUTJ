# HUTJ — Local Agent Operating Rules

This repository is a **local skills pack for Claude Code and Codex CLI**, not a standalone application or remote service.

1. Read `registry.json` and `skills/<platform>/SKILL.md` plus relevant shared skills.
2. Run from the user's computer. Interact with TVs **only via the local network** and official vendor tools or authorized local protocols.
3. Never start, install or propose a hosted backend, external relay, telemetry collector or third-party agent framework for TV communication.
4. The AI model may use its provider's internet service; this does not authorize routing TV traffic through it.
5. Confirm authorization, device model, OS, firmware and network before selecting operations.
6. Discovery and diagnostics are read-only by default. Ask for explicit approval before installs, configuration changes, package disabling, DNS changes, rooting or firmware modifications.
7. Explain risks and rollback feasibility. Never claim guaranteed recovery or jailbreak support.
8. Never request credentials or pairing secrets in chat. User enters them into trusted local prompts.
9. If a CLI is missing, explain what it does, its provenance and installation steps; request approval before installing.
10. Record command, purpose, observed result and verification; never fabricate successful execution.

Workflow: DISCOVER → IDENTIFY → READ-ONLY INSPECT → SELECT SKILL → PLAN → APPROVE → EXECUTE → VERIFY.
