import React from 'react';
import PropTypes from 'prop-types';
import FormWithCard from '../../../components/forms/FormWithCard/FormWithCard';
import Input from '../../../components/forms/Input/Input';
import Container from '../../../components/Container/Container';

const AttemptForm = ({ submit, loading, form, errors, handleChange, variant, tasks, renderTasks }) => {
    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                onSubmit={submit}
                loading={loading}
                variant={variant}
                titleId={`attempt.${variant}.title`}
                paragraphIds={['attempt.form.text1', 'attempt.form.text2']}
            >
                {renderTasks && (
                    <Input
                        select
                        labelId="model.task.singular"
                        name="task"
                        value={form.task}
                        errors={errors.task}
                        onChange={handleChange}
                        options={tasks.map(({ id, name }) => ({ value: id, label: name }))}
                    />
                )}
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

AttemptForm.propTypes = {
    submit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    form: PropTypes.shape({
        description: PropTypes.string.isRequired,
        task: PropTypes.string,
    }).isRequired,
    errors: PropTypes.shape({
        description: PropTypes.arrayOf(PropTypes.string),
        task: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    variant: PropTypes.oneOf(['create', 'edit']).isRequired,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number,
        }),
    ),
    renderTasks: PropTypes.bool,
};

AttemptForm.defaultProps = {
    tasks: [],
    renderTasks: false,
};

export default AttemptForm;
