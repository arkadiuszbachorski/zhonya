import React from 'react';
import PropTypes from 'prop-types';
import ListIconItem from './ListIconItem';
import ListClear from '../ListClear/ListClear';

const ListIcon = ({ children, className }) => {
    return <ListClear className={className}>{children}</ListClear>;
};

ListIcon.Item = ListIconItem;

ListIcon.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

ListIcon.defaultProps = {
    className: null,
};

export default ListIcon;
