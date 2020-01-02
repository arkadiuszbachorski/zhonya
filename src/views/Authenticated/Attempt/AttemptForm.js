import React from 'react';
import PropTypes from 'prop-types';
import FormWithCard from '../../../components/forms/FormWithCard/FormWithCard';
import Input from '../../../components/forms/Input/Input';
import Container from '../../../components/Container/Container';

const AttemptForm = ({ submit, loading, form, errors, handleChange, variant }) => {
    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                onSubmit={submit}
                loading={loading}
                variant={variant}
                titleId={`attempt.${variant}.title`}
                paragraphIds={['attempt.form.text1']}
            >
                <Input
                    labelId="input.description"
                    name="description"
                    value={form.description}
                    errors={errors.description}
                    onChange={handleChange}
                />
            </FormWithCard>
        </Container>
    );
};

AttemptForm.propTypes = {
    submit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    form: PropTypes.shape({
        description: PropTypes.string.isRequired,
    }).isRequired,
    errors: PropTypes.shape({
        description: PropTypes.string,
    }).isRequired,
    variant: PropTypes.oneOf(['create', 'edit']).isRequired,
};

export default AttemptForm;
