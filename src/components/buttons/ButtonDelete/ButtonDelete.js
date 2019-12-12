import React from 'react';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import ButtonRoundIcon from '../ButtonRoundIcon/ButtonRoundIcon';

const ButtonDelete = props => <ButtonRoundIcon variant="danger" icon={faCheck} {...props} />;

export default ButtonDelete;
