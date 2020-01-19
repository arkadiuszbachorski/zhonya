import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useForm from '../../../../hooks/useForm';
import api from '../../../../api';
import useRedirect from '../../../../hooks/useRedirect';
import routes from '../../../../routes';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import TaskPanelTemplate from '../../Task/TaskPanelTemplate';
import ButtonBack from '../../../../components/buttons/ButtonBack/ButtonBack';
import AttemptForm from '../../Attempt/AttemptForm';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';

const AttemptIndependentCreate = () => {
    useAuthenticatedOnly();

    const { formatMessage } = useIntl();

    const redirectTo = useRedirect();

    const [instance, loading, errors, setErrors] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange] = useForm({
        description: '',
        task: '',
    });

    const [tasks, setTasks] = useState([]);

    const submit = () => {
        if (form.task === '') {
            setErrors({
                task: [formatMessage({ id: 'validation.error.attempt.noTask' })],
            });
            toast.error(formatMessage({ id: 'toast.error.validation' }));
            return;
        }
        instance.post(api.attempt.store(form.task), form).then(response => {
            const attemptId = response.data;
            toast.success(formatMessage({ id: 'toast.success.attempt.create' }));
            redirectTo(routes.attempt.timer(form.task, attemptId));
        });
    };

    useEffect(() => {
        instance.get(api.attemptIndependent.create).then(response => {
            setTasks(response.data);
        });
    }, []);

    return (
        <PanelTemplate>
            <AttemptForm
                variant="create"
                handleChange={handleChange}
                errors={errors}
                loading={loading}
                submit={submit}
                form={form}
                tasks={tasks}
                renderTasks
            />
        </PanelTemplate>
    );
};

export default AttemptIndependentCreate;
