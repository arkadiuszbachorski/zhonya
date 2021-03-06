import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageTitle from '../../../../../components/typography/PageTitle/PageTitle';
import styles from './CardDashboard.module.scss';
import ButtonRoundIcon from '../../../../../components/buttons/ButtonRoundIcon/ButtonRoundIcon';
import Card from '../../../../../components/Card/Card';
import customPropTypes from '../../../../../customPropTypes';
import AccentSubtitle from '../../../../../components/typography/AccentSubtitle/AccentSubtitle';

const CardDashboard = ({ icon, titleId, subtitleId, buttons, children }) => {
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
                            key={item.to}
                            icon={item.icon}
                            size="small"
                            to={item.to}
                            title={formatMessage({ id: item.titleId })}
                        />
                    ))}
                </div>
            )}
            <AccentSubtitle messageId={subtitleId} />
            {children}
        </Card>
    );
};

CardDashboard.propTypes = {
    icon: customPropTypes.fontAwesomeIcon.isRequired,
    titleId: PropTypes.string.isRequired,
    subtitleId: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            icon: customPropTypes.fontAwesomeIcon.isRequired,
            to: PropTypes.string.isRequired,
            titleId: PropTypes.string.isRequired,
        }),
    ),
    children: PropTypes.node,
};

CardDashboard.defaultProps = {
    buttons: [],
};

export default CardDashboard;
