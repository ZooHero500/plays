---
id: "jesse-multi-repo"
title: "One request across the repos"
summary: "One request splits across repos and goes to cloud agents. You approve merge and deploy."
category: "Engineering"
tags:
  - "GitHub"
  - "cloud-agent"
  - "multi-repo"
  - "PR"
author: "Jesse Hanley"
authorHandle: "@jessethanley"
sourceUrl: "https://botdirectory.ai/bots/multi-repository-dev-orchestrator/"
date: ""
audience: "A change will hit several repos. You do not want to be the dispatcher."
outcome: "Affected repos are found. Tasks go out. Tests run. Diffs come back. It stops before merge."
commentary: "What's good: one request does not make you split work across five repos. The catch: if the rules are fuzzy, it starts on the wrong branch."
cover: "/assets/covers/jesse-multi-repo.png"
imageUrls:
  - "assets/covers/jesse-multi-repo.png"
steps:
  - "Give this job its own chat. Connect GitHub and Cursor Cloud Agents."
  - "These are the rules it uses to assign work."
  - "Example: add an endpoint and update the related SDKs. It should find affected repos, hand out coherent tasks, track dependencies, run tests, and summarize the diffs."
  - "Merge or deploy waits for you. Then use it on demand."
tutorial:
  - title: "Stand up a multi-repo orchestrator."
    body: "Give this job its own chat. Connect GitHub and Cursor Cloud Agents."
  - title: "Tell it the repos, branches, conventions, tests, and review rules."
    body: "These are the rules it uses to assign work."
  - title: "Hand it one high-level request."
    body: "Example: add an endpoint and update the related SDKs. It should find affected repos, hand out coherent tasks, track dependencies, run tests, and summarize the diffs."
  - title: "Trial it on a small change first."
    body: "Merge or deploy waits for you. Then use it on demand."
prompts:
  - title: "原文：Multi-Repository Dev Orchestrator listing"
    text: "Set up a new bot for me in its own dedicated chat that orchestrates development work across multiple repositories. Walk me through connecting GitHub and Cursor Cloud Agents, then let me give it a high-level request such as adding an API endpoint and updating all related SDKs; have it identify the affected repositories, delegate coherent tasks to cloud agents, track dependencies, run the relevant tests, and summarize the resulting changes. Ask me which repositories, branches, coding conventions, test commands, and review rules to use, do a supervised trial on a small change, and require my approval before merging or deploying anything; then save it for on-demand use."
    source: "原文 https://botdirectory.ai/bots/multi-repository-dev-orchestrator/"
featured: false
---
