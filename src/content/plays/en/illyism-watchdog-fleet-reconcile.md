---
id: "illyism-watchdog-fleet-reconcile"
title: "I run 10 persistent bots inside Grok Bot to watch 24 production sites 24/7 (logs, Sentry, browser smoke checks, small PRs)."
summary: "Let Grok Bot run 24/7 cloud watchdogs on your sites, keep root keys and ground truth on your laptop, and have a local coding agent periodically audit the fleet through the Grok Bot app."
category: "Engineering"
tags:
  - "monitoring"
  - "multi-bot"
  - "ops"
author: "ILIAS ISM"
authorHandle: "@illyism"
sourceUrl: "https://x.com/illyism/status/2122156037612687751"
date: "2026-11-16"
sourceDate: "2026-11-16"
audience: "You need 24/7 site watch but do not want SSH or DNS keys sitting on a cloud bot, or your laptop left open all day."
outcome: "In 20 minutes, with no typing from the author, Grok Bot Primary deleted stale repo clones (79 GB down to 36 GB), closed 25 stale tasks across 10 bots, uninstalled 4 retired MCP plugins, rotated 2 retired API keys, and approved one Sentry-noise PR plus two UI PRs."
commentary: "What's good: a clear split of roles—cloud bots watch, local agent audits and reconciles, keys stay off the 24/7 box. The catch: it depends on a local coding agent that can drive the Grok Bot macOS app, and on keeping local markdown as ground truth."
imageUrls: []
steps:
  - "Put 24/7 watch work (logs, Sentry, browser smoke checks, small PRs) on persistent Grok Bots in the cloud."
  - "Keep root keys and the real repo state in local markdown on your own machine, not on the cloud bots."
  - "When the fleet drifts (duplicate drafts, stale migrations, leftover clones), have your local coding agent drive the Grok Bot app and reconcile through Grok Bot Primary."
  - "Let that pass close stale tasks against local git, clean leftover clones and plugins, and rotate retired secrets."
  - "Repeat the audit on a schedule instead of answering every bot by hand."
tutorial: []
prompts: []
featured: false
---
