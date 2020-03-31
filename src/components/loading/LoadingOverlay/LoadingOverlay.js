import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Loading from '../Loading/Loading';
import styles from './LoadingOverlay.module.scss';

const LoadingOverlay = ({ loading, className }) => {
    if (loading) {
        return (
            <div className={cn(styles.overlay, className)}>
                <Loading loading={loading} />
            </div>
        );
    }

    return null;
};

LoadingOverlay.propTypes = {
    loading: PropTypes.bool,
    className: PropTypes.string,
};

LoadingOverlay.defaultProps = {
    loading: false,
};

export default LoadingOverlay;
