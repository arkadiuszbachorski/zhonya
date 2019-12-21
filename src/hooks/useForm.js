import useMergeableState from './useMergeableState';

const useForm = initial => {
    const [data, setData] = useMergeableState(initial);

    const updateFormByName = e => {
        const { name, value } = e.target;
        setData({
            [name]: value,
        });
    };

    const resetDataToInit = () => setData(initial);

    return [data, updateFormByName, resetDataToInit, setData];
};

export default useForm;
