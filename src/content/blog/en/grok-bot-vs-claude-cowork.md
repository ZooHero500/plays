---
title: "Grok Bot vs Claude Cowork: how the two agents differ (checked Nov 2, 2026)"
description: "Grok Bot vs Claude Cowork, from xAI's and Anthropic's own docs: where each one runs, plans and prices, scheduling, approvals, and real Grok Bot setups."
slug: "grok-bot-vs-claude-cowork"
date: 2026-11-02
---

# Grok Bot vs Claude Cowork: how the two agents differ

Both hand off multi-step work to an AI that keeps going after you close the laptop. The difference is in how the work is set up. Grok Bot is a team of named Bots that share one persistent cloud computer, with routines that start on a schedule or on events like a Slack message or a GitHub push ([xAI docs](https://docs.x.ai/grok-bot), [routines docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). Claude Cowork is a task mode inside the Claude apps. You hand Claude a task, it splits the work across sub-agents in an isolated cloud environment, and it gives you back finished files such as spreadsheets and decks ([Claude Help Center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).

_Last checked 2026-11-02._

> **Every play links to its source.** Most plays link to the X post they came from; others link to GitHub, LinkedIn, YouTube, x.ai, a blog, or similar. Open the source to check the original before you copy a setup.

Disclosure: Plays (grokbotplays.com) is an unofficial directory of Grok Bot setups. It is not affiliated with xAI, Cursor, or Anthropic, and nobody paid for this page. Every vendor fact below links to the vendor's own page. Anything we could not confirm there is marked **unverified**.

## Which "Claude Cowork" this page means

This page covers **Cowork by Anthropic**, the agent mode in the Claude desktop, web, and mobile apps ([Claude Help Center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)). It does not cover Claude Code, Anthropic's coding tool. If your question is Grok Bot vs Claude Code, see [this Grok Bot play](/play/nick-coding-handoff-claude-code/), which hands coding work to Claude Code instead of choosing between the two.

## At a glance

| | Grok Bot | Claude Cowork |
|---|---|---|
| Made by | xAI, runs in Cursor's cloud ([docs](https://docs.x.ai/grok-bot)) | Anthropic ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)) |
| Basic unit | Named Bots, each with its own job and memory ([docs](https://docs.x.ai/grok-bot)) | A task or session. Claude splits it across sub-agents ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)) |
| Where work runs | One persistent cloud computer (browser, files, terminal) shared by all your Bots ([docs](https://docs.x.ai/grok-bot)) | An isolated cloud environment on Anthropic's servers. Local files, browser use, and computer use need the desktop app open ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)) |
| Keeps working with laptop closed | Yes ([docs](https://docs.x.ai/grok-bot)) | Yes, for cloud tasks ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)) |
| Scheduled work | Routines on a schedule or on Slack, GitHub, Linear, Sentry, PagerDuty, email, or webhook events ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)) | Scheduled tasks on all paid plans. Each run is a new session ([help](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork)) |
| Event triggers (Slack, GitHub, webhook) | Yes ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)) | **Unverified**. The help pages we read only describe schedules |
| Approvals | Sensitive actions need your approval, checked by an independent review model called Auto Review ([docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Three modes: Manual, Auto (Claude reviews actions for safety), or Skip all approvals. Permanent deletes always ask first ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)) |
| Model choice | "Grok Bot manages model selection" ([docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Claude models ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)) |
| Apps | macOS, Windows, Linux, iOS, Android ([docs](https://docs.x.ai/grok-bot)) | Desktop on macOS and Windows, Linux in beta, plus web and mobile ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)) |
| Paid access | X Subscription Premium ($30/mo), Super ($100/mo), Ultra ($200/mo). Not Plus or Free ([x.ai pricing](https://x.ai/pricing), [Cursor help](https://cursor.com/help/grok-bot/plans)) | Pro ($20/mo, or $17/mo billed annually), Max ($100/mo), Ultra ($200/mo), Team, Enterprise. Not Free ([Claude pricing](https://claude.com/pricing)) |
| Trial | A usage credit with a 7-day window ([Cursor help](https://cursor.com/help/grok-bot/plans)) | No Cowork trial on the pages we read (**unverified**) |

## Where Grok Bot fits

**Standing jobs that run without you.** A routine can fire at a set time or when something happens: a Slack message, a GitHub event, a Linear or Sentry update, a PagerDuty incident, an email to the Bot's own address, or a webhook. Each Bot can have up to 50 routines, and scheduled runs must be at least 5 minutes apart ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). xAI's advice is to run a job once, save it as a skill, and only then schedule it ([play](/play/official-teach-routine/)).

**Several specialised agents at once.** Bots work in parallel, message each other, and share a computer, so files and logins carry over between them ([docs](https://docs.x.ai/grok-bot)). Real setups that use this:

- A Head of Research Bot plus analyst Bots that work overnight and leave a summary for the morning ([play](/play/dspaterson-research-overnight/)).
- A Bot that scans X feeds and files its findings into Notion ([play](/play/deryatr-x-notion-radar/)).
- Five role Bots that coordinate Claude Code, Codex, and Cursor as coding workers ([play](/play/ekcheung-five-role-orchestrator/)).

**Coding hand-offs.** Grok Bot can pass coding tasks to Cursor Cloud Agents, which run on separate computers ([docs](https://docs.x.ai/grok-bot/teams-and-enterprises)).

**You already pay for X.** Premium and above include Grok Bot. Its usage comes out of one weekly pool shared with Cursor and the Grok apps ([x.ai pricing](https://x.ai/pricing), [Cursor help](https://cursor.com/help/grok-bot/plans)).

## Where Claude Cowork fits

**Deliverables you open in Office.** Anthropic lists Excel files with working formulas and PowerPoint decks among Cowork's outputs ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).

**One big task, split up for you.** Claude breaks a complex job into subtasks and coordinates sub-agents on its own. You describe the outcome rather than designing a team ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).

**You already pay for Claude.** Cowork is part of Pro, Max, Ultra, Team, and Enterprise. Memory carries over from your Claude chats ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), [pricing](https://claude.com/pricing)).

**Approval control.** The three approval modes and the explicit "Allow" step before permanent deletes are spelled out on Anthropic's help page ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).

Some limits Anthropic documents itself: sessions can't be shared with others, and anything that touches your own computer (local files, browser use, computer use) needs the Claude desktop app open and connected ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).

## How to choose

- **The job repeats or should start on its own** (every morning, on a new Slack message, on a GitHub push): Grok Bot documents both schedule and event triggers ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). Cowork documents scheduled tasks ([help](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork)).
- **You want a finished spreadsheet or deck from one brief:** Cowork names these as outputs ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).
- **You want several agents with separate jobs that talk to each other:** Grok Bot ([docs](https://docs.x.ai/grok-bot)).
- **You want to start in the cheapest paid tier:** Claude Pro is $20/month ([pricing](https://claude.com/pricing)). Grok Bot starts at X Premium, $30/month ([x.ai pricing](https://x.ai/pricing)). Grok Bot also has a one-time trial credit ([Cursor help](https://cursor.com/help/grok-bot/plans)).

Nothing stops you from using both. One play has a Grok Bot hand work to Claude Code on a Mac and report back ([play](/play/nick-coding-handoff-claude-code/)).

## What we could not verify

- Whether Cowork tasks can be started by events such as a Slack message, a GitHub push, or a webhook. Anthropic's pages we read describe schedules only.
- The Claude Team plan price. It did not appear on the pricing page we fetched.
- Whether either product offers a trial of the agent feature beyond what is stated above.
- Usage limits in hard numbers. Both vendors describe usage pools or multiples ("4x", "5x"), not task counts.

## FAQ

### Is Claude Cowork the same as Claude Code?

No. Anthropic presents Cowork as an agent mode for work beyond coding, inside the Claude apps ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).

### Is Claude Cowork free?

No. It needs a paid Claude plan: Pro, Max, Ultra, Team, or Enterprise ([help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), [pricing](https://claude.com/pricing)).

### Which plan includes Grok Bot?

X Subscription Premium, Super, and Ultra. Plus and Free do not include it. It also comes with eligible Cursor and SuperGrok plans ([Cursor help](https://cursor.com/help/grok-bot/plans), [x.ai pricing](https://x.ai/pricing)).

### Can Claude Cowork run on a schedule?

Yes. Scheduled tasks run remotely even when your computer is asleep, and each run starts a new session ([help](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork)).

### Does Grok Bot keep working when my laptop is closed?

Yes. Work runs on the cloud computer, so closing the app does not stop a background turn or a routine ([docs](https://docs.x.ai/grok-bot)).

### Where can I see real Grok Bot setups?

Browse the [Plays directory](/). Each setup there links to its original post.
