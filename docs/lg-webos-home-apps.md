# LG webOS home dashboard reference — FreeMyTvWebOS

This document evaluates [danielthejoker18/FreeMyTvWebOS](https://github.com/danielthejoker18/FreeMyTvWebOS) as an **independent reference implementation** for HUTJ. Its README and key implementation files were reviewed on 2026-10-22. The project states it is MIT-licensed; verify the actual license and version before reusing any code. HUTJ **does not vendor or execute** its scripts, UI or binary artifacts.

## What the upstream project does

- Builds an LG webOS **ordinary launchable app**, with `app/appinfo.json` identifying `org.webos.freemytv`, version `1.2.1`, `main: index.html`, and permissions including `applications`, `applications.launcher`, and `system.notifications`.
- Claims a standalone on-TV dashboard with remote-accessible app shelf, optional Open-Meteo weather and color themes, optional media discovery, and OLED-oriented idle display.
- Documents official Developer Mode + Key Server pairing and app installation, and offers a Python installer and build script as an alternative to a GUI.
- Offers a remote Quick Access number workaround to launch the custom dashboard; this is **not** proof of Home button replacement or root access.

## Observed reference installer mechanics (not HUTJ commands)

1. `scripts/install.py` sends an SSDP `M-SEARCH` to `239.255.255.250:1900` for `urn:schemas-upnp-org:device:MediaRenderer:1`; it then probes TCP 9922. This is a *heuristic*, not authenticated vendor/model discovery.
2. After Developer Mode and Key Server setup, the script requests an encrypted key from `http://<TV-IP>:9991/webos_rsa` and asks for a local passphrase to decrypt it.
3. It copies an IPK over SSH/SCP to `prisoner@<TV-IP>` on port `9922`.
4. It requests installation using `luna://com.webos.appInstallService/dev/install` and requests launch via `luna://com.webos.applicationManager/launch`.
5. `scripts/build.py` first tries `ares-package` and then a manual ar/tar IPK packager fallback.

These observations come from upstream **source code**; **none were executed or validated against an actual TV** during this HUTJ update.

## Security review and non-adoption decisions

Do **not** reproduce reference installer behavior blindly:

- The upstream SSH options include `StrictHostKeyChecking=no`. HUTJ must maintain reliable host-key verification instead.
- The installer writes both encrypted and decrypted authentication keys under `~/.ssh/`. HUTJ should prefer supported, secure developer tooling and avoid storing unencrypted keys persistently. Keys and passphrases must not appear in AI chat, commits, logs or telemetry.
- The raw key endpoint uses HTTP on the local network. Use only a trusted LAN after confirming TV identity and understand that developer pairing is security-sensitive.
- The reference `python scripts/install.py` is **not** a built-in HUTJ command. Obtain user approval and vet third-party code before running it.
- Verify binary/IPK provenance, package ID, permissions and hash. Never silently install or uninstall.
- Project README compatibility/performance figures are unverified claims, not independently measured compatibility guarantees.

## How HUTJ can use the reference

### Immediate (skills/documentation)
- Suggest read-only LG discovery and toolchain checks, with model verification.
- Explain official Developer Mode / Key Server pairing as one option.
- Audit IPK manifest and capability restrictions before proposing installation.
- Support home composer requests for a *standalone* launchable dashboard that uses a TV-friendly D-pad/pointer UX.
- Include a reversible exit/uninstall plan; note Developer Mode expiration.

### Future implementation (requires device testing)
- Vendor-specific SSDP responses plus authenticated LG model/firmware detection.
- Safe, optional `ares-*` CLI wrapper with dry-run and explicit approval.
- Host-key verified pairing session and ephemeral secret handling.
- `appinfo.json` parser, IPK signature/provenance checks and test fixtures.
- Feature-gated Luna app inventory and launch, only where supported by device permissions.
- TV UI regression tests on known firmware, no assumed Home-key replacement.

## Practical example for Codex or Claude Code

> Using HUTJ, inspect my LG webOS TV on my authorized local network. Check its model/firmware and available Developer Mode tools read-only. Evaluate whether a standalone launchable dashboard IPK is compatible with the device and explain the required approvals, risks, verification, and uninstall steps. Do not install anything without asking.

## Attribution
Reference: **Free My TV (for LG webOS)** by **danielthejoker18**, under its upstream MIT license. See the [original repository](https://github.com/danielthejoker18/FreeMyTvWebOS). The reference author's code is **not** incorporated into this repository.
