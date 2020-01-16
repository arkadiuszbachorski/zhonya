import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainTemplate.module.scss';
import MainHeader from '../MainHeader/MainHeader';

const MainTemplate = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <MainHeader />
            {children}
        </div>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainTemplate;
