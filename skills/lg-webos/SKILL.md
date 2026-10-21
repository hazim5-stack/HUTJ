---
name: lg-webos
description: HUTJ AI skill for LG webOS discovery, developer pairing, authorized IPK app workflows, and home customization
version: 1.1.0
---
# LG webOS

## Purpose
Identify and inspect authorized LG webOS televisions, guide official Developer Mode setup, and safely manage compatible applications. Treat alternative TV dashboards as **ordinary apps**, not automatic system launcher replacements or jailbreaks.

## Reference implementation
[FreeMyTvWebOS](https://github.com/danielthejoker18/FreeMyTvWebOS) (MIT licensed) demonstrates an on-TV HTML/CSS/JavaScript dashboard, app shelf, remote navigation, dynamic weather, and a Python-assisted IPK installation flow. Read [the HUTJ compatibility notes](../../docs/lg-webos-home-apps.md) before adapting its procedures. No third-party code or binary from that repository is bundled with HUTJ.

## Recommended tools
LG Developer Mode app, LG webOS developer CLI (ares tools), webOS Dev Manager, SSH/SCP where expressly authorized, and verified .ipk artifacts. Availability depends on model and firmware.

## Read-only-first workflow
1. Confirm ownership and approval to inspect the TV, along with LAN scope. Obtain IP locally; never send PINs, passphrases, keys, or account credentials into chat.
2. Identify the exact manufacturer, model and firmware. SSDP M-SEARCH for UPnP MediaRenderer can **suggest** a device; verify vendor identity using trusted metadata and/or user confirmation. A port check on TCP 9922 merely suggests Developer Mode access and does not prove that a discovered IP belongs to an LG TV.
3. Check availability and versions of `ares-setup-device`, `ares-device-info`, `ares-install`, and `ares-launch`, or a compatible GUI. Do not assert any command works without confirming the installed CLI's help output.
4. If Developer Mode is needed, explain how to install the official Developer Mode app, sign in on the TV, enable Dev Mode, then enable Key Server when required. Explain that it may expire or require renewal.
5. Pair with an official supported tool and preserve host-key verification. Use secure local key storage; **do not copy reference installer defaults** that turn off strict host key checking or leave decrypted private keys exposed. Never print or log pairing secrets.
6. Read application inventory and check the IPK manifest (`appinfo.json`), application ID, required permissions, package source, and model/firmware support **before** installation.
7. Present an explicit install/change plan with exact verified commands, package hash, expected UI, permissions, risks, uninstall path, and caveats about Developer Mode lifetime. Ask for approval.
8. Install only after approval, confirm reported install success and actual launch on the TV, then verify that the default launcher is unchanged.
9. Offer remote-access-friendly UI choices: Magic Remote pointer, D-pad focus order, safe overscan margins, large text, and an idle black/pixel-shifting display for OLED where tested.
10. Store a sanitized audit log (device model, tool versions, package ID, results, errors); never persist secrets in the log.

## Example user requests
- "Inspect my LG webOS model, firmware, Developer Mode status and installed applications; do not change anything."
- "Compare a custom dashboard IPK with my TV and outline an official Developer Mode install and rollback plan."
- "Help me design a weather/prayer-times family dashboard as an ordinary webOS app, not a system home replacement."

## Limits and risks
- IPK sideloading via Developer Mode is **not** rooting, jailbreaking or a guaranteed replacement for the Home button.
- Launcher access through an assigned Quick Access number may work on certain LG remote/firmware combinations but needs on-device confirmation.
- Luna service permissions differ by model, firmware and app trust context; do not promise access to `listLaunchPoints` or `com.webos.applicationManager/launch`.
- Reference project claims such as "60 FPS", "100 ms", "under 80 KB" and "webOS 3.0–24+" are project-authored claims, **not independently verified HUTJ compatibility data**.
- Do not disable TLS or SSH host verification merely to make setup succeed. Do not ask for passphrases or private keys in chat.

## Response contract
Return `device_identity`, `evidence`, `tool_versions`, `supported_capabilities`, `unknowns`, `package_provenance`, `proposed_plan`, `approval_required`, `execution_results`, `verification`, and `uninstall_or_recovery`. Clearly distinguish observed results from source-repository documentation and untested assumptions.
