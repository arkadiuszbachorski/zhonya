const url = 'http://localhost:8000/api';

export default {
    user: {
        delete: `${url}/user`,
        changePassword: `${url}/user/password`,
        changeEmail: `${url}/user/email`,
    },
    auth: {
        logIn: `${url}/auth/login`,
        signIn: `${url}/auth/register`,
    },
    tag: {
        index: `${url}/tag`,
        store: `${url}/tag`,
        edit: id => `${url}/tag/${id}/edit`,
        update: id => `${url}/tag/${id}`,
    },
};
