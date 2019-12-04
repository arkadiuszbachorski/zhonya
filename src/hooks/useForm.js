import { useEffect, useState } from 'react';
import useMergeableState from './useMergeableState';

export default initial => {
    const [data, setData] = useMergeableState(initial);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const updateFormByName = e => {
        const { name, value } = e.target;
        setData({
            [name]: value,
        });
    };

    const form = {
        data,
        errors,
        loading,
    };

    return [form, updateFormByName, setErrors, setLoading];
};
