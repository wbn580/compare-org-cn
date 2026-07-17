import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    publishDate: z.string().optional(),
    pubDatetime: z.string(),
    modDatetime: z.string().optional(),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
  }),
});

export const collections = { articles };
