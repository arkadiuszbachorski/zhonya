import axios from 'axios';
import handleErrors from '../interceptors/handleErrors';
import handlePending from '../interceptors/handleLoading';

export default (errorSetter, loadingSetter) => {
    loadingSetter(true);
    const instance = axios.create();
    handleErrors(instance, errorSetter);
    handlePending(instance, loadingSetter);

    return instance;
};
