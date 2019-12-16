import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';
import styles from './LoadingOverlay.module.scss';

const LoadingOverlay = ({ loading }) => {
    if (loading) {
        return (
            <div className={styles.overlay}>
                <Loading />
            </div>
        );
    }

    return null;
};

LoadingOverlay.propTypes = {
    loading: PropTypes.bool,
};

LoadingOverlay.defaultProps = {
    loading: false,
};

export default LoadingOverlay;
