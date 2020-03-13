import { useEffect } from 'react';
import useStore, { storeKeys } from './useStore';
import useStateWithLocalStorage from './useStateWithLocalStorage';

const prefersDark = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const useThemeProvider = () => {
    const [theme, setTheme] = useStateWithLocalStorage(storeKeys.useTheme, prefersDark() ? 'dark' : 'light');

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return { theme, setTheme };
};

const useTheme = () => useStore(storeKeys.useTheme);

export default useTheme;
