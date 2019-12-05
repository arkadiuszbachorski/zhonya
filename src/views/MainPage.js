import React from 'react';
import { FormattedMessage } from 'react-intl';
import AnimatedClock from '../components/AnimatedClock/AnimatedClock';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import routes from '../routes';
import MainTemplate from '../components/MainTemplate/MainTemplate';

const MainPage = () => (
    <MainTemplate>
        <AnimatedClock />
        <Jumbotron>
            <Jumbotron.Title>
                <FormattedMessage id="main.jumbotron.first" /> <br />
                <FormattedMessage id="main.jumbotron.second" />
            </Jumbotron.Title>
            <Jumbotron.Action link to={routes.signUp}>
                <FormattedMessage id="main.jumbotron.button" />
            </Jumbotron.Action>
        </Jumbotron>
    </MainTemplate>
);

export default MainPage;
