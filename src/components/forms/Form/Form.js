import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onChange, noPrevent, children }) => {
    let handleChange = e => {
        e.preventDefault();
        onChange(e);
    };
    if (noPrevent) {
        handleChange = onChange;
    }
    return <form onChange={handleChange}>{children}</form>;
};

Form.propTypes = {
    noPrevent: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.string])
        .isRequired,
};

Form.defaultProps = {
    noPrevent: false,
};

export default Form;
