---
id: "sidhant-uthra-ramp-travel-prs"
title: "Excited for the launch of Grok Bot!"
summary: "Sidhant Uthra's bots found receipts in Gmail, filed Ramp expenses and watched them to approval, planned loyalty travel onto the calendar, and traced logs into PRs. A chief of staff only pings when a decision is needed."
category: "Crew"
tags:
  - "ramp"
  - "travel"
  - "pull-requests"
author: "Sidhant Uthra"
authorHandle: ""
sourceUrl: "https://www.linkedin.com/posts/sidhantuthra_grokbot-activity-7492995132309331968-msad"
date: ""
audience: "You already live in Gmail, Ramp, and a repo, and the follow-ups are what eat the day."
outcome: "Expenses filed and watched, a trip on the calendar, and a PR waiting for your review. The chief only pings when you have to choose."
commentary: "What's good: four real jobs, and the chief stays quiet unless you are the blocker. The catch: receipts, travel, and a bug hunt are three desks. Start with Gmail-to-Ramp and the approval watch before you add travel and PRs."
cover: "/assets/covers/eric-living-faq.png"
imageUrls: []
steps:
  - "Point a bot at Gmail. It finds receipts, files the expenses in Ramp, and keeps checking them until they are approved."
  - "Give another bot your travel preferences and loyalty accounts. It plans the trip, figures out when you need to leave, and updates the calendar."
  - "Name a chief of staff over the others. It coordinates. It only pings you when something actually needs your input."
  - "For an internal tool, have a bot trace the logs, triage bugs and regressions, raise PRs, and tell you when they are ready for review."
  - "You take the decisions the chief flagged. You review the PRs. The bots do the watching."
tutorial:
  - title: "Gmail receipts into Ramp."
    body: "File them. Watch until approved."
  - title: "Plan travel from loyalty and preferences."
    body: "Calendar gets the leave time."
  - title: "Chief of staff only pings on a decision."
    body: "Quiet otherwise."
  - title: "Logs to triage to PR."
    body: "You review when it is ready."
prompts:
  - title: "Chief of staff"
    text: |
      You are my chief of staff. Coordinate the other bots. Only ping me when something actually needs my input.

      Expense bot: find receipts in Gmail, file the expenses in Ramp, and keep checking them until they are approved.

      Travel bot: plan travel from my preferences and loyalty accounts. Figure out when I need to leave. Update my calendar.

      Eng bot: trace issues in the internal tool through logs, triage bugs and regressions, raise PRs, and tell me when they are ready for review.

      Do not invent a receipt, a trip, or a PR. Bring decisions to me. Leave the watching to the specialists.
    source: "Rewritten from https://www.linkedin.com/posts/sidhantuthra_grokbot-activity-7492995132309331968-msad"
featured: false
---
