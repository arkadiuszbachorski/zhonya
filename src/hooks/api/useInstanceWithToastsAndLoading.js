import { useIntl } from 'react-intl';
import { useMemo, useState } from 'react';
import axios from 'axios';
import handleErrorsMessages from './interceptors/handleErrorsMessages';
import handleLoading from './interceptors/handleLoading';
import useAuth from '../useAuth';

const useInstanceWithToastsAndLoading = (userMessages = null) => {
    const { formatMessage } = useIntl();
    const [loading, setLoading] = useState(false);
    const [auth] = useAuth();

    const instance = useMemo(() => {
        const inst = axios.create();
        handleErrorsMessages(inst, formatMessage, userMessages);
        handleLoading(inst, setLoading);
        inst.defaults.headers.common.Authorization = `Bearer ${auth.token}`;

        return inst;
    }, [formatMessage, userMessages, auth.token]);

    return [instance, loading];
};

export default useInstanceWithToastsAndLoading;
