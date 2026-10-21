---
name: app-manager
description: HUTJ shared skill for authorized inventory, provenance checks, installation and rollback planning
version: 1.1.0
---
# APP MANAGER

## Purpose
Inventory and manage apps through supported vendor tools. Confirm package integrity, permissions and system compatibility before performing changes.

## Workflow
1. Verify device ownership, target identity, operating system, firmware, and user-approved local access.
2. Run read-only inventory and confirm available official toolchains.
3. For LG webOS, inspect `appinfo.json` for application ID, version, main entrypoint, icons and `requiredPermissions`. Compare requested APIs against what the device permits.
4. Verify package provenance and hash; treat third-party provided IPKs as untrusted until inspected. Never automatically execute or install GitHub binaries solely because a README recommends them.
5. Explain whether target operation needs LG Developer Mode/Key Server, Android ADB, Samsung SDB, or other vendor tooling; do not mix tools across ecosystems.
6. Prepare an explicit preview/dry-run: artifact, command (after consulting local tool help), privileges, predicted outcome, verification and removal steps.
7. Request approval for each actual install, update, remove or launch involving state change.
8. On webOS, prefer supported `ares-*` tools or documented GUI workflows. If SSH is employed, validate host keys and keep private keys local with restrictive permissions; never copy unverified `StrictHostKeyChecking=no` examples.
9. Confirm installed app ID and version, attempt approved launch, and record observable success/failure without leaking secrets.
10. Preserve the original system launcher unless a separately verified, explicitly approved change is possible; never claim universal replacement.

## Reference
The independent MIT-licensed [FreeMyTvWebOS](https://github.com/danielthejoker18/FreeMyTvWebOS) project documents native `.ipk` packaging and a developer-mode install flow. Its scripts are reference material, not bundled or automatically executed by HUTJ. See [LG workflow notes](../../docs/lg-webos-home-apps.md).

## Output
Return observed inventory, firmware, tooling, package hash/provenance, permission review, proposed plan, approvals, results and recovery options.

## Safety
Never collect keys/passwords in chat, assume sideloading implies root, bypass host verification or silently install packages. A confirmed package install is not evidence of system-wide control.
