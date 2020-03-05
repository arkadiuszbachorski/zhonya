import PropTypes from 'prop-types';
import { faCheckSquare, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import routes from '../../../routes';
import PanelTemplate from '../../../components/PanelTemplate/PanelTemplate';
import useModelTitle from '../../../hooks/useModelTitle';
import api from '../../../api';

const generateSideMenuItems = id => [
    {
        to: routes.tag.tasks(id),
        messageId: 'model.task.plural',
        icon: faCheckSquare,
    },
    {
        to: routes.tag.edit(id),
        messageId: 'action.edit',
        icon: faPen,
    },
    {
        to: routes.tag.delete(id),
        messageId: 'action.delete',
        icon: faTrash,
    },
];

const TagPanelTemplate = ({ children }) => {
    const { tagId } = useParams();

    const [name] = useModelTitle('tag', tagId, api.tag.name(tagId));

    const sideMenuItems = useMemo(() => {
        return generateSideMenuItems(tagId);
    }, [tagId]);

    return (
        <PanelTemplate
            title={name}
            secondaryTitleId="model.tag.singular"
            titleId={name ? null : 'model.tag.singular'}
            sideMenuItems={sideMenuItems}
        >
            {children}
        </PanelTemplate>
    );
};

TagPanelTemplate.propTypes = {
    children: PropTypes.node,
};

TagPanelTemplate.defaultProps = {
    children: null,
};

export default TagPanelTemplate;
