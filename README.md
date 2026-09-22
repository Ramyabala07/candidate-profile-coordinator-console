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
| `prototypes/enrollment-profile.html` | Enrollment-scoped profile. Two variants behind a switcher: **Timeline** and **Cards**. |
| `prototypes/candidate-workspace.html` | Candidate-scoped workspace — every enrollment across every exam as one comparable matrix. |
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
