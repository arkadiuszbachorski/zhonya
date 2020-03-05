import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import customPropTypes from '../../../customPropTypes';

const ButtonRoundIcon = ({ icon, ...restProps }) => {
    return (
        <Button round {...restProps}>
            <FontAwesomeIcon icon={icon} />
        </Button>
    );
};

ButtonRoundIcon.propTypes = {
    icon: customPropTypes.fontAwesomeIcon.isRequired,
};

export default ButtonRoundIcon;
