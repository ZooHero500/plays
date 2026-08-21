---
id: "harry-munro-overnight-prs"
title: "PM, lead, review. Work until 7am"
summary: "Harry Munro put a product manager, a lead engineer, and a review engineer in one group chat on a roadmapped brownfield repo. The PM checks in every fifteen minutes. He woke up to fifty-two pull requests."
category: "Engineering"
tags:
  - "pull-requests"
  - "overnight"
  - "review"
author: "Harry Munro"
authorHandle: ""
sourceUrl: "https://www.linkedin.com/posts/harryjmunro_i-had-a-team-of-three-grok-bot-agents-work-activity-7495107198214324224-JyKt"
date: ""
audience: "You have a roadmapped repo and still babysit the night shift yourself."
outcome: "One group chat. Work until you sit down. A pile of PRs. You still review before merge."
commentary: "What's good: the PM's fifteen-minute check-in is the whole workflow. The catch: this is a brownfield repo he already had mapped. Do not leave an unmapped codebase overnight and call it a factory. He still read the PRs in the morning."
cover: "/assets/covers/official-internal-handoffs.png"
imageUrls: []
steps:
  - "Hire three seats for one roadmapped brownfield repo: Product Manager, Lead Engineer, Dedicated Review Engineer. He did not publish the nicknames. Use the jobs."
  - "Put them in one group chat. Tell the team to keep working until you are back at the computer at 7am to review."
  - "Have the PM set a routine: every fifteen minutes, check progress and whether any new work can be taken on."
  - "Lead Engineer delivers the work. Review Engineer does adversarial review only. They talk in the group like a real team. You do not spawn a new agent per package."
  - "In the morning, review the PRs yourself. He asked a separate reviewer whether quality drifted overnight. Quality held; dips tracked complexity, not the hour. You still merge."
tutorial:
  - title: "Three seats. One repo."
    body: "PM, lead, review. Jobs, not nicknames."
  - title: "One group chat. Work until 7am."
    body: "You review when you sit down."
  - title: "PM checks in every fifteen minutes."
    body: "Progress, then the next package."
  - title: "Lead delivers. Review only reviews."
    body: "Adversarial. Not a second implementer."
  - title: "You still read the PRs."
    body: "Ask whether quality drifted. Then you merge."
prompts:
  - title: "Overnight three"
    text: |
      You are a team of three on one well-roadmapped brownfield repo.

      Product Manager: keep the work moving. Every fifteen minutes, check progress and whether new work can be taken on.

      Lead Engineer: deliver the work.

      Dedicated Review Engineer: adversarial review only. Do not implement.

      Stay in this group chat. Keep working until I am back at 7am to review. I merge. You do not.
    source: "Rewritten from https://www.linkedin.com/posts/harryjmunro_i-had-a-team-of-three-grok-bot-agents-work-activity-7495107198214324224-JyKt"
featured: false
---
