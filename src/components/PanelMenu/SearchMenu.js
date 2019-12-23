import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SlidingMenu from '../SlidingMenu/SlidingMenu';
import Input from '../forms/Input/Input';
import useInstanceWithErrorsAndToastsAndLoading from '../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import useDebouncedForm from '../../hooks/useDebouncedForm';
import api from '../../api';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LoadingComplete from '../loading/LoadingComplete/LoadingComplete';
import ListCaptionAndColor from '../lists/ListCaptionAndColor/ListCaptionAndColor';
import AccentSubtitle from '../typography/AccentSubtitle/AccentSubtitle';
import routes from '../../routes';
import styles from './SearchMenu.module.scss';

const prepareParams = ({ search, ...rest }) => ({
    search: search === '' ? undefined : search,
    ...rest,
});

const initData = {
    tasks: [],
    tags: [],
};

const SearchMenu = ({ toggle, active }) => {
    /*
     * TODO: Captions
     * */

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const [debouncedFilters, filters, handleChange] = useDebouncedForm({
        search: '',
    });

    const [data, setData] = useState(initData);

    useEffect(() => {
        if (debouncedFilters.search !== '') {
            instance.get(api.search, { params: prepareParams(debouncedFilters) }).then(response => {
                setData(response.data);
            });
        } else {
            setData(initData);
        }
    }, [debouncedFilters, instance]);

    const tasksEmpty = data.tasks.length === 0;
    const tagsEmpty = data.tags.length === 0;
    return (
        <SlidingMenu toggle={toggle} titleId="action.search" visible={active}>
            <div className={styles.wrapper}>
                <Input
                    className={styles.input}
                    labelId="action.search"
                    name="search"
                    icon={faSearch}
                    value={filters.search}
                    onChange={handleChange}
                    errors={errors.task}
                />
                <LoadingComplete loading={loading} empty={tasksEmpty && tagsEmpty}>
                    {!tagsEmpty && (
                        <>
                            <AccentSubtitle messageId="model.tag.plural" />
                            <ListCaptionAndColor>
                                {data.tags.map(tag => (
                                    <ListCaptionAndColor.Item
                                        key={tag.id}
                                        to={routes.tag.edit(tag.id)}
                                        color={tag.color}
                                        caption={'Testowanko'}
                                        text={tag.name}
                                    />
                                ))}
                            </ListCaptionAndColor>
                        </>
                    )}
                    {!tasksEmpty && (
                        <>
                            <AccentSubtitle messageId="model.task.plural" />
                            <ListCaptionAndColor>
                                {data.tasks.map(task => (
                                    <ListCaptionAndColor.Item
                                        key={task.id}
                                        to={routes.task.edit(task.id)}
                                        caption={'Testowanko'}
                                        text={task.name}
                                    />
                                ))}
                            </ListCaptionAndColor>
                        </>
                    )}
                </LoadingComplete>
            </div>
        </SlidingMenu>
    );
};

SearchMenu.propTypes = {
    toggle: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};

export default SearchMenu;
