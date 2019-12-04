import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import Button from '../../buttons/Button/Button';

const Card = ({ variant, className }) => (
    <div className={cn(styles.card, styles[variant], className)}>
        <h1>Test</h1>
        <Button>Spaduwa</Button>
    </div>
);

Card.propTypes = {
    variant: PropTypes.oneOf(['primary', 'danger']),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

Card.defaultProps = {
    variant: 'primary',
    className: null,
};

export default Card;
