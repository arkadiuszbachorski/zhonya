import instanceWithErrorsAndLoading from './instances/instanceWithErrorsAndLoading';

const defaultUrl = 'http://localhost:8000';

export const apiLogIn = (data, errorsSetter, loadingSetter) => {
    const instance = instanceWithErrorsAndLoading(errorsSetter, loadingSetter);
    return instance.post(`${defaultUrl}/api/auth/login`, data);
};

export const apiSignUp = (data, errorsSetter, loadingSetter) => {
    const instance = instanceWithErrorsAndLoading(errorsSetter, loadingSetter);
    return instance.post(`${defaultUrl}/api/auth/register`, data);
};
