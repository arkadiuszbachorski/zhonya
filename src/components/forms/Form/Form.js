import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import LoadingOverlay from '../../loading/LoadingOverlay/LoadingOverlay';
import styles from './Form.module.scss';

const Form = ({ onSubmit, noPrevent, children, className, loading }) => {
    let handleSubmit = e => {
        e.preventDefault();
        onSubmit(e);
    };
    if (noPrevent) {
        handleSubmit = onSubmit;
    }
    return (
        <form onSubmit={handleSubmit} className={cs(styles.form, className)}>
            <LoadingOverlay loading={loading} />
            {children}
        </form>
    );
};

Form.propTypes = {
    noPrevent: PropTypes.bool,
    onSubmit: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    loading: PropTypes.bool,
};

Form.defaultProps = {
    noPrevent: false,
    className: null,
    onSubmit: undefined,
    loading: false,
};

export default Form;
