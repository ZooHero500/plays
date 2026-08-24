---
id: "cryptorover-personal-cfo"
title: "I built a personal CFO inside Grok Bot."
summary: "cryptorover named one bot Personal CFO. A sheet of holdings, one hand run, a saved briefing skill, a weekday routine. It flags drift. It does not trade."
category: "Life"
tags:
  - "portfolio"
  - "briefing"
  - "read-only"
author: "cryptorover"
authorHandle: "@cryptorover"
sourceUrl: "https://x.com/cryptorover/status/2090479472852300087"
date: ""
audience: "You already know your targets and still burn the first hour checking what moved."
outcome: "A short weekday brief: what moved, what is coming, what drifted past your limits. You still decide."
commentary: "What's good: one bot, read-only, four sections, and he has been running it since the beta opened. The catch: a sheet of holdings beats a brokerage login, and other bots on the same computer can see that session. Distinct from Peter's SimpleFin spend bot and from a trading desk that sends."
cover: "/assets/covers/official-bug-reproduction.png"
imageUrls:
  - "https://pbs.twimg.com/media/HQKc0sJXYAACSdu.jpg"
steps:
  - "Name one bot Personal CFO. Portfolio monitoring only. Read-only forever. It never places an order or moves capital."
  - "Put a sheet on the shared computer: Asset, Quantity, Cost Basis, Target %. Tell the bot where it lives. That is the path. Do not sign a brokerage into the shared computer unless you are fine with every other bot seeing that session."
  - "Run it once by hand. Give it your real targets, a single-asset limit (he used 8%), and a rebalance threshold (he used 3 points). Ask for four sections only: recent moves, upcoming events that touch the book, rebalance flags, one-sentence status. Live prices. Cite sources. Missing names get listed, not guessed."
  - "Read the first output. Prices current. Weights add to 100. Nothing filled in from memory. When the shape is right, save it as a skill named Daily Portfolio Briefing, including the no-trade rule."
  - "Hang a weekday morning routine on that skill. Test-run it once. Confirm today's data, the four sections, citations, and that it stopped at the approval line. Watch the first week the same way. If the brief goes quiet, check whether routines paused."
tutorial:
  - title: "Name Personal CFO."
    body: "Portfolio only. Read-only. No orders."
  - title: "A sheet of holdings."
    body: "Asset, quantity, cost, target. Tell it the path."
  - title: "Run once by hand."
    body: "Four sections. Live prices. Cite. Do not guess."
  - title: "Save the briefing skill."
    body: "Limits, format, and the no-trade rule."
  - title: "Weekday routine. Test-run."
    body: "Today's data. Then you still make the call."
prompts:
  - title: "Personal CFO"
    text: |
      You own my portfolio monitoring and morning briefing. Read-only forever. Never place an order or move capital.

      Pull my holdings from the sheet I point you at. Use live prices. Cite every source. If a holding cannot be priced, list it separately. Never invent a number. Never use a stale number without labelling it.

      Deliver four sections only.
      1. Recent Moves. Top five by dollar impact, with percentage and a one-sentence reason.
      2. Upcoming Events. Next 7 days, only what touches my holdings.
      3. Rebalance Flags. Current weight versus target, exact drift, and a suggested action only if a threshold is crossed.
      4. One sentence overall status.

      Keep it under 400 words. Require my explicit approval before any recommendation that involves actual money.
    source: "Rewritten from https://x.com/cryptorover/status/2090405694755185102"
featured: false
---
