import React, { useEffect, useState } from 'react';
import { faCheckSquare, faClock, faList, faPlus, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import Container from '../../../components/Container/Container';
import useAuthenticatedOnly from '../../../hooks/useAuthenticatedOnly';
import PanelTemplate from '../../../components/PanelTemplate/PanelTemplate';
import useInstanceWithErrorsAndToastsAndLoading from '../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import routes from '../../../routes';
import styles from './Dashboard.module.scss';
import CardDashboard from './CardDashboard/CardDashboard';
import Quote from '../../../components/Quote/Quote';
import api from '../../../api';
import { useLocaleProvider } from '../../../hooks/useLocale';
import useRandomArrayElement from '../../../hooks/useRandomArrayElement';
import quotes from './quotes';
import LoadingOverlay from '../../../components/loading/LoadingOverlay/LoadingOverlay';

const Dashboard = () => {
    useAuthenticatedOnly();

    const [currentLocale] = useLocaleProvider();

    const [instance, loading] = useInstanceWithErrorsAndToastsAndLoading();

    const [dashboardData, setDashboardData] = useState({
        tags: [],
        tasks: [],
        attempts: [],
    });

    const [quote] = useRandomArrayElement(quotes[currentLocale]);

    useEffect(() => {
        instance.get(api.dashboard).then(({ data }) => {
            setDashboardData({
                tags: data.tags,
                tasks: data.tasks,
                attempts: data.attempts,
            });
        });
    }, []);

    return (
        <PanelTemplate titleId="action.dashboard">
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
                />
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
                />
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
                />
                <CardDashboard
                    titleId="model.user"
                    icon={faUser}
                    buttons={[
                        {
                            icon: faUser,
                            to: routes.user.settings,
                            titleId: 'action.settings',
                        },
                    ]}
                />
                <Quote author={quote.author} content={quote.content} className={styles.quote} />
            </Container>
        </PanelTemplate>
    );
};

export default Dashboard;
