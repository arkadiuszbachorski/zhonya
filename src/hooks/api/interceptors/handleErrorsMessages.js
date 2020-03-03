import { toast } from 'react-toastify';
import { cancelMessage } from '../useCancelToken';

export default (instance, formatMessage, userMessages = null) => {
    const defualtMessages = {
        validation: () => formatMessage({ id: 'toast.error.validation' }),
        notFound: () => formatMessage({ id: 'toast.error.notFound' }),
        unauthorized: () => formatMessage({ id: 'toast.error.unauthorized' }),
        forbidden: () => formatMessage({ id: 'toast.error.forbidden' }),
        code: () => formatMessage({ id: 'toast.error.code' }),
        server: () => formatMessage({ id: 'toast.error.server' }),
        client: () => formatMessage({ id: 'toast.error.client' }),
    };
    const messages = userMessages ? { ...defualtMessages, ...userMessages } : defualtMessages;
    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response) {
                const { status } = error.response;
                if (status === 422) {
                    toast.error(messages.validation());
                } else if (status === 404) {
                    toast.error(messages.notFound());
                } else if (status === 401) {
                    toast.error(messages.unauthorized());
                } else if (status === 403) {
                    toast.error(messages.forbidden());
                } else if (status >= 400 && status < 500) {
                    toast.error(messages.client());
                } else if (status >= 500 && status < 600) {
                    toast.error(messages.server());
                }
            } else if (error.message !== cancelMessage) {
                toast.error(messages.code());
            }

            return Promise.reject(error);
        },
    );
};
