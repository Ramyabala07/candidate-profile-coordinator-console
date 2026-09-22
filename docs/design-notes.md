# Design notes

## The problem

The panel is a reverse-chronological rail: every event becomes a milestone, newest first.
That structure answers *"what happened, and in what order?"* — but a coordinator opens the
panel asking *"where is this candidate, and why are they stuck?"* That's a question about
state, not sequence, and the answer is scattered across the whole rail.

This is why adding more cards kept making it worse. You can't fix a structural mismatch by
adding to it.

## Job to be done

> When a candidate is **stuck, flagged, or disputing an outcome**, show me what happened
> and why — **so I can make a decision I can defend.**

## Principles

1. **Verdict before evidence.** The answer first; the working underneath, for whoever needs it.
2. **Evidence reachable, not resident.** Photos and scans one level down — never inline by default.
3. **Status is derived, not declared.** Worked out from the stages, so the header names the
   blocker rather than the last event.

## What we kept from the current design

- **The dot colours.** A real four-value taxonomy, and the red dot is the only thing
  readable at a glance today.
- **The card grammar.** Absorbs photos, amounts and key-values without breaking.
- **"Unable to match" vs "Mismatch".** Bad input versus a failed check — a distinction most
  products miss entirely.
- **The inline name diff.** Explains a failure in two lines, with no prose.

## Patterns borrowed

| Source | Pattern | Where it landed |
|---|---|---|
| Shopify | Nested verdict — verdict on top, each failure names its reason inline, passes collapse to one row | Stage verdicts |
| Revolut Business | Grouped by state, not by type or time | Stage ladder |
| Homerun | A whole journey as a few compact rows, blockers pulled above | Overview |
| Deel | Expand in place — children open in the same columns, not a new screen | Cards variant |
| Sentry | Occurrence navigator — the record is the pattern, one occurrence is the evidence | Enrollment switcher |
| Wise | History as a same-surface toggle, not a tab that costs a slot forever | Activity log |

## The two surfaces

### Enrollment profile — 548px side panel

Entry point is the enrollments list; clicking a row opens the profile scoped to that
enrollment. Two structural variants:

- **Timeline** — the record, in the order it happened. Sorted by timestamp, so elapsed-time
  gaps ("stuck 11 days") surface. Completed stages drop their verdict sentence, since the
  milestone head already carries title + time + chip.
- **Cards** — the state, one block per stage. Stages needing attention open by default;
  long contents show only the failing section with a View more.

Both share the header, tabs, enrollment switcher, push-screen evidence viewers and
contextual kebab.

### Candidate workspace — full page

An earlier version of this stretched the panel's IA across a full page: a left nav rail
where each item revealed one small card. The extra width bought chrome, not answers, and
every answer stayed one click away — worse than the panel, not better.

The rebuild spends the width on comparison instead:

- **Enrollment × stage matrix** — 6 enrollments × 9 stages, grouped by exam. A whole
  history legible without a click. Cells distinguish *not started* (hollow) from *not in
  this workflow* (faint dash).
- **Decisions vs flags** — the attention band counts only what needs a decision. Soft flags
  (an IDV name mismatch the candidate passed through, incidents already reviewed and
  cleared) sit in a quieter second line. Four amber rows at equal weight means none win.
- **Identity across exams** — every face capture in one row, base image marked. The "is this
  the same person" question that otherwise means opening six enrollments.
- **Non-modal peek panel** — no scrim; click row after row and the panel swaps while the
  matrix stays put.

## State vocabulary

Enrollment status is derived from the stages, and is one of:
Enrolled (green) · In Progress (blue) · Pending Approval (amber) · Rejected (red) ·
Cancelled (grey) · Completed (teal).

Stage/cell states:

| State | Enrollment profile | Workspace matrix |
|---|---|---|
| Done | green dot | green dot |
| Needs a decision | amber dot | amber dot |
| Blocked | red dot | red dot |
| Flagged, no action | — | hollow amber ring |
| Not started | blue dot (next stage only) | hollow grey ring |
| Not in this workflow | — | faint dash |

**Known inconsistency:** the Timeline's activity-log dots reuse the same colours with
different meanings (amber = "warning", blue = "system generated"). The two vocabularies
should be aligned before build.

## Wired vs stubbed

**Genuinely mutates state:** accommodation approve/decline/revert (updates the chip, the
verdict sentence, the header icon, the matrix cell, the derived status and the decision
count), refunds, reschedule, re-enroll.

**Stubbed:** workspace kebab actions (toast only), "Open enrollment profile" cross-link
between the two prototypes.

## Open questions

- IDV attempt count at check-in — is it shown, and does it come from data? (PM to confirm)
- Aligning the activity-log colour vocabulary with the stage vocabulary.
- Whether the cross-exam workspace ships with the first release or follows it.
