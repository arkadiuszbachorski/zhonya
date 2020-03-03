import { useIntl } from 'react-intl';
import { useMemo, useState } from 'react';
import axios from 'axios';
import handleErrorsMessages from './interceptors/handleErrorsMessages';
import handleLoading from './interceptors/handleLoading';
import useAuth from '../useAuth';
import addBearerToken from './modifiers/addBearerToken';
import addCancelToken from './modifiers/addCancelToken';
import generateCancelToken from './modifiers/generateCancelToken';
import useRedirectDetector from '../useRedirectDetector';

const [cancel, cancelToken] = generateCancelToken();

const useInstanceWithToastsAndLoading = (userMessages = null) => {
    const { formatMessage } = useIntl();
    const [loading, setLoading] = useState(false);
    const [auth] = useAuth();
    const isRedirecting = useRedirectDetector();

    const instance = useMemo(() => {
        const inst = axios.create();
        handleErrorsMessages(inst, formatMessage, userMessages);
        handleLoading(inst, setLoading, isRedirecting);
        addBearerToken(inst, auth.token);
        addCancelToken(inst, cancelToken);

        return inst;
    }, [formatMessage, userMessages, auth.token, isRedirecting]);

    return [instance, loading, cancel];
};

export default useInstanceWithToastsAndLoading;
