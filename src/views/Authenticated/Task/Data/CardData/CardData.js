import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card from '../../../../../components/Card/Card';
import styles from './CardData.module.scss';
import useStatisticsPreference from '../../../../../hooks/useStatisticsPreference';

const CardData = ({ titleId, descriptionId, children }) => {
    const { statisticsPreference } = useStatisticsPreference();

    return (
        <Card className={styles.card}>
            <h5 className={styles.title}>
                <FormattedMessage id={titleId} />
            </h5>
            <p className={styles.content}>{children}</p>
            {statisticsPreference.descriptions && descriptionId && (
                <p className={styles.description}>
                    <FormattedMessage id={descriptionId} />
                </p>
            )}
        </Card>
    );
};

CardData.propTypes = {
    titleId: PropTypes.string.isRequired,
    descriptionId: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default CardData;
