export default (instance, loadingSetter) => {
    instance.interceptors.response.use(
        response => {
            loadingSetter(false);
            return response;
        },
        error => {
            loadingSetter(false);
            return error;
        },
    );
};
