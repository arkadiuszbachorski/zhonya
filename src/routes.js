export default {
    index: '/',
    signUp: '/sign-up',
    logIn: '/log-in',
    userSettings: '/user/settings',
    userData: '/user/data',
    userDelete: '/user/delete',
    userLogout: '/user/logout',
    taskIndex: '/task',
    taskCreate: '/task/create',
    tagIndex: '/tag',
    tagCreate: '/tag/create',
    tagEdit: (id = ':id') => `/tag/${id}`,
};
