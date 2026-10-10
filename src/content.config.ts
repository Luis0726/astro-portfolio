import { defineCollection } from "astro:content";
import { glob } from "astro/loaders"
import { z } from "astro/zod";

const projects = defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string().optional(),
        url: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    projects
};