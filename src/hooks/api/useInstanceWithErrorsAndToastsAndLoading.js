import { useIntl } from 'react-intl';
import { useMemo, useState } from 'react';
import axios from 'axios';
import handleErrorsMessages from './interceptors/handleErrorsMessages';
import handleLoading from './interceptors/handleLoading';
import handleErrors from './interceptors/handleErrors';
import useAuth from '../useAuth';
import addBearerToken from './modifiers/addBearerToken';
import addCancelToken from './modifiers/addCancelToken';
import generateCancelToken from './modifiers/generateCancelToken';

const [cancel, cancelToken] = generateCancelToken();

const useInstanceWithErrorsAndToastsAndLoading = (userMessages = null) => {
    const { formatMessage } = useIntl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [auth] = useAuth();


    const instance = useMemo(() => {
        const inst = axios.create();
        handleErrorsMessages(inst, formatMessage, userMessages);
        handleLoading(inst, setLoading);
        handleErrors(inst, setErrors);
        addBearerToken(inst, auth.token);
        addCancelToken(inst, cancelToken);

        return inst;
    }, [formatMessage, userMessages, auth.token]);

    return [instance, loading, errors, setErrors, setLoading, cancel];
};

export default useInstanceWithErrorsAndToastsAndLoading;
