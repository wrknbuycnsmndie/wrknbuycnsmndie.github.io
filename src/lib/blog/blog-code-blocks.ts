import { codeLanguageLabel } from './code-language-labels';

const CONTENT_SELECTOR = '.blog-post-content';
const CODE_BLOCK_SELECTOR = `${CONTENT_SELECTOR} pre[data-language]`;
const COPY_BUTTON_SELECTOR = `${CONTENT_SELECTOR} .code-shell-copy`;
const READY_DATA_KEY = 'codeCopyReady';

interface CodeCopyLabels {
	copy: string;
	copied: string;
	failed: string;
	aria: string;
}

function codeCopyLabels(button: HTMLButtonElement): CodeCopyLabels {
	const content = button.closest<HTMLElement>(CONTENT_SELECTOR);

	return {
		copy: content?.dataset.codeCopy || 'copy',
		copied: content?.dataset.codeCopied || 'copied',
		failed: content?.dataset.codeFailed || 'failed',
		aria: content?.dataset.codeCopyAria || 'Copy code',
	};
}

function wrapCodeBlock(pre: HTMLPreElement): void {
	if (pre.parentElement?.classList.contains('code-shell')) return;

	const shell = document.createElement('div');
	shell.className = 'code-shell';

	const bar = document.createElement('div');
	bar.className = 'code-shell-bar';

	const language = document.createElement('span');
	language.className = 'code-shell-lang';
	language.textContent = codeLanguageLabel(pre.dataset.language || 'text');

	const button = document.createElement('button');
	button.className = 'code-shell-copy';
	button.type = 'button';
	button.dataset.state = 'idle';

	pre.replaceWith(shell);
	bar.append(language, button);
	shell.append(bar, pre);
}

function wrapCodeBlocks(): void {
	document.querySelectorAll<HTMLPreElement>(CODE_BLOCK_SELECTOR).forEach(wrapCodeBlock);
}

function setupCodeCopyButtons(): void {
	wrapCodeBlocks();

	document.querySelectorAll<HTMLButtonElement>(COPY_BUTTON_SELECTOR).forEach((button) => {
		if (button.dataset.ready === 'true') return;

		const labels = codeCopyLabels(button);
		button.dataset.ready = 'true';
		button.dataset.state = 'idle';
		button.textContent = labels.copy;
		button.setAttribute('aria-label', labels.aria);
	});
}

async function copyCodeFromButton(button: HTMLButtonElement): Promise<void> {
	const shell = button.closest('.code-shell');
	const code = shell?.querySelector<HTMLElement>('pre code');
	if (!code) return;

	const labels = codeCopyLabels(button);

	try {
		await navigator.clipboard.writeText(code.textContent ?? '');
		button.dataset.state = 'copied';
		button.textContent = labels.copied;
	} catch {
		button.dataset.state = 'failed';
		button.textContent = labels.failed;
	}

	window.setTimeout(() => {
		button.dataset.state = 'idle';
		button.textContent = labels.copy;
	}, 1200);
}

function handleDocumentClick(event: MouseEvent): void {
	const target = event.target;
	if (!(target instanceof Element)) return;

	const button = target.closest<HTMLButtonElement>('.code-shell-copy');
	if (!button) return;

	void copyCodeFromButton(button);
}

export function initBlogCodeBlocks(): void {
	if (!document.documentElement.dataset[READY_DATA_KEY]) {
		document.documentElement.dataset[READY_DATA_KEY] = 'true';
		document.addEventListener('click', handleDocumentClick);
		document.addEventListener('astro:page-load', setupCodeCopyButtons);
	}

	setupCodeCopyButtons();
}
