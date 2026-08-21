import { getCollection } from "astro:content";
import {
  filterByLocale,
  type Locale,
} from "./i18n";

export const CATEGORY_ORDER = ["全部", "编制", "工程", "增长", "生活", "官方玩法"] as const;
export const CATEGORY_ORDER_EN = ["Crew", "Engineering", "Growth", "Life", "Official"] as const;
export const PAGE_SIZE = 12;
export const FEATURED_ID = "ray-cto-pstack";
export const PAGE_TITLE = "Grok Bot Plays";

export const PLAY_ORDER = [
  "ray-cto-pstack",
  "official-sales-outbound",
  "official-demo-readiness",
  "official-pipeline-ops",
  "official-account-followup",
  "official-talent-scout",
  "official-paid-media",
  "official-expense-manager",
  "official-product-performance",
  "official-bug-reproduction",
  "official-account-health",
  "official-chief-of-staff",
  "official-teach-routine",
  "official-internal-handoffs",
  "debbie-chief-team",
  "debbie-linkedin",
  "debbie-coding-github",
  "debbie-morning-podcast",
  "debbie-content-flywheel",
  "elie-daily-briefing",
  "elie-email-triage",
  "elie-home-services",
  "elie-bot-directory",
  "eric-100-use-cases",
  "eric-outbound-voice",
  "eric-community-ops",
  "eric-recruiting-reviewer",
  "eric-fridge-dinner",
  "eric-living-faq",
  "rhys-grocery-autopilot",
  "jesse-multi-repo",
  "dennis-ops-desk",
  "promptway-overnight-job",
  "official-playtest",
  "official-cloud-agent-orchestration",
  "official-invoice-follow-up",
  "official-outbound-triage",
  "official-pr-ci-triage",
  "official-prototype-builder",
  "official-security-questionnaires",
  "official-social-posting",
  "official-vendor-portals",
  "aditi-three-test-bots",
  "alexfinn-brain-dump-fleet",
  "codez-10-step-life-crew",
  "jjcm-vietnam-fabric",
  "joe-competitor-research",
  "maa1-trello-linkedin",
  "mindstudio-morning-slack-trigger",
  "mindstudio-youtube-social",
  "nate-theme-not-task",
  "remy-alfred-gordon-florence",
  "shumer-researcher-writer-cos",
  "azumimusuhi-local-merge",
  "bcharleson-gtm-outbound",
  "box-credit-committee",
  "chris-support-inbox",
  "debbie-home-beer-shop",
  "farzad-named-roster",
  "gota-twelve-jobs",
  "n2parko-core-team",
  "peter-yang-five-bots",
  "rundown-cos-team",
  "sairahul-one-person-company",
  "sid-polymarket-daily",
  "yunta-calendar-reservations",
  "kunchenguid-grok-ship",
  "galleon-hypergrok-desk",
  "heyvhuang-werewolf",
  "masa-wunder-teach-slack",
  "official-event-logistics",
  "official-inbox-triage",
  "official-spec-ticket-handoff",
  "official-feature-requests",
  "official-beta-access",
  "prajwal-five-businesses-night-shift",
  "mattyp-intro-demo-content-grocery",
  "nateherk-nine-hacks-klaus",
  "chsrbrts-ridewithgps",
  "dannylimanseta-game-art-autopilot",
  "househackerjon-plumbing-office",
  "kristaletz-enterprise-gtm",
  "liam-fallen-one-cos-first",
  "eleven21-amazon-returns-pdf",
  "gergely-stripe-support-refunds",
  "darian314-lost-refund-hunt",
  "stan-beckers-research-reggie",
  "michelle-freitas-pulse-honey",
  "hanna-niapas-recruiting-loop",
  "adam-rousseau-slack-brief",
  "simon-lackowski-south-park-roster",
  "sidhant-uthra-ramp-travel-prs",
  "scott-metcalf-task-farming-orbit",
  "derek-schatz-content-leads-cos",
  "will-meinhardt-mach1-research-icp",
  "nwtseira-media-buyer",
  "anushkaa1407-content-four",
  "deryatr-x-notion-radar",
  "dork-matter-monday-hire-outbound",
  "joebenson-five-bots-coach",
  "mikenevermiss-seven-agent-ops",
  "demkinn-org-chart-roster",
  "ashwinmatta-household-crew",
  "spcxtsla-finance-simplefin",
  "axel-refund-case-desk",
  "heresmyeth-tesla-calendar-manager",
  "startupstella-mom-ops",
  "chuck-russell-car-shopping",
  "ashley-osborne-matrix-roster",
  "richard-zhang-slack-email-product",
  "matthew-silberman-juno-revops",
  "av1dlive-obsidian-wiki",
  "jorgediazapps-voice-typefully",
  "kr0der-analytics-outreach",
  "david-carbutt-cos-slides-stripe",
  "ed-dale-yellow-pad-newsletter",
  "jenna-nanpei-sports-vip",
  "aijoey-one-mission-article",
  "karanc12-lead-teach-skill",
  "tetsuoai-grinder-subs",
  "orcdev-scripter-online",
  "savipww-shopify-six",
  "jholtdigital-linear-wrap",
  "pricefoulger-roofing-ops",
  "montekkundan-ceo-qa-prs",
  "kazcow-petra-yacht",
  "jaymallen-shopify-five",
  "teslaconomics-chef",
  "sethjlevy-algebra-classroom",
  "cryptorover-personal-cfo",
  "laceypresley-riverside-drive",
  "anthony-battaglia-pfg-teach",
  "dfc369-code-watcher",
  "harry-munro-overnight-prs",
  "priya-bhatia-deep-thought",
] as const;

export function sortPlays<T extends { id: string }>(list: T[]) {
  const rank = new Map(PLAY_ORDER.map((id, i) => [id, i]));
  return [...list].sort((a, b) => (rank.get(a.id) ?? 999) - (rank.get(b.id) ?? 999));
}

export const BLOBS: Record<string, { c: string; br: string }> = {
  "Ray Fernando": { c: "#E8A87C", br: "46% 54% 48% 52% / 42% 40% 60% 58%" },
  "xAI": { c: "#D8D2C8", br: "50% 50% 45% 55% / 42% 58% 42% 58%" },
  "xAI Docs": { c: "#D8D2C8", br: "50% 50% 45% 55% / 42% 58% 42% 58%" },
  "Debbie O'Brien": { c: "#7A8B6F", br: "48% 52% 60% 40% / 45% 50% 50% 55%" },
  "Elie Steinbock": { c: "#6B7C8A", br: "55% 45% 48% 52% / 40% 60% 40% 60%" },
  "eric zakariasson": { c: "#8B7355", br: "40% 60% 55% 45% / 50% 50% 45% 55%" },
  "Rhys Sullivan": { c: "#C4B8A5", br: "42% 58% 50% 50% / 55% 45% 55% 45%" },
  "Jesse Hanley": { c: "#6B7C8A", br: "58% 42% 50% 50% / 40% 55% 45% 60%" },
  "Dennis Yu": { c: "#A39E94", br: "44% 56% 48% 52% / 50% 40% 60% 50%" },
  "Promptway": { c: "#8A8A8A", br: "42% 58% 50% 50% / 40% 42% 58% 60%" },
};

export const LOCAL_SHOTS: Record<string, { src: string; cap: string; step: number }[]> = {
  "ray-cto-pstack": [
    { src: "/assets/prompt1.png", cap: "下属 bot：Land / Convex / Auth，各管一截栈", step: 4 },
    { src: "/assets/prompt2.jpg", cap: "主 bot 拉群，三个下属在同一条线程里对齐", step: 3 },
    { src: "/assets/multitask.jpg", cap: "主 bot 收敛 PR：看板、派活、合可合的", step: 3 },
    { src: "/assets/groups.png", cap: "Move to 分组：项目、生活、内容各一条泳道", step: 5 },
    { src: "/assets/lanes.jpg", cap: "侧栏按 Health / Life 分开，避免所有 bot 挤在一起", step: 5 },
  ],
};

export type PlayData = {
  id: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  author: string;
  authorHandle?: string;
  sourceUrl: string;
  date?: string;
  audience?: string;
  outcome?: string;
  commentary?: string;
  cover?: string;
  imageUrls?: string[];
  steps?: Array<string | { title: string; body: string }>;
  tutorial?: Array<{ title: string; body: string }>;
  prompts?: Array<{ title: string; text: string; source?: string }>;
  featured?: boolean;
};

export function toPlay(entry: { data: PlayData }): PlayData {
  return { ...entry.data, id: entry.data.id };
}

export async function getPlays(locale: Locale): Promise<PlayData[]> {
  const entries = await getCollection("plays");
  return sortPlays(filterByLocale(entries, locale).map(toPlay));
}

export async function playStaticPaths(locale: Locale) {
  const plays = await getPlays(locale);
  return plays.map((play) => ({
    params: { id: play.id },
    props: { play, plays },
  }));
}

export async function hasPlay(locale: Locale, id: string): Promise<boolean> {
  const plays = await getPlays(locale);
  return plays.some((p) => p.id === id);
}

export function categoriesFor(locale: Locale, plays: PlayData[], allLabel: string): string[] {
  if (plays.length === 0) return [allLabel];
  if (locale === "zh") {
    return [allLabel, ...CATEGORY_ORDER.filter((c) => c !== "全部")];
  }
  const present = new Set(plays.map((p) => p.category).filter(Boolean));
  return [allLabel, ...CATEGORY_ORDER_EN.filter((c) => present.has(c))];
}

export function sourceLabel(url?: string, locale: Locale = "zh") {
  const src = locale === "en" ? "Source" : "来源";
  if (!url) return src;
  if (/docs\.x\.ai/.test(url)) return `${src} xAI Docs`;
  if (/x\.ai/.test(url)) return `${src} xAI`;
  if (/(^|\.)x\.com|twitter\.com/.test(url)) return `${src} X`;
  if (/dev\.to/.test(url)) return `${src} DEV`;
  if (/botdirectory\.ai/.test(url)) return `${src} Bot Directory`;
  if (/dennisyu\.com|debbie\.codes/.test(url)) return locale === "en" ? "Source article" : "来源文章";
  if (/runtimewire/.test(url)) return locale === "en" ? "Source report" : "来源报道";
  return src;
}

export function hideHandle(h?: string) {
  return !h || h === "@bot";
}

export function isOfficial(p: { author: string; category: string }) {
  return (
    p.author === "xAI" ||
    p.author === "xAI Docs" ||
    p.category === "官方玩法" ||
    p.category === "Official"
  );
}

export const COVER_FALLBACK_ABSTRACT = "/assets/covers/promptway-overnight-job.png";

export function coverOf(p: { id: string; imageUrls?: string[]; cover?: string }) {
  if (p.cover) return p.cover;
  if (p.id === FEATURED_ID) {
    if (p.imageUrls && p.imageUrls[0]) return p.imageUrls[0];
    return "/assets/cover.jpg";
  }
  return `/assets/covers/${p.id}.png`;
}

export function coverFallback(p: { id: string; cover?: string }) {
  if (p.id === FEATURED_ID) return "/assets/cover.jpg";
  if (p.cover) return p.cover;
  return COVER_FALLBACK_ABSTRACT;
}

export function blobStyle(author: string) {
  const b = BLOBS[author] || BLOBS.Promptway;
  return `--c:${b.c};--br:${b.br}`;
}

export function pad(n: number) {
  return n < 10 ? "0" + n : String(n);
}

export function hasText(v: unknown) {
  if (v == null) return false;
  if (Array.isArray(v)) return v.length > 0;
  return String(v).trim() !== "";
}

export function catalogItem(p: PlayData, locale: Locale) {
  return {
    id: p.id,
    title: p.title,
    summary: p.summary,
    category: p.category,
    tags: p.tags || [],
    author: p.author,
    handle: hideHandle(p.authorHandle) ? "" : (p.authorHandle || ""),
    sourceLabel: sourceLabel(p.sourceUrl, locale),
    cover: coverOf(p),
    fallback: coverFallback(p),
    blob: BLOBS[p.author] || BLOBS.Promptway,
    featured: !!p.featured || p.id === FEATURED_ID,
  };
}
