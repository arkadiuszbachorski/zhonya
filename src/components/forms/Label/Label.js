import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Label = ({ id, labelId, label }) => {
    if (labelId) {
        return (
            <label htmlFor={id}>
                <FormattedMessage id={labelId} />
            </label>
        );
    }

    return <label htmlFor={id}>{label}</label>;
};

Label.propTypes = {
    id: PropTypes.string,
    labelId: PropTypes.string,
    label: PropTypes.string,
};

Label.defaultProps = {
    id: null,
    labelId: null,
    label: null,
};

export default Label;
