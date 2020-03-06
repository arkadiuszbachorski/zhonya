import PropTypes from 'prop-types';
import { faCog, faColumns, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useHistory } from 'react-router';
import routes from '../../../routes';
import PanelTemplate from '../../../components/PanelTemplate/PanelTemplate';
import useAuth from '../../../hooks/useAuth';

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
];

const UserPanelTemplate = ({ children }) => {
    const auth = useAuth();
    const history = useHistory();
    const logOut = e => {
        e.preventDefault();
        auth.logOut();
        history.push(routes.logIn);
    };
    return (
        <PanelTemplate titleId="model.user" sideMenuItems={sideMenuItems} logOut={logOut}>
            {children}
        </PanelTemplate>
    );
};

UserPanelTemplate.propTypes = {
    children: PropTypes.node,
};

UserPanelTemplate.defaultProps = {
    children: null,
};

export default UserPanelTemplate;
