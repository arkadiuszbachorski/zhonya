import React from 'react';
import PropTypes from 'prop-types';
import styles from './TypographyLogo.module.scss';
import { Link } from 'react-router-dom';
import cs from 'classnames';

const TypographyLogo = ({ classNames }) => (
    <Link to="/" className={cs(styles.typographyLogo, classNames)}>
        Zhonya
    </Link>
);

TypographyLogo.propTypes = {
    classNames: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};

TypographyLogo.defaultProps = {
    classNames: null,
};

export default TypographyLogo;
