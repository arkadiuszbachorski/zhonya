import { toast } from 'react-toastify';
import { cancelMessage } from '../useCancelToken';

const defualtMessages = {
    validation: 'toast.error.validation',
    notFound: 'toast.error.notFound',
    unauthorized: 'toast.error.unauthorized',
    forbidden: 'toast.error.forbidden',
    code: 'toast.error.code',
    server: 'toast.error.server',
    client: 'toast.error.client',
    redirectPath: null,
};

export default (instance, formatMessage, history, userMessages = null) => {
    const messages = userMessages ? { ...defualtMessages, ...userMessages } : defualtMessages;
    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            function handleMessage(message, redirect = false) {
                if (message === null) {
                    return;
                }
                if (typeof message === 'function') {
                    message(error);
                }

                toast.error(formatMessage({ id: message }));
                if (redirect && messages.redirectPath) {
                    history.push(messages.redirectPath);
                }
            }

            if (error.response) {
                const { status } = error.response;
                if (status === 422) {
                    handleMessage(messages.validation);
                } else if (status === 404) {
                    handleMessage(messages.notFound, true);
                } else if (status === 401) {
                    handleMessage(messages.unauthorized, true);
                } else if (status === 403) {
                    handleMessage(messages.forbidden);
                } else if (status >= 400 && status < 500) {
                    handleMessage(messages.client);
                } else if (status >= 500 && status < 600) {
                    handleMessage(messages.server);
                }
            } else if (error.message !== cancelMessage) {
                handleMessage(messages.code);
            }

            return Promise.reject(error);
        },
    );
};
