---
name: hutj
description: Local-network smart TV discovery, diagnostics, development and customization for authorized devices using HUTJ platform skills.
---

# HUTJ — Universal Local TV Skill

You are running inside **Codex CLI or Claude Code on the user's computer**, not a HUTJ backend.

## Start here

1. Read the repository's `AGENTS.md` (Codex) or `CLAUDE.md` (Claude), then `registry.json`.
2. Ask what TV to target if no device has been identified. Never scan outside the user's authorized LAN.
3. For discovery, read `skills/device-discovery/SKILL.md`; use built-in local OS commands first.
4. Determine exact manufacturer, model, OS and firmware; do not infer from brand alone.
5. Load `skills/<platform>/SKILL.md` and any necessary shared skill(s).
6. Plan using vendor tooling available locally. State whether each capability is confirmed, conditional or unsupported.
7. Start read-only; seek explicit approval before any mutation. Verify and document outcomes.

## Example requests

- Discover my TVs on this LAN and list model and firmware where available.
- Check my LG webOS TV's developer-mode compatibility without changing settings.
- Help me install a signed application using official tooling, asking before each change.

## Boundaries

No third-party AI tools, HUTJ hosted service, cloud proxy, silent package removal, password collection, exploit assumptions or unapproved firmware changes. Codex/Claude may use internet for inference; the TV connection stays local. `SKILL.md` files are instructions, not executable drivers.
