import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ButtonRoundIcon from '../ButtonRoundIcon/ButtonRoundIcon';

const ButtonDelete = props => <ButtonRoundIcon variant="danger" icon={faTimes} {...props} />;

export default ButtonDelete;
