import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageTitle from '../../../../components/typography/PageTitle/PageTitle';
import styles from './CardDashboard.module.scss';
import ButtonRoundIcon from '../../../../components/buttons/ButtonRoundIcon/ButtonRoundIcon';
import Card from '../../../../components/Card/Card';

const CardDashboard = ({ icon, titleId, buttons, children }) => {
    const { formatMessage } = useIntl();

    return (
        <Card>
            <PageTitle tag="h4" className={styles.cardTitle}>
                <FormattedMessage id={titleId} /> <FontAwesomeIcon icon={icon} className={styles.icon} />
            </PageTitle>
            {buttons && (
                <div className={styles.actionsWrapper}>
                    {buttons.map(item => (
                        <ButtonRoundIcon
                            icon={item.icon}
                            link
                            size="small"
                            to={item.to}
                            title={formatMessage({ id: item.titleId })}
                        />
                    ))}
                </div>
            )}
            {children}
        </Card>
    );
};

CardDashboard.propTypes = {
    icon: PropTypes.oneOf([PropTypes.object]).isRequired,
    titleId: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.oneOf([PropTypes.object]).isRequired,
            to: PropTypes.string.isRequired,
            titleId: PropTypes.string.isRequired,
        }),
    ),
    children: PropTypes.node,
};

CardDashboard.defaultProps = {
    buttons: [],
    children: undefined,
};

export default CardDashboard;
