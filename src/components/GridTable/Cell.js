import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styles from './GridTable.module.scss';

const Cell = ({ children, header, className }) => {
    return <div className={cs(styles.cell, header ? styles.header : null, className)}>{children}</div>;
};

Cell.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

Cell.defaultProps = {
    header: false,
    className: null,
};

export default Cell;
