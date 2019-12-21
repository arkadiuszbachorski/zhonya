import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../logos/Logo/Logo';
import styles from './Loading.module.scss';

const Loading = ({ loading }) => {
    if (loading) {
        return <Logo linkClassName={styles.link} className={styles.loading} />;
    }

    return null;
};

Loading.propTypes = {
    loading: PropTypes.bool,
};

Loading.defaultProps = {
    loading: false,
};

export default Loading;
