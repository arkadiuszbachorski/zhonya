import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ children, type, variant, round, className, onClick, link, to, size }) => {
    const composedProps = {
        className: cn(
            styles.button,
            styles[variant],
            size ? styles[size] : null,
            round ? styles.round : null,
            className,
        ),
        children,
    };

    if (link) {
        composedProps.to = to;

        return <Link {...composedProps} />;
    } else {
        composedProps.onClick = onClick;
        composedProps.type = type;

        return <button {...composedProps} />;
    }
};

Button.propTypes = {
    link: PropTypes.bool,
    to: PropTypes.string,
    type: PropTypes.string,
    round: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large', null]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    variant: PropTypes.oneOf(['primary']),
    className: PropTypes.string,
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.exact(null)]),
};

Button.defaultProps = {
    to: '/',
    link: false,
    type: 'button',
    children: '',
    variant: 'primary',
    round: false,
    className: null,
    onClick: null,
    size: null,
};

export default Button;
