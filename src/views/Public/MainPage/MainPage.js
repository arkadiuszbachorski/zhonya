import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedClock from '../../../components/AnimatedClock/AnimatedClock';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';
import routes from '../../../routes';
import MainTemplate from '../../../components/MainTemplate/MainTemplate';
import ForWho from './ForWho/ForWho';
import HowItWorks from './HowItWorks/HowItWorks';
import Contact from './Contact/Contact';

const MainPage = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <MainTemplate animate>
            <AnimatedClock />
            <Jumbotron>
                <Jumbotron.Title>
                    <FormattedMessage id="main.jumbotron.first" /> <br />
                    <FormattedMessage id="main.jumbotron.second" />
                </Jumbotron.Title>
                <Jumbotron.Action link to={routes.signUp} variant="primaryLight">
                    <FormattedMessage id="main.jumbotron.button" />
                </Jumbotron.Action>
            </Jumbotron>
            <ForWho />
            <HowItWorks />
            <Contact />
        </MainTemplate>
    );
};

export default MainPage;
