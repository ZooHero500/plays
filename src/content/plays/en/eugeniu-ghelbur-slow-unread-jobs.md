---
id: "eugeniu-ghelbur-slow-unread-jobs"
title: "I hit 80% of my weekly Grok @bot limit with 2 days left."
summary: "When scheduled jobs are eating most of your weekly allowance, have the bot audit every job and slow down the ones you never actually read."
category: "Engineering"
tags:
  - "routines"
  - "usage"
  - "scheduled-jobs"
author: "Eugeniu Ghelbur"
authorHandle: "@eugeniu_ghelbur"
sourceUrl: "https://x.com/eugeniu_ghelbur/status/2122433740655976934"
date: "2026-11-16"
sourceDate: "2026-11-16"
audience: "You are hitting the weekly Grok Bot limit even though you barely used it yourself."
outcome: "59% of the author's usage was scheduled jobs, including two that ran every 30 minutes (224 runs a week each), one of which had found nothing new since Saturday. After the audit, 10 jobs run once or twice a day."
commentary: "What's good: the leak is specific—unread scheduled jobs, not the chat itself—and the fix is to slow those jobs down. The catch: the exact prompt is in a reply, not in the main post, so you will need to write your own audit ask or open that reply."
imageUrls: []
steps:
  - "Check how much of your weekly usage went to scheduled jobs rather than to you."
  - "Ask the bot to list every scheduled job, how often it runs, and whether you actually read the output."
  - "Slow down or pause the jobs you never read, especially ones that fire many times a day and have found nothing new."
  - "Recheck the usage bar after the change."
tutorial: []
prompts: []
featured: false
---
