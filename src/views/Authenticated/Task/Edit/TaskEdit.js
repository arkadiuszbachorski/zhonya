import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useForm from '../../../../hooks/useForm';
import api from '../../../../api';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import TaskForm from '../TaskForm';
import pick from '../../../../utils/pick';
import TaskPanelTemplate from '../TaskPanelTemplate';
import nullToEmptyString from '../../../../utils/nullToEmptyString';
import useModelTitle from '../../../../hooks/useModelTitle';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';

const TaskEdit = () => {
    useAuthenticatedOnly();

    const { taskId } = useParams();

    const { formatMessage } = useIntl();

    const [instance, loading, errors, cancel] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange, , setForm] = useForm({
        name: '',
        description: '',
    });

    const [, setName] = useModelTitle('task', taskId);

    useCancellableEffect(
        () => {
            instance.get(api.task.edit(taskId)).then(response => {
                const { data: task } = response;
                setForm(nullToEmptyString(pick(task, ['name', 'description'])));
                setName(taskId, task.name);
            });
        },
        [taskId],
        cancel,
    );

    const submit = () => {
        instance.put(api.task.update(taskId), form).then(() => {
            toast.success(formatMessage({ id: 'toast.success.task.update' }));
            setName(taskId, form.name);
        });
    };

    return (
        <TaskPanelTemplate>
            <TaskForm
                variant="edit"
                handleChange={handleChange}
                errors={errors}
                loading={loading}
                submit={submit}
                form={form}
            />
        </TaskPanelTemplate>
    );
};

export default TaskEdit;
