import React from 'react';
import Typography from '../Typography/Typography';

const Active = props => {
    return <Typography variants={['primary', 'lowercase']} {...props} />;
};

Active.defaultProps = {
    tag: 'span',
};

export default Active;
