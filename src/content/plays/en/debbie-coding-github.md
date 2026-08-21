---
id: "debbie-coding-github"
title: "Find the issue. Then close it"
summary: "Stand up a coding bot for one repo. It finds the issue. Once GitHub is connected, it actually closes it."
category: "Engineering"
tags:
  - "github"
  - "playwright"
  - "issue"
  - "coding"
author: "Debbie O'Brien"
authorHandle: "@debs_obrien"
sourceUrl: "https://dev.to/debs_obrien/how-to-get-started-with-grok-bot-4f5n"
date: ""
audience: "You have a real issue in a repo. You want to see if the bot can finish it."
outcome: "It finds the right repo, reads issue 29, and closes it with a note."
commentary: "What's good: it can find the right repo, and it can actually close the issue. The catch: GitHub already linked in Cursor is not the same as GitHub on its computer. Connect it there before it writes the repo."
cover: "/assets/covers/debbie-coding-github.png"
imageUrls:
  - "assets/covers/debbie-coding-github.png"
steps:
  - "Start with a few core repos, not everything. Debbie typed playwright movies. It found debs-obrien/playwright-movies-app."
  - "Open issues and pull the specific one. She had it look at issue 29, a timeout test."
  - "It found the test already uses waitForURL. No hard wait."
  - "She said connect first, then close. It closed the issue with a note. She clicked into GitHub and checked."
tutorial:
  - title: "Stand up a bot that handles code and repos."
    body: "Start with a few core repos, not everything. Debbie typed playwright movies. It found debs-obrien/playwright-movies-app."
  - title: "Give it a real job."
    body: "Open issues and pull the specific one. She had it look at issue 29, a timeout test."
  - title: "See what it says."
    body: "It found the test already uses waitForURL. No hard wait."
  - title: "When it needs to write the repo, connect GitHub on its computer."
    body: "She said connect first, then close. It closed the issue with a note. She clicked into GitHub and checked."
prompts:
  - title: "第一条消息：按她的点击顺序建 coding bot"
    text: "Create a coding and repos bot. My code lives on GitHub. Start with a mix: a few core repos, not everything. I will point you at a repo by a short name if I cannot remember the exact slug — find the right one from my GitHub. First job: open issues, check stars, and bring up a specific issue I name. Do not close or write until GitHub is signed in on your computer (I will take over for login and 2FA; do not ask me to paste a token in chat). If Cursor already has GitHub linked, use that for cloud agents and skip a second PAT connector unless we need it. Show me what you found before you close anything."
    source: "改写自 https://dev.to/debs_obrien/how-to-get-started-with-grok-bot-4f5n"
featured: false
---
