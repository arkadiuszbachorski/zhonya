import React from 'react';
import PropTypes from 'prop-types';
import styles from './DeleteList.module.scss';
import cn from 'classnames';
import ButtonDelete from '../buttons/ButtonDelete/ButtonDelete';

const DeleteListItem = ({ onClick, children }) => {
    return (
        <li className={cn(styles.item)}>
            <ButtonDelete onClick={onClick} />
            {children}
        </li>
    );
};

DeleteListItem.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
};

DeleteListItem.defaultProps = {
    children: null,
    onClick: null,
};

export default DeleteListItem;
