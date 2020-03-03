import PropTypes from 'prop-types';
import { faHourglass, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import routes from '../../../routes';
import PanelTemplate from '../../../components/PanelTemplate/PanelTemplate';
import useModelTitle from '../../../hooks/useModelTitle';
import api from '../../../api';
import ButtonBack from '../../../components/buttons/ButtonBack/ButtonBack';

const generateSideMenuItems = (taskId, attemptId) => [
    {
        to: routes.attempt.timer(taskId, attemptId),
        messageId: 'action.timer',
        icon: faHourglass,
    },
    {
        to: routes.attempt.edit(taskId, attemptId),
        messageId: 'action.edit',
        icon: faPen,
    },
    {
        to: routes.attempt.delete(taskId, attemptId),
        messageId: 'action.delete',
        icon: faTrash,
    },
];

const AttemptPanelTemplate = ({ children, actionButton }) => {
    const { taskId, attemptId } = useParams();

    const [name] = useModelTitle('attempt', attemptId, api.attempt.name(taskId, attemptId));

    const sideMenuItems = useMemo(() => {
        return generateSideMenuItems(taskId, attemptId);
    }, [taskId, attemptId]);

    return (
        <PanelTemplate
            title={name}
            secondaryTitleId="model.attempt.singular"
            titleId={name ? null : 'model.attempt.singular'}
            sideMenuItems={sideMenuItems}
            actionButton={actionButton || <ButtonBack link to={routes.attempt.index(taskId)} />}
        >
            {children}
        </PanelTemplate>
    );
};

AttemptPanelTemplate.propTypes = {
    children: PropTypes.node,
    actionButton: PropTypes.node,
};

AttemptPanelTemplate.defaultProps = {
    children: null,
    actionButton: null,
};

export default AttemptPanelTemplate;
