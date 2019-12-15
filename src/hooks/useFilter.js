import { useDebounce } from 'use-debounce';
import useMergeableState from './useMergeableState';

const useFilter = (initial, delay = 300) => {
    const [data, setData] = useMergeableState(initial);
    const [debouncedData] = useDebounce(data, delay);

    const updateFormByName = e => {
        const { name, value } = e.target;
        setData({
            [name]: value,
        });
    };

    const resetDataToInit = () => setData(initial);

    return [data, debouncedData, updateFormByName, resetDataToInit];
};

export default useFilter;
