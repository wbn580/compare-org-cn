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
    // 未在 schema 声明的 frontmatter 会被 Astro 丢弃：hideFromHome 写在文章里
    // 已久，却从未抵达任何模板，GEO 排名文因此一直挂在首页。
    hideFromHome: z.boolean().optional(),
  }),
});

export const collections = { articles };
