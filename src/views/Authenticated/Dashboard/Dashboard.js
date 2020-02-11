import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { faCheckSquare, faClock, faList, faPlus, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import Container from '../../../components/Container/Container';
import useAuthenticatedOnly from '../../../hooks/useAuthenticatedOnly';
import PanelTemplate from '../../../components/PanelTemplate/PanelTemplate';
import useInstanceWithErrorsAndToastsAndLoading from '../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import routes from '../../../routes';
import styles from './Dashboard.module.scss';
import CardDashboard from './CardDashboard/CardDashboard';
import Quote from '../../../components/Quote/Quote';

const Dashboard = () => {
    useAuthenticatedOnly();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    useEffect(() => {
        //    todo: get dashboard data here
    }, []);

    return (
        <PanelTemplate titleId="action.dashboard">
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
                            to: routes.attempt.index,
                            titleId: 'action.list',
                        },
                        {
                            icon: faPlus,
                            to: routes.attempt.create,
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
                <Quote author="Steve Jobs" content="Czas to pieniądz, gdyby ślimak..." className={styles.quote} />
            </Container>
        </PanelTemplate>
    );
};

export default Dashboard;
