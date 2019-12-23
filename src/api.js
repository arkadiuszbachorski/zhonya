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
        name: id => `${url}/tag/${id}/name`,
        tasks: id => `${url}/tag/${id}/attach-tasks`,
        update: id => `${url}/tag/${id}`,
        delete: id => `${url}/tag/${id}`,
    },
    task: {
        index: `${url}/task`,
        store: `${url}/task`,
        edit: id => `${url}/task/${id}/edit`,
        name: id => `${url}/task/${id}/name`,
        tags: id => `${url}/task/${id}/attach-tags`,
        update: id => `${url}/task/${id}`,
        delete: id => `${url}/task/${id}`,
    },
    tagTask: {
        attach: (tagId, taskId) => `${url}/tag/${tagId}/task/${taskId}/attach`,
        detach: (tagId, taskId) => `${url}/tag/${tagId}/task/${taskId}/detach`,
    },
    search: `${url}/search`,
};
