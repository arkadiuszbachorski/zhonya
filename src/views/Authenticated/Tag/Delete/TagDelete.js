import React from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import api from '../../../../api';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import TagPanelTemplate from '../TagPanelTemplate';
import useRedirect from '../../../../hooks/useRedirect';
import routes from '../../../../routes';

const TagDelete = () => {
    useAuthenticatedOnly();

    const { id } = useParams();

    const redirectTo = useRedirect();

    const [instance, loading] = useInstanceWithToastsAndLoading();

    const { formatMessage } = useIntl();

    const handleSubmit = () => {
        instance.delete(api.tag.delete(id)).then(() => {
            toast.success(formatMessage({ id: 'toast.success.tag.delete' }));
            redirectTo(routes.tag.index);
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
