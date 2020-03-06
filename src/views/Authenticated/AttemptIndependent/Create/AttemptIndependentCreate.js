import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';

import { useHistory } from 'react-router';
import useForm from '../../../../hooks/useForm';
import api from '../../../../api';

import routes from '../../../../routes';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import AttemptForm from '../../Attempt/AttemptForm';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';

const AttemptIndependentCreate = () => {
    const { formatMessage } = useIntl();

    const history = useHistory();

    const [instance, loading, errors, cancel, setErrors] = useInstanceWithErrorsAndToastsAndLoading();

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
            history.push(routes.attempt.timer(form.task, attemptId));
        });
    };

    useCancellableEffect(
        () => {
            instance.get(api.attemptIndependent.create).then(response => {
                setTasks(response.data);
            });
        },
        [],
        cancel,
    );

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
