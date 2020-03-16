import React, { useContext } from 'react';

export const StoreContext = React.createContext(null);

const useStore = key => {
    const store = useContext(StoreContext);

    return store[key];
};

export default useStore;

export const storeKeys = {
    useAuth: 'auth',
    useLocale: 'locale',
    useTheme: 'theme',
    useModelTitle: 'modelTitle',
    useTimePreference: 'timePreference',
    useDatePreference: 'datePreference',
    useStatisticsPreference: 'statisticsPreference',
};
