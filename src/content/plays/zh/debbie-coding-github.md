---
id: "debbie-coding-github"
title: "编码 Bot 关 GitHub Issue"
summary: "给一个仓建编码 bot。它找到 issue，GitHub 连上后真的关了。"
category: "工程"
tags:
  - "GitHub"
  - "Playwright"
  - "issue"
  - "coding"
author: "Debbie O'Brien"
authorHandle: "@debs_obrien"
sourceUrl: "https://dev.to/debs_obrien/how-to-get-started-with-grok-bot-4f5n"
date: ""
audience: "仓库里有具体 issue，想看 bot 能不能自己跟完。"
outcome: "它找到对的仓，看过 issue 29，并带说明关掉。"
commentary: "好在哪：它能找到对的仓，也能真的关 issue。坑在哪：Cursor 里已接的 GitHub，和它电脑上那一套不是一回事，写仓库前要在它那边再接一次。"
cover: "/assets/covers/debbie-coding-github.png"
imageUrls:
  - "assets/covers/debbie-coding-github.png"
steps:
  - "先圈少数核心仓，不要所有仓。Debbie 只打了 playwright movies，它找到了 debs-obrien/playwright-movies-app。"
  - "打开 issues，拉出具体那条。她让它看 issue 29，超时测试。"
  - "它发现测试已经用 waitForURL，没有 hard wait。"
  - "她说连上后再关。它带说明关了 issue。她自己点进 GitHub 核对过。"
tutorial:
  - title: "建一个管代码和仓库的 bot"
    body: "先圈少数核心仓，不要所有仓。Debbie 只打了 playwright movies，它找到了 debs-obrien/playwright-movies-app。"
  - title: "派一件真活"
    body: "打开 issues，拉出具体那条。她让它看 issue 29，超时测试。"
  - title: "看它怎么说"
    body: "它发现测试已经用 waitForURL，没有 hard wait。"
  - title: "需要写仓库时，在它的电脑上把 GitHub 接上"
    body: "她说连上后再关。它带说明关了 issue。她自己点进 GitHub 核对过。"
prompts:
  - title: "第一条消息：按她的点击顺序建 coding bot"
    text: "Create a coding and repos bot. My code lives on GitHub. Start with a mix: a few core repos, not everything. I will point you at a repo by a short name if I cannot remember the exact slug — find the right one from my GitHub. First job: open issues, check stars, and bring up a specific issue I name. Do not close or write until GitHub is signed in on your computer (I will take over for login and 2FA; do not ask me to paste a token in chat). If Cursor already has GitHub linked, use that for cloud agents and skip a second PAT connector unless we need it. Show me what you found before you close anything."
    source: "改写自 https://dev.to/debs_obrien/how-to-get-started-with-grok-bot-4f5n"
featured: false
---

