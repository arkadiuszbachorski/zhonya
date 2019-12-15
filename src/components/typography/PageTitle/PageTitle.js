import React from 'react';
import Typography from '../Typography/Typography';

const PageTitle = props => {
    return <Typography variants={['medium', 'noMargin', 'weightLight']} {...props} />;
};

PageTitle.defaultProps = {
    tag: 'h2',
};

export default PageTitle;
