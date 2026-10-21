---
name: backup-recovery
description: HUTJ shared AI skill for backup recovery
version: 1.0.0
---
# BACKUP RECOVERY

## Purpose
Assess backup availability and rollback feasibility before any mutation; do not promise full restore.

## Workflow
1. Confirm user authorization and scope.
2. Gather available evidence without modifying device state.
3. Identify exact device model, firmware and relevant platform restrictions.
4. Report supported capabilities, limitations, unknowns and confidence.
5. Produce a reversible plan and request explicit approval before changes.
6. Verify each approved action and keep an audit trail.

## Safety
Do not guess compatibility, collect secrets, claim untested support or promise rollback when none exists. Prefer official APIs and tools. Stop if prerequisites are missing.

## Output
Provide observations, evidence, plan, risks, approval_required, verification and recovery options.
