import React from 'react';
import PropTypes from 'prop-types';
import FormWithCard from '../../../components/forms/FormWithCard/FormWithCard';
import Input from '../../../components/forms/Input/Input';
import Container from '../../../components/Container/Container';

const TaskForm = ({ submit, loading, form, errors, handleChange, variant }) => {
    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                onSubmit={submit}
                loading={loading}
                variant={variant}
                titleId={`task.${variant}.title`}
                paragraphIds={['task.form.text1', 'task.form.text2']}
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
                    textarea
                    value={form.description}
                    errors={errors.description}
                    onChange={handleChange}
                />
            </FormWithCard>
        </Container>
    );
};

TaskForm.propTypes = {
    submit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    errors: PropTypes.shape({
        name: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    variant: PropTypes.oneOf(['create', 'edit']).isRequired,
};

export default TaskForm;
