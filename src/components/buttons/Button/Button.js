import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ children, type, variant, round, className, onClick, link, to, size, disabled }) => {
    let composedProps = {
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
        composedProps = { ...composedProps, to };

        return <Link {...composedProps} />;
    } else {
        composedProps = { ...composedProps, onClick, type, disabled };

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
    variant: PropTypes.oneOf(['primary', 'blank', 'danger', 'success']),
    className: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.exact(null)]),
    disabled: PropTypes.bool,
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
    disabled: false,
};

export default Button;
