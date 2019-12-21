import { useDebounce } from 'use-debounce';
import useForm from './useForm';

const useDebouncedForm = (initial, delay = 300) => {
    const [data, updateFormByName, resetDataToInit] = useForm(initial);
    const [debouncedData] = useDebounce(data, delay);

    return [debouncedData, data, updateFormByName, resetDataToInit];
};

export default useDebouncedForm;
