import { locales, useTranslations, type Locale } from '../i18n/utils';

export type JsonLdPrimitive = string | number | boolean | null;
export type JsonLdValue = JsonLdPrimitive | JsonLdObject | JsonLdValue[];
export interface JsonLdObject {
	[key: string]: JsonLdValue | undefined;
}
export type JsonLdInput = JsonLdObject | JsonLdObject[] | null | false | undefined;
export type PageSchemaType = 'WebPage' | 'AboutPage' | 'CollectionPage' | 'ProfilePage';

export interface TagSummary {
	name: string;
	count: number;
}

function siteUrl() {
	if (!import.meta.env.SITE) {
		throw new Error('Astro site config is required for SEO URLs.');
	}

	return import.meta.env.SITE;
}

function siteMeta(locale: Locale) {
	const t = useTranslations(locale);

	return {
		name: t('site.name'),
		author: t('site.author'),
		authorJobTitle: t('site.author.jobTitle'),
		description: t('site.description'),
		url: siteUrl(),
	};
}

export function absoluteUrl(pathOrUrl: string | URL) {
	return new URL(pathOrUrl, siteUrl()).href;
}

export function jsonLdNodes(data: JsonLdInput): JsonLdObject[] {
	if (!data) return [];
	return Array.isArray(data) ? data : [data];
}

export function jsonLdDocument(data: JsonLdInput) {
	const nodes = jsonLdNodes(data);
	if (nodes.length === 0) return undefined;

	return {
		'@context': 'https://schema.org',
		'@graph': nodes,
	};
}

export function pageSchema(args: {
	type?: PageSchemaType;
	url: string;
	title: string;
	description: string;
	locale: Locale;
	keywords?: string[];
	about?: JsonLdObject;
	mainEntity?: JsonLdObject;
	extra?: JsonLdInput;
}): JsonLdObject[] {
	const site = siteMeta(args.locale);
	const websiteId = `${site.url}/#website`;
	const personId = `${site.url}/#person`;
	const page: JsonLdObject = {
		'@type': args.type ?? 'WebPage',
		'@id': `${args.url}#webpage`,
		name: args.title,
		url: args.url,
		description: args.description,
		inLanguage: args.locale,
		isPartOf: { '@id': websiteId },
	};

	if (args.about) {
		page.about = args.about;
	}

	if (args.mainEntity) {
		page.mainEntity = args.mainEntity;
	}

	if (args.keywords?.length) {
		page.keywords = args.keywords;
	}

	if (args.type === 'ProfilePage') {
		page.about = { '@id': personId };
		page.mainEntity = { '@id': personId };
	}

	return [
		{
			'@type': 'WebSite',
			'@id': websiteId,
			name: site.name,
			url: site.url,
			description: site.description,
			inLanguage: locales,
			publisher: { '@id': personId },
		},
		{
			'@type': 'Person',
			'@id': personId,
			name: site.author,
			url: site.url,
			jobTitle: site.authorJobTitle,
			knowsAbout: ['TypeScript', 'React', 'Node.js', 'Astro', 'APIs', 'AI integrations'],
		},
		page,
		...jsonLdNodes(args.extra),
	];
}

export function blogListSchema(args: {
	url: string;
	blogUrl?: string;
	title: string;
	description: string;
	listTitle?: string;
	listDescription?: string;
	locale: Locale;
	posts: { title: string; url: string }[];
}): JsonLdObject[] {
	const site = siteMeta(args.locale);
	const blogUrl = args.blogUrl ?? args.url;

	return [
		{
			'@type': 'Blog',
			'@id': `${blogUrl}#blog`,
			name: args.title,
			url: blogUrl,
			description: args.description,
			inLanguage: args.locale,
			isPartOf: { '@id': `${site.url}/#website` },
			author: { '@id': `${site.url}/#person` },
		},
		{
			'@type': 'ItemList',
			'@id': `${args.url}#posts`,
			url: args.url,
			name: args.listTitle ?? args.title,
			description: args.listDescription ?? args.description,
			numberOfItems: args.posts.length,
			itemListOrder: 'https://schema.org/ItemListOrderDescending',
			itemListElement: args.posts.map((post, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				item: {
					'@type': 'BlogPosting',
					'@id': `${post.url}#blogposting`,
					url: post.url,
					headline: post.title,
				},
			})),
		},
	];
}

export function blogPostSchema(args: {
	url: string;
	title: string;
	description: string;
	createdAt: Date;
	updatedAt?: Date;
	tags: string[];
	image?: string;
	imageAlt: string;
	locale: Locale;
}): JsonLdObject[] {
	const t = useTranslations(args.locale);
	const site = siteMeta(args.locale);
	const homeTitle = t('nav.home');
	const blogTitle = t('blog.title');
	const blogUrl = absoluteUrl(`/${args.locale}/blog/`);
	const post: JsonLdObject = {
		'@type': 'BlogPosting',
		'@id': `${args.url}#blogposting`,
		headline: args.title,
		description: args.description,
		url: args.url,
		datePublished: args.createdAt.toISOString(),
		dateModified: (args.updatedAt ?? args.createdAt).toISOString(),
		inLanguage: args.locale,
		mainEntityOfPage: { '@id': `${args.url}#webpage` },
		author: { '@id': `${site.url}/#person` },
		publisher: { '@id': `${site.url}/#person` },
		isPartOf: { '@id': `${blogUrl}#blog` },
	};

	if (args.tags.length) {
		post.keywords = args.tags;
		post.articleSection = args.tags;
	}

	if (args.image) {
		post.image = [
			{
				'@type': 'ImageObject',
				url: absoluteUrl(args.image),
				caption: args.imageAlt,
			},
		];
	}

	return [
		{
			'@type': 'Blog',
			'@id': `${blogUrl}#blog`,
			name: blogTitle,
			url: blogUrl,
			description: t('meta.blog.description'),
			inLanguage: args.locale,
			isPartOf: { '@id': `${site.url}/#website` },
			author: { '@id': `${site.url}/#person` },
		},
		post,
		{
			'@type': 'BreadcrumbList',
			'@id': `${args.url}#breadcrumb`,
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: homeTitle,
					item: absoluteUrl(`/${args.locale}/`),
				},
				{ '@type': 'ListItem', position: 2, name: blogTitle, item: blogUrl },
				{ '@type': 'ListItem', position: 3, name: args.title, item: args.url },
			],
		},
	];
}

export function getTagsWithCounts(posts: { data: { tags: string[] } }[]): TagSummary[] {
	const counts = new Map<string, number>();

	for (const post of posts) {
		for (const tag of post.data.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}

	return [...counts.entries()]
		.map(([name, count]) => ({ name, count }))
		.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
