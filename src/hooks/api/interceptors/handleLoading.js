export default (instance, loadingSetter) => {
    instance.interceptors.request.use(
        config => {
            loadingSetter(true);
            return config;
        },
        error => {
            loadingSetter(false);
            return Promise.reject(error);
        },
    );
    instance.interceptors.response.use(
        response => {
            loadingSetter(false);
            return response;
        },
        error => {
            loadingSetter(false);
            return Promise.reject(error);
        },
    );
};
