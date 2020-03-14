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
import ColorPill from '../../../../components/ColorPill/ColorPill';
import styles from './TagIndex.module.scss';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';
import Params from '../../../../utils/Params';
import ButtonFiltersReset from '../../../../components/buttons/ButtonFiltersReset/ButtonFiltersReset';

const params = new Params({
    search: '',
});

const TagIndex = () => {
    const [debouncedFilters, filters, handleChange, resetFilters] = useDebouncedForm(params.default());

    const { formatMessage } = useIntl();

    const [instance, loading, cancel] = useInstanceWithToastsAndLoading();

    const [tags, setTags] = useState([]);

    useCancellableEffect(
        () => {
            instance.get(api.tag.index, { params: params.prepare(debouncedFilters) }).then(response => {
                setTags(response.data);
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
            titleId="model.tag.plural"
            actionButton={<ButtonCreate to={routes.tag.create} title={formatMessage({ id: 'action.tag.create' })} />}
        >
            <Container variant={['marginBottom', 'filters']}>
                <Input
                    icon={faSearch}
                    labelId="input.search"
                    name="search"
                    value={filters.search}
                    onChange={handleChange}
                />
                <ButtonFiltersReset onClick={resetFilters} visible={hasChanged} />
            </Container>
            <GridTable emptyId="notFound" loading={loading} empty={!tags.length}>
                <GridTable.Row header className={styles.row}>
                    <GridTable.Header messageId="tag.index.header.color" />
                    <GridTable.Header messageId="tag.index.header.name" />
                    <GridTable.Header messageId="tag.index.header.description" />
                    <GridTable.Header messageId="tag.index.header.taskCount" />
                </GridTable.Row>
                {tags.map(({ id, name, short_description, color, tasks_count }) => (
                    <GridTable.Row className={styles.row} key={id} to={routes.tag.edit(id)}>
                        <GridTable.Cell>
                            <ColorPill color={`#${color}`} variant="horizontal" />
                        </GridTable.Cell>
                        <GridTable.Cell>{name}</GridTable.Cell>
                        <GridTable.Cell>{short_description}</GridTable.Cell>
                        <GridTable.Cell>{tasks_count}</GridTable.Cell>
                    </GridTable.Row>
                ))}
            </GridTable>
        </PanelTemplate>
    );
};

export default TagIndex;
