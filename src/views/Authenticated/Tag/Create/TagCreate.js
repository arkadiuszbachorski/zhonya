import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';

import useForm from '../../../../hooks/useForm';
import api from '../../../../api';

import routes from '../../../../routes';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import TagForm from '../TagForm';

const TagCreate = () => {
    const { formatMessage } = useIntl();

    const history = useHistory();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange] = useForm({
        name: '',
        description: '',
        color: '',
    });

    const submit = () => {
        instance.post(api.tag.store, form).then(response => {
            const id = response.data;
            toast.success(formatMessage({ id: 'toast.success.tag.create' }));
            history.push(routes.tag.tasks(id));
        });
    };

    return (
        <PanelTemplate>
            <TagForm
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

export default TagCreate;
