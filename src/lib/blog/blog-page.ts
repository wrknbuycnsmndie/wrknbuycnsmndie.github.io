import type { Page } from 'astro';
import type { CollectionEntry } from 'astro:content';
import { useTranslations, type Locale } from '../../i18n/utils';
import {
	absoluteUrl,
	blogListPageSchema,
	definedTermAbout,
	getCanonicalPath,
	type JsonLdInput,
	type JsonLdObject,
	type TagSummary,
} from '../seo';

type BlogPost = CollectionEntry<'blogRu'> | CollectionEntry<'blogEn'>;
type Translation = ReturnType<typeof useTranslations>;

interface BlogPageDataArgs {
	page: Page<BlogPost>;
	tags: TagSummary[];
	tag?: string;
	locale: Locale;
}

interface BlogTagState {
	activeTag?: string;
	selectedTag?: TagSummary;
	selectedTagCount: number;
}

interface BlogPageText {
	description: string;
	pageLead: string;
	pageTitle: string;
	title: string;
}

interface BlogSeo {
	canonicalPath: string;
	canonicalUrl: string;
	jsonLd: JsonLdInput;
	tagAbout?: JsonLdObject;
}

function getTagState(page: Page<BlogPost>, tags: TagSummary[], tag?: string): BlogTagState {
	const selectedTag = tag ? tags.find((tagSummary) => tagSummary.name === tag) : undefined;

	return {
		activeTag: tag,
		selectedTag,
		selectedTagCount: selectedTag?.count ?? page.total,
	};
}

function getCurrentPageSuffix(page: Page<BlogPost>, t: Translation) {
	if (page.currentPage <= 1) return '';

	return ` · ${t('blog.pagination.page')} ${page.currentPage} ${t('blog.pagination.of')} ${page.lastPage}`;
}

function getBlogPageText(
	page: Page<BlogPost>,
	tagState: BlogTagState,
	t: Translation,
): BlogPageText {
	const { activeTag, selectedTagCount } = tagState;
	const tagTitle = activeTag ? `${t('blog.tags.pageTitle')} #${activeTag}` : undefined;
	const tagDescription = activeTag
		? `${selectedTagCount} ${t('blog.tags.posts')} · ${t('blog.tags.pageDescription')} #${activeTag}. ${t('blog.body')}`
		: undefined;
	const pageTitle = tagTitle ?? t('blog.title');
	const pageLead = activeTag
		? `${selectedTagCount} ${t('blog.tags.posts')} · ${t('blog.body')}`
		: t('blog.body');
	const currentPageSuffix = getCurrentPageSuffix(page, t);
	const title = activeTag
		? `${pageTitle} | ${t('blog.title')}${currentPageSuffix}`
		: `${pageTitle}${currentPageSuffix}`;
	const description = tagDescription ?? t('meta.blog.description');

	return {
		description,
		pageLead,
		pageTitle,
		title,
	};
}

function getBlogSeo(
	page: Page<BlogPost>,
	locale: Locale,
	activeTag: string | undefined,
	text: BlogPageText,
): BlogSeo {
	const canonicalPath = getCanonicalPath(page.url.current);
	const canonicalUrl = absoluteUrl(canonicalPath);

	return {
		canonicalPath,
		canonicalUrl,
		jsonLd: blogListPageSchema({
			url: canonicalUrl,
			listTitle: text.title,
			listDescription: text.description,
			locale,
			posts: page.data,
		}),
		tagAbout: definedTermAbout(activeTag, canonicalUrl),
	};
}

function getBlogLabels(locale: Locale, t: Translation) {
	return {
		tagsLabel: locale === 'ru' ? 'Теги' : 'Tags',
		labels: {
			allTags: t('blog.tags.all'),
			moreTags: t('blog.tags.more'),
			pagination: {
				aria: t('blog.pagination.page'),
				previous: t('blog.pagination.previous'),
				next: t('blog.pagination.next'),
				page: t('blog.pagination.page'),
				of: t('blog.pagination.of'),
			},
		},
	};
}

export function getBlogPageData({ page, tags, tag, locale }: BlogPageDataArgs) {
	const t = useTranslations(locale);
	const tagState = getTagState(page, tags, tag);
	const text = getBlogPageText(page, tagState, t);
	const seo = getBlogSeo(page, locale, tagState.activeTag, text);
	const labels = getBlogLabels(locale, t);

	return {
		...tagState,
		...text,
		...seo,
		...labels,
	};
}
