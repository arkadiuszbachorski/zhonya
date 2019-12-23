import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import DeleteListItem from './DeleteListItem';
import styles from './DeleteList.module.scss';

const DeleteList = ({ children, className }) => {
    return <ul className={cn(styles.list, className)}>{children}</ul>;
};

DeleteList.Item = DeleteListItem;

DeleteList.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

DeleteList.defaultProps = {
    className: null,
};

export default DeleteList;
