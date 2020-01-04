import React, { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
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
import RelativeDate from '../../../../components/RelativeDate/RelativeDate';

const prepareParams = ({ search, active, ...rest }) => ({
    search: search === '' ? undefined : search,
    active: active === false ? undefined : active,
    ...rest,
});

const AttemptIndex = () => {
    useAuthenticatedOnly();

    const { taskId } = useParams();

    const [debouncedFilters, filters, handleChange] = useDebouncedForm({
        search: '',
        active: false,
    });

    const [instance, loading] = useInstanceWithToastsAndLoading();

    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        instance
            .get(api.attempt.index(taskId), {
                params: prepareParams(debouncedFilters),
            })
            .then(response => {
                setAttempts(response.data);
            });
    }, [debouncedFilters, instance]);

    return (
        <TaskPanelTemplate actionButton={<ButtonCreate link to={routes.attempt.create(taskId)} />}>
            <Container variant={['marginBottom', 'filters']}>
                <Input
                    icon={faSearch}
                    labelId="input.search"
                    name="search"
                    value={filters.search}
                    onChange={handleChange}
                />
                <Checkbox labelId="input.active" name="active" checked={filters.active} onChange={handleChange} />
            </Container>
            <GridTable loading={loading} empty={!attempts.length}>
                <GridTable.Row header className={styles.row}>
                    <GridTable.Header messageId="attempt.index.header.description" />
                    <GridTable.Header messageId="attempt.index.header.time" />
                    <GridTable.Header messageId="attempt.index.header.lastUpdated" />
                </GridTable.Row>
                {attempts.map(attempt => (
                    <GridTable.Row className={styles.row} key={attempt.id} to={routes.attempt.edit(taskId, attempt.id)}>
                        <GridTable.Cell>{attempt.description}</GridTable.Cell>
                        <GridTable.Cell>
                            <Time time={attempt.relative_time} />
                        </GridTable.Cell>
                        <GridTable.Cell>
                            {attempt.active && <Active />}
                            {!attempt.active && <RelativeDate date={attempt.updated_at} />}
                        </GridTable.Cell>
                    </GridTable.Row>
                ))}
            </GridTable>
        </TaskPanelTemplate>
    );
};

export default AttemptIndex;
