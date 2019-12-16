import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import useAuthenticatedOnly from '../../../../hooks/middlewares/useAuthenticatedOnly';
import { apiTagIndex } from '../../../../api/api';
import routes from '../../../../routes';
import ButtonCreate from '../../../../components/buttons/ButtonCreate/ButtonCreate';
import Input from '../../../../components/forms/Input/Input';
import Container from '../../../../components/Container/Container';
import useFilter from '../../../../hooks/useFilter';
import GridTable from '../../../../components/GridTable/GridTable';
import ColorPill from '../../../../components/ColorPill/ColorPill';
import styles from './TaxIndex.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TagIndex = () => {
    useAuthenticatedOnly();

    const { formatMessage } = useIntl();

    const [filters, debouncedFilters, handleChange] = useFilter({
        search: '',
    });

    const [tags, setTags] = useState([]);

    const [loading, setLoading] = useState(true);

    /*
     * Todo:
     *   1. Finish tag index
     *   2. Encapsulate fetching with some hook like useFetchList
     *   3. Component that renders GridTable
     *   4. Create Edit
     * */

    useEffect(() => {
        apiTagIndex(debouncedFilters, setLoading, formatMessage).then(response => setTags(response.data));
    }, [debouncedFilters]);

    return (
        <PanelTemplate titleId="model.tag.plural" actionButton={<ButtonCreate link to={routes.tagCreate} />}>
            <Container variant={['marginBottom', 'filters']}>
                <Input
                    icon={faSearch}
                    labelId="input.search"
                    name="search"
                    value={filters.search}
                    onChange={handleChange}
                />
            </Container>
            <GridTable emptyId="notFound" loading={loading} empty={!tags.length}>
                <GridTable.Row header className={styles.row}>
                    <GridTable.Header messageId="tag.index.header.color" />
                    <GridTable.Header messageId="tag.index.header.name" />
                    <GridTable.Header messageId="tag.index.header.description" />
                    <GridTable.Header messageId="tag.index.header.taskCount" />
                </GridTable.Row>
                {tags.map(({ id, name, description, color, tasks_count }) => (
                    <GridTable.Row className={styles.row} key={id} to={routes.tagEdit(id)}>
                        <GridTable.Cell>
                            <ColorPill color={`#${color}`} variant="horizontal" />
                        </GridTable.Cell>
                        <GridTable.Cell>{name}</GridTable.Cell>
                        <GridTable.Cell>{description}</GridTable.Cell>
                        <GridTable.Cell>{tasks_count}</GridTable.Cell>
                    </GridTable.Row>
                ))}
            </GridTable>
        </PanelTemplate>
    );
};

export default TagIndex;
