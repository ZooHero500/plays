---
id: "deryatr-x-notion-radar"
title: "I created a Grok Bot and gave it a task: scan X feeds from the past couple of days for new AI & robotics releases, then create a Notion database and add everything it finds."
summary: "Derya Unutmaz asked one bot to scan recent X for AI and robotics releases, then stand up a Notion database. Now it runs every day and the database grows itself."
category: "Growth"
tags:
  - "x"
  - "notion"
  - "research"
author: "Derya Unutmaz"
authorHandle: "@DeryaTR_"
sourceUrl: "https://x.com/DeryaTR_/status/2087371098920763631"
date: ""
audience: "You already watch AI and robotics on X and keep losing the links."
outcome: "A Notion database of new releases. A daily scan that adds the new ones. You open the table, not the feed."
commentary: "What's good: the first run built the whole database, then the daily hang made it grow. The catch: one topic, one table. Do not ask it to track the whole internet on day one."
cover: "/assets/covers/official-bug-reproduction.png"
imageUrls:
  - "https://pbs.twimg.com/media/HPfU68NWIAAXxL5.jpg"
steps:
  - "Create one research bot. Give it a first job: scan X from the past couple of days for new AI and robotics releases."
  - "Tell it to create a Notion database and add everything it finds. Title, link, why it matters. He had the table in minutes."
  - "When the first table looks right, hang the same job on a daily routine. It scans X, finds new releases, and adds them. The database grows itself."
  - "Open the table, not the feed. Keep the topic tight: AI and robotics. Add another bot if you want another beat."
tutorial:
  - title: "Scan the last couple of days on X."
    body: "New AI and robotics releases only."
  - title: "Stand up the Notion database."
    body: "Add what it finds. Title, link, why it matters."
  - title: "Hang it daily."
    body: "Same scan. New rows. The table grows."
  - title: "Open the table, not the feed."
    body: "One beat per bot."
prompts:
  - title: "X to Notion"
    text: |
      Scan X from the past couple of days for new AI and robotics releases.

      Create a Notion database if it does not exist. Add each find: title, link, a short why it matters.

      Then run this every day. Add only new releases. Do not invent a story that is not on X.
    source: "Rewritten from https://x.com/DeryaTR_/status/2087371098920763631"
featured: false
---
