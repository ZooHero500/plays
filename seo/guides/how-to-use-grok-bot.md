---
slug: how-to-use-grok-bot
title: How to use Grok Bot
metaTitle: How to Use Grok Bot: Install, First Task, Plugins
metaDescription: How to use Grok Bot: sign in, create one focused bot, run a safe first task, then connect plugins. Unofficial Plays guide with real public examples.
description: How to use Grok Bot: sign in, create one focused bot, run a safe first task, then connect plugins. Unofficial Plays guide with real public examples.
locale: en
published: 2026-09-08
---

# How to use Grok Bot

To use Grok Bot, sign in after install, create one bot with a single job, run a safe first task that ends in human review, then connect only the plugins that job needs. Save a skill once the method works; add a routine later. Unofficial Plays guide with real public examples—not affiliated with xAI ([about](/about)).

Official docs explain product capabilities. This page is the **operator order**: what to do first, what to keep behind approval, and which verified Plays to copy next. Browse the full shelf on the [home page](/) or [Crew](/categories/crew) when you want discovery instead of a path.

## What "using Grok Bot" means

Using Grok Bot is not the same as opening a one-shot chat. A bot is a **persistent agent** with its own identity, instructions, optional skills and routines, plugin connections, and a cloud computer it can work on while your laptop is closed. You hire a seat for a job; you do not paste a prompt and walk away forever.

A useful contrast: a single ChatGPT-style turn is great for a question. Grok Bot is built for a **repeatable outcome**—research that lands as a review list, a draft you approve, a PR pack you still merge. The computer and plugins are tools for that loop, not a free pass to auto-send mail or change production without you.

This site, [grokbotplays.com](/), is an unofficial directory of public Plays (real posts you can check). We are **not affiliated with xAI**. Product facts, plan names, and install requirements live on official docs and our short [install](/install) page; see also [about](/about).

## Before you start

Complete account and download steps on **[Install](/install)** first. This guide starts *after* you can open the app.

Keep these constraints in mind (do not treat them as a second install walkthrough):

- Use the **same Cursor account** the product expects for Grok Bot access.
- Plan thresholds (which tiers unlock Bot, compute, or team features) are **as published by the official product**—do not rely on third-party price tables here.
- Never paste passwords, API keys, or session tokens into chat. Put secrets where the product already stores them (env on the bot computer, plugin OAuth in Plugins settings)—not in the bot description.
- Treat every send, spend, CRM stage change, and production merge as **human-approved** until you deliberately change that policy.

When install is done, come back here for the first focused bot.

## Create one bot with one job

Open the app and create a bot with a clear **name**, **title**, and **description**. Write one outcome in plain language: what it owns, what “done” looks like, and what it must never do without you.

Good first jobs:

- “Research these accounts and return a morning review list. Do not send email or LinkedIn.”
- “Watch this repo for new PRs and draft a review pack. Do not merge.”
- “Triage inbox into labels and draft replies. Leave sends parked for me.”

Bad first job: one bot that “runs the whole company”—calendar, CRM, GitHub, finance, and customer mail in one seat. That bot will blur boundaries, ask for every plugin on day one, and make failures hard to audit. Prefer **one outcome per bot**. You can add more seats later; Crew Plays show how people grow a roster without starting that way.

Name the bot after the seat (“Outbound research”, “PR watcher”), not after a vibe (“SuperBrain”). The description should state sources, deliverable format, and the review point.

## Give it a first safe task

Before plugins and routines, run **one safe task** you would be willing to sign. Align the brief with the official get-started shape, in your own words:

1. **Outcome** — what must exist when it stops (a table, a draft pack, a summary with links).
2. **Sources** — which systems or URLs it may read.
3. **Constraints** — no send, no enroll, no stage change, no spend, no merge.
4. **Deliverable** — exact shape you will review (columns, file path, message format).
5. **Review point** — where *you* decide (approve drafts, open the PR, ignore the rest).

Example you can adapt: “From this CRM view of 25 accounts, score against our ICP and recent intent, pick up to three contacts each, draft email and LinkedIn in the voice samples I attach, skip anyone already in a sequence, and return a review list. Do not send or enroll anyone.”

Run it once while you watch. If the deliverable is wrong, fix the brief—do not “fix it” by connecting more plugins. A first win is a **reviewed artifact**, not a silent overnight schedule.

## Connect only the plugins you need

Plugin UI lives in the app (**Plugins settings**—exact labels can change; follow what you see in the product). Connect tools that match the one job, not the whole stack.

Practical order:

- Prefer **read + draft** connectors first: calendar, mail, CRM, GitHub, docs—whatever the task actually needs.
- Keep **send, spend, and pipeline writes** behind human approval. For sales and LinkedIn, the loop is always **draft → human sends**.
- If the bot only needs a public page or a one-off login, the **browser computer** may be enough without a permanent connector. Use plugins when the same authenticated system must stay connected across runs.
- Revoke or disconnect anything you no longer need. Extra OAuth scopes are attack surface and distraction.

Do not invent menu click-paths beyond what the product shows. When unsure, stay inside Plugins settings in the app and confirm each connection against the bot’s single job.

## Save a skill, then a routine

Skills and routines are how a one-off becomes durable—but **order matters**.

1. Do the real job once (or a few times) until you would sign the method.
2. Save that method as a **skill**: when to use it, inputs, order of steps, how to check, what to return, and what still needs your yes.
3. Only then create a **routine**: owner, timezone, schedule or trigger, and what to do when data is missing or a check fails. Background routines keep running when the laptop is closed—so failure policy is part of the design, not an afterthought.

Official concept pages cover skills/routines; for a Plays-shaped walkthrough, start with [Skills and routines](/play/official-teach-routine) (run once → skill → routine; do not schedule first). Keep event triggers narrow (e.g. “ticket link + needs repro in this channel”), not “listen to every message.”

## Copy a real play next

You now have a path: one job → safe task → minimal plugins → skill → routine. Next, **copy a verified Play** instead of inventing a second bot from scratch. Each link below is a curated deep-link (not a second shelf). For templates and share links, continue to [Grok Bot templates](/guides/grok-bot-templates/). For sales and engineering loops with approval baked in, see [use cases](/guides/grok-bot-use-cases/).

**Play picks** (what you learn from each):

- [/play/mattyp-getting-started](/play/mattyp-getting-started) — Anatomy of a bot, ways to run work, and how multi-bot chains stay readable.
- [/play/arianlooterking-ten-minute-first-bot](/play/arianlooterking-ten-minute-first-bot) — A first-hire pattern: named seat, one brief, one connector, one routine—without stalling in demos.
- [/play/official-teach-routine](/play/official-teach-routine) — Official order: run the job, save a skill, then schedule; write failure behavior before you leave.
- [/play/0xcarnagee-memory-trigger-verify-loop](/play/0xcarnagee-memory-trigger-verify-loop) — Memory + trigger + verification as a loop you can paste into operator briefs.
- [/play/4rblaber-20-page-operator-guide](/play/4rblaber-20-page-operator-guide) — Operator shift: boundaries, skills/routines, verification, and reconstructability instead of “one smart chatbot.”
- [/play/spectnfa-65-min-setup-playbook](/play/spectnfa-65-min-setup-playbook) — Field playbook: personas → plugins → teach skills → wrap routines → delegation across seats.

More Crew setups live under [Crew](/categories/crew). Discover new cards on the [home page](/)—this guide stays a path, not a waterfall of infinite cards.

## FAQ

### How do I use Grok Bot for the first time?

Sign in after [install](/install), create one bot with a single outcome, and run a safe task that ends in a deliverable you review. Connect only the plugins that job needs. Save a skill after the method works; add a routine later. Copy a Play above instead of inventing a mega-bot on day one.

### Do I need Cursor Ultra / SuperGrok?

Access and plan thresholds change with the product. Use whatever tier the **official product currently publishes** for Grok Bot. This site does not list prices. Confirm on official docs or account settings, then return here for the operator path—not a second pricing page.

### Should I create one bot or many?

Start with **one bot, one job**. Add seats when a second outcome needs different permissions, schedule, or voice. Many Crew Plays show rosters; they work because each seat has a boundary. A single “do everything” bot is the common failure mode for first-week setups.

### When do I connect plugins vs use the browser computer?

Use the **computer browser** for one-off public pages or sessions you do not want permanently linked. Connect **plugins** when the same authenticated system (mail, CRM, GitHub, calendar) must stay available across runs. Prefer read-and-draft scopes first; keep send and spend behind approval.

### What should stay behind approval?

Anything that leaves the building: sending email or LinkedIn, enrolling sequences, changing CRM stages, spending money, merging to protected branches, or deploying production. Default loop for outreach is **draft → human sends**. Widen autonomy only after you trust the skill, the evidence, and the failure path.

---

**Next:** [Grok Bot templates](/guides/grok-bot-templates/) · [Sales & engineering use cases](/guides/grok-bot-use-cases/) · [Install](/install) · [About](/about) · [Home](/) · [Crew](/categories/crew)
