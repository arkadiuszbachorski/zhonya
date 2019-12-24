import React from 'react';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import ButtonRoundIcon from '../ButtonRoundIcon/ButtonRoundIcon';

const ButtonBack = props => <ButtonRoundIcon variant="accent" icon={faArrowLeft} {...props} />;

export default ButtonBack;
