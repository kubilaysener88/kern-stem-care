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
    /** Short form for the <title> tag only. The `title` above stays long and
        descriptive because it is the H1; Google truncates a search result at
        roughly 60 characters including the " | Kern Stem Care" suffix, so any
        post whose H1 runs past that needs a tighter one here. */
    metaTitle: z.string().optional(),
    description: z.string(),
    lang: z.enum(['en', 'es']),
    /** Shared id linking this post to its translation in the other language
        (EN/ES slugs usually differ, so this is how hreflang finds the pair).
        Leave unset only if no translation exists yet. */
    translationKey: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Kern Stem Care'),
    /** Medical reviewer (E-E-A-T) — a physician, for the clinical claims. */
    reviewedBy: z.string().optional(),
    /** Scientific reviewer — the laboratory side (what the cells are, how they
        are sourced and processed). Kept separate from `reviewedBy` because a
        science credential does not stand behind a clinical judgement. */
    scienceReviewedBy: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
