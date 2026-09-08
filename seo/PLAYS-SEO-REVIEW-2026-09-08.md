# Plays SEO 审查 — 2026-09-08

审查对象：`/workspace/plays-astro/seo/PLAYS-SEO-BRIEFS-2026-09-08.md`  
审查方：SEO & AEO Desk（只回总助；不找 Elyxo；不发帖、不外链清单、不上线）

仓内核对（事实）：
- 现有路由：`/` · `/categories/{…}` · `/play/[id]` · `/install` · `/about` · `/submit` · `/blog`；**尚无** `src/pages/guides/`
- 英语 blog 目录空（仅 `.gitkeep`）；中文 blog 已有「怎么安装 / 怎么用这个站 / 什么是 Grok Bot」等，与本趟英语 `/guides/` **暂不互抢**
- brief 内引用的 **23/23** play id 在 `src/content/plays/en/` 均能找到对应文件

---

## 1) 词表

| # | 词 | 意图判断 | 互抢 | 裁决 |
|---|---|---|---|---|
| 1 | how to use Grok Bot | 信息 · 上手路径 | 与 getting started 同簇，方案已并页 A | **留** · 主词合理 |
| 2 | Grok Bot getting started | 信息 / 弱导航 | 官方 docs 极强；并进页 A 正确，勿另开 URL | **留作辅** · 不单开 |
| 3 | Grok Bot templates | 信息 · 机制/蓝图 | 与 share template 同簇 | **留** · 主词合理 |
| 4 | Grok Bot share template | 信息 · 操作 | 并页 B 正确 | **留作辅** |
| 5 | Grok Bot for sales | 信息偏商业 · 岗位场景 | 与 for engineering 同「岗位用例」簇 | **留** · 并页 C 可接受（v1） |
| 6 | Grok Bot for engineering | 信息 · 岗位场景 | 同上 | **留** · 并页 C 可接受（v1） |
| 7 | Grok Bot routines | 信息 · 功能点 | 若单开会与 how-to 抢「上手后下一步」 | **不单开** · 页 A H2 正确 |

**总评：** 三簇（上手 / 模板 / 岗位用例）切得准，没有「一词一页」膨胀。  
**不必砍词。** 换词也不急；下一波 `plugins setup` / `vs ChatGPT agents` / `chief of staff` 放着对。

**要注意的意图风险（不是砍词，是写法约束）：**
- `getting started` SERP 官方极强 → 页 A 必须打 **操作顺序 + Plays 证据**，别跟官方比「定义产品」。
- `for sales` / `for engineering` 商业意图 → 文案若暗示「无人审批冷邮件/自动合并」会踩合规，且和站「可核对玩法」定位冲突；brief 已有审批框架，须写成硬约束。
- 页 C 一页扛两主词：v1 **可过**（避免两篇薄文）；若任一簇后续有数据再拆。Title/H1 已同时带 sales + engineering，方向对。

---

## 2) 三页 URL / 结构 vs 现有货架

建议 URL：
- `/guides/how-to-use-grok-bot/`
- `/guides/grok-bot-templates/`
- `/guides/grok-bot-use-cases/`

**与 `/`、`/categories`：** 意图错开成立——货架是「很多卡 / 发现」；指南是「一条路径 + 少量深链」。**会不会做成第三个货架，取决于是否执行「每页 ≤5–8 条、禁止瀑布」**；brief 写了对，工程/设计验收要写成硬门槛，否则 C 最容易滑成 Growth+Engineering 迷你分类页。

**与 `/install`：** 分工清楚——install = 准入短页；A = 装完之后怎么用。A **禁止重写安装步骤**（只链 `/install`）。工程备注「从 `/install` 加 Full how-to → 页 A」正确，应做。

**与 `/blog`：** 英语 blog 空，本趟 `/guides/` 填英语搜索缺口，合理。中文已有安装/站用法长文——英语指南上线后勿再平行写一篇 EN `how-to-install` 去抢页 A；ZH 镜像走后续 `/zh/guides/`，别和 ZH blog 两套并行无计划。

**与 `/play/[id]`：** 深链用真实 id，已核对存在；构建时校验 id 的工程备注保留。

**孤儿风险：** 只有三叶无 `/guides/` 枢纽时，靠 install/页脚/Discover 进链即可；**P1** 可加极短 Guides index，非阻塞。

**结论（结构）：** 不会和现有三页互抢，**前提是不做成第三个货架**。URL 命名可派工程。

---

## 3) 每页 brief 缺口 / 编造 / 站外依赖

### 页 A — How to use
- **已有：** 主词、辅词、大纲、必答、Answer-ready、内链规则、与目录差异表 — 完整度高。
- **缺：**
  - 与页 B/C 的互链（装完去模板 / 岗位场景）未写进内链规则。
  - 「非官方」只在 meta，大纲缺一句 affiliation（可链 `/about`）。
  - Title 选项 1：`First Bot in Under an Hour` — **编造时间风险**（除非某条 play 明确如此承诺）。
- **站外依赖：** 官方 UI 截图（设计出）或 docs 链 — 可接受；UI 点击路径（Settings → Plugins）应用「以应用内为准」软化，与页 B 同标准。
- **Play 引用：** 所列 6 条 id 仓内均在。

### 页 B — Templates
- **已有：** 角度（模板 ≠ prompt dump）清晰；分享/安装/坑；play 列表偏模板动作 — 好。
- **缺：**
  - **开篇 Answer-ready 50 词**未像页 A 写死（只有 FAQ）。
  - 内链缺页 A（不会用 bot 的人先去上手）与 `/`。
  - Meta title「Steal Safely」语气可留，但若品牌要克制可换 P1。
- **编造风险：** 「长 description 可能丢字」已标第三方观察 — 保留标注即可，勿写成官方缺陷。
- **站外依赖：** Share UI「不确定则写以应用内为准」— 写法正确，编辑须遵守。
- **Play 引用：** 7 条 id 均在。

### 页 C — Use cases
- **已有：** 双节结构、审批闭环、分类禁串、每节 4–6 条 — 方向对。
- **缺：**
  - **开篇 Answer-ready**未写死。
  - 「链官方 enterprise 叙事」**无具体 URL** — 站外依赖过虚，编辑易编或瞎链。
  - 缺链页 A（岗位前先会用）与相关 categories 之外的 guides 互链。
  - FAQ「Where do I browse more」只指向 categories 即可，勿在文末再堆第二货架。
- **编造/合规风险（高）：** Sales/outbound plays 文案必须反复强调 **人批准再发**；禁止暗示无人值守冷邮/改 CRM stage。Brief 有框架，须升为全页写作硬规则。
- **Play 引用：** Sales 6 + Eng 5 条 id 均在。

### 共用规则
- 「禁止编造点赞/播放/收入」「真实 `/play/{id}`」— 够。
- Schema Article + BreadcrumbList；HowTo 仅当步骤与可见文案一致 — 保留。
- 缺一条全站：**guides 页不得渲染「查看更多 / 无限卡」**；Play picks 用缩小卡片组件有上限。

---

## 4) 可直接改的清单（改 brief 文档，再派工程）

### P0 — 必须改完才能派工程

1. **§页 A Meta title：** 删掉或改写 `Under an Hour`；改为无具体分钟承诺的表述（或写明出处 play）。
2. **§页 B、§页 C：** 各补一行 **Answer-ready：开篇 40–60 词**直接答主查询（与页 A 同规格）。
3. **§页 C 角度 / 内链：** 「官方 enterprise」改为 **具名 URL**（如 docs / x.ai 公开页），或删掉该依赖，只保留本站 Plays + 审批叙事。
4. **§共用写作规则：** 追加硬门槛：
   - 每页 Play picks **上限 8**（页 C 每节 ≤6，全页 ≤12）；
   - **禁止**类别瀑布 / 「browse all」嵌入；更多浏览只链 `/` 或 `/categories/...`；
   - Sales/outbound：**发送与 CRM 变更默认审批**，正文禁止相反暗示。
5. **§三页内链规则：** 互链补全 — A↔B↔C；A 必链 `/install`（已有）再加 `/about`（非官方一句）；B 必链页 A；C 必链页 A。
6. **§工程备注：** 验收标准写明「指南页不是第三个货架」；`/install` → 页 A 入口；构建校验 play id；**先改 brief 再开路由**。

### P1 — 可随后改，不挡开工

1. 可选极短 `/guides/` index（三链 + 一句定位），降低孤儿感。
2. 页 B title「Steal Safely」若要更克制，换成 Share / Install 向。
3. 页 C 拆页条件写一句：Search Console 或明显排名后再拆 sales / engineering。
4. 英语勿再开平行 `blog/how-to-install` 抢页 A；ZH `/zh/guides/` 镜像计划单独排期。
5. 页 A 长尾 `plugins`：本趟 H2/FAQ 即可；量起来再考虑单页。
6. 设计：优先自绘示意图，官方 UI 截图注意授权；不确定 UI 路径一律「以应用内为准」。

---

## 5) 结论

**改完再过。** 词表与三页分工成立，不必重做某一整页；按上面 P0 改 brief 后即可派玩法编辑写英文 + 工程加 `/guides/` 路由。

文件：`/workspace/plays-astro/seo/PLAYS-SEO-REVIEW-2026-09-08.md`
