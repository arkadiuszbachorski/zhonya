import { getUserLocales } from 'get-user-locale';
import useStore, { storeKeys } from './useStore';
import localeObject, { defaultLocale } from '../locale';
import useStateWithLocalStorage from './useStateWithLocalStorage';

const availableLocale = locales => {
    let locale = defaultLocale;
    const availableLocales = Object.keys(localeObject);
    for (let i = 0; i < locales.length; i += 1) {
        const item = locales[i];
        if (availableLocales.includes(item)) {
            locale = item;
            break;
        }
    }
    return locale;
};

export const useLocaleProvider = () => {
    const [locale, setLocale] = useStateWithLocalStorage(storeKeys.useLocale, availableLocale(getUserLocales()));

    const checkIfAvailableAndSetLocale = value => {
        setLocale(availableLocale([value]));
    };

    return {
        locale,
        setLocale: checkIfAvailableAndSetLocale,
    };
};

const useLocale = () => useStore(storeKeys.useLocale);

export default useLocale;
