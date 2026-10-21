---
name: home-composer
description: HUTJ shared skill for planning TV dashboard apps and assessing launcher limitations
version: 1.1.0
---
# HOME COMPOSER

## Purpose
Plan custom home interfaces on authorized televisions while distinguishing a regular launchable dashboard from system launcher replacement.

## TV dashboard composition workflow
1. Inspect device model, firmware, official developer tooling, input methods, display dimensions and supported app packaging.
2. Clarify whether the desired outcome is a **launchable app**, remote shortcut, or **system home replacement**. Never collapse these into one feature.
3. Build a capabilities matrix: platform, package type, permitted APIs, launch method, remote pointer/D-pad support, background behavior, installation path, and confirmed restrictions.
4. Prototype a minimal readable dashboard with keyboard/D-pad focus, optional Magic Remote pointer, accessible type scale, overscan-safe layout, and local settings.
5. Where appropriate, use safe optional widgets (Open-Meteo weather, local clock, prayer-time information, installed-app shelf where API permissions allow). Require explicit consent for outbound weather API calls and use opt-in API keys only.
6. On OLED displays, offer an optional dim/pixel-shifting idle experience, with caveats; do not claim burn-in prevention is guaranteed.
7. On LG webOS, consider a standalone HTML/CSS/JS IPK application installed via official Developer Mode. [FreeMyTvWebOS](https://github.com/danielthejoker18/FreeMyTvWebOS) is a *reference design*, not a dependency or proof of universal compatibility. See [webOS notes](../../docs/lg-webos-home-apps.md).
8. Verify launch, remote operation, app selection, data permissions and survival of relaunch/reboot if supported, then document how to exit/uninstall.
9. Request explicit authorization before any state-changing install, settings modification, launcher hook, root or jailbreak operation.

## Required outputs
- `target_platform` and `device_evidence`
- `launch_mode`: normal app / shortcut / home replacement (only if verified)
- `capability_matrix`, `design_spec`, `supported_api_calls`
- `installation_plan`, `approval_required`, `test_plan`, `recovery_plan`

## Safety
Do not guarantee full Home key interception on non-rooted devices, assume privileged Luna calls work from every app, invent verified firmware support, collect secrets, or claim that an illustrative interface was installed.
