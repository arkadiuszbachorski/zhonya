import React, { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormattedRelativeTime } from 'react-intl';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
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
import formattedRelativeTimeFromDate from '../../../../utils/formattedRelativeTimeCount';

const prepareParams = ({ search, active, tag, ...rest }, withTags) => ({
    search: search === '' ? undefined : search,
    tag: tag === '' ? undefined : tag,
    active: active === false ? undefined : search,
    withTags: withTags ? true : undefined,
    ...rest,
});

const TaskIndex = () => {
    useAuthenticatedOnly();

    /*
     * Todo:
     *  Data headings
     *  Check if element is currently active
     * */

    const [debouncedFilters, filters, handleChange] = useDebouncedForm({
        search: '',
        tag: '',
        active: false,
    });

    const [instance, loading] = useInstanceWithToastsAndLoading();

    const [tasks, setTasks] = useState([]);

    const [tags, setTags] = useState([]);

    useEffect(() => {
        const hasNoTags = tags.length === 0;
        instance
            .get(api.task.index, {
                params: prepareParams(debouncedFilters, hasNoTags),
            })
            .then(response => {
                setTasks(response.data.tasks);
                if (hasNoTags) {
                    setTags(response.data.tags);
                }
            });
    }, [debouncedFilters, instance]);

    return (
        <PanelTemplate titleId="model.task.plural" actionButton={<ButtonCreate link to={routes.task.create} />}>
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
                    options={tags.map(({ id, name }) => ({ value: id, label: name }))}
                />
                <Checkbox labelId="input.active" name="active" checked={filters.active} onChange={handleChange} />
            </Container>
            <GridTable loading={loading} empty={!tasks.length}>
                <GridTable.Row header className={styles.row}>
                    <GridTable.Header messageId="task.index.header.name" />
                    <GridTable.Header messageId="task.index.header.description" />
                    <GridTable.Header messageId="task.index.header.lastUpdated" />
                </GridTable.Row>
                {tasks.map(({ id, name, description, updated_at }) => (
                    <GridTable.Row className={styles.row} key={id} to={routes.task.edit(id)}>
                        <GridTable.Cell>{name}</GridTable.Cell>
                        <GridTable.Cell>{description}</GridTable.Cell>
                        <GridTable.Cell>
                            <FormattedRelativeTime
                                value={formattedRelativeTimeFromDate(updated_at)}
                                numeric="auto"
                                updateIntervalInSeconds={10}
                            />
                        </GridTable.Cell>
                    </GridTable.Row>
                ))}
            </GridTable>
        </PanelTemplate>
    );
};

export default TaskIndex;
