import React, { useCallback, useMemo, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useIntl } from 'react-intl';
import InfiniteScroll from 'react-infinite-scroll-component';
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
import Params from '../../../../utils/Params';
import ButtonFiltersReset from '../../../../components/buttons/ButtonFiltersReset/ButtonFiltersReset';

const params = new Params({
    search: '',
    task: '',
    active: false,
});

const AttemptIndependentIndex = () => {
    const [debouncedFilters, filters, handleChange, resetFilters] = useDebouncedForm(params.default());

    const { formatMessage } = useIntl();

    const [instance, loading, cancel] = useInstanceWithToastsAndLoading();

    const [attempts, setAttempts] = useState({
        data: [],
        nextPage: api.attemptIndependent.index,
    });

    const [tasks, setTasks] = useState([]);

    const fetchAttempts = useCallback(
        (loadMore = false) => {
            const url = loadMore ? attempts.nextPage : api.attemptIndependent.index;
            const hasNoTasks = tasks.length === 0;
            instance
                .get(url, {
                    params: params.prepare(debouncedFilters, {
                        withTasks: hasNoTasks ? true : undefined,
                    }),
                })
                .then(({ data }) => {
                    setAttempts(oldAttempts => {
                        return {
                            data: loadMore ? [...oldAttempts.data, ...data.attempts.data] : data.attempts.data,
                            nextPage: data.attempts.nextPage,
                        };
                    });
                    if (hasNoTasks) {
                        setTasks(data.tasks);
                    }
                });
        },
        [debouncedFilters, attempts.nextPage],
    );

    useCancellableEffect(fetchAttempts, [debouncedFilters], cancel);

    const hasChanged = useMemo(() => {
        return params.hasChanged(debouncedFilters);
    }, [debouncedFilters]);

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
                <ButtonFiltersReset onClick={resetFilters} visible={hasChanged} />
            </Container>
            {useMemo(
                () => (
                    <GridTable loading={loading} empty={!attempts.data.length}>
                        <InfiniteScroll
                            next={() => fetchAttempts(true)}
                            hasMore={attempts.nextPage !== null}
                            hasChildren
                            scrollThreshold={1}
                            loader={<GridTable.Loader />}
                            dataLength={attempts.data.length}
                            scrollableTarget="gridTable"
                        >
                            <GridTable.Row header className={styles.row}>
                                <GridTable.Header messageId="attempt.index.header.taskName" />
                                <GridTable.Header messageId="attempt.index.header.description" />
                                <GridTable.Header messageId="attempt.index.header.time" />
                                <GridTable.Header messageId="attempt.index.header.lastUpdated" />
                            </GridTable.Row>
                            {attempts.data.map(attempt => (
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
                        </InfiniteScroll>
                    </GridTable>
                ),
                [attempts.data, loading],
            )}
        </PanelTemplate>
    );
};

export default AttemptIndependentIndex;
