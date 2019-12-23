import React from 'react';
import Typography from '../Typography/Typography';

const Caption = props => {
    return <Typography variants={['muted', 'small', 'weightNormal']} {...props} />;
};

Caption.defaultProps = {
    tag: 'span',
};

export default Caption;
