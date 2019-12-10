import React from 'react';
import Typography from '../Typography/Typography';

const AccentTitle = props => {
    return <Typography variants={['muted', 'center', 'medium', 'weightNormal', 'subtleSpacing']} {...props} />;
};

AccentTitle.defaultProps = {
    tag: 'h3',
};

export default AccentTitle;
