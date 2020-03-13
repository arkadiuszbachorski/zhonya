import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useIntl } from 'react-intl';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';

import api from '../../../../api';
import routes from '../../../../routes';
import ButtonCreate from '../../../../components/buttons/ButtonCreate/ButtonCreate';
import Input from '../../../../components/forms/Input/Input';
import Container from '../../../../components/Container/Container';
import useDebouncedForm from '../../../../hooks/useDebouncedForm';
import GridTable from '../../../../components/GridTable/GridTable';
import styles from './AttemptIndependentIndex.module.scss';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import Checkbox from '../../../../components/forms/Checkbox/Checkbox';
import Active from '../../../../components/typography/Active/Active';
import Time from '../../../../components/Time/Time';
import DateDisplay from '../../../../components/DateDisplay/DateDisplay';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';

const prepareParams = ({ search, active, task, ...rest }, withTasks) => ({
    search: search === '' ? undefined : search,
    task: task === '' ? undefined : task,
    active: active === false ? undefined : search,
    withTasks: withTasks ? true : undefined,
    ...rest,
});

const AttemptIndependentIndex = () => {
    const [debouncedFilters, filters, handleChange] = useDebouncedForm({
        search: '',
        task: '',
        active: false,
    });

    const { formatMessage } = useIntl();

    const [instance, loading, cancel] = useInstanceWithToastsAndLoading();

    const [attempts, setAttempts] = useState([]);

    const [tasks, setTasks] = useState([]);

    useCancellableEffect(
        () => {
            const hasNoTasks = tasks.length === 0;
            instance
                .get(api.attemptIndependent.index, {
                    params: prepareParams(debouncedFilters, hasNoTasks),
                })
                .then(response => {
                    setAttempts(response.data.attempts);
                    if (hasNoTasks) {
                        setTasks(response.data.tasks);
                    }
                });
        },
        [debouncedFilters],
        cancel,
    );

    return (
        <PanelTemplate
            titleId="model.attempt.plural"
            actionButton={
                <ButtonCreate
                    to={routes.attemptIndependent.create}
                    title={formatMessage({ id: 'action.attempt.create' })}
                />
            }
        >
            <Container variant={['marginBottom', 'filters']}>
                <Input
                    icon={faSearch}
                    labelId="input.search"
                    name="search"
                    value={filters.search}
                    onChange={handleChange}
                />
                <Input
                    select
                    labelId="model.task.singular"
                    name="task"
                    value={filters.task}
                    onChange={handleChange}
                    options={tasks.map(({ id, name }) => ({ value: id, label: name }))}
                />
                <Checkbox labelId="input.active" name="active" checked={filters.active} onChange={handleChange} />
            </Container>
            <GridTable loading={loading} empty={!attempts.length}>
                <GridTable.Row header className={styles.row}>
                    <GridTable.Header messageId="attempt.index.header.taskName" />
                    <GridTable.Header messageId="attempt.index.header.description" />
                    <GridTable.Header messageId="attempt.index.header.time" />
                    <GridTable.Header messageId="attempt.index.header.lastUpdated" />
                </GridTable.Row>
                {attempts.map(attempt => (
                    <GridTable.Row
                        className={styles.row}
                        key={attempt.id}
                        to={routes.attempt.timer(attempt.task.id, attempt.id)}
                    >
                        <GridTable.Cell>{attempt.task.name}</GridTable.Cell>
                        <GridTable.Cell>{attempt.short_description}</GridTable.Cell>
                        <GridTable.Cell>
                            <Time time={attempt.relative_time} />
                        </GridTable.Cell>
                        <GridTable.Cell>
                            {attempt.active && <Active />}
                            {!attempt.active && <DateDisplay date={attempt.updated_at} />}
                        </GridTable.Cell>
                    </GridTable.Row>
                ))}
            </GridTable>
        </PanelTemplate>
    );
};

export default AttemptIndependentIndex;
