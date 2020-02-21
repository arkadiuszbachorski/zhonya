import PropTypes from 'prop-types';
import { faCog, faColumns, faPen, faSignOutAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import routes from '../../../routes';
import PanelTemplate from '../../../components/PanelTemplate/PanelTemplate';

const sideMenuItems = [
    {
        to: routes.user.dashboard,
        messageId: 'action.dashboard',
        icon: faColumns,
    },
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

const UserPanelTemplate = ({ children }) => (
    <PanelTemplate titleId="model.user" sideMenuItems={sideMenuItems}>
        {children}
    </PanelTemplate>
);

UserPanelTemplate.propTypes = {
    children: PropTypes.node,
};

UserPanelTemplate.defaultProps = {
    children: null,
};

export default UserPanelTemplate;
