import React, { useEffect } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { faCheckSquare, faClock, faUser, faTag, faList, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../../../components/Container/Container';
import useAuthenticatedOnly from '../../../hooks/useAuthenticatedOnly';
import PanelTemplate from '../../../components/PanelTemplate/PanelTemplate';
import useInstanceWithErrorsAndToastsAndLoading from '../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import Card from '../../../components/Card/Card';
import PageTitle from '../../../components/typography/PageTitle/PageTitle';
import ButtonRoundIcon from '../../../components/buttons/ButtonRoundIcon/ButtonRoundIcon';
import routes from '../../../routes';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
    useAuthenticatedOnly();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const { formatMessage } = useIntl();

    useEffect(() => {
        //    todo: get dashboard data here
    }, []);

    return (
        <PanelTemplate>
            <Container variant={['smallItems']} className={styles.wrapper}>
                <Card>
                    <PageTitle tag="h4" className={styles.cardTitle}>
                        <FormattedMessage id="model.tag.plural" />{' '}
                        <FontAwesomeIcon icon={faTag} className={styles.icon} />
                    </PageTitle>
                    <div className={styles.actionsWrapper}>
                        <ButtonRoundIcon
                            icon={faList}
                            link
                            size="small"
                            to={routes.tag.index}
                            title={formatMessage({ id: 'action.lists' })}
                        />
                        <ButtonRoundIcon
                            icon={faPlus}
                            link
                            size="small"
                            to={routes.tag.create}
                            title={formatMessage({ id: 'action.create' })}
                        />
                        <ButtonRoundIcon icon={faSearch} size="small" title={formatMessage({ id: 'action.lists' })} />
                    </div>
                </Card>
                <Card>
                    <PageTitle tag="h4" className={styles.cardTitle}>
                        <FormattedMessage id="model.task.plural" />{' '}
                        <FontAwesomeIcon icon={faCheckSquare} className={styles.icon} />
                    </PageTitle>
                </Card>
                <Card>
                    <PageTitle tag="h4" className={styles.cardTitle}>
                        <FormattedMessage id="model.attempt.plural" />{' '}
                        <FontAwesomeIcon icon={faClock} className={styles.icon} />
                    </PageTitle>
                </Card>
                <Card>
                    <PageTitle tag="h4" className={styles.cardTitle}>
                        <FormattedMessage id="model.user" /> <FontAwesomeIcon icon={faUser} className={styles.icon} />
                    </PageTitle>
                </Card>
            </Container>
        </PanelTemplate>
    );
};

export default Dashboard;
