import { useIntl } from 'react-intl';
import { useMemo, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import handleErrorsMessages from './interceptors/handleErrorsMessages';
import handleLoading from './interceptors/handleLoading';
import useAuth from '../useAuth';
import addBearerToken from './modifiers/addBearerToken';
import addCancelToken from './modifiers/addCancelToken';
import getCancelToken from './getCancelToken';
import addLocaleHeader from './modifiers/addLocaleHeader';
import useLocale from '../useLocale';

const useInstanceWithToastsAndLoading = (userMessages = null) => {
    const { formatMessage } = useIntl();
    const [loading, setLoading] = useState(false);
    const auth = useAuth();
    const history = useHistory();
    const [cancel, cancelToken] = getCancelToken();
    const { locale } = useLocale();

    const instance = useMemo(() => {
        const inst = axios.create();
        handleErrorsMessages(inst, formatMessage, history, auth, userMessages);
        handleLoading(inst, setLoading);
        addBearerToken(inst, auth.data.token);
        addLocaleHeader(inst, locale);

        return inst;
    }, [userMessages, auth.data.token, cancelToken]);

    addCancelToken(instance, cancelToken);

    return [instance, loading, cancel];
};

export default useInstanceWithToastsAndLoading;
