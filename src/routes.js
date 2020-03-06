export default {
    index: '/',
    signUp: '/sign-up',
    logIn: '/log-in',

    user: {
        dashboard: '/user/dashboard',
        settings: '/user/settings',
        data: '/user/data',
        logout: '/user/logout',
        sendDeleteEmail: '/user/delete',
        delete: (token = ':token') => `/user/delete/${token}`,
        sendVerificationEmail: '/user/verify',
        verify: (token = ':token') => `/user/verify/${token}`,
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
        index: (taskId = ':taskId') => `/task/${taskId}/attempt`,
        create: (taskId = ':taskId') => `/task/${taskId}/attempt/create`,
        edit: (taskId = ':taskId', attemptId = ':attemptId') => `/task/${taskId}/attempt/${attemptId}/edit`,
        delete: (taskId = ':taskId', attemptId = ':attemptId') => `/task/${taskId}/attempt/${attemptId}/delete`,
        timer: (taskId = ':taskId', attemptId = ':attemptId') => `/task/${taskId}/attempt/${attemptId}/timer`,
    },
    attemptIndependent: {
        index: `/attempt`,
        create: `/attempt/create`,
    },
};
