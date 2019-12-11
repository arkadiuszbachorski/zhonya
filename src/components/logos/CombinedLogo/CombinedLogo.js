import React from 'react';
import styles from './CombinedLogo.module.scss';
import Logo from '../Logo/Logo';
import TypographyLogo from '../TypographyLogo/TypographyLogo';

const CombinedLogo = () => (
    <h1 className={styles.logo}>
        <Logo className={styles.logo} linkClassName={styles.logo} />
        <TypographyLogo classNames={[styles.typographyLogo]} />
    </h1>
);

export default CombinedLogo;
