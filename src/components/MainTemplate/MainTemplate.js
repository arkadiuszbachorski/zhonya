import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainTemplate.module.scss';
import MainHeader from '../MainHeader/MainHeader';

const MainTemplate = ({ animate, children }) => {
    return (
        <div className={styles.wrapper}>
            <MainHeader animate={animate} />
            {children}
        </div>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
    animate: PropTypes.bool,
};

MainTemplate.defaultProps = {
    animate: false,
};

export default MainTemplate;
