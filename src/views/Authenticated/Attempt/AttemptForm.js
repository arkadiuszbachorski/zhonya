import React from 'react';
import PropTypes from 'prop-types';
import FormWithCard from '../../../components/forms/FormWithCard/FormWithCard';
import Input from '../../../components/forms/Input/Input';
import Container from '../../../components/Container/Container';
import styles from './AttemptForm.module.scss';
import Checkbox from '../../../components/forms/Checkbox/Checkbox';
import Errors from '../../../components/forms/Errors/Errors';
import customPropTypes from '../../../customPropTypes';

const availableParagraphIds = {
    create: ['attempt.form.text1', 'attempt.form.text2'],
    edit: ['attempt.form.text1', 'attempt.form.text2', 'attempt.form.text3'],
};

const AttemptForm = ({ submit, loading, form, errors, handleChange, variant, tasks, renderTasks }) => {
    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                onSubmit={submit}
                loading={loading}
                variant={variant}
                titleId={`attempt.${variant}.title`}
                paragraphIds={availableParagraphIds[variant]}
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
                {variant === 'edit' && (
                    <>
                        <Checkbox
                            labelId="input.changeTime"
                            name="changeTime"
                            checked={form.changeTime}
                            onChange={handleChange}
                        />
                        <div className={styles.timeContainer}>
                            <Input
                                labelId="timer.days.medium"
                                name="days"
                                value={form.days}
                                onChange={handleChange}
                                disabled={!form.changeTime}
                            />
                            <Input
                                labelId="timer.hours.medium"
                                name="hours"
                                value={form.hours}
                                onChange={handleChange}
                                disabled={!form.changeTime}
                            />
                            <Input
                                labelId="timer.minutes.medium"
                                name="minutes"
                                value={form.minutes}
                                onChange={handleChange}
                                disabled={!form.changeTime}
                            />
                            <Input
                                labelId="timer.seconds.medium"
                                name="seconds"
                                value={form.seconds}
                                onChange={handleChange}
                                disabled={!form.changeTime}
                            />
                        </div>
                        <Errors errors={errors.saved_relative_time ?? []} />
                    </>
                )}
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
        days: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        hours: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        minutes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        seconds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        changeTime: PropTypes.bool,
    }).isRequired,
    errors: customPropTypes.errors({
        description: PropTypes.string,
        task: PropTypes.string,
        saved_relative_time: PropTypes.string,
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
