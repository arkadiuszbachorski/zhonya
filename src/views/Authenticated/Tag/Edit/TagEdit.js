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

    const { tagId } = useParams();

    const { formatMessage } = useIntl();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange, , setForm] = useForm({
        name: '',
        description: '',
        color: '',
    });

    const [, setName] = useModelTitle('tag', tagId);

    useEffect(() => {
        instance.get(api.tag.edit(tagId)).then(response => {
            const { data: tag } = response;
            setForm(nullToEmptyString(pick(tag, ['name', 'description', 'color'])));
        });
    }, [tagId, instance]);

    const submit = () => {
        instance.put(api.tag.update(tagId), form).then(() => {
            toast.success(formatMessage({ id: 'toast.success.tag.update' }));
            setName(tagId, form.name);
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
