import React from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import api from '../../../../api';

import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';

import routes from '../../../../routes';
import AttemptPanelTemplate from '../AttemptPanelTemplate';

const AttemptDelete = () => {
    const { taskId, attemptId } = useParams();

    const history = useHistory();

    const [instance, loading] = useInstanceWithToastsAndLoading();

    const { formatMessage } = useIntl();

    const handleSubmit = () => {
        instance.delete(api.attempt.delete(taskId, attemptId)).then(() => {
            toast.success(formatMessage({ id: 'toast.success.attempt.delete' }));
            history.push(routes.attempt.index(taskId));
        });
    };

    return (
        <AttemptPanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <FormWithCard
                    onSubmit={handleSubmit}
                    loading={loading}
                    variant="delete"
                    titleId="attempt.delete.title"
                    paragraphIds={['actionCannotBeUndone']}
                />
            </Container>
        </AttemptPanelTemplate>
    );
};

export default AttemptDelete;
