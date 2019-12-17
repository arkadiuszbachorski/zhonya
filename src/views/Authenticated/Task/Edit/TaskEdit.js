import React, { useEffect } from 'react';
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

const TaskEdit = () => {
    useAuthenticatedOnly();

    const { id } = useParams();

    const { formatMessage } = useIntl();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange, , setForm] = useForm({
        name: '',
        description: '',
    });

    const [, setName] = useModelTitle('task', id);

    useEffect(() => {
        instance.get(api.task.edit(id)).then(response => {
            const { task } = response.data;
            setForm(nullToEmptyString(pick(task, ['name', 'description'])));
            setName(id, task.name);
        });
    }, [id, instance]);

    const submit = () => {
        instance.put(api.task.update(id), form).then(() => {
            toast.success(formatMessage({ id: 'toast.success.task.update' }));
            setName(id, form.name);
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
