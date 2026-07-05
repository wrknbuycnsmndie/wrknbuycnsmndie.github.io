import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blogSchema = {
	title: z.string(),
	description: z.string(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date().optional(),
	tags: z
		.array(
			z
				.string()
				.trim()
				.toLowerCase()
				.regex(/^[a-z0-9-]+$/),
		)
		.default([]),
	seoTitle: z.string().optional(),
	ogImage: z.string().optional(),
	ogImageAlt: z.string().optional(),
	draft: z.boolean().default(false),
};

const projectLinkIconSchema = z.enum(['github', 'npm', 'external-site']);
export const techIconSchema = z.enum([
	'animedotjs',
	'astro',
	'bun',
	'c',
	'cloudflarepages',
	'deno',
	'docker',
	'dotnet',
	'eslint',
	'go',
	'gsap',
	'javascript',
	'langchain',
	'langgraph',
	'linux',
	'mariadb',
	'modelcontextprotocol',
	'mongodb',
	'nestjs',
	'nextdotjs',
	'nginx',
	'npm',
	'ollama',
	'oxc',
	'pnpm',
	'postgresql',
	'prettier',
	'prisma',
	'python',
	'react',
	'reacthookform',
	'reactquery',
	'redis',
	'redux',
	'rollup',
	'swagger',
	'tanstack',
	'threedotjs',
	'typescript',
	'vite',
	'vitest',
]);

export type TechIconName = z.infer<typeof techIconSchema>;

const projectSchema = {
	title: z.string(),
	summary: z.string(),
	description: z.string(),
	createdAt: z.coerce.date(),
	tech: z
		.array(
			z.object({
				name: z.string(),
				icon: techIconSchema.optional(),
			}),
		)
		.default([]),
	links: z
		.array(
			z.object({
				label: z.string(),
				href: z.url(),
				icon: projectLinkIconSchema.optional(),
			}),
		)
		.default([]),
};

const blogRu = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog/ru' }),
	schema: z.object(blogSchema),
});

const blogEn = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog/en' }),
	schema: z.object(blogSchema),
});

const projectsRu = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects/ru' }),
	schema: z.object(projectSchema),
});

const projectsEn = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects/en' }),
	schema: z.object(projectSchema),
});

export const collections = { blogRu, blogEn, projectsRu, projectsEn };
