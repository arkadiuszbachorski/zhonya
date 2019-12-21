import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styles from './GridTable.module.scss';
import Cell from './Cell';
import Header from './Header';
import Empty from '../typography/Empty/Empty';
import Row from './Row';
import LoadingOrChildren from '../loading/LoadingOrChildren/LoadingOrChildren';
import LoadingOverlay from '../loading/LoadingOverlay/LoadingOverlay';

const GridTable = ({ children, empty, emptyId, loading, className }) => {
    if (empty && !loading) return <Empty messageId={emptyId} />;

    return (
        <LoadingOrChildren loading={empty && loading}>
            <div className={cs(styles.table, className)}>
                <LoadingOverlay loading={!empty && loading} />
                {children}
            </div>
        </LoadingOrChildren>
    );
};

GridTable.propTypes = {
    children: PropTypes.node.isRequired,
    empty: PropTypes.bool,
    emptyId: PropTypes.string,
    loading: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

GridTable.defaultProps = {
    empty: false,
    loading: false,
    className: null,
    emptyId: 'notFound',
};

GridTable.Cell = Cell;

GridTable.Header = Header;

GridTable.Row = Row;

export default GridTable;
