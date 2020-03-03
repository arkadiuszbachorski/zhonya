import axios from 'axios';
import { useMemo } from 'react';

export const cancelMessage = 'CANCELLED API CALL';

const useCancelToken = () => {
    return useMemo(() => {
        const source = axios.CancelToken.source();

        const cancel = () => {
            source.cancel(cancelMessage);
        };
        const cancelToken = source.token;

        return [cancel, cancelToken];
    }, []);
};

export default useCancelToken;
