import React, { useState } from 'react';
import { faCheckSquare, faClock, faList, faPlus, faTag } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import Container from '../../../../components/Container/Container';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import routes from '../../../../routes';
import styles from './UserDashboard.module.scss';
import CardDashboard from './CardDashboard/CardDashboard';
import Quote from '../../../../components/Quote/Quote';
import api from '../../../../api';
import { useLocaleProvider } from '../../../../hooks/useLocale';
import useRandomArrayElement from '../../../../hooks/useRandomArrayElement';
import quotes from './quotes';
import AccentSubtitle from '../../../../components/typography/AccentSubtitle/AccentSubtitle';
import ListCaptionAndColor from '../../../../components/lists/ListCaptionAndColor/ListCaptionAndColor';
import DateDisplay from '../../../../components/DateDisplay/DateDisplay';
import Time from '../../../../components/Time/Time';
import UserPanelTemplate from '../UserPanelTemplate';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';
import LoadingOverlay from '../../../../components/loading/LoadingOverlay/LoadingOverlay';

const UserDashboard = () => {
    const { locale } = useLocaleProvider();

    const [instance, loading, , cancel] = useInstanceWithErrorsAndToastsAndLoading();

    const [dashboardData, setDashboardData] = useState({
        tags: [],
        tasks: [],
        attempts: [],
    });

    const quote = useRandomArrayElement(quotes[locale]);

    useCancellableEffect(
        () => {
            instance.get(api.dashboard).then(({ data }) => {
                setDashboardData({
                    tags: data.tags,
                    tasks: data.tasks,
                    attempts: data.attempts,
                });
            });
        },
        [],
        cancel,
    );

    return (
        <UserPanelTemplate>
            <LoadingOverlay loading={loading} />
            <Container variant={['smallItems']} className={styles.wrapper}>
                <CardDashboard
                    titleId="model.tag.plural"
                    icon={faTag}
                    buttons={[
                        {
                            icon: faList,
                            to: routes.tag.index,
                            titleId: 'action.list',
                        },
                        {
                            icon: faPlus,
                            to: routes.tag.create,
                            titleId: 'action.create',
                        },
                    ]}
                >
                    <AccentSubtitle messageId="lastEdited" />
                    <ListCaptionAndColor>
                        {dashboardData.tags.map(tag => (
                            <ListCaptionAndColor.Item
                                className={styles.captionLowercase}
                                key={tag.id}
                                to={routes.tag.edit(tag.id)}
                                color={tag.color}
                                caption={
                                    <FormattedMessage
                                        id="model.task.pluralCounter"
                                        values={{ tasks: tag.tasks_count }}
                                    />
                                }
                                text={tag.name ?? <FormattedMessage id="noName" />}
                            />
                        ))}
                    </ListCaptionAndColor>
                </CardDashboard>
                <CardDashboard
                    titleId="model.task.plural"
                    icon={faCheckSquare}
                    buttons={[
                        {
                            icon: faList,
                            to: routes.task.index,
                            titleId: 'action.list',
                        },
                        {
                            icon: faPlus,
                            to: routes.task.create,
                            titleId: 'action.create',
                        },
                    ]}
                >
                    <AccentSubtitle messageId="lastEdited" />
                    <ListCaptionAndColor>
                        {dashboardData.tasks.map(task => (
                            <ListCaptionAndColor.Item
                                key={task.id}
                                className={styles.captionLowercase}
                                to={routes.attempt.index(task.id)}
                                caption={
                                    <>
                                        <FormattedMessage id="edited" /> <DateDisplay date={task.updated_at} />
                                    </>
                                }
                                text={task.name}
                            />
                        ))}
                    </ListCaptionAndColor>
                </CardDashboard>
                <CardDashboard
                    titleId="model.attempt.plural"
                    icon={faClock}
                    buttons={[
                        {
                            icon: faList,
                            to: routes.attemptIndependent.index,
                            titleId: 'action.list',
                        },
                        {
                            icon: faPlus,
                            to: routes.attemptIndependent.create,
                            titleId: 'action.create',
                        },
                    ]}
                >
                    <AccentSubtitle messageId="active" />
                    <ListCaptionAndColor>
                        {dashboardData.attempts.map(attempt => (
                            <ListCaptionAndColor.Item
                                key={attempt.id}
                                to={routes.attempt.timer(attempt.task.id, attempt.id)}
                                className={styles.attemptsListItem}
                                caption={
                                    <>
                                        <Time time={attempt.relative_time} />
                                    </>
                                }
                                text={attempt.short_description}
                            />
                        ))}
                    </ListCaptionAndColor>
                </CardDashboard>
                <Quote author={quote.author} content={quote.content} className={styles.quote} />
            </Container>
        </UserPanelTemplate>
    );
};

export default UserDashboard;
