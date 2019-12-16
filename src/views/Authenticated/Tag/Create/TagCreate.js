import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import Input from '../../../../components/forms/Input/Input';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import useForm from '../../../../hooks/useForm';
import api from '../../../../api';
import Container from '../../../../components/Container/Container';
import useRedirect from '../../../../hooks/useRedirect';
import routes from '../../../../routes';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';

const TagCreate = () => {
    useAuthenticatedOnly();

    const { formatMessage } = useIntl();

    const redirectTo = useRedirect();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange] = useForm({
        name: '',
        description: '',
        color: '',
    });

    const submit = () => {
        instance.post(api.tag.create, form).then(response => {
            const id = response.data;
            toast.success(formatMessage({ id: 'toast.success.tag.create' }));
            redirectTo(routes.tag.edit(id));
        });
    };

    return (
        <PanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <FormWithCard
                    onSubmit={submit}
                    loading={loading}
                    variant="create"
                    titleId="tag.create.title"
                    paragraphIds={['tag.create.text1', 'tag.create.text2']}
                >
                    <Input
                        labelId="input.name"
                        name="name"
                        value={form.name}
                        errors={errors.name}
                        onChange={handleChange}
                    />
                    <Input
                        labelId="input.description"
                        name="description"
                        value={form.description}
                        errors={errors.description}
                        onChange={handleChange}
                    />
                    <Input
                        labelId="input.color"
                        type="color"
                        name="color"
                        value={form.color}
                        errors={errors.color}
                        onChange={handleChange}
                    />
                </FormWithCard>
            </Container>
        </PanelTemplate>
    );
};

export default TagCreate;
