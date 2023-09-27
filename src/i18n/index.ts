export const languages = {
    ca: 'Català',
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'ca';

export const translations = {
    ca: {
        hello: 'Hola CA'
    },
    en: {
        hello: 'Hello'
    },
    es:{
        hello: 'Hola ES'
    }
}

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in translations) return lang as keyof typeof translations;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
    return function t(key: keyof typeof translations[typeof defaultLang]) {
        return translations[lang][key] || translations[defaultLang][key];
    }
}