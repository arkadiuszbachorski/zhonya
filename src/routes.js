export default {
    index: '/',
    signUp: '/sign-up',
    logIn: '/log-in',
    user: {
        settings: '/user/settings',
        data: '/user/data',
        delete: '/user/delete',
        logout: '/user/logout',
    },
    task: {
        index: '/task',
        create: '/task/create',
        edit: (taskId = ':taskId') => `/task/${taskId}/edit`,
        delete: (taskId = ':taskId') => `/task/${taskId}/delete`,
        tags: (taskId = ':taskId') => `/task/${taskId}/attach-tags`,
    },
    tag: {
        index: '/tag',
        create: '/tag/create',
        edit: (tagId = ':tagId') => `/tag/${tagId}/edit`,
        delete: (tagId = ':tagId') => `/tag/${tagId}/delete`,
        tasks: (tagId = ':tagId') => `/tag/${tagId}/attach-tasks`,
    },
    attempt: {
        index: (tagId = ':tagId') => `/tag/${tagId}/attempt`,
        create: (tagId = ':tagId') => `/tag/${tagId}/attempt/create`,
        edit: (tagId = ':tagId', attemptId = ':attemptId') => `/tag/${tagId}/attempt/${attemptId}/edit`,
        delete: (tagId = ':tagId', attemptId = ':attemptId') => `/tag/${tagId}/attempt/${attemptId}/delete`,
    },
};
