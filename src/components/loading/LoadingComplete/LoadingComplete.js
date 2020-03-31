import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import Empty from '../../typography/Empty/Empty';
import LoadingOrChildren from '../LoadingOrChildren/LoadingOrChildren';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';
import styles from './LoadingComplete.module.scss';

const LoadingComplete = ({ children, empty, emptyId, loading, className, wrapperProps }) => {
    if (empty && !loading) return <Empty messageId={emptyId} />;

    return (
        <LoadingOrChildren loading={empty && loading}>
            <div className={cs(styles.wrapper, className)} {...wrapperProps}>
                <LoadingOverlay loading={!empty && loading} />
                {children}
            </div>
        </LoadingOrChildren>
    );
};

LoadingComplete.propTypes = {
    children: PropTypes.node.isRequired,
    empty: PropTypes.bool,
    emptyId: PropTypes.string,
    loading: PropTypes.bool,
    className: PropTypes.string,
    wrapperProps: PropTypes.object,
};

LoadingComplete.defaultProps = {
    empty: false,
    loading: false,
    emptyId: 'notFound',
    wrapperProps: [],
};

export default LoadingComplete;
