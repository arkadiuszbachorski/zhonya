import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import FormattedOrChildren from '../FormattedOrChildren/FormattedOrChildren';

const Header = ({ children, messageId, className }) => {
    return (
        <Cell header className={className}>
            <FormattedOrChildren messageId={messageId}>{children}</FormattedOrChildren>
        </Cell>
    );
};

Header.propTypes = {
    children: PropTypes.node,
    messageId: PropTypes.string,
    className: PropTypes.string,
};

export default Header;
