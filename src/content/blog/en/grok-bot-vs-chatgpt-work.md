---
title: "Grok Bot vs ChatGPT Work: always-on Bots vs a task agent (checked Nov 16, 2026)"
description: "Grok Bot vs ChatGPT Work, from official docs: persistent Bots and routines vs a ChatGPT agent for finished documents, decks, and scheduled or event-triggered tasks."
slug: "grok-bot-vs-chatgpt-work"
date: 2026-11-16
---

# Grok Bot vs ChatGPT Work: always-on Bots vs a task agent

Both will take a job and come back with work you can review. The difference is what kind of agent you are hiring. Grok Bot is a team of named Bots that share one persistent cloud computer and can run routines on a schedule or on events, including while your laptop is closed ([Grok Bot docs](https://docs.x.ai/grok-bot), [skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)). ChatGPT Work is an agent inside ChatGPT for longer, multi-step work and finished deliverables such as documents, spreadsheets, presentations, reports, and sites ([OpenAI Help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), [ChatGPT Learn](https://learn.chatgpt.com/docs/get-started-with-work)).

_Last checked 2026-11-16._

> **Every play links to its source.** Most plays link to the X post they came from; others link to GitHub, LinkedIn, YouTube, x.ai, a blog, or similar. Open the source to check the original before you copy a setup.

Disclosure: Plays (grokbotplays.com) is an unofficial directory of Grok Bot setups. It is not affiliated with xAI, Cursor, or OpenAI, and nobody paid for this page. Every vendor fact below links to the vendor's own page. Anything we could not confirm there is marked **unverified**.

## Which "ChatGPT Work" this page means

This page covers **ChatGPT Work**, the Work agent in ChatGPT. It does not cover everyday Chat, Codex (OpenAI's software-development agent), or Dots (OpenAI's always-on agent with its own computer). Official docs treat those as separate experiences ([OpenAI Help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), [Dots help](https://help.openai.com/en/articles/20001530)). If your question is Grok Bot vs Dots, see [Grok Bot vs Dots](/blog/grok-bot-vs-dots/). For a wider map, see [Grok Bot alternatives](/blog/grok-bot-alternatives/).

## At a glance

| | Grok Bot | ChatGPT Work |
|---|---|---|
| Made by | xAI, running on a Cursor cloud computer ([docs](https://docs.x.ai/grok-bot)) | OpenAI, inside ChatGPT ([help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)) |
| What it is | Named Bots that work in parallel, message each other, and can join group chats ([docs](https://docs.x.ai/grok-bot)) | A task agent you switch into for a clear outcome: a brief, deck, analysis, recurring update, workflow, or file ([learn](https://learn.chatgpt.com/docs/get-started-with-work)) |
| Computer | One persistent cloud computer (browser, files, terminal) shared by your Bots ([docs](https://docs.x.ai/grok-bot)) | Cloud Work, plus optional local files, apps, and the browser in the desktop app when those tools are available ([learn](https://learn.chatgpt.com/docs/get-started-with-work), [help](https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work)) |
| Your laptop closed | The Bot keeps working on the cloud computer | Cloud Work can continue without your computer. Tasks that need local files or tools need the computer online and connected ([learn](https://learn.chatgpt.com/docs/get-started-with-work)) |
| Models | "Grok Bot manages model selection" ([teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | A model picker in Work. Official docs name GPT-6.x models that are not available in regular Chat; which ones you see depends on plan and workspace settings ([help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)) |
| Scheduled work | Routines on a schedule or on Slack, GitHub, Linear, Sentry, PagerDuty, email, or webhook events ([routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)) | Scheduled tasks, created from Chat or ChatGPT Work. Event-triggered tasks run in Work and respond to supported Gmail, Slack, or GitHub activity on eligible plans ([scheduled tasks](https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt), [automations](https://learn.chatgpt.com/docs/automations)) |
| Finished files | Bots can create files on the cloud computer and in connected apps such as Drive or Slack ([docs](https://docs.x.ai/grok-bot)) | Officially designed to create and edit documents, spreadsheets, presentations, reports, and analyses, including native Google Docs, Sheets, and Slides when enabled. The desktop flow supports Microsoft Excel through an add-in; PowerPoint was not included in that desktop flow at the time of the help article ([file help](https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work)) |
| Approvals | Sensitive actions need your approval, checked by an independent review model called Auto Review ([teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises)) | You can follow progress, change direction, and approve important actions ([learn](https://learn.chatgpt.com/docs/get-started-with-work)) |
| Who can get it | The X Subscription Premium ($30/mo), Super ($100/mo), and Ultra ($200/mo). Not Plus or Free ([pricing docs](https://docs.x.ai/x-subscription/pricing), [x.ai pricing](https://x.ai/pricing)) | Official docs describe Work as part of ChatGPT on eligible paid plans, and discuss Plus, Pro, Business, Enterprise, and Edu in the Work/Codex help and scheduled-task pages. The exact matrix is plan- and workspace-dependent ([help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), [scheduled tasks](https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt)) |
| Price in dollars | See [Grok Bot pricing](/blog/grok-bot-pricing/) | Work usage follows the same usage structure as Codex; official docs point to the Codex pricing page and say Work usage will vary by task ([help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)). Exact ChatGPT plan dollar amounts for Work are **unverified** on this page because we are not quoting a checkout page we did not re-check line by line for every tier |

## Where Grok Bot fits

Choose Grok Bot when the job is ongoing and role-based: several named Bots, a shared computer that already has your logins, and a routine that should fire tomorrow morning or when a Slack message, GitHub event, or email arrives ([docs](https://docs.x.ai/grok-bot), [routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Public setups that show that pattern:

- A Head of Research plus analyst Bots that take projects overnight and return a morning summary ([play](/play/dspaterson-research-overnight/)).
- xAI's own pattern for running several teams from one project channel ([play](/play/official-multiple-teams/)).
- A chief of staff that reads Slack, email, Notion, and Stripe, then briefs you and rebuilds slides ([play](/play/david-carbutt-cos-slides-stripe/)).
- A presentation Bot that sends a deck, watches for the reviewer's email, and applies comments while you are out ([play](/play/aymanmed-presentation-director-feedback/)).

More on scheduled work: [how to set up Grok Bot routines](/blog/grok-bot-routines/). If a routine already exists and is misbehaving, see [routines not working](/blog/grok-bot-routines-not-working/).

## Where ChatGPT Work fits

Choose ChatGPT Work when you have a clear outcome and want a finished file you can review: a deck from meeting notes, a spreadsheet, a report, a recurring update, or a lightweight site. Official getting-started guidance says good first tasks have a clear outcome, a few source materials, and an output you can check ([ChatGPT Learn](https://learn.chatgpt.com/docs/get-started-with-work), [file help](https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work)).

You can also schedule Work. Official docs say you can create scheduled tasks from Chat or ChatGPT Work, manage them in Scheduled, and, on eligible plans, run event-triggered tasks in Work for supported Gmail, Slack, or GitHub activity ([scheduled tasks](https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt), [automations](https://learn.chatgpt.com/docs/automations)). Desktop scheduled tasks that need local files require the computer to stay on and the app to keep running ([automations](https://learn.chatgpt.com/docs/automations)).

Work is not official documentation's name for OpenAI's always-on teammate. That product is Dots ([Dots help](https://help.openai.com/en/articles/20001530)).

## How to choose

- **You want a standing team of Bots and event-triggered routines, and you already have (or will buy) The X Subscription Premium or higher:** Grok Bot.
- **You want a polished Google Doc, Sheet, or Slide, or a spreadsheet/deck from a brief, and you already live in ChatGPT:** ChatGPT Work.
- **You want an always-on agent inside ChatGPT with its own computer:** look at Dots, not Work. See [Grok Bot vs Dots](/blog/grok-bot-vs-dots/).
- **You need the agent to keep going after you close the laptop, including steps that use local files on that laptop:** Grok Bot's computer is in the cloud by default. Work can continue in the cloud, but local-file steps need the computer connected ([learn](https://learn.chatgpt.com/docs/get-started-with-work)).
- **You are comparing several products at once:** start with [Grok Bot alternatives](/blog/grok-bot-alternatives/) and [Grok Bot pricing](/blog/grok-bot-pricing/).

## What we could not verify

- Side-by-side quality, speed, or cost per finished deck or research brief. We did not run the same task on both products.
- A complete, dated ChatGPT price table for every Work-eligible plan and credit pack. Official Work help points at Codex usage rules and says usage varies by task ([help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)).
- Whether every ChatGPT plan that includes Work also includes event-triggered tasks, local work sync, or every file type. Official pages say availability depends on plan, workspace settings, file type, and surface.
- Whether PowerPoint support has been added to the Work desktop flow since the help article we fetched, which said it was not included at launch ([file help](https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work)).

## FAQ

### Is ChatGPT Work the same as ChatGPT Agent or Dots?

Official docs now name the task agent **ChatGPT Work**, and treat **Dots** as a separate always-on agent. This page follows those names and linked help articles ([Work help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), [Dots help](https://help.openai.com/en/articles/20001530)). If you see an older "ChatGPT Agent" article, check the date and the official help pages above.

### Can ChatGPT Work run on a schedule?

Yes, on eligible accounts. You can create scheduled tasks from Chat or ChatGPT Work, and event-triggered tasks run in Work for supported Gmail, Slack, or GitHub activity ([scheduled tasks](https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt)).

### Can Grok Bot make slides and spreadsheets too?

Bots work on a real cloud computer and in connected apps, and public setups include slide and briefing work, such as [this chief-of-staff example](/play/david-carbutt-cos-slides-stripe/) and [this presentation example](/play/aymanmed-presentation-director-feedback/). Official Work docs, by contrast, are explicit about native Google Docs, Sheets, and Slides and about Excel add-in support ([file help](https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work)). We did not run a file-format bake-off.

### Which plan includes Grok Bot?

Premium, Super, and Ultra on The X Subscription. Not Plus or Free. Details and current list prices are on [Grok Bot pricing](/blog/grok-bot-pricing/).

### Where can I see real Grok Bot setups?

This site is a directory of public setups, each with a source link. Start at [Grok Bot use cases](/guides/grok-bot-use-cases/) or [Grok Bot for personal use](/blog/grok-bot-for-personal-use/).
