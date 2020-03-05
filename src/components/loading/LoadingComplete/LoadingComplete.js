import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import Empty from '../../typography/Empty/Empty';
import LoadingOrChildren from '../LoadingOrChildren/LoadingOrChildren';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';
import styles from './LoadingComplete.module.scss';

const LoadingComplete = ({ children, empty, emptyId, loading, className }) => {
    if (empty && !loading) return <Empty messageId={emptyId} />;

    return (
        <LoadingOrChildren loading={empty && loading}>
            <div className={cs(styles.wrapper, className)}>
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
};

LoadingComplete.defaultProps = {
    empty: false,
    loading: false,
    className: null,
    emptyId: 'notFound',
};

export default LoadingComplete;
