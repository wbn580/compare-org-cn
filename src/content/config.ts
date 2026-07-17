import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    category: z.string(),
    publishDate: z.string(),
    modDatetime: z.string(),
    description: z.string(),
    title: z.string(),
    ogImage: z.string().optional(),
    readingTime: z.number().optional(),
    pubDatetime: z.string(),
    tags: z.array(z.string()).default([]),

  },
});

export const collections = { articles };
