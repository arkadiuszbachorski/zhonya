import { useState } from 'react';
import useMergeableState from './useMergeableState';

const useForm = initial => {
    const [data, setData] = useMergeableState(initial);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const updateFormByName = e => {
        const { name, value } = e.target;
        setData({
            [name]: value,
        });
    };

    const resetDataToInit = () => setData(initial);

    const form = {
        data,
        errors,
        loading,
    };

    return [form, updateFormByName, setErrors, setLoading, resetDataToInit];
};

export default useForm;
