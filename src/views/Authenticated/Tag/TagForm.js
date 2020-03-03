import React from 'react';
import PropTypes from 'prop-types';
import FormWithCard from '../../../components/forms/FormWithCard/FormWithCard';
import Input from '../../../components/forms/Input/Input';
import Container from '../../../components/Container/Container';
import start from '../../../utils/start';

const TagForm = ({ submit, loading, form, errors, handleChange, variant }) => {
    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                onSubmit={submit}
                loading={loading}
                variant={variant}
                titleId={`tag.${variant}.title`}
                paragraphIds={['tag.form.text1', 'tag.form.text2']}
            >
                <Input
                    labelId="input.color"
                    type="color"
                    name="color"
                    value={start(form.color, '#')}
                    errors={errors.color}
                    onChange={handleChange}
                />
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
                    textarea
                    value={form.description}
                    errors={errors.description}
                    onChange={handleChange}
                />
            </FormWithCard>
        </Container>
    );
};

TagForm.propTypes = {
    submit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    form: PropTypes.shape({
        color: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    errors: PropTypes.shape({
        color: PropTypes.arrayOf(PropTypes.string),
        name: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    variant: PropTypes.oneOf(['create', 'edit']).isRequired,
};

export default TagForm;
