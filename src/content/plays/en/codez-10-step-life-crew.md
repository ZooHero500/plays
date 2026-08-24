---
id: "codez-10-step-life-crew"
title: "Grok Bot Agents: how to automate your life in 10 Steps (Full-tutorial)"
summary: "Name a Chief, hire specialists with charters, then kill the routines you would not miss."
category: "Crew"
tags:
  - "Chief"
  - "charter"
  - "review"
author: "Codez"
authorHandle: "@0xCodez"
sourceUrl: "https://x.com/0xCodez/status/2089676836619878567"
date: ""
audience: "You want a crew with job titles, not one bot that owns everything."
outcome: "A Chief for unowned work, specialists with a stop line, and a weekly prune."
commentary: "What's good is a crew with memory you can point at, and a prune you actually run. The catch is a crew you never cut turns into a pile of half-useful routines nobody has the nerve to delete."
cover: "/assets/covers/official-demo-readiness.png"
imageUrls: []
steps:
  - "Name a general-purpose bot the Chief. Give it one real errand you can check in thirty seconds. Its job is to take work you do not know who owns, then coordinate the specialists."
  - "Hire specialists by the job, not by a one-off prompt. Inbox Manager. Expense Manager. Talent Scout. Sales Outbound. Write a charter for each: what it owns, what good looks like, and what it must never do without asking."
  - "Connect the tools once. Connections are shared across the account, so the fifth bot does not need its own setup. Teach a workflow by doing it once while the bot watches. The best first recording is weekly, uses two or more tools, and the steps rarely change."
  - "After a run you liked, say \"Run this every week.\" Routines also fire on a trigger. Put the specialists in a group chat with an objective, not a task list. Separate bots keep separate memory and separate accountability."
  - "Draw the approval line on reversibility. Drafts, filing, and tagging finish alone. Anything the outside world sees, anything that moves money, or anything you cannot undo parks for you. Codez's sales outbound shape was 36 drafts queued and 0 sent. That is their example, not a number you have to hit."
  - "Put fifteen minutes on the calendar each week. Did it run. Was the output right. Would I miss it if I killed it. Ask the bots to report on themselves, then spot-check one output by hand."
tutorial:
  - title: "Name a general-purpose bot the Chief."
    body: "Give it one real errand you can check in thirty seconds. Its job is to take work you do not know who owns, then coordinate the specialists."
  - title: "Hire specialists by the job, not by a one-off prompt."
    body: "Inbox Manager. Expense Manager. Talent Scout. Sales Outbound. Write a charter for each: what it owns, what good looks like, and what it must never do without asking."
  - title: "Connect the tools once."
    body: "Connections are shared across the account, so the fifth bot does not need its own setup. Teach a workflow by doing it once while the bot watches. The best first recording is weekly, uses two or more tools, and the steps rarely change."
  - title: "After a run you liked, say \"Run this every week.\" Routines also fire on a trigger."
    body: "Put the specialists in a group chat with an objective, not a task list. Separate bots keep separate memory and separate accountability."
  - title: "Draw the approval line on reversibility."
    body: "Drafts, filing, and tagging finish alone. Anything the outside world sees, anything that moves money, or anything you cannot undo parks for you. Codez's sales outbound shape was 36 drafts queued and 0 sent. That is their example, not a number you have to hit."
  - title: "Put fifteen minutes on the calendar each week."
    body: "Did it run. Was the output right. Would I miss it if I killed it. Ask the bots to report on themselves, then spot-check one output by hand."
prompts:
  - title: "Charter"
    text: |
      You are my Inbox Manager.
      
      // what you own
      Triage my email every morning. Archive newsletters and receipts.
      Draft replies to anything a client sends. Surface anything
      that mentions a deadline, an invoice, or a legal question.
      
      // what good looks like
      Inbox at zero by 9am. Drafts sound like me: short, direct,
      no "I hope this finds you well". Never more than 4 sentences.
      
      // where you stop
      Never send anything. Draft only.
      Never archive anything from my accountant or my landlord.
      If a message asks for money or credentials, stop and ask me.
  - title: "Routine examples"
    text: |
      // schedule — the morning brief
      Every weekday at 7am, check my calendar, my inbox, and the
      #launches Slack channel. Give me one short brief: what's on
      today, what needs a reply, what changed overnight.
      
      // trigger — the inbound catcher
      Whenever an email arrives from a domain not in my contacts and
      it mentions pricing, draft a reply from the template and park it.
      
      // schedule — the weekly close
      Every Friday at 4pm, pull the week's receipts from my inbox,
      file them, and tell me anything that has no matching invoice.
      
      // the shortcut that creates most routines
      Run this every week.
  - title: "Weekly review"
    text: |
      List every routine you ran this week. For each one:
       - how many times it fired
       - what it produced
       - anything it skipped, failed, or had to guess at
       - anything you parked for me that I never answered
      Then tell me which one you think is least useful, and why.
featured: false
---
