import useStore, { storeKeys } from './useStore';
import useStateWithLocalStorage from './useStateWithLocalStorage';

export const availableTimePreferences = ['short', 'medium', 'long'];

export const useTimePreferenceProvider = () => {
    const [timePreference, setTimePreference] = useStateWithLocalStorage(storeKeys.useTimePreference, 'long');

    const setAndCheckTimePreference = preference => {
        if (!availableTimePreferences.includes(preference)) {
            throw new Error(`Time preference has to be one of following: ${availableTimePreferences.join(', ')}.`);
        }

        setTimePreference(preference);
    };

    return [timePreference, setAndCheckTimePreference];
};

const useTimePreference = () => useStore(storeKeys.useTimePreference);

export default useTimePreference;
