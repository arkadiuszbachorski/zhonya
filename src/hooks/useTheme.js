import useStore, { storeKeys } from './useStore';
import useStateWithLocalStorage from './useStateWithLocalStorage';
import { useEffect } from 'react';

export const useThemeProvider = () => {
    const [theme, setTheme] = useStateWithLocalStorage(storeKeys.useTheme, 'light');

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return [theme, setTheme];
};

const useTheme = () => useStore(storeKeys.useTheme);

export default useTheme;
