import { useIntl } from 'react-intl';
import { useMemo, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import handleErrorsMessages from './interceptors/handleErrorsMessages';
import handleLoading from './interceptors/handleLoading';
import handleErrors from './interceptors/handleErrors';
import useAuth from '../useAuth';
import addBearerToken from './modifiers/addBearerToken';
import addCancelToken from './modifiers/addCancelToken';
import useCancelToken from './useCancelToken';

const useInstanceWithErrorsAndToastsAndLoading = (userMessages = null) => {
    const { formatMessage } = useIntl();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const auth = useAuth();
    const [cancel, cancelToken] = useCancelToken();
    const history = useHistory();

    const instance = useMemo(() => {
        const inst = axios.create();
        handleErrorsMessages(inst, formatMessage, history, auth, userMessages);
        handleLoading(inst, setLoading);
        handleErrors(inst, setErrors);
        addBearerToken(inst, auth.data.token);
        addCancelToken(inst, cancelToken);

        return inst;
    }, [formatMessage, userMessages, auth.data.token, cancelToken]);

    return [instance, loading, errors, cancel, setErrors, setLoading];
};

export default useInstanceWithErrorsAndToastsAndLoading;
