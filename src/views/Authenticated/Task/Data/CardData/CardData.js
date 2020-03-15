import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card from '../../../../../components/Card/Card';
import styles from './CardData.module.scss';

const CardData = ({ titleId, children }) => {
    return (
        <Card className={styles.card}>
            <h5 className={styles.title}>
                <FormattedMessage id={titleId} />
            </h5>
            <p className={styles.content}>{children}</p>
        </Card>
    );
};

CardData.propTypes = {
    titleId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default CardData;
