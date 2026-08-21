---
id: "promptway-overnight-job"
title: "关笔记本前先立过夜岗"
summary: "一个结果、一份简介、第一件任务、一条禁止线。先 skill，再过夜。"
category: "编制"
tags:
  - "过夜"
  - "skill"
  - "routine"
  - "审批"
author: "Promptway"
authorHandle: ""
sourceUrl: "https://dev.to/promptway/jobs-i-would-let-a-grok-bot-run-after-i-close-the-laptop-139p"
date: ""
audience: "想关笔记本之前把岗立住，不想先排一个自己没签过字的任务。"
outcome: "一个岗位：名字短，结果一个，禁止线写死。关本之后跑的是你肯签字的活。"
commentary: "好在哪：禁止线是字段，不是事后提醒。坑在哪：先排过夜再改规则，失败发生时你不在。"
cover: "/assets/covers/promptway-overnight-job.png"
imageUrls:
  - "assets/covers/promptway-overnight-job.png"
steps:
  - "选一条你每周已经在做的活。短名字，一个结果，简介就是合同。"
  - "改格式时说：从现在起用这个形状。然后才存 skill。"
  - "关本之后它还会跑，所以发送、发布、报销、改生产必须留在你批之后。"
  - "一个账号下的 bot 看得见彼此留下的会话。不该留的会话，用完就退。"
tutorial:
  - title: "建 bot 时跳过通用助手"
    body: "选一条你每周已经在做的活。短名字，一个结果，简介就是合同。"
  - title: "第一件任务写清结果、来源、约束、交什么、你在哪审"
    body: "改格式时说：从现在起用这个形状。然后才存 skill。"
  - title: "routine 放最后"
    body: "关本之后它还会跑，所以发送、发布、报销、改生产必须留在你批之后。"
  - title: "共享电脑是爆炸半径"
    body: "一个账号下的 bot 看得见彼此留下的会话。不该留的会话，用完就退。"
prompts:
  - title: "第一条消息：按 7 件套立一个过夜岗"
    text: |
      Stand up one overnight job. Skip general helper. Use this seven-part shape and fill it with a job I already do every week:
      
      1. Name
      2. One job, written as an outcome
      3. Profile description (the standing contract for Edit Profile)
      4. First task (outcome, sources, constraints, deliverable, review point)
      5. Hard approval boundary — sending, publishing, filing, reimbursing, and production changes stay with me
      6. Tools it needs to sign into
      7. Optional routine — only after the output is something I would sign
      
      Walk me through creating the named bot, pasting the profile, and taking over the computer for password / passkey / 2FA / CAPTCHA (never in chat). Send the first task. I will correct the format out loud: "Use this shape from now on." Then save a skill. A routine comes last. Turn Auto Review on. Do not write "allow everything in the browser."
    source: "改写自 https://dev.to/promptway/jobs-i-would-let-a-grok-bot-run-after-i-close-the-laptop-139p"
featured: false
---

