import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useHistory, useParams } from 'react-router';

import useForm from '../../../../hooks/useForm';
import api from '../../../../api';

import routes from '../../../../routes';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import TaskPanelTemplate from '../../Task/TaskPanelTemplate';
import AttemptForm from '../AttemptForm';
import ButtonBack from '../../../../components/buttons/ButtonBack/ButtonBack';

const AttemptCreate = () => {
    const { taskId } = useParams();

    const { formatMessage } = useIntl();

    const history = useHistory();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange] = useForm({
        description: '',
    });

    const submit = () => {
        instance.post(api.attempt.store(taskId), form).then(response => {
            const id = response.data;
            toast.success(formatMessage({ id: 'toast.success.attempt.create' }));
            history.push(routes.attempt.timer(taskId, id));
        });
    };

    return (
        <TaskPanelTemplate
            actionButton={
                <ButtonBack
                    link
                    to={routes.attempt.index(taskId)}
                    title={formatMessage({ id: 'action.attempt.backIndex' })}
                />
            }
        >
            <AttemptForm
                variant="create"
                handleChange={handleChange}
                errors={errors}
                loading={loading}
                submit={submit}
                form={form}
            />
        </TaskPanelTemplate>
    );
};

export default AttemptCreate;
