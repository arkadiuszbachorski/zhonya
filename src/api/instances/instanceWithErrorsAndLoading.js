import axios from 'axios';
import handleErrors from '../interceptors/handleErrors';
import handleLoading from '../interceptors/handleLoading';

export default (errorSetter, loadingSetter, formatMessage, userMessages = null) => {
    loadingSetter(true);
    const instance = axios.create();
    handleErrors(instance, errorSetter, formatMessage, userMessages);
    handleLoading(instance, loadingSetter);

    return instance;
};
