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
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
};

MainTemplate.defaultProps = {
    redirect: null,
};

export default MainTemplate;
