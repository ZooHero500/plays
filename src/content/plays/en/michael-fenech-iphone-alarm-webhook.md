---
id: "michael-fenech-iphone-alarm-webhook"
title: "I just made Grok Bot respond to real-world events. All it took was my iPhone."
summary: "Create a webhook-triggered daily briefing routine, then use an iPhone Shortcuts Alarm-Is-Stopped automation to POST so the briefing starts when you stop your morning alarm—not on a fixed schedule."
category: "Life"
tags:
  - "webhook"
  - "iphone"
  - "routines"
  - "briefing"
author: "Michael"
authorHandle: "@Michael_Fenech_"
sourceUrl: "https://x.com/Michael_Fenech_/status/2118383590446624846"
date: "2026-11-05"
sourceDate: "2026-11-05"
audience: "You want a morning briefing when you actually wake up, not when a timer fires."
outcome: "Stopping the alarm POSTs a webhook; the bot starts the daily briefing with no open-app or typed prompt."
commentary: "What's good: Alarm → Is Stopped (not snooze) plus Bearer auth and a JSON source field. The catch: you must copy the webhook URL and Authorization header from the bot, and disable Ask Before Running."
imageUrls: []
steps:
  - "Ask Grok Bot to create a daily briefing routine triggered by a webhook, then copy the webhook URL and Authorization header."
  - "In iPhone Shortcuts, create an Automation: Alarm → Is Stopped for your morning alarm."
  - "Add Get Contents of URL, paste the webhook, method POST."
  - "Add header Authorization with the Bearer value the bot gave you."
  - "Set Request Body to JSON with key source and text iphone-alarm; save and turn off Ask Before Running."
  - "Stop the alarm once to confirm the briefing starts; reuse the same pattern for CarPlay, leave-work, arrive-home or NFC later."
tutorial: []
prompts: []
featured: false
---
