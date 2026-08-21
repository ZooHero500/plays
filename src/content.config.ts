import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stepItem = z.union([
  z.string(),
  z.object({
    title: z.string(),
    body: z.string(),
  }),
]);

const promptItem = z.object({
  title: z.string(),
  text: z.string(),
  source: z.string().optional(),
});

const plays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plays', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string(),
    authorHandle: z.string().default(''),
    sourceUrl: z.string(),
    date: z.string().default(''),
    audience: z.string().default(''),
    outcome: z.string().default(''),
    commentary: z.string().default(''),
    cover: z.string().optional(),
    imageUrls: z.array(z.string()).default([]),
    steps: z.array(stepItem).default([]),
    tutorial: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
    prompts: z.array(promptItem).default([]),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    cover: z.string().optional(),
  }),
});

export const collections = { plays, blog };
