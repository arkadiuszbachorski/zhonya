import instanceWithErrorsAndLoading from './instances/instanceWithErrorsAndLoading';

const defaultUrl = 'http://localhost:8000/api';

export const apiLogIn = (data, errorsSetter, loadingSetter, formatMessage) => {
    const instance = instanceWithErrorsAndLoading(errorsSetter, loadingSetter, formatMessage);
    return instance.post(`${defaultUrl}/auth/login`, data);
};

export const apiSignUp = (data, errorsSetter, loadingSetter, formatMessage) => {
    const instance = instanceWithErrorsAndLoading(errorsSetter, loadingSetter, formatMessage);
    return instance.post(`${defaultUrl}/auth/register`, data);
};

export const apiUserDelete = (loadingSetter, formatMessage) => {
    const instance = instanceWithErrorsAndLoading(() => undefined, loadingSetter, formatMessage);
    return instance.delete(`${defaultUrl}/user`);
};

export const apiUserChangePassword = (data, errorsSetter, loadingSetter, formatMessage) => {
    const instance = instanceWithErrorsAndLoading(errorsSetter, loadingSetter, formatMessage);
    return instance.put(`${defaultUrl}/user/password`, data);
};

export const apiUserChangeEmail = (data, errorsSetter, loadingSetter, formatMessage) => {
    const instance = instanceWithErrorsAndLoading(errorsSetter, loadingSetter, formatMessage);
    return instance.put(`${defaultUrl}/user/email`, data);
};
