import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card from '../../../../../components/Card/Card';
import styles from './CardData.module.scss';

const CardData = ({ titleId, descriptionId, children }) => {
    return (
        <Card className={styles.card}>
            <h5 className={styles.title}>
                <FormattedMessage id={titleId} />
            </h5>
            <p className={styles.content}>{children}</p>
            {descriptionId && (
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

CardData.defaultProps = {
    descriptionId: null,
};

export default CardData;
