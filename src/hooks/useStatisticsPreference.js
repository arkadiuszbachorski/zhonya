import useStore, { storeKeys } from './useStore';
import useStateWithLocalStorage from './useStateWithLocalStorage';

export const useStatisticsPreferenceProvider = () => {
    const [statisticsPreference, setStatisticsPreference] = useStateWithLocalStorage(
        storeKeys.useStatisticsPreference,
        {
            descriptions: true,
            chart: true,
            showAverageLine: true,
            full: true,
            cutMeaninglessData: true,
            showSeconds: false,
        },
    );

    const setAndMergePreference = newState => {
        /*
         * TODO: Handle case when useStateWithLocalStorage gets function to setState
         * */
        setStatisticsPreference({
            ...statisticsPreference,
            ...newState,
        });
    };

    return { statisticsPreference, setStatisticsPreference: setAndMergePreference };
};

const useStatisticsPreference = () => useStore(storeKeys.useStatisticsPreference);

export default useStatisticsPreference;
