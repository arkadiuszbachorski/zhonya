import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ children, variant, className }) => (
    <div className={cn(styles.card, styles[variant], className)}>{children}</div>
);

Card.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'danger']),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

Card.defaultProps = {
    variant: 'primary',
    className: null,
    children: null,
};

export default Card;
