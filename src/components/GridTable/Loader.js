import React from 'react';
import styles from './GridTable.module.scss';
import LoadingOverlay from '../loading/LoadingOverlay/LoadingOverlay';

const Loader = () => {
    return <LoadingOverlay loading className={styles.loader} />;
};
export default Loader;
