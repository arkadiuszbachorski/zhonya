import { faCog, faPen, faSignOutAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import routes from '../../../routes';

const sideMenuItems = [
    {
        to: routes.userSettings,
        messageId: 'action.settings',
        icon: faCog,
    },
    {
        to: routes.userData,
        messageId: 'action.dataEdit',
        icon: faPen,
    },
    {
        to: routes.userDelete,
        messageId: 'action.delete',
        icon: faTrash,
    },
    {
        to: routes.userLogout,
        messageId: 'action.logout',
        icon: faSignOutAlt,
    },
];

export default sideMenuItems;
