import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const ButtonAdd = props => (
    <Button round {...props}>
        <FontAwesomeIcon icon={faPlus} />
    </Button>
);

export default ButtonAdd;
