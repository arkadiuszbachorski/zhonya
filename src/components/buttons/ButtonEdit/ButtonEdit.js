import React from 'react';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import ButtonRoundIcon from '../ButtonRoundIcon/ButtonRoundIcon';

const ButtonEdit = props => <ButtonRoundIcon variant="success" icon={faCheck} {...props} />;

export default ButtonEdit;
