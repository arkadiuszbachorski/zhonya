import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ListClear.module.scss';

const ListClear = ({ className, children }) => {
    return <ul className={cn(styles.list, className)}>{children}</ul>;
};

ListClear.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default ListClear;
