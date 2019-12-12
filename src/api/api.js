import instanceWithErrorsAndLoading from './instances/instanceWithErrorsAndLoading';

const defaultUrl = 'http://localhost:8000';

export const apiLogIn = (data, errorsSetter, loadingSetter, formatMessage, userMessages = null) => {
    const instance = instanceWithErrorsAndLoading(errorsSetter, loadingSetter, formatMessage, userMessages);
    return instance.post(`${defaultUrl}/api/auth/login`, data);
};

export const apiSignUp = (data, errorsSetter, loadingSetter, formatMessage, userMessages = null) => {
    const instance = instanceWithErrorsAndLoading(errorsSetter, loadingSetter, formatMessage, userMessages);
    return instance.post(`${defaultUrl}/api/auth/register`, data);
};
