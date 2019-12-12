import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import IconListItem from './IconListItem';
import styles from './IconList.module.scss';

const IconList = ({ children, className }) => {
    return <ul className={cn(styles.list, className)}>{children}</ul>;
};

IconList.Item = IconListItem;

IconList.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

IconList.defaultProps = {
    className: null,
};

export default IconList;
