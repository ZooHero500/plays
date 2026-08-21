---
id: "jesse-multi-repo"
title: "多仓 Cloud Agent 编排"
summary: "一条需求拆到多个仓，派给 cloud agent。合并和部署你批。"
category: "工程"
tags:
  - "GitHub"
  - "cloud agent"
  - "多仓"
  - "PR"
author: "Jesse Hanley"
authorHandle: "@jessethanley"
sourceUrl: "https://botdirectory.ai/bots/multi-repository-dev-orchestrator/"
date: ""
audience: "改动会碰到好几个仓库，不想自己当调度。"
outcome: "受影响的仓找出来，任务派出去，测试跑过，差异汇总。合并前停住。"
commentary: "好在哪：一条需求不用你拆到五个仓。坑在哪：规矩没说清，它会在错误的分支上开跑。"
cover: "/assets/covers/jesse-multi-repo.png"
imageUrls:
  - "assets/covers/jesse-multi-repo.png"
steps:
  - "单独开一条对话。接上 GitHub 和 Cursor Cloud Agents。"
  - "这些是它派活的规矩。"
  - "比如加一个接口并更新相关 SDK。它应找出受影响的仓，派连贯任务，跟踪依赖，跑测试，汇总差异。"
  - "合并或部署前必须你批。再按需用。"
tutorial:
  - title: "建一个多仓编排的 bot"
    body: "单独开一条对话。接上 GitHub 和 Cursor Cloud Agents。"
  - title: "先告诉它仓库名单、分支、约定、怎么测、怎么审"
    body: "这些是它派活的规矩。"
  - title: "给一条高层需求"
    body: "比如加一个接口并更新相关 SDK。它应找出受影响的仓，派连贯任务，跟踪依赖，跑测试，汇总差异。"
  - title: "先拿一个小改动试"
    body: "合并或部署前必须你批。再按需用。"
prompts:
  - title: "原文：Multi-Repository Dev Orchestrator listing"
    text: "Set up a new bot for me in its own dedicated chat that orchestrates development work across multiple repositories. Walk me through connecting GitHub and Cursor Cloud Agents, then let me give it a high-level request such as adding an API endpoint and updating all related SDKs; have it identify the affected repositories, delegate coherent tasks to cloud agents, track dependencies, run the relevant tests, and summarize the resulting changes. Ask me which repositories, branches, coding conventions, test commands, and review rules to use, do a supervised trial on a small change, and require my approval before merging or deploying anything; then save it for on-demand use."
    source: "原文 https://botdirectory.ai/bots/multi-repository-dev-orchestrator/"
featured: false
---

