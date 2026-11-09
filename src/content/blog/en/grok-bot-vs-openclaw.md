---
title: "Grok Bot vs OpenClaw: hosted Bots vs a self-hosted chat-app gateway (checked Nov 9, 2026)"
description: "Grok Bot vs OpenClaw, from the official docs: who runs the computer, models, chat apps, scheduling, approvals and sandboxing, cost, and real Grok Bot setups."
slug: "grok-bot-vs-openclaw"
date: 2026-11-09
---

# Grok Bot vs OpenClaw: hosted Bots vs a self-hosted gateway

The real choice is who runs the agent. Grok Bot is a hosted service. Your Bots share a persistent cloud computer with a browser, files, and a terminal, and access comes with an X Subscription or an eligible Cursor plan ([xAI docs](https://docs.x.ai/grok-bot), [Cursor help](https://cursor.com/help/grok-bot/plans)). OpenClaw is open-source software you run yourself. It is a gateway on your own machine or server that connects chat apps like WhatsApp, Telegram, Slack, and iMessage to AI agents, using the model provider you pick ([OpenClaw docs](https://docs.openclaw.ai/)).

_Last checked 2026-11-09._

> **Every play links to its source.** Most plays link to the X post they came from; others link to GitHub, LinkedIn, YouTube, x.ai, a blog, or similar. Open the source to check the original before you copy a setup.

Disclosure: Plays (grokbotplays.com) is an unofficial directory of Grok Bot setups. It is not affiliated with xAI, Cursor, or the OpenClaw Foundation, and nobody paid for this page. Every product fact below links to the vendor's own page. Anything we could not confirm there is marked **unverified**.

## Which "OpenClaw" this page means

This page covers **OpenClaw by the OpenClaw Foundation**, the self-hosted AI assistant documented at [docs.openclaw.ai](https://docs.openclaw.ai/). The docs describe it as MIT-licensed and developed by an independent 501(c)(3) foundation ([OpenClaw docs](https://docs.openclaw.ai/), [Why OpenClaw](https://docs.openclaw.ai/start/why-openclaw)).

## At a glance

| | Grok Bot | OpenClaw |
|---|---|---|
| What it is | A hosted product from xAI that runs in Cursor's cloud ([docs](https://docs.x.ai/grok-bot)) | Open-source, self-hosted gateway, MIT license ([docs](https://docs.openclaw.ai/)) |
| Who runs the computer | xAI and Cursor. Your Bots share one persistent cloud computer ([docs](https://docs.x.ai/grok-bot)) | You. One Gateway process on your machine or a server ([docs](https://docs.openclaw.ai/)) |
| Setup | Sign in to the app with an eligible account ([Cursor help](https://cursor.com/help/grok-bot/plans)) | Install script or npm, Node 24 or 26, then onboarding. It runs as a LaunchAgent, systemd unit, or Scheduled Task ([getting started](https://docs.openclaw.ai/getting-started)) |
| Model | "Grok Bot manages model selection" ([teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Your choice of provider. Needs an API key or an existing Claude Code or Codex CLI login ([getting started](https://docs.openclaw.ai/getting-started)) |
| Can it use Grok? | Yes, xAI picks the model ([teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Yes. A bundled xAI plugin signs in with Grok OAuth on an eligible SuperGrok or X Premium plan ([xAI provider](https://docs.openclaw.ai/providers/xai)) |
| Where you talk to it | Desktop and mobile apps, Slack, and @bot on X in some regions ([docs](https://docs.x.ai/grok-bot)) | Chat apps through one Gateway: Discord, Google Chat, iMessage, Matrix, Teams, Signal, Slack, Telegram, WhatsApp, Zalo, and more, plus a web Control UI ([docs](https://docs.openclaw.ai/)) |
| Several agents | Several named Bots that work together and hand off work ([docs](https://docs.x.ai/grok-bot)) | Multiple isolated agents in one Gateway, each with its own workspace and sessions, routed by bindings ([multi-agent](https://docs.openclaw.ai/concepts/multi-agent)) |
| Scheduled work | Routines on a schedule or on Slack, GitHub, Linear, Sentry, PagerDuty, email, or webhook events ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)) | Automations: scheduled jobs, webhooks, and Gmail Pub/Sub triggers ([automations](https://docs.openclaw.ai/automation/cron-jobs)) |
| Safety defaults | Auto Review checks actions. Sensitive ones need your approval ([teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Sandboxing and exec approvals are off by default. The default is a trusted single-operator assistant ([Why OpenClaw](https://docs.openclaw.ai/start/why-openclaw)) |
| Price | Included on X Subscription Premium ($30/mo), Super ($100/mo), Ultra ($200/mo). Not Plus or Free ([x.ai pricing](https://x.ai/pricing), [Cursor help](https://cursor.com/help/grok-bot/plans)) | No paid tier and no hosted service ([docs](https://docs.openclaw.ai/), [Why OpenClaw](https://docs.openclaw.ai/start/why-openclaw)). You still pay for your model provider and wherever you run it |

## Where Grok Bot fits

**You don't want to run a server.** The computer, updates, and recovery are handled for you. Work keeps running in the cloud while your laptop is closed ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

**The work lives in web apps and sites.** Bots share a cloud computer with a browser, so they can use sites that have no connector ([docs](https://docs.x.ai/grok-bot)). If a site blocks Cursor's network, you can route the Bot's browser through your desktop ([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).

**You want approvals on from day one.** Auto Review checks each action, and you can add Ask first rules ([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting), [teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)).

**You want a team of Bots with separate jobs.** Real setups:

- A Head of Research Bot with analyst Bots working overnight ([play](/play/dspaterson-research-overnight/)).
- xAI's own pattern for running several teams from one project channel ([play](/play/official-multiple-teams/)).
- A prompt for moving skills, context, and projects from Claude Code or Codex into Grok Bot. The author's post compares the launch to an "OpenClaw moment" ([play](/play/milesdeutscher-migration-prompt/)).

## Where OpenClaw fits

**You want to own the box and the data.** It runs on your hardware or server, with no hosted service in the middle ([docs](https://docs.openclaw.ai/)).

**Your people already live in WhatsApp, Telegram, or iMessage.** One Gateway serves every configured channel at once ([docs](https://docs.openclaw.ai/)). The personal setup guide uses a dedicated WhatsApp number as the assistant ([personal assistant setup](https://docs.openclaw.ai/start/openclaw)).

**You want to pick or swap the model.** Providers are plugins, and no lab's model is privileged ([Why OpenClaw](https://docs.openclaw.ai/start/why-openclaw)). You can even point it at Grok through the xAI plugin ([xAI provider](https://docs.openclaw.ai/providers/xai)).

**You are fine owning security settings.** The docs are direct about this. Sandboxing is off by default, one gateway is one trust domain, and native plugins run in-process without a sandbox ([Why OpenClaw](https://docs.openclaw.ai/start/why-openclaw)). On most DM channels, unknown senders get a pairing code, and their message is not processed until you approve ([security FAQ](https://docs.openclaw.ai/help/faq/security-and-access-control)).

## How to choose

- **No servers, a browser-capable cloud computer, approvals built in:** Grok Bot ([docs](https://docs.x.ai/grok-bot)).
- **Self-hosted, open source, your model, your chat apps:** OpenClaw ([docs](https://docs.openclaw.ai/)).
- **Event-driven jobs:** both document schedules and webhooks. Grok Bot also lists Slack, GitHub, Linear, Sentry, PagerDuty, and email triggers ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). OpenClaw lists Gmail Pub/Sub and an IMAP email trigger ([automations](https://docs.openclaw.ai/automation/cron-jobs), [docs index](https://docs.openclaw.ai/llms.txt)).
- **You are also looking at Hermes Agent:** it is another self-hosted, MIT-licensed option. See [Grok Bot vs Hermes Agent](/blog/grok-bot-vs-hermes-agent/).

## Moving between them

Whichever you pick, keep your instructions in files you own. One public Grok Bot setup backs up skills, routines, and memories to a private GitHub repo every day, with no secrets ([play](/play/acolombiadev-daily-private-repo-backup/)). Grok Bot skills are reusable instructions shared by all your Bots ([docs](https://docs.x.ai/grok-bot/skills-routines-and-automations)). OpenClaw skills load from each agent's workspace and shared folders ([multi-agent](https://docs.openclaw.ai/concepts/multi-agent)).

## What we could not verify

- What OpenClaw costs to run in practice. The docs say there is no paid tier, but hosting and model costs depend on your setup. We did not find official numbers.
- Whether a Grok Bot routine can be moved into an OpenClaw automation automatically. We found no import tool on either side.
- Which model Grok Bot uses for a given task. The docs say only that Grok Bot manages model selection.

## FAQ

### Is OpenClaw free?

The software is. The Foundation says it sells nothing: no paid tier, no hosted service ([Why OpenClaw](https://docs.openclaw.ai/start/why-openclaw)). You still need a model provider account or API key ([getting started](https://docs.openclaw.ai/getting-started)).

### Can OpenClaw use Grok models?

Yes. The bundled xAI plugin supports Grok OAuth with an eligible SuperGrok or X Premium subscription, or an xAI API key ([xAI provider](https://docs.openclaw.ai/providers/xai)).

### Does Grok Bot run on my own computer?

The Bots work on a cloud computer. You can allow them to run commands on your desktop with the Execution on this computer setting ([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).

### Is OpenClaw safe to run?

It depends on your configuration. The docs say sandboxing and exec approvals are off by default, and recommend `openclaw security audit` to check your setup ([Why OpenClaw](https://docs.openclaw.ai/start/why-openclaw)).

### Which plan includes Grok Bot?

X Subscription Premium, Super, and Ultra, plus eligible legacy Cursor and SuperGrok plans ([Cursor help](https://cursor.com/help/grok-bot/plans)).

### Where can I see real Grok Bot setups?

Browse the [Plays directory](/). Each setup links to its original post.
