import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './InputIcon.module.scss';
import customPropTypes from '../../../customPropTypes';

const InputIcon = ({ select, icon }) => {
    const parsedIcon = select && !icon ? faAngleDown : icon;

    if (parsedIcon) {
        return <FontAwesomeIcon icon={parsedIcon} className={styles.icon} />;
    }

    return null;
};

InputIcon.propTypes = {
    icon: customPropTypes.fontAwesomeIcon,
    select: PropTypes.bool,
};

InputIcon.defaultProps = {
    icon: null,
    select: false,
};

export default InputIcon;
