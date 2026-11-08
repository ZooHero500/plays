---
id: "cradrrat-skills-100-az-limit"
title: "Grok Bot appears to load only the first 100 skills you've saved yourself, counted A to Z by name."
summary: "Count skill folders A to Z on the bot computer, load the last one by slug to see if you are over the undocumented 100-skill cap, then back up, delete unused skills, and merge overlaps until everything loads again."
category: "Engineering"
tags:
  - "skills"
  - "limits"
  - "audit"
author: "cradrrat"
authorHandle: "@cradrrat"
sourceUrl: "https://x.com/cradrrat/status/2119247842950971752"
date: "2026-11-08"
sourceDate: "2026-11-08"
audience: "A skill that used to work suddenly looks forgotten, especially if you have saved a lot of your own skills."
outcome: "Author went from 232 self-saved skills to 97; number 101 and later had been silently skipped."
commentary: "What's good: a concrete check prompt plus a fix order that starts with backup. The catch: deleting a skill removes it for every bot, and built-in or plugin skills do not seem to count toward the 100."
imageUrls: []
steps:
  - "Ask your Primary Bot to count skill folders in /home/box/agent-data/workflows/, sort them A to Z, try to load the last one by its slug, and report the count plus whether it loaded."
  - "If the last skill fails to load, back up your skills first."
  - "Delete skills nothing uses and leftovers from bots you already deleted."
  - "Merge overlapping skills into one."
  - "Leave a few slots spare and set a weekly count that warns you past about 90."
tutorial: []
prompts: []
featured: false
---
