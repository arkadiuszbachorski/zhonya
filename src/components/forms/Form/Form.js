import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, noPrevent, children, className }) => {
    let handleSubmit = e => {
        e.preventDefault();
        onSubmit(e);
    };
    if (noPrevent) {
        handleSubmit = onSubmit;
    }
    return (
        <form onSubmit={handleSubmit} className={className}>
            {children}
        </form>
    );
};

Form.propTypes = {
    noPrevent: PropTypes.bool,
    onSubmit: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
};

Form.defaultProps = {
    noPrevent: false,
    className: null,
    onSubmit: undefined,
};

export default Form;
