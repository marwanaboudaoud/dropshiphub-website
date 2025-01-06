import { ref, computed } from 'vue';


function importAll(r) {
    let files = {};
    r.keys().forEach(key => {
        const matched = key.match(/\.\/(.+)\/(.+)\.json$/);
        if (matched) {
            const [, locale, file] = matched;
            if (!files[locale]) files[locale] = {};
            files[locale][file] = r(key);
        }
    });
    return files;
}

const messages = importAll(require.context('../locales/', true, /\.json$/));

const savedLocale = localStorage.getItem('locale');
const currentLocale = ref(savedLocale || 'nl');

export const i18n = {
    locale: computed(() => currentLocale.value),
    t: (key) => {
        const localeMessages = messages[currentLocale.value] || {};
        return key.split('.').reduce((obj, k) => obj && obj[k], localeMessages) || key;
    },
    changeLanguage(locale) {
        if (messages[locale]) {
            currentLocale.value = locale;
            localStorage.setItem('locale', locale);
        }
    }
};
