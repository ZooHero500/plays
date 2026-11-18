---
id: "webtkdev-pin-github-actions"
title: "IF YOUR CI PULLS GITHUB ACTIONS BY TAG: MY GROK BOT PINNED ALL 88 IN FASTAPI'S WORKFLOWS TO EXACT COMMITS IN UNDER A SECOND."
summary: "Ask Grok Bot to walk your GitHub Actions workflows, pin every third-party action to the commit its tag points at now, and list anything still on a moving tag."
category: "Engineering"
tags:
  - "github"
  - "ci"
  - "security"
author: "Thilak"
authorHandle: "@webtkdev"
sourceUrl: "https://x.com/webtkdev/status/2122751626972967174"
date: "2026-11-17"
sourceDate: "2026-11-17"
audience: "Your workflows pull third-party GitHub Actions by tag, and you want those tags pinned to exact commits without checking each file by hand."
outcome: "The bot read 18 workflow files, found 88 uses lines across 18 actions all on tags, looked up each tag's commit in 0.97 s, and produced a pinned copy of all 88 lines. One loose tag remained: action-tmate v3.24. Nothing was pushed."
commentary: "What's good: one prompt turns a slow tag audit into a pinned copy, and the author is honest about the limits. The catch: FastAPI already had an actions.lock that matched all 18, Dependabot updates those pins, pinning also freezes security fixes, and nothing was pushed to the repo."
imageUrls: []
steps:
  - "Point Grok Bot at the repo whose GitHub Actions workflows you want audited."
  - "Ask: \"go through the github actions workflows in this repo, pin every third-party action to the exact commit it points at now, and tell me which ones are still on a moving tag.\""
  - "Review the pinned copy and the list of actions still on a moving tag."
  - "Check whether the repo already pins actions another way, such as a lock file or Dependabot."
  - "Decide what to push yourself; pinning freezes future security fixes until you unpin or update."
tutorial: []
prompts: []
featured: false
---
