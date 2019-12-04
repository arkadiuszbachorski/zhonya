import axios from 'axios';
import instanceWithErrorsAndLoading from './instances/instanceWithErrorsAndLoading';

const defaultUrl = 'http://localhost:8000';

export const apiTest = (data, errorsSetter, loadingSetter) => {
    const instance = instanceWithErrorsAndLoading(errorsSetter, loadingSetter);
    return instance.post(`${defaultUrl}/api/auth/test`, data);
};
