---
id: "sebbsssss-optimize-skill"
title: "A few people have been asking about my Grok Bot setup. This is one of the skills I actively use."
summary: "A reusable /optimize skill measures speed first, applies safe fixes on a separate branch, reruns the same tests, and reports before and after plus what it couldn't measure."
category: "Engineering"
tags:
  - "skills"
  - "performance"
  - "testing"
author: "seb"
authorHandle: "@sebbsssss"
sourceUrl: "https://x.com/sebbsssss/status/2119358044060762414"
date: "2026-11-08"
sourceDate: "2026-11-08"
audience: "An app feels slow and you want fixes checked against the same tests."
outcome: "On a small internal app it found a duplicate page load and repeated data reads; repeat-visit time fell 32–40% per the author."
commentary: "What's good: measure, fix on a branch, retest. The catch: results are from the author's own app."
imageUrls: []
steps:
  - "Save an /optimize skill covering N+1 queries, repeated reads, connection pooling, sequential API calls, heavy JavaScript and blocking tasks."
  - "Have it measure first."
  - "Apply safe fixes on a separate branch."
  - "Rerun the same tests and read the before-and-after report."
tutorial: []
prompts: []
featured: false
---
