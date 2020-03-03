import axios from 'axios';

export const cancelMessage = 'CANCELLED API CALL';

const generateCancelToken = () => {
    const source = axios.CancelToken.source();
    const cancel = () => {
        source.cancel(cancelMessage);
    };
    const cancelToken = source.token;

    return [cancel, cancelToken];
};

export default generateCancelToken;
