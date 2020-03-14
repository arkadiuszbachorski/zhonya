import React, { useMemo, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import { useIntl } from 'react-intl';
import api from '../../../../api';
import routes from '../../../../routes';
import ButtonCreate from '../../../../components/buttons/ButtonCreate/ButtonCreate';
import Input from '../../../../components/forms/Input/Input';
import Container from '../../../../components/Container/Container';
import useDebouncedForm from '../../../../hooks/useDebouncedForm';
import GridTable from '../../../../components/GridTable/GridTable';
import styles from './AttemptIndex.module.scss';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import Checkbox from '../../../../components/forms/Checkbox/Checkbox';
import TaskPanelTemplate from '../../Task/TaskPanelTemplate';
import Time from '../../../../components/Time/Time';
import Active from '../../../../components/typography/Active/Active';
import DateDisplay from '../../../../components/DateDisplay/DateDisplay';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';
import Params from '../../../../utils/Params';
import ButtonFiltersReset from '../../../../components/buttons/ButtonFiltersReset/ButtonFiltersReset';

const params = new Params({
    search: '',
    active: false,
});

const AttemptIndex = () => {
    const { taskId } = useParams();

    const { formatMessage } = useIntl();

    const [debouncedFilters, filters, handleChange, resetFilters] = useDebouncedForm(params.default());

    const [instance, loading, cancel] = useInstanceWithToastsAndLoading({
        redirectPath: routes.task.index,
    });

    const [attempts, setAttempts] = useState([]);

    useCancellableEffect(
        () => {
            instance
                .get(api.attempt.index(taskId), {
                    params: params.prepare(debouncedFilters),
                })
                .then(response => {
                    setAttempts(response.data);
                });
        },
        [debouncedFilters, taskId],
        cancel,
    );

    const hasChanged = useMemo(() => {
        return params.hasChanged(debouncedFilters);
    }, [debouncedFilters]);

    return (
        <TaskPanelTemplate
            actionButton={
                <ButtonCreate
                    to={routes.attempt.create(taskId)}
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
                <Checkbox labelId="input.active" name="active" checked={filters.active} onChange={handleChange} />
                <ButtonFiltersReset onClick={resetFilters} visible={hasChanged} />
            </Container>
            <GridTable loading={loading} empty={!attempts.length}>
                <GridTable.Row header className={styles.row}>
                    <GridTable.Header messageId="attempt.index.header.description" />
                    <GridTable.Header messageId="attempt.index.header.time" />
                    <GridTable.Header messageId="attempt.index.header.lastUpdated" />
                </GridTable.Row>
                {attempts.map(attempt => (
                    <GridTable.Row
                        className={styles.row}
                        key={attempt.id}
                        to={routes.attempt.timer(taskId, attempt.id)}
                    >
                        <GridTable.Cell>{attempt.description}</GridTable.Cell>
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
        </TaskPanelTemplate>
    );
};

export default AttemptIndex;
