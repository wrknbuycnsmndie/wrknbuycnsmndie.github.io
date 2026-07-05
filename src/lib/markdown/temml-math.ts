import temml from 'temml';
import { defineMdastPlugin, type MdastNode, type MdastVisitorContext } from 'satteri';

const MATH_LANGS = new Set(['latex', 'math', 'tex']);

type CodeNode = Extract<MdastNode, { type: 'code' }>;
type HtmlNode = Extract<MdastNode, { type: 'html' }>;
type InlineMathNode = Extract<MdastNode, { type: 'inlineMath' }>;
type BlockMathNode = Extract<MdastNode, { type: 'math' }>;
type ParagraphNode = Extract<MdastNode, { type: 'paragraph' }>;

function language(node: CodeNode): string | undefined {
	return typeof node.lang === 'string' ? node.lang.trim().toLowerCase() : undefined;
}

function render(tex: string, displayMode: boolean): string {
	return temml.renderToString(tex, {
		displayMode,
		annotate: true,
		throwOnError: false,
		strict: false,
	});
}

function renderNode(tex: string, displayMode: boolean): HtmlNode {
	return {
		type: 'html',
		value: render(tex.trim(), displayMode),
	};
}

function sourceFor(node: Readonly<MdastNode>, ctx: MdastVisitorContext): string | undefined {
	const start = node.position?.start.offset;
	const end = node.position?.end.offset;

	if (typeof start !== 'number' || typeof end !== 'number') return undefined;

	return ctx.source.slice(start, end).trim();
}

function isSingleLineDisplayMath(
	node: Readonly<InlineMathNode>,
	ctx: MdastVisitorContext,
): boolean {
	const source = sourceFor(node, ctx);
	return source?.startsWith('$$') === true && source.endsWith('$$');
}

function isOnlyChildDisplayMath(node: Readonly<InlineMathNode>, ctx: MdastVisitorContext): boolean {
	const parent = ctx.parent(node);
	return (
		parent?.type === 'paragraph' &&
		parent.children.length === 1 &&
		isSingleLineDisplayMath(node, ctx)
	);
}

export const temmlMath = defineMdastPlugin({
	name: 'temml-math-semantic',
	paragraph(node: Readonly<ParagraphNode>, ctx: MdastVisitorContext) {
		const [child] = node.children;

		if (
			node.children.length === 1 &&
			child?.type === 'inlineMath' &&
			isSingleLineDisplayMath(child, ctx)
		) {
			return renderNode(child.value, true);
		}
	},
	inlineMath(node: Readonly<InlineMathNode>, ctx: MdastVisitorContext) {
		if (isOnlyChildDisplayMath(node, ctx)) return;

		return renderNode(node.value.trim(), false);
	},
	math(node: Readonly<BlockMathNode>) {
		return renderNode(node.value, true);
	},
	code(node: Readonly<CodeNode>) {
		const lang = language(node);
		if (!lang || !MATH_LANGS.has(lang)) return;
		return renderNode(node.value, true);
	},
});
