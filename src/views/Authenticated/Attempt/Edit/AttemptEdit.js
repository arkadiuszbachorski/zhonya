import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useForm from '../../../../hooks/useForm';
import api from '../../../../api';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import AttemptForm from '../AttemptForm';
import AttemptPanelTemplate from '../AttemptPanelTemplate';
import nullToEmptyString from '../../../../utils/nullToEmptyString';
import pick from '../../../../utils/pick';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';

const AttemptEdit = () => {
    useAuthenticatedOnly();

    const { taskId, attemptId } = useParams();

    const { formatMessage } = useIntl();

    const [instance, loading, errors, cancel] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange, , setForm] = useForm({
        description: '',
    });

    const submit = () => {
        instance.put(api.attempt.update(taskId, attemptId), form).then(() => {
            toast.success(formatMessage({ id: 'toast.success.attempt.update' }));
        });
    };

    useCancellableEffect(
        () => {
            instance.get(api.attempt.edit(taskId, attemptId)).then(response => {
                const { data: attempt } = response;
                setForm(nullToEmptyString(pick(attempt, ['description'])));
            });
        },
        [taskId, attemptId, instance],
        cancel,
    );

    return (
        <AttemptPanelTemplate>
            <AttemptForm
                variant="edit"
                handleChange={handleChange}
                errors={errors}
                loading={loading}
                submit={submit}
                form={form}
            />
        </AttemptPanelTemplate>
    );
};

export default AttemptEdit;
