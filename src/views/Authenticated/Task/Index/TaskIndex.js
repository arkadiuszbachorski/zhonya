import React, { useMemo, useState } from 'react';
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
import styles from './TaskIndex.module.scss';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import Checkbox from '../../../../components/forms/Checkbox/Checkbox';
import ColorPill from '../../../../components/ColorPill/ColorPill';
import Active from '../../../../components/typography/Active/Active';
import Time from '../../../../components/Time/Time';
import DateDisplay from '../../../../components/DateDisplay/DateDisplay';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';
import Params from '../../../../utils/Params';
import ButtonFiltersReset from '../../../../components/buttons/ButtonFiltersReset/ButtonFiltersReset';

const params = new Params({
    search: '',
    tag: '',
    active: false,
});

const TaskIndex = () => {
    const [debouncedFilters, filters, handleChange, resetFilters] = useDebouncedForm(params.default());

    const { formatMessage } = useIntl();

    const [instance, loading, cancel] = useInstanceWithToastsAndLoading();

    const [tasks, setTasks] = useState([]);

    const [tags, setTags] = useState([]);

    useCancellableEffect(
        () => {
            const hasNoTags = tags.length === 0;
            instance
                .get(api.task.index, {
                    params: params.prepare(debouncedFilters, {
                        withTags: hasNoTags ? true : undefined,
                    }),
                })
                .then(response => {
                    setTasks(response.data.tasks);
                    if (hasNoTags) {
                        setTags(response.data.tags);
                    }
                });
        },
        [debouncedFilters],
        cancel,
    );

    const hasChanged = useMemo(() => {
        return params.hasChanged(debouncedFilters);
    }, [debouncedFilters]);

    return (
        <PanelTemplate
            titleId="model.task.plural"
            actionButton={<ButtonCreate to={routes.task.create} title={formatMessage({ id: 'action.task.create' })} />}
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
                    labelId="model.tag.singular"
                    name="tag"
                    value={filters.tag}
                    onChange={handleChange}
                    options={tags.map(({ id, name }) => ({ value: id, label: name ?? formatMessage({id: 'noName'}) }))}
                />
                <Checkbox labelId="input.active" name="active" checked={filters.active} onChange={handleChange} />
                <ButtonFiltersReset onClick={resetFilters} visible={hasChanged} />
            </Container>
            <GridTable loading={loading} empty={!tasks.length}>
                <GridTable.Row header className={styles.row}>
                    <GridTable.Header messageId="task.index.header.name" />
                    <GridTable.Header messageId="task.index.header.description" />
                    <GridTable.Header messageId="average" />
                    <GridTable.Header messageId="fastest" />
                    <GridTable.Header messageId="slowest" />
                    <GridTable.Header messageId="task.index.header.lastUpdated" />
                </GridTable.Row>
                {tasks.map(task => (
                    <GridTable.Row className={styles.row} key={task.id} to={routes.attempt.index(task.id)}>
                        <GridTable.Cell className={styles.name}>
                            {task.tags_colors.length > 0 && (
                                <div className={styles.pills}>
                                    {task.tags_colors.map(color => (
                                        <ColorPill key={color} color={`#${color}`} variant="vertical" />
                                    ))}
                                </div>
                            )}
                            {task.name}
                        </GridTable.Cell>
                        <GridTable.Cell>{task.short_description}</GridTable.Cell>
                        <GridTable.Cell>
                            <Time time={task.time_statistics.avg} />
                        </GridTable.Cell>
                        <GridTable.Cell>
                            <Time time={task.time_statistics.min} />
                        </GridTable.Cell>
                        <GridTable.Cell>
                            <Time time={task.time_statistics.max} />
                        </GridTable.Cell>
                        <GridTable.Cell>
                            {task.active && <Active />}
                            {!task.active && <DateDisplay date={task.updated_at} />}
                        </GridTable.Cell>
                    </GridTable.Row>
                ))}
            </GridTable>
        </PanelTemplate>
    );
};

export default TaskIndex;
