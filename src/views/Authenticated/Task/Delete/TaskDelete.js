import React from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import api from '../../../../api';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import TaskPanelTemplate from '../TaskPanelTemplate';
import useRedirect from '../../../../hooks/useRedirect';
import routes from '../../../../routes';

const TaskDelete = () => {
    useAuthenticatedOnly();

    const { taskId } = useParams();

    const { redirectTo } = useRedirect();

    const [instance, loading] = useInstanceWithToastsAndLoading();

    const { formatMessage } = useIntl();

    const handleSubmit = () => {
        instance.delete(api.task.delete(taskId)).then(() => {
            toast.success(formatMessage({ id: 'toast.success.task.delete' }));
            redirectTo(routes.task.index);
        });
    };

    return (
        <TaskPanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <FormWithCard
                    onSubmit={handleSubmit}
                    loading={loading}
                    variant="delete"
                    titleId="task.delete.title"
                    paragraphIds={['actionCannotBeUndone']}
                />
            </Container>
        </TaskPanelTemplate>
    );
};

export default TaskDelete;
