---
id: "official-cloud-agent-orchestration"
title: "Introducing Grok Bot"
summary: "A bot launches cloud coding agents on the right repo, watches stuck runs, and comes back with path, risk, and a mergeable branch."
category: "Official"
tags:
  - "cloud agent"
  - "repo"
  - "branch"
author: "xAI"
authorHandle: ""
sourceUrl: "https://x.ai/news/introducing-grok-bot"
date: ""
audience: "You launch cloud coding agents and you want someone watching the stuck ones."
outcome: "A path, a risk note, and a mergeable branch from the right repo."
commentary: "What's good is the watch on stuck runs, plus a branch you can merge. The catch is the wrong repo wastes a run, so the first line of the job is which repo."
cover: "/assets/covers/official-sales-outbound.png"
imageUrls: []
steps:
  - "Tell the bot to launch cloud coding agents on the right repo for this change. Name the repo. Name what \"mergeable\" means."
  - "Let it watch the runs. Stuck ones get a nudge from it, not from you."
  - "Have it come back with three things: what path changed, what the risk is, and where the mergeable branch lives."
  - "You merge. The launch page does not hand it an unattended merge into the default branch."
tutorial:
  - title: "Tell the bot to launch cloud coding agents on the right repo for this change."
    body: "Name the repo. Name what \"mergeable\" means."
  - title: "Let it watch the runs."
    body: "Stuck ones get a nudge from it, not from you."
  - title: "Have it come back with three things: what path changed, what the risk is, and where the mergeable branch lives."
    body: "Have it come back with three things: what path changed, what the risk is, and where the mergeable branch lives."
  - title: "You merge."
    body: "The launch page does not hand it an unattended merge into the default branch."
prompts:
  - title: "Rewritten from the xAI launch page"
    text: |
      Launch cloud coding agents on the right repo for this change.
      
      Watch the stuck runs. Come back with the path that changed, the risk, and a mergeable branch.
      
      Do not merge it.
featured: false
---
