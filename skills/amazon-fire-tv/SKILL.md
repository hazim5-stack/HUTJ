---
name: amazon-fire-tv
description: HUTJ AI skill for Amazon Fire TV
version: 1.0.0
---
# Amazon Fire TV

## Purpose
Identify, inspect, configure and troubleshoot authorized Amazon Fire TV TVs through supported interfaces.

## Tooling
ADB where enabled, developer settings

## Preconditions
Confirm device ownership/authorization, exact model, firmware and connection details. Never request passwords or pairing secrets in chat.

## Workflow
1. Discover the device and verify manufacturer, model, OS, firmware and IP.
2. Check installed tool versions and firmware compatibility; distinguish confirmed from unknown capabilities.
3. Run read-only device and application inventory checks first.
4. Present a change plan: exact commands, expected outcome, risks, backup feasibility and rollback.
5. Ask for explicit user approval for every state-changing operation.
6. Execute one approved operation at a time, verify on-device and log the result.
7. Offer a documented recovery path; do not claim restoration is guaranteed.

## Platform-specific risks
Recent firmware may restrict ADB and alternative launchers.

## Agent response contract
Return device_identity, evidence, supported_capabilities, unknowns, proposed_plan, approval_required, execution_results, verification and rollback. Never claim commands were executed without tool evidence.
