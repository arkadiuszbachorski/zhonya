import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import cn from 'classnames';
import styles from './ListIconItem.module.scss';
import FormattedOrChildren from '../../FormattedOrChildren/FormattedOrChildren';
import customPropTypes from '../../../customPropTypes';

const ListIconItem = ({ to, icon, children, messageId, onClick }) => {
    const { pathname } = useLocation();
    return (
        <li className={cn(styles.item, pathname === to ? styles.active : null)}>
            <Link to={to} onClick={onClick}>
                <FontAwesomeIcon fixedWidth icon={icon} />{' '}
                <FormattedOrChildren messageId={messageId}>{children}</FormattedOrChildren>
            </Link>
        </li>
    );
};

ListIconItem.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    messageId: PropTypes.string,
    to: PropTypes.string,
    icon: customPropTypes.fontAwesomeIcon.isRequired,
};

ListIconItem.defaultProps = {
    messageId: null,
    children: null,
    onClick: null,
    to: null,
};

export default ListIconItem;
