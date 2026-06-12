import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
	{
		ignores: ['.astro/**', 'dist/**', 'node_modules/**'],
	},
	js.configs.recommended,
	...astro.configs['flat/recommended'],
	{
		files: ['**/*.{js,mjs,ts,astro}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parserOptions: {
				extraFileExtensions: ['.astro'],
				parser: tsParser,
			},
		},
	},
	prettier,
];
