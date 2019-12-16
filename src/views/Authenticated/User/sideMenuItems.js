import { faCog, faPen, faSignOutAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import routes from '../../../routes';

const sideMenuItems = [
    {
        to: routes.user.settings,
        messageId: 'action.settings',
        icon: faCog,
    },
    {
        to: routes.user.data,
        messageId: 'action.dataEdit',
        icon: faPen,
    },
    {
        to: routes.user.delete,
        messageId: 'action.delete',
        icon: faTrash,
    },
    {
        to: routes.user.logout,
        messageId: 'action.logout',
        icon: faSignOutAlt,
    },
];

export default sideMenuItems;
