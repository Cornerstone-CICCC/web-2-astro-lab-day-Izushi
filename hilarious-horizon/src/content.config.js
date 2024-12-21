// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, projects };