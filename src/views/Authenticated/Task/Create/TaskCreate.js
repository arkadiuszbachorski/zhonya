import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';

import useForm from '../../../../hooks/useForm';
import api from '../../../../api';

import routes from '../../../../routes';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import TaskForm from '../TaskForm';

const TaskCreate = () => {
    const { formatMessage } = useIntl();

    const history = useHistory();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange] = useForm({
        name: '',
        description: '',
    });

    const submit = () => {
        instance.post(api.task.store, form).then(response => {
            const taskId = response.data;
            toast.success(formatMessage({ id: 'toast.success.task.create' }));
            history.push(routes.attempt.index(taskId));
        });
    };

    return (
        <PanelTemplate>
            <TaskForm
                variant="create"
                handleChange={handleChange}
                errors={errors}
                loading={loading}
                submit={submit}
                form={form}
            />
        </PanelTemplate>
    );
};

export default TaskCreate;
