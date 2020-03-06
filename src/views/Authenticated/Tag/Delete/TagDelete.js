import React from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import api from '../../../../api';

import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import TagPanelTemplate from '../TagPanelTemplate';

import routes from '../../../../routes';

const TagDelete = () => {
    const { tagId } = useParams();

    const history = useHistory();

    const [instance, loading] = useInstanceWithToastsAndLoading({
        redirectPath: routes.tag.index,
    });

    const { formatMessage } = useIntl();

    const handleSubmit = () => {
        instance.delete(api.tag.delete(tagId)).then(() => {
            toast.success(formatMessage({ id: 'toast.success.tag.delete' }));
            history.push(routes.tag.index);
        });
    };

    return (
        <TagPanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <FormWithCard
                    onSubmit={handleSubmit}
                    loading={loading}
                    variant="delete"
                    titleId="tag.delete.title"
                    paragraphIds={['actionCannotBeUndone']}
                />
            </Container>
        </TagPanelTemplate>
    );
};

export default TagDelete;
