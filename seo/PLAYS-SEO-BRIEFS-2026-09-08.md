# grokbotplays.com — SEO 关键词表 + 3 落地页 brief（2026-09-08）

> **已由 v2 取代。请以** `PLAYS-SEO-BRIEFS-2026-09-08-v2.md` **为准**（P0 修订版）。本文件仅作历史对照。


给总助转设计/工程（或先改一版再交 Elyxo）。**不要直接找 Elyxo。**  
本趟只英语；中文 `/zh/` 后续镜像。不做发帖/外链清单。不编造流量数字。

## 站现状（依据）

- 定位：Grok Bot Plays — 教上手 + idea 货架；非官方；卡片链真实 X permalink
- 已有：`/` 最新/热门货架 · `/categories/` + `/categories/{crew|engineering|growth|life|official}` · `/play/[id]` · `/install`（极短准入页）· `/about` · `/submit` · `/blog`
- 英语 play 已很多（仓内 en 数百条；分类 Crew/Growth/Life/Engineering/Official）
- 缺口：几乎没有「搜索意图落地页」——how-to / templates / use-cases 都被官方文档、MindStudio、个人博客、awesome 列表占着；本站货架打不进那些查询

---

## 1) 关键词表（7 个）

竞争粗估只看 **公开 SERP 印象**（2026-09-08 WebSearch），无 Search Console / 工具量级数字。

| # | 关键词 | 意图 | 竞争粗估 | SERP 印象（依据） | 建议落地页 |
|---|---|---|---|---|---|
| 1 | `how to use Grok Bot` | 信息 | **高** | 顶结果：MindStudio 教程、个人长文、cursor.com/help、docs.x.ai get-started、Composio | **页 A** `/guides/how-to-use-grok-bot/` |
| 2 | `Grok Bot getting started` | 信息 / 部分导航 | **高** | 官方 docs + Cursor help 强；第三方「complete guide」多 | 页 A（同页，H2 覆盖；不另开 URL） |
| 3 | `Grok Bot templates` | 信息 / 商业偏弱 | **中高** | 官方 templates 新闻、Flavio deep dive、awesome-grok-bot、XiaoHu「8 templates」 | **页 B** `/guides/grok-bot-templates/` |
| 4 | `Grok Bot share template` | 信息 | **中** | 官方 bots/templates 文档 + 社区「how to share」帖 | 页 B |
| 5 | `Grok Bot for sales` | 信息 / 商业 | **中** | x.ai enterprise 用例、GTM 博客（Techpresso/AI Builder）、grokbot.dev 用例页 | **页 C** `/guides/grok-bot-use-cases/`（Sales 大节） |
| 6 | `Grok Bot for engineering` | 信息 | **中** | 官方 enterprise「Engineering」段 + 大量 X 玩法；专门「for engineering」落地页不多 | 页 C（Engineering 大节） |
| 7 | `Grok Bot routines` | 信息 | **中高** | docs skills-routines、DataCamp/LearnCursor 教程多 | 页 A 的 H2 + 链到相关 play；**本趟不单开页**（避免和 how-to 互抢） |

可选下一波（本趟不做）：`Grok Bot plugins setup`、`Grok Bot vs ChatGPT agents`（对比意图，SERP 已有 Eigent 等文）、`Grok Bot chief of staff`。

**集群 → 页**

- 上手集群 → 页 A  
- 模板集群 → 页 B  
- 岗位用例集群 → 页 C  

---

## 2) 三页 writer-ready brief

### 共用写作规则

- 英语；观点鲜明：Plays = **可核对的真实玩法目录**，不是又一个「100 prompts」农场
- 禁止编造点赞/播放/收入；引用 play 必须用站上真实 `/play/{id}`
- 每页开头 40–60 词直接答主查询（可被 AI 摘抄）
- 与 `/`、`/categories/`：**指南页讲方法 + 精选 5–8 条深链**；货架页继续「很多卡片」。别做成第三个大目录
- `/install`：只写准入（账号/下载）；**页 A 写完安装之后怎么用**。页 A 链 `/install`，不要重写整页 install
- CTA：中段链 3–5 条 play；文末 CTA 回 `/` 或相关 `/categories/...`
- Schema 建议：Article + BreadcrumbList；页 A 可加 HowTo（步骤与可见文案一致）；不要 VideoGame

---

### 页 A — How to use Grok Bot

**URL（建议）:** `/guides/how-to-use-grok-bot/`  
**主词:** how to use Grok Bot  
**长尾:** Grok Bot getting started · first Grok Bot · Grok Bot plugins · Grok Bot routines（辅，FAQ/H2）  
**读者时刻:** 已听说 Grok Bot / 刚装上，不知道第一周该干什么  
**角度:** 官方 docs 讲产品能力；本页讲 **操作顺序 + 边界 + 下一步去抄哪条真实 play**（带 permalink 证据）

**Meta title（≤60）**  
1. `How to Use Grok Bot (First Bot in Under an Hour)`  
2. `How to Use Grok Bot: Install, First Task, Plugins`

**Meta description**  
1. `How to use Grok Bot: sign in, create one focused bot, run a safe first task, then connect plugins. Unofficial Plays guide with real public examples.`  
2. `A practical Grok Bot getting-started path—plus linked Plays from public X posts. Not affiliated with xAI.`

**H1:** `How to use Grok Bot`

**H2 / H3 大纲**

1. **H2: What “using Grok Bot” means** — 持久 agent + 云电脑 + 插件/例行，不是一次性聊天；一句对比 ChatGPT 单次任务（不写评测分数）
2. **H2: Before you start** — 链 `/install`；复述：同 Cursor 账号、计划门槛以官方为准、勿把密码贴进聊天
3. **H2: Create one bot with one job** — 名称/title/description；「一个 outcome」；反例：一个 bot 管所有 App
4. **H2: Give it a first safe task** — Outcome / sources / constraints / deliverable / review point（对齐官方 get-started 结构，用自己的例子）
5. **H2: Connect only the plugins you need** — Settings → Plugins；先日历/邮件/GitHub 等「读+草稿」；发送/花钱先开审批
6. **H2: Save a skill, then a routine** — 先做成再存 skill；routine 要时区/失败时停；链 docs 概念，实例用 play
7. **H2: Copy a real play next** — 精选 5–6 条（见内链）
8. **H2: FAQ**

**必答问题（文中要有可摘抄短答）**

- How do I use Grok Bot for the first time?
- Do I need Cursor Ultra / SuperGrok?
- Should I create one bot or many?
- When do I connect plugins vs use the browser computer?
- What should stay behind approval?

**内链规则**

- 必链：`/install`、`/`、`/categories/crew`
- 精选 play（写作时再核页仍 200；优先 Official/Crew 上手向）：
  - `/play/mattyp-getting-started`
  - `/play/arianlooterking-ten-minute-first-bot`
  - `/play/official-teach-routine`
  - `/play/0xcarnagee-memory-trigger-verify-loop`
  - `/play/4rblaber-20-page-operator-guide`
  - `/play/spectnfa-65-min-setup-playbook`
- 规则：每个 H2「下一步」最多链 **2** 条 play；用一句话说明 **学什么**，不要只丢标题

**与目录页差异**

| | `/` / categories | 页 A |
|---|---|---|
| 结构 | 很多卡 | 一条路径 + 少量深链 |
| 意图 | 浏览/发现 | 学会第一次用 |
| 成功 | 点进 play / X | 读者完成第一个安全任务 |

**Proof 需求:** 截图应用官方 UI（安装/新建 bot/Connect 卡）— 设计出；或链官方 docs。玩法编辑只写步骤与 play 引用。  
**字数:** 1,200–1,800  
**Answer-ready:** 开篇 50 词答 “how to use”；FAQ 各 40–60 词。

---

### 页 B — Grok Bot templates（可抄模板）

**URL:** `/guides/grok-bot-templates/`  
**主词:** Grok Bot templates  
**长尾:** Grok Bot share template · Grok Bot template examples · install Grok Bot template  
**读者时刻:** 不想从零写 description，想装别人的蓝图或分享自己的  
**角度:** 模板 = 可分享蓝图（指令/skills/routines/插件配置），**不是**提示词粘贴；收件人仍要重连账号。本页教「怎么分享/安装 + 哪些 Plays 展示了模板玩法」

**Meta title**  
1. `Grok Bot Templates: Share, Install, and Steal Safely`  
2. `Grok Bot Templates (Not Just Prompt Lists)`

**Meta description**  
1. `What Grok Bot templates include, how to share or install one, and what you must reconnect. Unofficial Plays picks with real public examples.`  
2. `Grok Bot templates vs prompt dumps—plus Plays that show template sharing in the wild.`

**H1:** `Grok Bot templates`

**H2 大纲**

1. **H2: What a Grok Bot template is** — 打包身份/说明/skills/routines/插件设置；对比「只复制一段 prompt」
2. **H2: How to share your bot as a template** — 设置里 Share / 让 bot 做 shareable copy；发布前剥离密钥、内网 URL、私人 memory（对齐社区最佳实践，不编官方未写死的点击路径若不确定则写「以应用内 Share as template 为准」）
3. **H2: How to install someone else’s template** — 打开链接 → 检查 inclusions → 用自己的插件登录 → 先跑安全任务再开 routine
4. **H2: Template pitfalls** — 长 description 可能丢字（社区报道，标「第三方观察」）；自定义 MCP/脚本不会自动带走
5. **H2: Template Plays to copy from** — 精选
6. **H2: FAQ**

**必答**

- What is in a Grok Bot template?
- How do I share a Grok Bot as a template?
- Will the recipient get my logins?
- Templates vs prompt libraries?

**内链**

- `/categories/crew`、`/categories/official`
- Plays：
  - `/play/official-share-templates`
  - `/play/arianlooterking-share-templates`
  - `/play/voxyz-share-template`
  - `/play/mattyp-templates-share`
  - `/play/ncsuian-ship-bot-as-link`
  - `/play/p10ns11y-botify-templates`
  - `/play/daniel-farinax-bring-bot-template`
- 规则：每条写清 **模板相关动作**（分享/安装/评审），禁止链无关爆款

**与目录差异:** 目录按类浏览；本页是 **模板机制教程 + 7 条以内深链**。  
**字数:** 1,000–1,500

---

### 页 C — Use cases（Sales + Engineering）

**URL:** `/guides/grok-bot-use-cases/`  
**主词组合:** `Grok Bot for sales` + `Grok Bot for engineering`（一页两主节，避免互抢；title 用 use cases 统领）  
**长尾:** Grok Bot GTM · Grok Bot PR review · Grok Bot outbound（FAQ）  
**读者时刻:** 「能不能用在我的岗位」— 要场景边界，不要又一个 All 分类页  
**角度:** 按岗位讲 **可审批的闭环**（研究→草稿→人点发送/合并）；每节只精选 Plays，并链官方 enterprise 叙事作背景（不抄未核实客户数据）

**Meta title**  
1. `Grok Bot Use Cases: Sales and Engineering Plays`  
2. `Grok Bot for Sales and Engineering (Real Play Links)`

**Meta description**  
1. `Practical Grok Bot use cases for sales/GTM and engineering—drafting, research, PR watchers—with linked Plays from public posts. Unofficial.`  
2. `Where Grok Bot fits in sales and eng workflows, plus curated Plays. Approvals stay on for sends and prod.`

**H1:** `Grok Bot use cases for sales and engineering`

**H2 大纲**

1. **H2: How to read these use cases** — 草稿 vs 发送；插件 vs 电脑浏览器；本站条目来自公开帖
2. **H2: Grok Bot for sales / GTM**  
   - H3: Overnight research + draft outreach（人批准再发）  
   - H3: Call/meeting prep and CRM notes（不擅自改 stage）  
   - H3: Plays to open（Growth）
3. **H2: Grok Bot for engineering**  
   - H3: PR / CI watchers and review packs  
   - H3: Overnight chores with evidence  
   - H3: Plays to open（Engineering）
4. **H2: What not to automate on day one** — 生产部署、客户冷邮件无审批、共享电脑误伤
5. **H2: FAQ**

**必答**

- What can Grok Bot do for sales teams?
- What can Grok Bot do for engineering teams?
- Should a sales bot send email by itself?
- Where do I browse more plays after this?

**内链**

- Sales/Growth：
  - `/play/official-sales-outbound`
  - `/play/kristaletz-enterprise-gtm`
  - `/play/bcharleson-gtm-outbound`
  - `/play/noelxroberts-gtm-scout-outbound`
  - `/play/coldemailchris-gtm-bot-fleet`
  - `/categories/growth`
- Engineering：
  - `/play/harry-munro-overnight-prs`
  - `/play/jasonkiesel-github-code-reviews`
  - `/play/montekkundan-ceo-qa-prs`
  - `/play/hopeunblemished-cloud-agent-handoff`
  - `/play/0xshoopy-cursor-workshop-team`
  - `/categories/engineering`
- 规则：Sales 节禁止堆 Life 玩法；每节 **4–6** 条，写「岗位产出」一句

**与目录差异:** `/categories/growth|engineering` 是该类全部卡片；本页是 **岗位叙事 + 策展**。  
**字数:** 1,400–2,000

---

## 3) 设计 / 工程备注（方便总助派活）

**工程（Astro static + CF Pages）**

- 新路由建议：`src/pages/guides/how-to-use-grok-bot.astro`（或 `guides/[slug].astro` + content collection）三页同理
- 进 sitemap；从 `/install` 加「Full how-to →」链到页 A；页脚/Discover 可加 Guides
- `/zh/` 本趟不做，预留同构路径
- play 内链用绝对路径 `/play/{id}`；构建时最好校验 id 仍存在

**设计**

- 指南页：大字、浅/深跟随站现有 Plays 气质；步骤用编号；「Play picks」用现有卡片组件缩小版（标题+一句话+链），不要新做第二套货架瀑布
- 可选示意图：页 A「one job bot」示意；页 B「template = blueprint without logins」；禁官方未授权营销图乱贴

**编辑**

- 写前抽查表内 `/play/...` 仍 200；挂了就换同类目备用
- 官方产品事实以 docs.x.ai / cursor.com/help 为准；计划名/价格勿写死过期数字

---

## 给总助

词表 7 个，落三页：`/guides/how-to-use-grok-bot/`、`/guides/grok-bot-templates/`、`/guides/grok-bot-use-cases/`。和现有 `/`·categories 货架、短 `/install` 错开。可直接派玩法编辑写英文 + 工程加路由；若要改 URL 命名或页 C 拆成两页，回我一版即可。
