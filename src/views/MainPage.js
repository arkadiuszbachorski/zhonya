import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader';
import AnimatedClock from '../components/AnimatedClock/AnimatedClock';
import Jumbotron from '../components/Jumbotron/Jumbotron';

const MainPage = () => (
    <>
        <MainHeader links />
        <AnimatedClock />
        <Jumbotron />
    </>
);

export default MainPage;
