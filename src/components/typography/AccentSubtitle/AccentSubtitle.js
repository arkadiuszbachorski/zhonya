import React from 'react';
import Typography from '../Typography/Typography';

const AccentSubtitle = props => {
    return <Typography variants={['small', 'noMargin', 'uppercase', 'weightLight', 'muted']} {...props} />;
};

AccentSubtitle.defaultProps = {
    tag: 'h3',
};

export default AccentSubtitle;
