import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';

import useForm from '../../../../hooks/useForm';
import api from '../../../../api';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import AttemptForm from '../AttemptForm';
import AttemptPanelTemplate from '../AttemptPanelTemplate';
import nullToEmptyString from '../../../../utils/nullToEmptyString';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';
import routes from '../../../../routes';
import secondsToTime from '../../../../utils/secondsToTime';
import timeToSeconds from '../../../../utils/timeToSeconds';

const AttemptEdit = () => {
    const { taskId, attemptId } = useParams();

    const { formatMessage } = useIntl();

    const [instance, loading, errors, cancel] = useInstanceWithErrorsAndToastsAndLoading({
        redirectPath: routes.attempt.index(taskId),
    });

    const [form, handleChange, , setForm] = useForm({
        description: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        changeTime: false,
    });

    const submit = () => {
        const data = {
            description: form.description,
        };
        if (form.changeTime) {
            data.saved_relative_time = timeToSeconds(form.days, form.hours, form.minutes, form.seconds);
        }
        instance.put(api.attempt.update(taskId, attemptId), data).then(() => {
            toast.success(formatMessage({ id: 'toast.success.attempt.update' }));
        });
    };

    useCancellableEffect(
        () => {
            instance.get(api.attempt.edit(taskId, attemptId)).then(response => {
                const { data: attempt } = response;
                setForm(
                    nullToEmptyString({
                        description: attempt.description,
                        ...secondsToTime(attempt.relative_time, false),
                    }),
                );
            });
        },
        [taskId, attemptId],
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
