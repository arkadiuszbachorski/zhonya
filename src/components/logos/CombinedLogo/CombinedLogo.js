import React from 'react';
import styles from './CombinedLogo.module.scss';
import Logo from '../Logo/Logo';
import TypographyLogo from '../TypographyLogo/TypographyLogo';

const CombinedLogo = () => (
    <h1 className={styles.logo}>
        <Logo />
        <TypographyLogo />
    </h1>
);

export default CombinedLogo;
