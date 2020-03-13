import { toast } from 'react-toastify';
import { cancelMessage } from '../getCancelToken';
import routes from '../../../routes';

const defaultSettings = {
    validation: 'toast.error.validation',
    notFound: 'toast.error.notFound',
    unauthorized: 'toast.error.unauthorized',
    forbidden: 'toast.error.forbidden',
    code: 'toast.error.code',
    server: 'toast.error.server',
    client: 'toast.error.client',
    redirectPath: null,
    unauthorizedPath: routes.signUp,
};

export default (instance, formatMessage, history, auth, userSettings = null) => {
    const settings = userSettings ? { ...defaultSettings, ...userSettings } : defaultSettings;
    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            function processSettings(message, redirectPath) {
                if (message === null) {
                    return;
                }
                if (typeof message === 'function') {
                    message(error);
                    return;
                }

                toast.error(formatMessage({ id: message }));
                if (redirectPath) {
                    if (error?.response?.status === 401) {
                        auth.logOut();
                    }
                    history.push(redirectPath);
                }
            }

            if (error.response) {
                const { status } = error.response;
                if (status === 422) {
                    processSettings(settings.validation);
                } else if (status === 404) {
                    processSettings(settings.notFound, settings.redirectPath);
                } else if (status === 401) {
                    processSettings(settings.unauthorized, settings.unauthorizedPath);
                } else if (status === 403) {
                    processSettings(settings.forbidden, settings.redirectPath);
                } else if (status >= 400 && status < 500) {
                    processSettings(settings.client);
                } else if (status >= 500 && status < 600) {
                    processSettings(settings.server);
                }
            } else if (error.message !== cancelMessage) {
                processSettings(settings.code);
            }

            return Promise.reject(error);
        },
    );
};
