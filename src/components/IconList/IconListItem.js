import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './IconList.module.scss';
import FormattedOrChildren from '../FormattedOrChildren/FormattedOrChildren';

const IconListItem = ({ to, icon, children, messageId }) => {
    return (
        <li className={styles.item}>
            <Link to={to}>
                <FontAwesomeIcon fixedWidth icon={icon} />{' '}
                <FormattedOrChildren messageId={messageId}>{children}</FormattedOrChildren>
            </Link>
        </li>
    );
};

IconListItem.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.string]),
    messageId: PropTypes.string,
    to: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

IconListItem.defaultProps = {
    messageId: null,
    children: null,
};

export default IconListItem;
