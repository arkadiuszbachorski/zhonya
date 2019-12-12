import React from 'react';
import PropTypes from 'prop-types';
import styles from './Errors.module.scss';

const Errors = ({ errors }) => {
    if (errors.length === 0) {
        return null;
    }

    return errors.map(item => (
        <div key={item} className={styles.error}>
            {item}
        </div>
    ));
};

Errors.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Errors;
