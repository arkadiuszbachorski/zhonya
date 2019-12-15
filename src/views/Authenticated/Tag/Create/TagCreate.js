import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import useAuthenticatedOnly from '../../../../hooks/middlewares/useAuthenticatedOnly';
import Input from '../../../../components/forms/Input/Input';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import useForm from '../../../../hooks/useForm';
import { apiTagCreate } from '../../../../api/api';
import Container from '../../../../components/Container/Container';
import useRedirect from '../../../../hooks/useRedirect';
import routes from '../../../../routes';

const TagCreate = () => {
    useAuthenticatedOnly();

    const { formatMessage } = useIntl();

    const redirectTo = useRedirect();

    const [form, handleChange, setErrors, setLoading] = useForm({
        name: '',
        description: '',
        color: '',
    });

    const submit = () => {
        apiTagCreate(form.data, setErrors, setLoading, formatMessage).then(response => {
            const id = response.data;
            toast.success(formatMessage({ id: 'toast.success.tag.create' }));
            redirectTo(routes.tagEdit(id));
        });
    };

    return (
        <PanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <FormWithCard
                    onSubmit={submit}
                    loading={form.loading}
                    variant="create"
                    titleId="tag.create.title"
                    paragraphIds={['tag.create.text1', 'tag.create.text2']}
                >
                    <Input
                        labelId="input.name"
                        name="name"
                        value={form.data.name}
                        errors={form.errors.name}
                        onChange={handleChange}
                    />
                    <Input
                        labelId="input.description"
                        name="description"
                        value={form.data.description}
                        errors={form.errors.description}
                        onChange={handleChange}
                    />
                    <Input
                        labelId="input.color"
                        type="color"
                        name="color"
                        value={form.data.color}
                        errors={form.errors.color}
                        onChange={handleChange}
                    />
                </FormWithCard>
            </Container>
        </PanelTemplate>
    );
};

export default TagCreate;
