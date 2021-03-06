import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styles from './GridTable.module.scss';
import Cell from './Cell';
import Header from './Header';
import Row from './Row';
import LoadingComplete from '../loading/LoadingComplete/LoadingComplete';
import Loader from './Loader';

const GridTable = ({ children, empty, emptyId, loading, className }) => {
    return (
        <LoadingComplete
            loading={loading}
            empty={empty}
            className={cs(className, styles.table)}
            emptyId={emptyId}
            wrapperProps={{ id: 'gridTable' }}
        >
            {children}
        </LoadingComplete>
    );
};

GridTable.propTypes = {
    children: PropTypes.node.isRequired,
    empty: PropTypes.bool,
    emptyId: PropTypes.string,
    loading: PropTypes.bool,
    className: PropTypes.string,
};

GridTable.defaultProps = {
    empty: false,
    loading: false,
    emptyId: 'notFound',
};

GridTable.Cell = Cell;

GridTable.Header = Header;

GridTable.Row = Row;

GridTable.Loader = Loader;

export default GridTable;
