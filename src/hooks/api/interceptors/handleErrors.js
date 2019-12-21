export default (instance, errorsSetter) => {
    instance.interceptors.response.use(
        response => {
            errorsSetter({});
            return response;
        },
        error => {
            if (error.response) {
                const { status } = error.response;
                if (status === 422) {
                    errorsSetter(error.response.data.errors);
                }
            }
            return Promise.reject(error);
        },
    );
};
