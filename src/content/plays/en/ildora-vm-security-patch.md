---
id: "ildora-vm-security-patch"
title: "My Grok @bot is admin for my Hostinger Linux VM."
summary: "Let the bot admin your Linux VM: after a CVE email, it opened a firewall rule for itself, ran the update and upgrade, rebooted and closed the rule again."
category: "Engineering"
tags:
  - "linux"
  - "security"
  - "sysadmin"
author: "ildora Studio"
authorHandle: "@ildoraStudio"
sourceUrl: "https://x.com/ildoraStudio/status/2116139845441794536"
date: "2026-10-30"
sourceDate: "2026-10-30"
audience: "You run a VPS and security patch emails pile up."
outcome: "A patched, rebooted VM with the temporary firewall rule removed."
commentary: "What's good: the bot cleaned up after itself, removing the firewall rule it added for its own access once the job was done."
imageUrls: []
steps:
  - "Make the bot the admin for your VM."
  - "When a patch email arrives (here for CVE-2026-98432), ask the bot to update, upgrade and reboot."
  - "It adds a firewall rule to whitelist its own IP."
  - "It runs the update and upgrade, then reboots the VM."
  - "It removes the firewall rule."
tutorial: []
prompts: []
featured: false
---
