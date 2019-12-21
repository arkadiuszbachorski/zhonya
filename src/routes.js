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
        edit: (id = ':id') => `/task/${id}/edit`,
        delete: (id = ':id') => `/task/${id}/delete`,
    },
    tag: {
        index: '/tag',
        create: '/tag/create',
        edit: (id = ':id') => `/tag/${id}/edit`,
        delete: (id = ':id') => `/tag/${id}/delete`,
    },
};
