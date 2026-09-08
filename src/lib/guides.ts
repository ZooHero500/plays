import { getPlays, type PlayData } from "./plays";
import raw from "../data/guides.json";
import { loadGuideMarkdown, type ParsedGuide } from "./guide-md";

export type GuideSlug =
  | "how-to-use-grok-bot"
  | "grok-bot-templates"
  | "grok-bot-use-cases";

export type GuidePlayBuckets = {
  default?: string[];
  sales?: string[];
  engineering?: string[];
};

export type GuideDef = {
  slug: GuideSlug;
  kicker: string;
  crumb: string;
  plays: GuidePlayBuckets;
};

export type GuideCaps = {
  total: number;
  sales?: number;
  engineering?: number;
};

type GuidesFile = {
  caps: Record<string, GuideCaps>;
  guides: GuideDef[];
};

const data = raw as GuidesFile;

export const GUIDE_CAPS: Record<GuideSlug, GuideCaps> = {
  "how-to-use-grok-bot": data.caps["how-to-use-grok-bot"],
  "grok-bot-templates": data.caps["grok-bot-templates"],
  "grok-bot-use-cases": data.caps["grok-bot-use-cases"],
};

export const GUIDES: GuideDef[] = data.guides;

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);

export function guidePath(slug: GuideSlug): string {
  return `/guides/${slug}/`;
}

export function getGuide(slug: string): GuideDef | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function allGuidePlayIds(guide: GuideDef): string[] {
  return [
    ...(guide.plays.default || []),
    ...(guide.plays.sales || []),
    ...(guide.plays.engineering || []),
  ];
}

export function assertGuidePlayCaps(guide: GuideDef): void {
  const caps = GUIDE_CAPS[guide.slug];
  const ids = allGuidePlayIds(guide);
  if (ids.length > caps.total) {
    throw new Error(
      `Guide ${guide.slug} has ${ids.length} play ids; cap is ${caps.total}`,
    );
  }
  if (caps.sales != null && (guide.plays.sales || []).length > caps.sales) {
    throw new Error(
      `Guide ${guide.slug} sales has ${(guide.plays.sales || []).length} plays; cap is ${caps.sales}`,
    );
  }
  if (
    caps.engineering != null &&
    (guide.plays.engineering || []).length > caps.engineering
  ) {
    throw new Error(
      `Guide ${guide.slug} engineering has ${(guide.plays.engineering || []).length} plays; cap is ${caps.engineering}`,
    );
  }
}

export async function loadGuidePlays(ids: string[]): Promise<PlayData[]> {
  const plays = await getPlays("en");
  const byId = new Map(plays.map((p) => [p.id, p]));
  const missing = ids.filter((id) => !byId.has(id));
  if (missing.length) {
    throw new Error(
      `Guide references missing play ids: ${missing.join(", ")}`,
    );
  }
  return ids.map((id) => byId.get(id)!);
}

export function loadGuideDoc(guide: GuideDef): ParsedGuide {
  return loadGuideMarkdown(guide.slug);
}

export function guideStaticPaths() {
  return GUIDES.map((guide) => {
    assertGuidePlayCaps(guide);
    const doc = loadGuideDoc(guide);
    return {
      params: { slug: guide.slug },
      props: { guide, doc },
    };
  });
}
