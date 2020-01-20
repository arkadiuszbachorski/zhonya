import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import SlidingMenu from '../../SlidingMenu/SlidingMenu';
import Input from '../../forms/Input/Input';
import useInstanceWithErrorsAndToastsAndLoading from '../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import useDebouncedForm from '../../../hooks/useDebouncedForm';
import api from '../../../api';
import LoadingComplete from '../../loading/LoadingComplete/LoadingComplete';
import ListCaptionAndColor from '../../lists/ListCaptionAndColor/ListCaptionAndColor';
import AccentSubtitle from '../../typography/AccentSubtitle/AccentSubtitle';
import routes from '../../../routes';
import styles from './SearchSubmenu.module.scss';
import DateDisplay from '../../DateDisplay/DateDisplay';
import Active from '../../typography/Active/Active';
import Time from '../../Time/Time';

const prepareParams = ({ search, ...rest }) => ({
    search: search === '' ? undefined : search,
    ...rest,
});

const initData = {
    tasks: [],
    tags: [],
    attempts: [],
};

const SearchSubmenu = ({ toggle, active }) => {
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
    const attemptsEmpty = data.attempts.length === 0;
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
                    <LoadingComplete loading={loading} empty={tasksEmpty && tagsEmpty && attemptsEmpty}>
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
                                            to={routes.attempt.index(task.id)}
                                            caption={
                                                <>
                                                    <FormattedMessage id="edited" />{' '}
                                                    <DateDisplay date={task.updated_at} />
                                                </>
                                            }
                                            text={task.name}
                                            onClick={toggle}
                                        />
                                    ))}
                                </ListCaptionAndColor>
                            </>
                        )}
                        {!attemptsEmpty && (
                            <>
                                <AccentSubtitle messageId="model.attempt.plural" />
                                <ListCaptionAndColor>
                                    {data.attempts.map(attempt => (
                                        <ListCaptionAndColor.Item
                                            className={styles.captionLowercase}
                                            key={attempt.id}
                                            to={routes.attempt.timer(attempt.task.id, attempt.id)}
                                            caption={
                                                <>
                                                    {attempt.active && <Active />}
                                                    {!attempt.active && (
                                                        <>
                                                            <FormattedMessage id="edited" />{' '}
                                                            <DateDisplay date={attempt.updated_at} />
                                                        </>
                                                    )}
                                                    <br />
                                                    <Time time={attempt.relative_time} />
                                                </>
                                            }
                                            text={attempt.short_description}
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

SearchSubmenu.propTypes = {
    toggle: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};

export default SearchSubmenu;
