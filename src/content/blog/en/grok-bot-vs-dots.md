---
title: "Grok Bot vs Dots (ChatGPT): what each agent does and who can get it (checked Nov 2, 2026)"
description: "Grok Bot vs OpenAI's Dots, from the official docs: availability by country and plan, one dot vs many Bots, scheduling, approvals, local access, and real Grok Bot setups."
slug: "grok-bot-vs-dots"
date: 2026-11-02
---

# Grok Bot vs Dots: what each agent does and who can get it

Both are always-on agents with their own cloud computer. The biggest practical difference today is access and headcount. Dots is OpenAI's agent inside ChatGPT. At launch it comes as one dot for ChatGPT Pro users aged 18+ outside the EEA, Switzerland, and the UK, and for Business Premium, with Enterprise in beta ([OpenAI Help](https://help.openai.com/en/articles/20001530)). Grok Bot comes with X Subscription Premium and above (and eligible Cursor and SuperGrok plans), and you can run several named Bots that work in parallel and message each other ([Cursor help](https://cursor.com/help/grok-bot/plans), [xAI docs](https://docs.x.ai/grok-bot)).

_Last checked 2026-11-02._

> **Every play links to its source.** Most plays link to the X post they came from; others link to GitHub, LinkedIn, YouTube, x.ai, a blog, or similar. Open the source to check the original before you copy a setup.

Disclosure: Plays (grokbotplays.com) is an unofficial directory of Grok Bot setups. It is not affiliated with xAI, Cursor, or OpenAI, and nobody paid for this page. Every vendor fact below links to the vendor's own page. Anything we could not confirm there is marked **unverified**.

## Which "Dots" this page means

This page covers **Dots by OpenAI**, the always-on agent in ChatGPT ([OpenAI Help](https://help.openai.com/en/articles/20001530), [ChatGPT docs](https://learn.chatgpt.com/docs/dots)).

## At a glance

| | Grok Bot | Dots |
|---|---|---|
| Made by | xAI, runs in Cursor's cloud ([docs](https://docs.x.ai/grok-bot)) | OpenAI, inside ChatGPT ([help](https://help.openai.com/en/articles/20001530)) |
| How many agents | Several named Bots that work in parallel, message each other, and join group chats ([docs](https://docs.x.ai/grok-bot)) | One dot included at launch. OpenAI says more dots are planned ([help](https://help.openai.com/en/articles/20001530)). A dot can start background agents for parallel work ([docs](https://learn.chatgpt.com/docs/dots)) |
| Computer | One persistent cloud computer (browser, files, terminal) shared by all your Bots ([docs](https://docs.x.ai/grok-bot)) | Its own cloud computer. You can take over and hand control back ([help](https://help.openai.com/en/articles/20001530), [docs](https://learn.chatgpt.com/docs/dots)) |
| Your own computer | Execution on a local computer is a setting that team admins can cap ([docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Optional and off by default. One personal computer at a time, connected through the ChatGPT desktop app ([help](https://help.openai.com/en/articles/20001530), [docs](https://learn.chatgpt.com/docs/dots)) |
| Model | "Grok Bot manages model selection" ([docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | GPT-6 Astra ([docs](https://learn.chatgpt.com/docs/dots)) |
| Scheduled work | Routines on a schedule or on Slack, GitHub, Linear, Sentry, PagerDuty, email, or webhook events ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)) | Reminders and recurring checks in a Scheduled section. The dot also decides when to pause and wake up ([help](https://help.openai.com/en/articles/20001530), [docs](https://learn.chatgpt.com/docs/dots)) |
| Where you talk to it | Desktop and mobile apps (macOS, Windows, Linux, iOS, Android) by typing, dictation, or voice chat, and @bot on X in some regions ([docs](https://docs.x.ai/grok-bot)). Slack DMs and channels ([teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | ChatGPT on iOS, Android, desktop app, and desktop web (not mobile web), Slack, Teams, calls, and texting in a limited US beta ([help](https://help.openai.com/en/articles/20001530), [docs](https://learn.chatgpt.com/docs/dots)) |
| Email | An email to the Bot's own address can trigger a routine ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)) | Can use your connected email. No standalone email address at launch ([help](https://help.openai.com/en/articles/20001530)) |
| Approvals | Sensitive actions need your approval, checked by an independent review model called Auto Review ([docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Your own rules: act without asking, act if pre-approved, ask first, or hand off to you. Password changes stay with you ([help](https://help.openai.com/en/articles/20001530)) |
| Who can get it | X Subscription Premium ($30/mo), Super ($100/mo), Ultra ($200/mo). Not Plus or Free ([x.ai pricing](https://x.ai/pricing), [Cursor help](https://cursor.com/help/grok-bot/plans)) | ChatGPT Pro (18+, not EEA/Switzerland/UK), Business Premium, and Enterprise/Edu/Healthcare in beta (admin-enabled). Not Free, Go, or Plus ([help](https://help.openai.com/en/articles/20001530), [pricing](https://chatgpt.com/pricing)) |
| Price in dollars | See above ([x.ai pricing](https://x.ai/pricing)) | Pro has three usage tiers, named Pro 100, Pro 200, and Pro 500 ([docs](https://learn.chatgpt.com/docs/dots)). Exact prices are **unverified** because they did not render on the page we fetched |

## Where Grok Bot fits

**A team, not one assistant.** You create Bots with separate jobs, and they share a computer, so files and logins carry over ([docs](https://docs.x.ai/grok-bot)). Real setups:

- A Head of Research Bot with analyst Bots working overnight ([play](/play/dspaterson-research-overnight/)).
- xAI's own pattern for running several teams from one project channel and a Notion board ([play](/play/official-multiple-teams/)).
- A risk Bot that reviews another Bot's shipped change and sends it back with a fix ([play](/play/tyrelle-risk-agent-code-review/)).

**Event-driven jobs.** Routines can start from a GitHub event, a Slack message, a webhook, and more. Each Bot can have up to 50 routines ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). One example runs code reviews on GitHub commits ([play](/play/jasonkiesel-github-code-reviews/)). Another narrows the first Bot and invites it into Slack before adding a trigger ([play](/play/mindstudio-morning-slack-trigger/)).

**You live in the EEA, Switzerland, or the UK.** OpenAI excludes these regions for Pro users at launch ([help](https://help.openai.com/en/articles/20001530)). In the xAI docs we read, the only regional limit we found was on tagging @bot on X ([docs](https://docs.x.ai/grok-bot)). Check your own country before you buy.

## Where Dots fits

**You already pay for ChatGPT Pro and live in a supported region.** The first dot is included with Pro or Business Premium at no extra cost ([help](https://help.openai.com/en/articles/20001530)).

**You want to reach it by phone or text.** OpenAI documents calls and, in a limited US beta, texting over iMessage or RCS. OpenAI notes that this texting is not end-to-end encrypted ([help](https://help.openai.com/en/articles/20001530)).

**You want it to start from what ChatGPT already knows about you.** A dot starts from your ChatGPT memory ([help](https://help.openai.com/en/articles/20001530)).

**Chatting doesn't eat your ChatGPT limits.** OpenAI says conversations with the dot don't count toward ChatGPT usage limits. Tasks it runs in ChatGPT Work or Codex do ([docs](https://learn.chatgpt.com/docs/dots)).

**Rollout is gradual,** so a supported account may still not see it yet ([help](https://help.openai.com/en/articles/20001530)).

## How to choose

- **Several agents with separate jobs that coordinate:** Grok Bot ([docs](https://docs.x.ai/grok-bot)). Dots starts with one dot plus background agents ([help](https://help.openai.com/en/articles/20001530), [docs](https://learn.chatgpt.com/docs/dots)).
- **Jobs that fire on GitHub, Slack, or webhook events:** Grok Bot documents these triggers ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). For Dots we only found reminders and recurring checks (see below).
- **You are on ChatGPT Plus or Free:** Dots is not included ([pricing](https://chatgpt.com/pricing)). On X, Plus and Free don't include Grok Bot either. Premium does ([x.ai pricing](https://x.ai/pricing)).
- **You want calls or texting:** Dots documents both, with limits ([help](https://help.openai.com/en/articles/20001530)).

## What we could not verify

- The dollar prices of ChatGPT Pro's three tiers. The pricing page did not render prices when we fetched it.
- Whether Dots routines can start from external events (GitHub, webhook). OpenAI's pages describe reminders, recurring checks, and the dot waking itself.
- When more than one dot per account will be available. OpenAI says only that it is planned.
- Whether Grok Bot supports texting or phone calls. The xAI pages we read mention voice chat in the app, but not SMS or phone calls.

## FAQ

### Is Dots free?

No. It is for ChatGPT Pro, Business Premium, and Enterprise/Edu/Healthcare in beta ([help](https://help.openai.com/en/articles/20001530), [pricing](https://chatgpt.com/pricing)).

### Can I use Dots in the UK or EU?

Not on Pro at launch. OpenAI excludes users in the EEA, Switzerland, and the UK ([help](https://help.openai.com/en/articles/20001530)).

### How many dots can I have?

One at launch. OpenAI says the ability to add more is planned ([help](https://help.openai.com/en/articles/20001530)).

### Which plan includes Grok Bot?

X Subscription Premium, Super, and Ultra, plus eligible Cursor and SuperGrok plans. There is also a trial: a usage credit with a 7-day window ([Cursor help](https://cursor.com/help/grok-bot/plans)).

### Does Grok Bot keep working when my laptop is closed?

Yes. Work runs on the cloud computer ([docs](https://docs.x.ai/grok-bot)).

### Where can I see real Grok Bot setups?

Browse the [Plays directory](/). Each setup links to its original post.
