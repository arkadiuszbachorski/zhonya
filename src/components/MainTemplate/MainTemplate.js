import React from 'react';
import styles from './MainTemplate.module.scss';
import MainHeader from '../MainHeader/MainHeader';

const MainTemplate = ({ children }) => (
    <div className={styles.wrapper}>
        <MainHeader />
        {children}
    </div>
);

export default MainTemplate;
