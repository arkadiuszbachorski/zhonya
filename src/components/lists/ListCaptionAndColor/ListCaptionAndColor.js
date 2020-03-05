import React from 'react';
import PropTypes from 'prop-types';
import ListClear from '../ListClear/ListClear';
import ListCaptionAndColorItem from './ListCaptionAndColorItem';

const ListCaptionAndColor = ({ children, className }) => {
    return <ListClear className={className}>{children}</ListClear>;
};

ListCaptionAndColor.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ListCaptionAndColor.defaultProps = {
    className: null,
};

ListCaptionAndColor.Item = ListCaptionAndColorItem;

export default ListCaptionAndColor;
