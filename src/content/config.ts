import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().default('Gustavo'),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		tags: z.array(z.string()).default([]),
		category: z.enum(['tutorial', 'project', 'thoughts', 'guide']).default('thoughts'),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		techStack: z.array(z.string()).default([]),
		demoUrl: z.string().url().optional(),
		githubUrl: z.string().url().optional(),
		featured: z.boolean().default(false),
		completedDate: z.coerce.date(),
		order: z.number().default(0),
	}),
});

export const collections = {
	blog,
	projects,
};
