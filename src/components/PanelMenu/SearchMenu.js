import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import SlidingMenu from '../SlidingMenu/SlidingMenu';
import Input from '../forms/Input/Input';
import useInstanceWithErrorsAndToastsAndLoading from '../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import useDebouncedForm from '../../hooks/useDebouncedForm';
import api from '../../api';
import LoadingComplete from '../loading/LoadingComplete/LoadingComplete';
import ListCaptionAndColor from '../lists/ListCaptionAndColor/ListCaptionAndColor';
import AccentSubtitle from '../typography/AccentSubtitle/AccentSubtitle';
import routes from '../../routes';
import styles from './SearchMenu.module.scss';
import RelativeDate from '../RelativeDate/RelativeDate';

const prepareParams = ({ search, ...rest }) => ({
    search: search === '' ? undefined : search,
    ...rest,
});

const initData = {
    tasks: [],
    tags: [],
};

const SearchMenu = ({ toggle, active }) => {
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
                    id="main-search"
                    icon={faSearch}
                    value={filters.search}
                    onChange={handleChange}
                    errors={errors.task}
                />
                {debouncedFilters.search !== '' && (
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
                                            caption={
                                                <FormattedMessage
                                                    id="model.task.pluralCounter"
                                                    values={{ tasks: tag.tasks_count }}
                                                />
                                            }
                                            text={tag.name}
                                            onClick={toggle}
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
                                            className={styles.captionLowercase}
                                            key={task.id}
                                            to={routes.task.edit(task.id)}
                                            caption={
                                                <>
                                                    <FormattedMessage id="edited" />{' '}
                                                    <RelativeDate date={task.updated_at} />
                                                </>
                                            }
                                            text={task.name}
                                            onClick={toggle}
                                        />
                                    ))}
                                </ListCaptionAndColor>
                            </>
                        )}
                    </LoadingComplete>
                )}
            </div>
        </SlidingMenu>
    );
};

SearchMenu.propTypes = {
    toggle: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};

export default SearchMenu;
