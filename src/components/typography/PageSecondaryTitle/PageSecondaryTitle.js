import React from 'react';
import Typography from '../Typography/Typography';

const PageSecondaryTitle = props => {
    return <Typography variants={['small', 'noMargin', 'uppercase', 'weightLight', 'muted']} {...props} />;
};

PageSecondaryTitle.defaultProps = {
    tag: 'h3',
};

export default PageSecondaryTitle;
