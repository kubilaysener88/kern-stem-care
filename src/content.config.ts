import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog / resources content collection.
 * Add a post by dropping a Markdown file in src/content/blog/<lang>/<slug>.md
 * with the frontmatter below. It will appear automatically on /<lang>/blog and at
 * /<lang>/blog/<slug>, and in the sitemap.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'es']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Kern Stem Care'),
    /** Medical reviewer (E-E-A-T) — recommended for health content. */
    reviewedBy: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
