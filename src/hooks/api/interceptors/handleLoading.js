import { cancelMessage } from '../getCancelToken';

export default (instance, loadingSetter) => {
    instance.interceptors.request.use(
        config => {
            if (!config.cancelToken.reason) {
                loadingSetter(true);
            }
            return config;
        },
        error => {
            if (error.message !== cancelMessage) {
                loadingSetter(false);
            }
            return Promise.reject(error);
        },
    );
    instance.interceptors.response.use(
        response => {
            loadingSetter(false);
            return response;
        },
        error => {
            if (error.message !== cancelMessage) {
                loadingSetter(false);
            }
            return Promise.reject(error);
        },
    );
};
