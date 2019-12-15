import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const FormattedOrChildren = ({ children, messageId }) => {
    if (children) {
        return children;
    }

    return <FormattedMessage id={messageId} />;
};

FormattedOrChildren.propTypes = {
    children: PropTypes.node,
    messageId: PropTypes.string,
};

FormattedOrChildren.defaultProps = {
    children: null,
    messageId: null,
};

export default FormattedOrChildren;
