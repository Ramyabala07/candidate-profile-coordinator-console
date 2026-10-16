# Candidate Profile — Coordinator Console V8

Redesign of the candidate profile in Talview's Coordinator Console. The panel today is
organised around **time**; the job a coordinator actually arrives with is about **state**.
This repo holds the prototypes and the review deck for that redesign.

All prototypes are single-file HTML — no build step, no dependencies. Open them directly
in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## What's here

| Path | What it is |
|---|---|
| `prototypes/cp-final-1.html` | CP Final 1 — the full candidate list with the donut result for everyone: one colour per section, filled from the bottom up, the score as 74/100 in the centre, sub-scores on hover and a levels legend behind an info button. Covers zero, low, no sub-scores, unfinished, PDF only, link only, and the loading, not ready, couldn't fetch, incomplete and empty-report states. The credential card carries Open, Share and the next step; accommodations can be declined with a reason, sent back for more information, or decided after the candidate replies. The PDFs are fictional sample reports. |
| `prototypes/score-visualisations.html` | Score visualisations — the full candidate list. Completed candidates use one of three result views (spider, level rows, donut) with topic drill-down and a placeholder overall, and the standard credential card with the six statuses: Yet to review, Withheld, Credentialed, Disqualified, Credential revoked, Expired. |
| `prototypes/candidate-profile-v2.html` | Candidate profile v2 — workflow steps (Enrollment, Verity, Scoring, Credentials) with the bar graph score card. |
| `prototypes/enrollment-profile.html` | Enrollment-scoped profile. Two variants behind a switcher: **Timeline** and **Cards**. |
| `deck/review-deck.html` | 13-slide review deck. Arrow keys to move. |
| `docs/design-notes.md` | The reasoning: problem, principles, patterns borrowed, open questions. |

## Branches

`main` carries everything. Each variant also has its own branch, reduced to that single
exhibit, so a checkout gives you exactly one thing to look at:

| Branch | Contains |
|---|---|
| `main` | All prototypes + deck + docs |
| `variant/timeline` | Enrollment profile, locked to the Timeline variant |
| `variant/cards` | Enrollment profile, locked to the Cards variant |
| `variant/workspace` | Candidate workspace only |

## The two levels

The redesign has two surfaces, and they answer different questions:

**Enrollment profile** (548px side panel, opened from the enrollments list) — *"where is
this enrollment, and what's blocking it?"* One enrollment, summarised as a stage ladder
with a derived status, evidence one level down.

**Candidate workspace** (full page) — *"someone escalated; show me everything this person
has in flight and everything stuck."* Cross-enrollment comparison, which a 548px panel
cannot physically do.

## Prototype data

All data is synthetic. The seeded candidate (Ethan Cole, CAN-12345) has 6 enrollments
across 3 exams, deliberately covering the awkward states: a blocked payment, a soft IDV
flag, pending accommodations, a cancelled enrollment, cleared incidents, and a workflow
where some stages aren't configured at all.

Interactions that genuinely mutate state (rather than stubbing) are noted in the design
notes.
