---
title: "Grok Bot vs Hermes Agent: managed Bots vs self-hosted open source (checked Nov 2, 2026)"
description: "Grok Bot vs Nous Research's Hermes Agent, from official docs and the GitHub repo: hosting, models, Bot Mode, scheduling, approvals, cost, and real Grok Bot setups."
slug: "grok-bot-vs-hermes-agent"
date: 2026-11-02
---

# Grok Bot vs Hermes Agent: managed Bots vs self-hosted open source

The real choice is who runs the computer. Grok Bot is a managed service. xAI and Cursor run a persistent cloud computer for your Bots, and you pay through an X Subscription or an eligible Cursor plan ([xAI docs](https://docs.x.ai/grok-bot), [Cursor help](https://cursor.com/help/grok-bot/plans)). Hermes Agent is Nous Research's open-source agent under the MIT license. You install it on your own machine, a VPS, or a serverless backend, and connect whichever model provider you want ([GitHub](https://github.com/NousResearch/hermes-agent)). Hermes now has a Bot Mode with named Bots, routines, and group chats, so the feature lists overlap more than they used to ([Hermes docs](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)).

_Last checked 2026-11-02._

> **Every play links to its source.** Most plays link to the X post they came from; others link to GitHub, LinkedIn, YouTube, x.ai, a blog, or similar. Open the source to check the original before you copy a setup.

Disclosure: Plays (grokbotplays.com) is an unofficial directory of Grok Bot setups. It is not affiliated with xAI, Cursor, or Nous Research, and nobody paid for this page. Every vendor fact below links to the vendor's own page or repository. Anything we could not confirm there is marked **unverified**.

## Which "Hermes" this page means

This page covers **Hermes Agent** by Nous Research, the open-source agent at [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent). It is not about Nous's Hermes language models. Those are models, not an agent app, and Hermes Agent can run many other models besides them ([GitHub](https://github.com/NousResearch/hermes-agent)).

## At a glance

| | Grok Bot | Hermes Agent |
|---|---|---|
| Made by | xAI, runs in Cursor's cloud ([docs](https://docs.x.ai/grok-bot)) | Nous Research. MIT-licensed open source with about 259,500 GitHub stars on Nov 2, 2026 ([GitHub](https://github.com/NousResearch/hermes-agent)) |
| Who hosts it | Managed. One persistent cloud computer per user, shared by all your Bots ([docs](https://docs.x.ai/grok-bot), [teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | You do: local machine, Docker, SSH, Modal, Daytona, or Vercel Sandbox backends ([GitHub](https://github.com/NousResearch/hermes-agent)) |
| Install | Apps for macOS, Windows, Linux, iOS, Android ([docs](https://docs.x.ai/grok-bot)) | Linux, macOS, WSL2, native Windows, and Android via Termux ([GitHub](https://github.com/NousResearch/hermes-agent)) |
| Models | "Grok Bot manages model selection" ([teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Any provider: Nous Portal, OpenRouter, OpenAI, or your own endpoint. Switch with `hermes model` ([GitHub](https://github.com/NousResearch/hermes-agent)). A Grok subscription can be used through xAI Grok OAuth ([xAI news](https://x.ai/news/grok-hermes)) |
| Multiple agents | Named Bots that work in parallel, message each other, and join group chats ([docs](https://docs.x.ai/grok-bot)) | Bot Mode: each Bot is a profile with its own role, model, memory, skills, and credentials. Group chats hold 2 to 6 Bots ([Hermes docs](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)) |
| Scheduling | Routines on a schedule or on Slack, GitHub, Linear, Sentry, PagerDuty, email, or webhook events ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)) | Built-in cron scheduler. In Bot Mode, routines are cron jobs ([GitHub](https://github.com/NousResearch/hermes-agent), [Hermes docs](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)) |
| Where you talk to it | Desktop and mobile apps, @bot on X in some regions ([docs](https://docs.x.ai/grok-bot)), Slack ([teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | CLI plus Telegram, Discord, Slack, WhatsApp, Signal, and email through one gateway ([GitHub](https://github.com/NousResearch/hermes-agent)) |
| Approvals | Sensitive actions need your approval, checked by an independent review model called Auto Review ([teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Dangerous-command approval modes: smart (default), manual, or off. A hardline blocklist can't be overridden. Container backends skip the checks because the container is the boundary ([security docs](https://hermes-agent.nousresearch.com/docs/user-guide/security)) |
| Cost | X Subscription Premium ($30/mo), Super ($100/mo), Ultra ($200/mo). Not Plus or Free ([x.ai pricing](https://x.ai/pricing)) | The software is free (MIT). You pay for model usage and for any server you rent ([GitHub](https://github.com/NousResearch/hermes-agent)). Nous Portal pricing is **unverified** |

## Where Grok Bot fits

**You don't want to run a server.** There is nothing to install beyond the app. The computer, browser sessions, and files persist in Cursor's cloud ([docs](https://docs.x.ai/grok-bot)). One Linux user who runs both describes the difference as a managed always-on desk versus a bring-your-own Hermes box ([play](/play/jollyroger-linux-agent-computer/)).

**Event triggers out of the box.** Routines can start from Slack, GitHub, Linear, Sentry, PagerDuty, email, or a webhook, as well as on a schedule ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). A GitHub commit-review setup is one example ([play](/play/jasonkiesel-github-code-reviews/)).

**Team and admin controls.** Team rules, Auto Review, network controls, and audit logs are documented for teams and enterprises ([teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)).

**Real team setups to copy:**

- A Head of Research Bot with analyst Bots working overnight ([play](/play/dspaterson-research-overnight/)).
- Five role Bots that coordinate Claude Code, Codex, and Cursor ([play](/play/ekcheung-five-role-orchestrator/)).
- A one-hour workshop walkthrough of building a full team ([play](/play/0xshoopy-cursor-workshop-team/)).

## Where Hermes Agent fits

**You want to pick the model.** Hermes works with many providers, and each Bot in Bot Mode can use a different model ([GitHub](https://github.com/NousResearch/hermes-agent), [Hermes docs](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)). If you already pay for Grok, xAI says the subscription works inside Hermes ([xAI news](https://x.ai/news/grok-hermes)).

**You want to own the box and the data.** You choose where it runs: your laptop, a VPS, Docker, or a serverless sandbox ([GitHub](https://github.com/NousResearch/hermes-agent)). Bot profiles live in files under `~/.hermes/profiles/` ([Hermes docs](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)).

**You live in a chat app.** Telegram, Discord, WhatsApp, Signal, Slack, and email all connect through one gateway ([GitHub](https://github.com/NousResearch/hermes-agent)).

**The trade-off is that you own the security setup.** Hermes's own docs say that turning approvals off or running in a container skips the dangerous-command checks. The gateway denies unknown users by default and uses pairing and allowlists ([security docs](https://hermes-agent.nousresearch.com/docs/user-guide/security)). Keeping context portable across tools is a separate concern. One Grok Bot user keeps context in GitHub markdown and Notion for that reason ([play](/play/khemaridh-github-notion-context/)).

## How to choose

- **No servers, apps on your phone, routines on events:** Grok Bot ([docs](https://docs.x.ai/grok-bot)).
- **Any model, self-hosted, free software:** Hermes Agent ([GitHub](https://github.com/NousResearch/hermes-agent)).
- **You already pay for Grok and want to try Hermes:** sign in with xAI Grok OAuth ([xAI news](https://x.ai/news/grok-hermes)).
- **Strict team controls with admin policies and audit logs:** Grok Bot documents these for teams ([teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)). With Hermes, you set up and maintain those controls yourself ([security docs](https://hermes-agent.nousresearch.com/docs/user-guide/security)).

## What we could not verify

- Nous Portal subscription prices. The README mentions the Portal but we did not confirm prices on an official page.
- A per-Bot desktop screen in Hermes Bot Mode. A third-party article claimed one. We did not find it in the official docs we read.
- Total monthly cost of running Hermes. It depends on your model provider and hosting, so there is no single number.
- Whether Hermes routines can start on external events such as GitHub or webhooks without extra setup. The docs we read describe cron schedules.

## FAQ

### Is Hermes Agent free?

The software is MIT-licensed and free. Model usage and hosting cost whatever your provider charges ([GitHub](https://github.com/NousResearch/hermes-agent)).

### Can I use my Grok subscription in Hermes Agent?

Yes. xAI says the "xAI Grok OAuth (SuperGrok Subscription)" sign-in works in Hermes ([xAI news](https://x.ai/news/grok-hermes)).

### Does Hermes Agent have multiple bots like Grok Bot?

Yes. Bot Mode in the Hermes desktop app gives you named Bots with their own role, model, memory, and skills, plus routines and group chats ([Hermes docs](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)).

### Which plan includes Grok Bot?

X Subscription Premium, Super, and Ultra, plus eligible Cursor and SuperGrok plans. There is also a trial: a usage credit with a 7-day window ([Cursor help](https://cursor.com/help/grok-bot/plans)).

### Where can I see real Grok Bot setups?

Browse the [Plays directory](/). Each setup links to its original post.
