---
title: "Grok Bot alternatives: hosted agents, ChatGPT Work, and self-hosted options (checked Nov 16, 2026)"
description: "Grok Bot alternatives from official docs: Claude Cowork and Duet, ChatGPT Work and Dots, Meta Muse, Manus, OpenClaw, and Hermes Agent, with links to deeper comparisons."
slug: "grok-bot-alternatives"
date: 2026-11-16
---

# Grok Bot alternatives: hosted, ChatGPT, and self-hosted options

If you want an agent with a computer, the main Grok Bot alternatives fall into three groups: hosted personal agents that keep working between chats (OpenAI Dots, Meta Muse, Claude Duet, Manus), task agents you start for a finished deliverable (ChatGPT Work, Claude Cowork), and self-hosted software you run yourself (OpenClaw, Hermes Agent). Official product pages for each are linked below. This page is a map, not a ranked review.

_Last checked 2026-11-16._

> **Every play links to its source.** Most plays link to the X post they came from; others link to GitHub, LinkedIn, YouTube, x.ai, a blog, or similar. Open the source to check the original before you copy a setup.

Disclosure: Plays (grokbotplays.com) is an unofficial directory of Grok Bot setups. It is not affiliated with xAI, Cursor, OpenAI, Anthropic, Meta, Manus, or Nous Research, and nobody paid for this page. Every vendor fact below links to the vendor's own page. Anything we could not confirm there is marked **unverified**. We only list products we could source from an official page on this date.

## At a glance

| Alternative | Maker | What it is, in official terms | Deep dive on this site |
|---|---|---|---|
| Claude Cowork | Anthropic | A task mode in the Claude apps that splits work across sub-agents in an isolated cloud environment and returns finished files ([Claude Help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)) | [Grok Bot vs Claude Cowork](/blog/grok-bot-vs-claude-cowork/) |
| Claude Duet | Anthropic | A proactive agent that works while you are away, briefs you, and waits for your approval when it matters. Officially available in Pro, Max, and Ultra plans in the US ([product page](https://claude.com/product/claude-duet)) | — |
| ChatGPT Work | OpenAI | An agent in ChatGPT for longer, multi-step work and finished deliverables such as documents, spreadsheets, presentations, and sites ([OpenAI Help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), [ChatGPT Learn](https://learn.chatgpt.com/docs/get-started-with-work)) | [Grok Bot vs ChatGPT Work](/blog/grok-bot-vs-chatgpt-work/) |
| Dots | OpenAI | An always-on agent in ChatGPT with its own cloud computer, rolling out to eligible plans and regions ([OpenAI Help](https://help.openai.com/en/articles/20001530)) | [Grok Bot vs Dots](/blog/grok-bot-vs-dots/) |
| Muse | Meta | A personal agent you can use in WhatsApp and Meta's apps ([Meta newsroom](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/), [Meta help](https://www.meta.com/help/subscriptions/1021145227643680/)) | [Grok Bot vs Muse](/blog/grok-bot-vs-muse/) |
| Manus | Manus | An autonomous agent with a sandboxed virtual computer, connectors, and automations, built to finish work products such as reports and sites ([Manus docs](https://manus.im/docs/introduction/welcome), [features](https://manus.im/docs/features/overview)) | — |
| OpenClaw | Open source | A gateway you install on your own machine or server that connects chat apps to agents, using the model provider you pick ([OpenClaw docs](https://docs.openclaw.ai/)) | [Grok Bot vs OpenClaw](/blog/grok-bot-vs-openclaw/) |
| Hermes Agent | Nous Research | MIT-licensed open-source agent you host yourself, with a Bot Mode that includes named Bots, routines, and group chats ([GitHub](https://github.com/NousResearch/hermes-agent), [Hermes docs](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)) | [Grok Bot vs Hermes Agent](/blog/grok-bot-vs-hermes-agent/) |

Grok Bot itself is a team of named Bots that share one persistent cloud computer, with routines that run on a schedule or on events. It is included on The X Subscription Premium, Super, and Ultra, not on Plus or Free ([Grok Bot docs](https://docs.x.ai/grok-bot), [X Subscription pricing](https://docs.x.ai/x-subscription/pricing)). Plan details are on [Grok Bot pricing](/blog/grok-bot-pricing/).

## Hosted personal agents

These are the closest substitutes if you want something that keeps going between conversations.

**OpenAI Dots.** Officially described as an always-on agent in ChatGPT with its own computer. Access is limited by plan and region; the official help page is the live list, not a third-party roundup ([OpenAI Help](https://help.openai.com/en/articles/20001530)). If this is the comparison you came for, use [Grok Bot vs Dots](/blog/grok-bot-vs-dots/). Dots is not the same product as ChatGPT Work.

**Meta Muse.** Officially a personal agent from Meta, including chat in WhatsApp, with free and paid tiers described on Meta's own pages ([Meta newsroom](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/), [Meta help](https://www.meta.com/help/subscriptions/1021145227643680/)). See [Grok Bot vs Muse](/blog/grok-bot-vs-muse/). Availability still depends on where Meta offers it.

**Claude Duet.** Anthropic's product page describes it as a proactive agent that takes on tasks, keeps working while you are away, and asks for approval when it matters. As of this check, the page says it is available in Pro, Max, and Ultra plans in the US, and is powered by Opus 5.5 ([product page](https://claude.com/product/claude-duet)). It is a different product from Claude Cowork. We have not published a full Duet comparison yet.

**Manus.** Official docs describe Manus as an autonomous agent with a sandboxed virtual computer (internet, a persistent file system, and the ability to install software), plus connectors such as Gmail, Notion, Slack, and GitHub, and automations that run on a schedule or when something happens in a connected app ([welcome](https://manus.im/docs/introduction/welcome), [features](https://manus.im/docs/features/overview)). Current list prices are **unverified** because we did not fetch a public pricing page we could quote.

## Task agents (you start a job, you get a file back)

These are stronger alternatives if your question is "who will finish this deck, spreadsheet, or research brief," not "who will sit on my team all week."

**ChatGPT Work.** Officially an agent inside ChatGPT for longer, multi-step work and finished deliverables. You can also use scheduled tasks, including event-triggered tasks in Work for supported Gmail, Slack, or GitHub activity, on eligible plans ([OpenAI Help: Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), [scheduled tasks](https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt), [ChatGPT Learn](https://learn.chatgpt.com/docs/get-started-with-work)). Full comparison: [Grok Bot vs ChatGPT Work](/blog/grok-bot-vs-chatgpt-work/).

**Claude Cowork.** Officially a task mode in the Claude apps. You hand Claude a task, it splits the work across sub-agents in an isolated cloud environment, and it gives you back finished files such as spreadsheets and decks ([Claude Help](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)). Full comparison: [Grok Bot vs Claude Cowork](/blog/grok-bot-vs-claude-cowork/).

## Self-hosted and open source

If the reason you are looking at alternatives is control, model choice, or running the stack on your own machine, these two are the ones we could source.

**OpenClaw** is open-source software you run yourself. Official docs describe it as a gateway on your own machine or server that connects chat apps such as WhatsApp, Telegram, Slack, and iMessage to AI agents, using the model provider you pick ([OpenClaw docs](https://docs.openclaw.ai/)). Full comparison: [Grok Bot vs OpenClaw](/blog/grok-bot-vs-openclaw/).

**Hermes Agent** is Nous Research's MIT-licensed agent. You install it on your own machine, a VPS, or a serverless backend, and connect a model provider. Official docs also describe a Bot Mode with named Bots, routines, and group chats ([GitHub](https://github.com/NousResearch/hermes-agent), [Bot Mode](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)). Full comparison: [Grok Bot vs Hermes Agent](/blog/grok-bot-vs-hermes-agent/).

Running cost for self-hosted options (model API bills, a VPS, your time) is **unverified** here. It depends on the model and host you choose.

## How to choose

- **You already pay for The X Subscription Premium or higher, and you want named Bots plus scheduled or event-triggered routines:** stay with Grok Bot. See [how to set up routines](/blog/grok-bot-routines/) and [Grok Bot pricing](/blog/grok-bot-pricing/).
- **You already live in ChatGPT and want an always-on teammate:** start with Dots, then check whether you are in an eligible plan and region ([OpenAI Help](https://help.openai.com/en/articles/20001530)).
- **You want finished documents, decks, or spreadsheets from a task you start:** ChatGPT Work or Claude Cowork are the official task-agent options.
- **You want to host the agent yourself and pick the model:** OpenClaw or Hermes Agent.
- **You want a personal agent in WhatsApp:** Muse is the official Meta option, where it is offered.

A public Grok Bot setup backs up skills, routines, and memories to a private GitHub repo every day, with no secrets, which is useful if you later move or duplicate a workflow ([play](/play/acolombiadev-daily-private-repo-backup/)). Another public prompt is aimed at moving skills and projects into Grok Bot from Claude Code or Codex ([play](/play/milesdeutscher-migration-prompt/)).

## Real Grok Bot setups, if you are still comparing

These are not benchmarks. They are public setups, each linked to its source, so you can see the kind of work people hand to a persistent team of Bots:

- Overnight research with a Head of Research and analyst Bots ([play](/play/dspaterson-research-overnight/)).
- A seven-Bot roster plus a Chief of Staff that must ask before anything pays or calls ([play](/play/0chob-seven-bot-cos-roster/)).
- A Saturday-morning Gmail routine that digests the week's newsletters and does not send, archive, or label anything ([play](/play/ariex-saturday-newsletter-digest/)).
- An official shared Team Bot for on-demand data work ([play](/play/bot-data-bot-team-data-scientist/)).

More examples: [Grok Bot for personal use](/blog/grok-bot-for-personal-use/), [use cases](/guides/grok-bot-use-cases/), and [templates](/guides/grok-bot-templates/).

## What we could not verify

- Search volume or market share for any of these products. We have no keyword tool data.
- Current list prices for Manus, Claude Duet, or every ChatGPT plan tier, beyond what the linked official pages state.
- Whether Claude Duet is offered outside the US, or whether a waitlist still applies in some accounts. The product page we fetched only states US availability on Pro, Max, and Ultra.
- Quality, speed, or "which one is better" scores. We did not run side-by-side tests.
- Other names that appear on third-party "best alternatives" lists. If we could not find an official product page on this date, we left them off.

## FAQ

### What is the best Grok Bot alternative?

There is not one. The better question is whether you want a hosted always-on teammate, a task agent that returns a file, or software you host yourself. Use the table above and the linked official pages.

### Is there a free or open-source Grok Bot alternative?

OpenClaw and Hermes Agent are the official open-source options we sourced. They are free to download; you still pay for hosting and model usage ([OpenClaw docs](https://docs.openclaw.ai/), [Hermes GitHub](https://github.com/NousResearch/hermes-agent)). Grok Bot itself is not included on the Free or Plus X Subscription plans ([X Subscription pricing](https://docs.x.ai/x-subscription/pricing)).

### Is ChatGPT the same as Dots or ChatGPT Work?

No. Chat is everyday conversation. Work is a task agent for finished deliverables. Dots is a separate always-on agent in ChatGPT ([OpenAI Help: Work](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), [Dots](https://help.openai.com/en/articles/20001530)).

### Does this page cover Claude Code or Cursor agents?

No. Those are coding tools. This page is about general-purpose agents with a computer or a task workspace. For Grok Bot vs Claude Cowork, see [the comparison](/blog/grok-bot-vs-claude-cowork/).
