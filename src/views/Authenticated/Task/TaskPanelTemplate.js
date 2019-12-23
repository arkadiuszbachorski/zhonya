import PropTypes from 'prop-types';
import { faPen, faTag, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import routes from '../../../routes';
import PanelTemplate from '../../../components/PanelTemplate/PanelTemplate';
import useModelTitle from '../../../hooks/useModelTitle';
import api from '../../../api';

const generateSideMenuItems = id => [
    {
        to: routes.task.tags(id),
        messageId: 'model.tag.plural',
        icon: faTag,
    },
    {
        to: routes.task.edit(id),
        messageId: 'action.edit',
        icon: faPen,
    },
    {
        to: routes.task.delete(id),
        messageId: 'action.delete',
        icon: faTrash,
    },
];

const TaskPanelTemplate = ({ children }) => {
    const { id } = useParams();

    const [name] = useModelTitle('task', id, api.task.name(id));

    const sideMenuItems = useMemo(() => {
        return generateSideMenuItems(id);
    }, [id]);

    return (
        <PanelTemplate
            title={name}
            secondaryTitleId="model.task.singular"
            titleId={name ? null : 'model.task.singular'}
            sideMenuItems={sideMenuItems}
        >
            {children}
        </PanelTemplate>
    );
};

TaskPanelTemplate.propTypes = {
    children: PropTypes.node,
};

TaskPanelTemplate.defaultProps = {
    children: null,
};

export default TaskPanelTemplate;
