import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({ children, type, variant, round, className, onClick, size }) => (
    <button
        type={type}
        onClick={onClick}
        className={cn(
            styles.button,
            styles[variant],
            size ? styles[size] : null,
            round ? styles.round : null,
            className,
        )}
    >
        {children}
    </button>
);

Button.propTypes = {
    type: PropTypes.string,
    round: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large', null]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    variant: PropTypes.oneOf(['primary']),
    className: PropTypes.string,
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.exact(null)]),
};

Button.defaultProps = {
    type: 'button',
    children: '',
    variant: 'primary',
    round: false,
    className: null,
    onClick: null,
    size: null,
};

export default Button;
