import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styles from './GridTable.module.scss';
import { Link } from 'react-router-dom';

const Row = ({ children, to, className, header }) => {
    if (to) {
        return (
            <Link to={to} className={cs(styles.row, styles.rowLink, header ? styles.headerRow : null, className)}>
                {children}
            </Link>
        );
    }
    return <div className={cs(styles.row, header ? styles.headerRow : null, className)}>{children}</div>;
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    header: PropTypes.bool,
};

Row.defaultProps = {
    to: null,
    className: null,
    header: false,
};

export default Row;
