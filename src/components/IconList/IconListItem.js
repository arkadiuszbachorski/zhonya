import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import styles from './IconList.module.scss';
import FormattedOrChildren from '../FormattedOrChildren/FormattedOrChildren';
import cn from 'classnames';

const IconListItem = ({ to, icon, children, messageId }) => {
    const { pathname } = useLocation();
    return (
        <li className={cn(styles.item, pathname === to ? styles.active : null)}>
            <Link to={to}>
                <FontAwesomeIcon fixedWidth icon={icon} />{' '}
                <FormattedOrChildren messageId={messageId}>{children}</FormattedOrChildren>
            </Link>
        </li>
    );
};

IconListItem.propTypes = {
    children: PropTypes.node,
    messageId: PropTypes.string,
    to: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

IconListItem.defaultProps = {
    messageId: null,
    children: null,
};

export default IconListItem;
