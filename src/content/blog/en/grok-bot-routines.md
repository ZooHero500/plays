---
title: "Grok Bot routines: how to set up scheduled monitoring and research digests"
description: "How to use Grok Bot routines to watch sources and collect research on a schedule: the prompt, time zones, testing, limits, and usage costs, from the official docs."
slug: "grok-bot-routines"
date: 2026-10-28
---

# Grok Bot routines: scheduled monitoring and research digests

A Grok Bot routine tells one Bot when to run a job: on a schedule ("every weekday at 8:00 AM") or when something happens, such as a Slack message, a GitHub event, an email, or a webhook call. You create one by asking the Bot in chat, and it runs in the cloud while your laptop is closed ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). For monitoring and research, the reliable order is: do the job once by hand, save it as a skill, then schedule it.

Plays is an unofficial directory of Grok Bot setups, not affiliated with xAI or Cursor. Product details below come from the linked official docs, checked October 28, 2026.

## What a routine is (and what a skill is)

The docs define two building blocks ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)):

- A **skill** is a reusable set of instructions for how to do a task.
- A **routine** tells one Bot when to run a workflow.

So a "daily competitor watch" is usually a skill (what to check, how to report) plus a routine (every weekday at 8:00 AM). Keeping them separate means you can fix the method without touching the schedule.

## Step 1: run the monitoring job once by hand

Start with a one-time task and make it reliable before automating it ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). For a monitoring or research job, the first run should pin down:

1. **Sources.** Exact pages, feeds, accounts, or inboxes. Not "the web".
2. **What counts as new.** For example, "anything published since the last run".
3. **Output.** Where the result goes and in what shape: a chat message, a Notion database, an email draft.
4. **Quiet rule.** What the Bot says when nothing changed.

The [Code Watcher play](/play/dfc369-code-watcher/) is a clean example of points 1–4: official publisher pages only, a first-run snapshot, then diffs against it, and a rule never to invent an amendment.

## Step 2: save it as a skill

Ask the Bot to save what you just did. The docs list what a useful skill states: when to use it, required inputs and access, the sequence of work, how to validate the result, what to return, and what requires approval ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Example prompt:

> Save the process we just used as a skill called "Weekly competitor pages". Include the five URLs, how to detect a change, the summary format, and the rule that you never contact anyone.

Private skills are one library shared by all your Bots ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

## Step 3: ask the owning Bot to create the routine

Send the request to the Bot that should own the job. The docs' own example ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)):

> Every weekday at 8:00 AM, run the Daily customer-risk skill against the current account list. Post a linked watch list in this conversation. Do not contact customers. If the source data is unavailable, report the failure instead of using old data.

A research version could read:

> Every Monday at 9:00 AM, run the "Weekly competitor pages" skill. Post a list of changes with links in this chat. If a page fails to load, say which one. If nothing changed, reply "No changes" and stop.

Before saving, confirm the owning Bot, schedule and time zone, input source, expected result, approval boundary, and what happens when a source is missing ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

## Step 4: check the time zone and the first run

Schedules use the time zone in Settings → Bot → Timezone; Auto-detect follows your computer ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). Open the routine and read **When to run**, which shows the saved schedule in words. If it is wrong, choose **Edit** and tell the Bot what to fix ([Cursor help](https://cursor.com/help/grok-bot/routines)).

A new routine does not run when it is created. It waits for its next scheduled time. Set up "every day at 8:00 AM" at 8:05 and the first run is tomorrow ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). To see output now, use **Test**.

## Step 5: test it, knowing the test is real

**Test** performs real work: it can navigate sites, change files, and call connected tools ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). Check whether the run picked current inputs, matched the format, linked a source for each item, stopped at the approval point, and reported failures plainly ([same page](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

## Event-triggered monitoring

Some monitoring should not wait for a clock. A routine can start on a Slack message, a GitHub, Linear, Sentry, or PagerDuty event, an email to your Bot's own address, or a webhook call. Only new activity counts ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Keep triggers narrow. The docs warn that a trigger on every message in a busy channel runs often and spends usage on messages that don't need the Bot ([Cursor help](https://cursor.com/help/grok-bot/routines)). For webhooks, the routine shows a POST URL and a bearer key; a `200` response means a run started, not that it finished ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

## Limits and usage costs

From the docs ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)):

- A Bot can own up to **50 routines**; the app keeps the **20 most recent run records** per routine.
- Schedules must be at least **five minutes apart**.
- All your routines together can run up to **300 times an hour**, each routine up to **200 times an hour**. Past that, a run fails with `Automation run rate limit exceeded`.
- **Every run spends usage.** An hourly schedule or a busy Slack trigger can use a week of usage in a day. **Test** spends usage too.
- After a long period away, Grok Bot may ask whether to keep routines running and pause them if you don't answer.

For a daily digest, a once-a-day schedule is usually enough. Widen the schedule before you raise a plan limit.

## Real monitoring and research plays

These are setups people shared publicly, collected on Plays with links to the original posts:

- [X to Notion radar](/play/deryatr-x-notion-radar/): scans recent X posts for AI and robotics releases and adds them to a Notion database daily.
- [Code Watcher](/play/dfc369-code-watcher/): diffs official building-code pages on weekdays and weekly.
- [Personal CFO](/play/cryptorover-personal-cfo/): a weekday briefing routine over a holdings sheet that flags drift and does not trade.
- [Overnight research team](/play/dspaterson-research-overnight/): research bots that return a morning summary.
- [Stop re-briefing the same jobs](/play/arianlooterking-routines-rebrief/): turning one repeating job into a bounded routine with a quiet rule.

## Design rules worth copying

The docs' "design routines for trust" list ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)), applied to monitoring:

- Automate preparation, not execution: the Bot drafts or reports; you send.
- Require approval for sending, purchasing, deleting, or publishing.
- Write a no-data and stale-data policy into the instruction.
- Tell the Bot where to report partial completion.
- Re-test after a source website changes its layout.

## FAQ

### Do Grok Bot routines run when my computer is off?

Yes. Routines run in the cloud while your laptop is closed ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

### Why hasn't my routine run yet?

Check that it isn't paused, that **When to run** shows the right schedule and time zone, and remember a new schedule waits for its next time ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

### Can I create a routine from my phone?

Yes. Open the Bot's profile, tap **Add routine** under **Routines**, and finish the sentence "Set up a routine to…" ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

### How often can a routine run?

No closer than five minutes apart, and up to 200 runs an hour per routine ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

### How do I stop a routine?

Pause it with the switch on its row, or open it and choose **Delete routine**. Deleting can't be undone ([Cursor help](https://cursor.com/help/grok-bot/routines)).
