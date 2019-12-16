import React from 'react';
import Logo from '../../logos/Logo/Logo';
import styles from './Loading.module.scss';

const Loading = () => {
    return <Logo linkClassName={styles.link} className={styles.loading} />;
};

export default Loading;
