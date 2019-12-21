import useMergeableState from './useMergeableState';

const useForm = initial => {
    const [data, setData] = useMergeableState(initial);

    const updateFormByName = e => {
        const { name, value, type, checked } = e.target;
        const parsedValue = type === 'checkbox' ? checked : value;
        setData({
            [name]: parsedValue,
        });
    };

    const resetDataToInit = () => setData(initial);

    return [data, updateFormByName, resetDataToInit, setData];
};

export default useForm;
