const CODE_LANGUAGE_LABELS = new Map([
	['bash', 'Shell'],
	['sh', 'Shell'],
	['css', 'CSS'],
	// ['go', 'Go'],
	['javascript', 'JavaScript'],
	['js', 'JavaScript'],
	['jsx', 'JSX'],
	['typescript', 'TypeScript'],
	['ts', 'TypeScript'],
	['tsx', 'TSX'],
	['json', 'JSON'],
	['md', 'Markdown'],
	['mdx', 'MDX'],
	['zsh', 'Shell'],
]);

export function codeLanguageLabel(language: string): string {
	const normalized = language.trim().toLowerCase();
	return CODE_LANGUAGE_LABELS.get(normalized) || normalized || 'text';
}
