---
id: "jholtdigital-linear-wrap"
title: "I built my first real agent automation using Grok Bot."
summary: "Jason Holt is bad at Linear and still promised a daily wrap. An Ops manager bot reads the day's commits at 8pm, creates or updates the issues, and he runs /wrap in Discord before bed."
category: "Engineering"
tags:
  - "linear"
  - "commits"
  - "discord"
author: "Jason Holt"
authorHandle: "@jholtdigital"
sourceUrl: "https://x.com/jholtdigital/status/2090060501048786958"
date: ""
audience: "You ship as a solo and the Discord wrap is the contract, but Linear is always a day behind."
outcome: "Tonight's commits on the board. Issues created or updated. /wrap still yours."
commentary: "What's good: the bot files the work you already did. The catch: it does not write the wrap. You still type /wrap. Do not let it post to Discord for you."
cover: "/assets/covers/eric-fridge-dinner.png"
imageUrls: []
steps:
  - "Create an Ops manager bot. Point it at the repo and at Linear. The job is the board, not the wrap."
  - "Hang one routine: every day at 8pm it walks today's commits and creates or updates the matching Linear issues."
  - "When the board is current, you run /wrap in Discord before bed. That is still your voice to the people watching the build."
  - "Do not hand it Discord. Filing is the automation. The wrap stays a human message."
tutorial:
  - title: "Name an Ops manager."
    body: "Repo plus Linear. Not Discord."
  - title: "8pm, walk the commits."
    body: "Create or update the issues."
  - title: "You run /wrap."
    body: "The board is ready. The message is yours."
prompts:
  - title: "8pm Linear"
    text: |
      You are my Ops manager.

      Every day at 8pm, go through today's commits. Create or update the matching Linear issues so the board matches the work.

      Do not post to Discord. I run /wrap myself once the issues are current.
    source: "Rewritten from https://x.com/jholtdigital/status/2090060501048786958"
featured: false
---
