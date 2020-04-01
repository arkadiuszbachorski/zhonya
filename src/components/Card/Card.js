import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import customPropTypes from '../../customPropTypes';

const Card = ({ children, variant, className, inverted }) => (
    <div className={cn(styles.card, styles[variant], inverted ? styles.bordersInverted : null, className)}>
        {children}
    </div>
);

Card.propTypes = {
    children: PropTypes.node.isRequired,
    variant: customPropTypes.cardVariant,
    className: PropTypes.string,
    inverted: PropTypes.bool,
};

Card.defaultProps = {
    variant: 'primary',
    inverted: false,
};

export default Card;
