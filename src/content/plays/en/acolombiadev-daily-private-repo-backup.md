---
id: "acolombiadev-daily-private-repo-backup"
title: "My Grok Bot setup is 20+ agents' worth of skills, routines, memories and settings, and I didn't want to lose any of it."
summary: "Have the bot back up its skills, routines, memories and allowlisted settings to a private GitHub repo every day, with no secrets, a skip log and a quarterly restore drill."
category: "Engineering"
tags:
  - "backup"
  - "github"
  - "routines"
author: "Andrea"
authorHandle: "@acolombiadev"
sourceUrl: "https://x.com/acolombiadev/status/2117029015403831487"
date: "2026-11-01"
sourceDate: "2026-11-01"
audience: "You've built a big bot setup and would hate to rebuild it."
outcome: "A daily snapshot you can diff and restore."
commentary: "What's good: the script checks the repo is private before every push and scans for secrets. The catch: it needs a GitHub repo and Git LFS on the box."
imageUrls: []
steps:
  - "Create a private repo and install Git LFS on the box."
  - "Ask the bot to write a backup script for routines, skills, memories and allowlisted settings."
  - "Make it refuse to push if the repo isn't private or a secret shows up."
  - "Run it as a daily routine and log skipped files."
  - "Do a restore drill every quarter."
tutorial: []
prompts: []
featured: false
---
