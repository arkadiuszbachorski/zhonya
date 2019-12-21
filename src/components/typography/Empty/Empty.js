import React from 'react';
import Typography from '../Typography/Typography';

const Empty = props => {
    return <Typography variants={['muted', 'center', 'weightLight', 'subtleSpacing']} {...props} />;
};

Empty.defaultProps = {
    tag: 'p',
};

export default Empty;
