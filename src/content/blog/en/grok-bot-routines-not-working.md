---
title: "Grok Bot routines not working? A fix list from the official docs (checked Nov 9, 2026)"
description: "Grok Bot routine didn't run, failed, or did nothing? Check pause state, schedule and time zone, run history, rate limits, Slack, webhook and email triggers, approvals, and usage."
slug: "grok-bot-routines-not-working"
date: 2026-11-09
---

# Grok Bot routines not working: what to check, in order

Most routines that "don't work" are paused, waiting for their next scheduled time, or set to the wrong time zone. Open the routine and check three things first: it isn't **Paused**, **When to run** shows the schedule you meant, and the time zone in Settings → Bot → Timezone is right ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations), [Cursor help](https://cursor.com/help/grok-bot/routines)). If those are fine, read the run history. A failed run shows its reason.

_Last checked 2026-11-09._

> **Every play links to its source.** Most plays link to the X post they came from; others link to GitHub, LinkedIn, YouTube, x.ai, a blog, or similar. Open the source to check the original before you copy a setup.

Plays is an unofficial directory of Grok Bot setups, not affiliated with xAI or Cursor. Product details below come from the linked official docs. Anything we could not confirm there is marked **unverified**. New to routines? Start with [how to set up Grok Bot routines](/blog/grok-bot-routines/). This page is only for fixing one that misbehaves.

## Quick fix table

| What you see | Likely cause | What to do | Source |
|---|---|---|---|
| Routine never ran after you created it | A new schedule waits for its next time. It doesn't run on creation | Wait for the next slot, or use **Test** to run it now | [xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations) |
| Ran at the wrong hour | Time zone in Settings → Bot → Timezone. Auto-detect follows your computer | Pick the zone the work belongs to, then check **When to run** | [Cursor help](https://cursor.com/help/grok-bot/routines) |
| Row says **Paused** (or **Active** is off on the phone) | Paused by you, or by Grok Bot after a long period away | Resume it with the switch on the row | [xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations) |
| Run history says **No runs yet** | Nothing has started the routine | Check the schedule or the trigger | [Cursor help](https://cursor.com/help/grok-bot/routines) |
| `Automation run rate limit exceeded` | Over 300 runs an hour across routines, or 200 for one routine. A shared limit can also cause it (known issue) | Narrow the trigger or widen the schedule. Failed runs aren't retried, so rerun with **Test** | [Cursor help](https://cursor.com/help/grok-bot/routines) |
| Slack trigger didn't fire | Old message, wrong channel, phrase doesn't match, or Slack isn't connected on the Cursor account that owns the Bot | Post a new matching message in the watched channel | [xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations) |
| Webhook call didn't start a run | Anything other than `200` means no run started | Check the routine isn't paused and the request uses the current key | [xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations) |
| Email trigger didn't fire | Sender failed email authentication, the mail failed the spam scan, or you tried to filter by subject | Filter by sender or domain instead | [Cursor help](https://cursor.com/help/grok-bot/agent-email) |
| Routine ran but the action didn't happen | An approval from unattended work expires after about 30 minutes | Turn on notifications for that Bot, or use **Always allow** for actions you trust | [troubleshooting](https://docs.x.ai/grok-bot/troubleshooting) |
| Routine left an email draft instead of sending | Expected. Email from a routine always waits for you | Open the draft and press **Send** | [Cursor help](https://cursor.com/help/grok-bot/agent-email) |
| Bot stopped and mentions a usage limit | Weekly usage is used up | Wait for the weekly reset, add credit, or turn on on-demand usage | [troubleshooting](https://docs.x.ai/grok-bot/troubleshooting) |

## Check 1: is it paused, and when is it really set to run?

On desktop, click the Bot's name at the top of the chat. Routines are on the **Details** tab. Each row shows the routine's name and when it runs, or **Paused** ([Cursor help](https://cursor.com/help/grok-bot/routines)). Open the routine and read **When to run**. It shows the saved schedule in words. If it is wrong, choose **Edit** and tell the Bot what to fix ([same page](https://cursor.com/help/grok-bot/routines)).

Grok Bot may also pause routines on its own. After a long period away, it may ask whether to keep routines running and pause them if you don't answer ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). Review paused routines when you come back.

## Check 2: the first run is later than you think

A new routine doesn't run when you create it. Set up "every day at 8:00 AM" at 8:05, and the first run is tomorrow at 8:00 AM ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). To see output now, open the routine on desktop and choose **Test**.

Two things to know about Test:

- It does real work. It can change files and use connected apps, so use a safe input ([Cursor help](https://cursor.com/help/grok-bot/routines)).
- Some routines don't show Test. They still run on their schedule or trigger. For those, ask the Bot to do the same work once in chat ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

## Check 3: read the run history

On the phone, open the Bot's profile, find **Routines**, and tap the routine. **Run history** shows each recent run as Running, Succeeded, or Failed, with the reason for a failure ([Cursor help](https://cursor.com/help/grok-bot/routines)). The app keeps the 20 most recent run records per routine ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

If a run fails with an error, copy the request ID from the message and try again. If the same prompt fails on a fresh run, report a bug with the error text and request ID ([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).

## Check 4: the trigger itself

Only new activity counts. Events from before the trigger existed don't start a run ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

**Slack.** A Slack trigger is part of the routine, not the Slack app. Connect Slack on the Cursor account that owns the Bot ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). The message must be new, in the watched channel, and match the phrase ([Cursor help](https://cursor.com/help/grok-bot/routines)).

**Webhook.** A `200` response means Grok Bot accepted the call and started a run, not that the Bot finished. Check the Bot's chat for the result. Any other response means no run started ([Cursor help](https://cursor.com/help/grok-bot/routines)).

**Email to your Bot's address.** By default, the routine only runs for mail from senders that pass standard email authentication checks. Routines can't filter by subject. Mail that fails the spam or virus scan never starts a routine ([Cursor help](https://cursor.com/help/grok-bot/agent-email)). More in [Grok Bot email](/blog/grok-bot-email/).

**GitHub, Linear, Sentry, PagerDuty.** These start through Cursor account integrations, which are separate from the Slack or GitHub apps and may need their own connection ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). Confirm the source channel, repository, and matching rule are still valid ([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).

## Check 5: things outside the routine

The troubleshooting page lists these for a routine that did not run ([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)):

- The owning Bot still exists. Deleting a Bot also removes its routines ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).
- Required plugins are still authenticated. In **Connect apps**, an app marked Needs auth or Disconnected needs **Authenticate** again.
- The computer can reach the source system. If the computer says Reconnecting, wait and choose **Retry** before anything else.
- Usage or account access hasn't been paused.

If a routine isn't paused but hasn't run for 24 hours or more with no error shown, xAI asks you to report a bug with the Bot name and routine details ([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).

## Check 6: your plan

On The X Subscription, Grok Bot is included on Premium, Super, and Ultra. Plus and Free don't include it ([Cursor help](https://cursor.com/help/grok-bot/plans)).

One older case worth knowing: on September 9, 2026, a Cursor staff member replied on the Cursor forum that routines were the one part of Grok Bot that checked the Cursor plan. A user whose access came from a linked SuperGrok account, with a Cursor plan that didn't include routines, could not get routines to schedule ([Cursor forum](https://forum.cursor.com/t/bot-routines-refuse-to-fire/171173)). This was a forum reply, not a docs page, and plans have changed since. Whether it still applies is **unverified**. If your routines never fire on a linked-account setup, include your plan details when you contact support.

## When the routine runs but eats your usage

Every run spends usage, and Test does too. An hourly schedule or a Slack trigger on a busy channel can use a week of usage in a day ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). Pause routines you don't need, then widen schedules and narrow triggers before you raise a limit ([Cursor help](https://cursor.com/help/grok-bot/routines)).

Real setups that audit this:

- A weekly token-burn check that splits usage across chats, bot-to-bot messages, and routines ([play](/play/fanvestments-token-burn-check-routine/)).
- A weekly usage report from your usage export, with fixes per Bot ([play](/play/brian-roemmele-usage-audit/)).
- One Bot audits a week of chats and shuts off duplicate routines ([play](/play/ducksays-bot-team-chat-audit/)).
- A bounded routine with a quiet rule, so a run with nothing new says so and stops ([play](/play/arianlooterking-routines-rebrief/)).

## What we could not verify

- The exact meaning of a "routine sync failed" message. People search for it, but we found no official page that names it.
- Whether the September 2026 forum answer about plans and routines still applies on The X Subscription.
- When the known shared rate limit issue will be fixed. Cursor says only that engineers are working on it ([Cursor help](https://cursor.com/help/grok-bot/routines)).

## FAQ

### Why hasn't my Grok Bot routine run yet?

It may be paused, or a new schedule may still be waiting for its first slot. Check **When to run** and the time zone, or use **Test** to run it now ([Cursor help](https://cursor.com/help/grok-bot/routines)).

### Do routines run when my computer is off?

Yes. Routines run in the cloud while your laptop is closed ([xAI docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

### Does a failed routine retry on its own?

Not after a rate limit error. Rerun it with **Test**, or send the webhook call again ([Cursor help](https://cursor.com/help/grok-bot/routines)).

### Why did my routine not send the email it wrote?

Email from a routine waits as a draft until you press **Send**. There is no option for unattended sending ([Cursor help](https://cursor.com/help/grok-bot/agent-email)).

### Can I see why a run failed?

Yes. On the phone, Run history shows Failed with the reason ([Cursor help](https://cursor.com/help/grok-bot/routines)).

### Where do I report a routine bug?

From the desktop app, open the account menu and choose **Support → Send Feedback**. Include the Bot name, routine name, error text, and request ID ([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).
