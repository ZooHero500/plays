---
id: "househackerjon-plumbing-office"
title: "I’m a plumbing company owner and I’m using Grok @bot to automate a ton of office manager work."
summary: "Jon ONeill spent a night wiring intake across Gmail, Slack, ServiceTitan, Quo, and a facility portal. The next day a live lead went from work order to a booked tech."
category: "Growth"
tags:
  - "plumbing"
  - "work-orders"
  - "dispatch"
author: "Jon ONeill"
authorHandle: "@HouseHackerJon"
sourceUrl: "https://x.com/HouseHackerJon/status/2087635639701573962"
date: ""
audience: "You run a trade shop and work orders land in too many inboxes and portals."
outcome: "A work order reviewed, a calendar slot found, the customer confirmed, and a tech booked."
commentary: "What's good: the boring intake loop is the job, and he ran a live lead the same day. The catch: the facility portal was the part no API covered. Watch the first booking end to end."
cover: "/assets/covers/debbie-content-flywheel.png"
imageUrls: []
steps:
  - "Name the places work orders already land. His set: Gmail, Slack, ServiceTitan, Quo, and the facility-maintenance portal the client insists on."
  - "Tell the bot the job is intake, capacity, then booking. It reviews the work order, finds open slots on the calendar, confirms the customer, and books the tech."
  - "For the client portal, keep the bot on its own computer and take over the screen when the page needs you. That was the piece he could not finish in Claude."
  - "Run one live lead start to finish before you trust the loop. His first one booked a real plumber the same day."
  - "Once a booking takes about ten minutes, point it at the five or six time-sensitive orders that hit daily. The office keeps quotes, crew chat, and everything that is not intake."
tutorial:
  - title: "Name every inbox the order can hit."
    body: "Gmail, Slack, ServiceTitan, Quo, the facility portal."
  - title: "Intake, then capacity, then book."
    body: "Review the job. Find a slot. Confirm the customer. Book the tech."
  - title: "Stay on the computer for the portal."
    body: "Take over the screen when the page needs you."
  - title: "Run one live lead first."
    body: "A booked plumber, not a dry run."
  - title: "Then point it at the daily pile."
    body: "Five or six time-sensitive orders. Quotes stay with the office."
prompts:
  - title: "Office intake"
    text: |
      You are the office manager for a plumbing shop.

      Watch Gmail, Slack, ServiceTitan, Quo, and the facility portal for new work orders.

      For each one: read the job, find open calendar slots, confirm the customer is free, then book the tech.

      Show me the booked job before you walk away. If a portal page stalls, stop and wait for me on the computer.
    source: "Rewritten from https://x.com/HouseHackerJon/status/2087635639701573962"
featured: false
---
