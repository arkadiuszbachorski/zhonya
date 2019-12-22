import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useForm from '../../../../hooks/useForm';
import api from '../../../../api';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import TagForm from '../TagForm';
import pick from '../../../../utils/pick';
import TagPanelTemplate from '../TagPanelTemplate';
import nullToEmptyString from '../../../../utils/nullToEmptyString';
import useModelTitle from '../../../../hooks/useModelTitle';

const TagEdit = () => {
    useAuthenticatedOnly();

    const { id } = useParams();

    const { formatMessage } = useIntl();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange, , setForm] = useForm({
        name: '',
        description: '',
        color: '',
    });

    const [, setName] = useModelTitle('tag', id);

    useEffect(() => {
        instance.get(api.tag.edit(id)).then(response => {
            const { data: tag } = response;
            setForm(nullToEmptyString(pick(tag, ['name', 'description', 'color'])));
            setName(id, tag.name);
        });
    }, [id, instance]);

    const submit = () => {
        instance.put(api.tag.update(id), form).then(() => {
            toast.success(formatMessage({ id: 'toast.success.tag.update' }));
            setName(id, form.name);
        });
    };

    return (
        <TagPanelTemplate>
            <TagForm
                variant="edit"
                handleChange={handleChange}
                errors={errors}
                loading={loading}
                submit={submit}
                form={form}
            />
        </TagPanelTemplate>
    );
};

export default TagEdit;
