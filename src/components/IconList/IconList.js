import React from 'react';
import PropTypes from 'prop-types';
import IconListItem from './IconListItem';
import styles from './IconList.module.scss';

const IconList = ({ children }) => {
    return <ul className={styles.list}>{children}</ul>;
};

IconList.Item = IconListItem;

IconList.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
};

export default IconList;
