import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import styles from './TypographyLogo.module.scss';

const TypographyLogo = ({ className }) => (
    <Link to="/" className={cs(styles.typographyLogo, className)}>
        Zhonya
    </Link>
);

TypographyLogo.propTypes = {
    className: PropTypes.string,
};

export default TypographyLogo;
