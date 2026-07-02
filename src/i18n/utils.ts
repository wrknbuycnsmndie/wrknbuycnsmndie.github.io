import { ui, defaultLang } from './ui';

export type Locale = keyof typeof ui;

export const locales = Object.keys(ui) as Locale[];

export function getLocale(locale?: string): Locale {
	return locale && locale in ui ? (locale as Locale) : defaultLang;
}

export function useTranslations(lang: Locale) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}
