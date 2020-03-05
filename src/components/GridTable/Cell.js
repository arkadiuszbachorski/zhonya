import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styles from './GridTable.module.scss';

const Cell = ({ children, header, className }) => {
    return <div className={cs(styles.cell, header ? styles.header : null, className)}>{children}</div>;
};

Cell.propTypes = {
    children: PropTypes.node,
    header: PropTypes.bool,
    className: PropTypes.string,
};

Cell.defaultProps = {
    children: null,
    header: false,
    className: null,
};

export default Cell;
