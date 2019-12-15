import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ButtonRoundIcon = ({ icon, ...restProps }) => {
    return (
        <Button round {...restProps}>
            <FontAwesomeIcon icon={icon} />
        </Button>
    );
};

ButtonRoundIcon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ButtonRoundIcon;
