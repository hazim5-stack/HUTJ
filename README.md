<div align="center">

# HUTJ
### Hazim Universal TV Jailbreak

**Local-network TV engineering skills for OpenAI Codex and Claude Code**

![Status](https://img.shields.io/badge/status-skills%20preview-orange) ![Skills](https://img.shields.io/badge/skills-15-blue) ![Runtime](https://img.shields.io/badge/execution-local%20LAN-green)

</div>

## What is HUTJ?

HUTJ is a **repository of AI agent skills**, not a separate TV app, hosted backend, cloud automation service or universal exploit. Run **Codex CLI or Claude Code on a computer on the same local network as your TV**. The agent reads HUTJ skills and can use the computer's terminal and supported vendor CLI utilities to diagnose and manage authorized devices.

**Model connectivity:** Codex and Claude Code may still require internet access for AI inference. **TV communication is intended to stay on your LAN**. HUTJ does not provide an external relay or server.

## Quick Start

```bash
git clone https://github.com/hazim5-stack/HUTJ.git
cd HUTJ
```

Start **Codex CLI** or **Claude Code** from this repository directory. Their respective entrypoints are:

- Codex: `AGENTS.md` and `.agents/skills/hutj/SKILL.md`
- Claude Code: `CLAUDE.md` and `.claude/skills/hutj/SKILL.md`

Example request:

> Use HUTJ to discover my LG webOS TV on my local network. Identify model and firmware read-only, then show compatible developer options. Ask before any changes.

To explicitly invoke the skill, use `$hutj` in Codex or `/hutj` in Claude Code where supported by your installed CLI version. You can also ask in natural language.

## Supported Skills

| TV platforms | Shared capabilities |
|---|---|
| LG webOS | Device discovery |
| Samsung Tizen | Firmware analysis |
| Android TV | Root/jailbreak compatibility checks |
| Google TV | Home composer |
| Amazon Fire TV | App management |
| Apple tvOS | Backup and recovery |
| Roku TV | Network ad-block guidance |
| Hisense VIDAA | |

Platform and shared guides live in `skills/<name>/SKILL.md`, with `registry.json` as an index. Skill instructions are **not proof that the corresponding CLI integration is implemented or tested**.

## Architecture

```text
Codex CLI / Claude Code (on your computer)
            |
      HUTJ skills
            |
    Local OS terminal
            |
  Vendor CLI / LAN protocol
            |
  Your TV on the same LAN
```

No HUTJ daemon, backend, proxy or hosted API is required. Optional vendor tooling (ADB, SDB, webOS CLI, Xcode etc.) must be installed only when needed, with your approval.

## Safety

- Only connect to TVs you own or are authorized to administer.
- Identify exact model, firmware and vendor restrictions before proposing actions.
- Read-only discovery first; require explicit approval for installation, disabling apps, DNS changes, rooting or flashing.
- Developer Mode, sideloading, root and jailbreak are distinct.
- Never ask for passwords, private keys or pairing tokens in chat.
- Never claim that backup/rollback is possible unless confirmed on the device.

## Status and Roadmap

**v1.1:** Codex and Claude Code entrypoint skills, shared guidance and a local-only operating model. **This is an instructional skills pack**; it does not yet contain a universal discovery executable, vendor adapter implementation or verified exploit database.

Next: local read-only discovery scripts, capability manifests, device-specific test fixtures and automated validation.

See [Roadmap](docs/ROADMAP.md).

## Credits

Built by **Hazim Batwa**. Related independent projects include [CleanYourTV](https://github.com/Gathin23/cleanyourtv), [Free My TV](https://github.com/simbasjungles/free-my-tv) and [TizenBrew Installer](https://github.com/reisxd/TizenBrewInstaller). Their code is not included here.

## License

No open-source license has been selected. All rights reserved by default until a license is added.
