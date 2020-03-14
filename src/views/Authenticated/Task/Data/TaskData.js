import React from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import api from '../../../../api';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import TaskPanelTemplate from '../TaskPanelTemplate';

import routes from '../../../../routes';

const TaskData = () => {
    /*
    const { taskId } = useParams();

    const history = useHistory();

    const [instance, loading] = useInstanceWithToastsAndLoading({
        redirectPath: routes.task.index,
    });

    const { formatMessage } = useIntl();

    const handleSubmit = () => {
        instance.delete(api.task.delete(taskId)).then(() => {
            toast.success(formatMessage({ id: 'toast.success.task.delete' }));
            history.push(routes.task.index);
        });
    };
*/

    return <TaskPanelTemplate></TaskPanelTemplate>;
};

export default TaskData;
