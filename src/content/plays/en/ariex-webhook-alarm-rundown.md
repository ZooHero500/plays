---
id: "ariex-webhook-alarm-rundown"
title: "i don't want a 7am rundown if i'm still asleep."
summary: "Trigger a daily briefing from a webhook instead of a clock: an iPhone Shortcut fires when you stop your alarm and the rundown writes itself in chat."
category: "Engineering"
tags:
  - "webhook"
  - "shortcuts"
  - "briefing"
author: "Jesse | D2 + Apex"
authorHandle: "@Ariex_00"
sourceUrl: "https://x.com/Ariex_00/status/2119448361732632619"
date: "2026-11-08"
sourceDate: "2026-11-08"
audience: "You want the morning briefing to start when you actually get up."
outcome: "A read-only briefing that starts when the alarm is stopped and lands in the chat."
commentary: "What's good: webhook instead of a schedule, and the post stresses a 200 only means the run started. The catch: you must turn off Ask Before Running in Shortcuts, and keep the key out of posts and shared files."
imageUrls: []
steps:
  - "Ask the bot to set up a briefing routine triggered by a webhook, read-only."
  - "Copy the Webhook section: the POST URL, key and header, into Shortcuts."
  - "Create an iPhone Automation for Alarm is Stopped that does Get Contents of URL with POST and that header."
  - "Turn off Ask Before Running so it can fire."
  - "Remember a 200 only means the run started; the briefing shows up in chat."
tutorial: []
prompts: []
featured: false
---
