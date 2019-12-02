import React from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/Button/Button';
import { FormattedMessage } from 'react-intl';
import routes from '../../routes';

const Jumbotron = props => (
    <div>
        <h2>
            <FormattedMessage id="main.jumbotron.first" /> <br />
            <FormattedMessage id="main.jumbotron.second" />
        </h2>
        <Button link to={routes.signUp}>
            <FormattedMessage id="main.jumbotron.button" />
        </Button>
    </div>
);

export default Jumbotron;
