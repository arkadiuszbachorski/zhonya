import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ children, type, variant, round, className, onClick, link, to, size, disabled, title }) => {
    const composedProps = {
        className: cn(
            styles.button,
            styles[variant],
            size ? styles[size] : null,
            round ? styles.round : null,
            className,
        ),
        children,
        title,
    };

    if (link) {
        return <Link {...composedProps} to={to} />;
    }

    return <button type={type} onClick={onClick} disabled={disabled} {...composedProps} />;
};

Button.propTypes = {
    link: PropTypes.bool,
    to: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit']),
    round: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large', null]),
    children: PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'blank', 'danger', 'success', 'accent', 'primaryLight']),
    className: PropTypes.string,
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.exact(null)]),
    disabled: PropTypes.bool,
    title: PropTypes.string,
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
    title: null,
};

export default Button;
