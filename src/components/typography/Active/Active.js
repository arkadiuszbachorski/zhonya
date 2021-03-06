import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography/Typography';

const Active = ({ messageId, ...restProps }) => {
    return <Typography variants={['primary', 'lowercase', 'weightBold']} messageId={messageId} {...restProps} />;
};

Active.propTypes = {
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
    messageId: PropTypes.string,
};

Active.defaultProps = {
    tag: 'span',
    messageId: 'active',
};

export default Active;
