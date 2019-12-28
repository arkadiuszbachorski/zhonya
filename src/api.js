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
        edit: tagId => `${url}/tag/${tagId}/edit`,
        name: tagId => `${url}/tag/${tagId}/name`,
        tasks: tagId => `${url}/tag/${tagId}/attach-tasks`,
        update: tagId => `${url}/tag/${tagId}`,
        delete: tagId => `${url}/tag/${tagId}`,
    },
    task: {
        index: `${url}/task`,
        store: `${url}/task`,
        edit: taskId => `${url}/task/${taskId}/edit`,
        name: taskId => `${url}/task/${taskId}/name`,
        tags: taskId => `${url}/task/${taskId}/attach-tags`,
        update: taskId => `${url}/task/${taskId}`,
        delete: taskId => `${url}/task/${taskId}`,
    },
    tagTask: {
        attach: (tagId, taskId) => `${url}/tag/${tagId}/task/${taskId}/attach`,
        detach: (tagId, taskId) => `${url}/tag/${tagId}/task/${taskId}/detach`,
    },
    attempt: {
        index: taskId => `${url}/task/${taskId}/attempt`,
        store: taskId => `${url}/task/${taskId}/attempt`,
        edit: (taskId, attemptId) => `${url}/task/${taskId}/attempt/${attemptId}/edit`,
        name: (taskId, attemptId) => `${url}/task/${taskId}/attempt/${attemptId}/name`,
        update: (taskId, attemptId) => `${url}/task/${taskId}/attempt/${attemptId}`,
        delete: (taskId, attemptId) => `${url}/task/${taskId}/attempt/${attemptId}`,
    },
    search: `${url}/search`,
};
