import { getUserLocales } from 'get-user-locale';
import useStore, { storeKeys } from './useStore';
import localeObject, { defaultLocale } from '../locale';
import useStateWithLocalStorage from './useStateWithLocalStorage';

const checkIfLocaleIsAvailable = locale => {
    const availableLocales = Object.keys(localeObject);
    return availableLocales.includes(locale);
};

const availableLocale = locales => {
    let locale = defaultLocale;
    locales.forEach(item => {
        if (checkIfLocaleIsAvailable(item)) {
            locale = item;
        }
    });

    return locale;
};

export const useLocaleProvider = () => {
    const [locale, setLocale] = useStateWithLocalStorage(storeKeys.useLocale, availableLocale(getUserLocales()));

    const checkIfAvailableAndSetLocale = value => {
        setLocale(availableLocale([value]));
    };

    return [locale, checkIfAvailableAndSetLocale];
};

const useLocale = () => useStore(storeKeys.useLocale);

export default useLocale;
