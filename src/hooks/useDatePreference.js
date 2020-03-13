import useStore, { storeKeys } from './useStore';
import useStateWithLocalStorage from './useStateWithLocalStorage';

export const availableDatePreferences = ['relative', 'short', 'long'];

export const useDatePreferenceProvider = () => {
    const [datePreference, setDatePreference] = useStateWithLocalStorage(storeKeys.useDatePreference, 'relative');

    const setAndCheckTimePreference = preference => {
        if (!availableDatePreferences.includes(preference)) {
            throw new Error(`Date preference has to be one of following: ${availableDatePreferences.join(', ')}.`);
        }

        setDatePreference(preference);
    };

    return { datePreference, setDatePreference: setAndCheckTimePreference };
};

const useDatePreference = () => useStore(storeKeys.useDatePreference);

export default useDatePreference;
