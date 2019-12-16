import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../logos/Logo/Logo';
import styles from './Loading.module.scss';
import Container from '../../Container/Container';

const Loading = ({ loading, children }) => {
    if (loading) {
        return (
            <Container variant={['marginTopLarge', 'center']}>
                <Logo linkClassName={styles.link} className={styles.loading} />
            </Container>
        );
    }

    return children;
};

Loading.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node,
};

Loading.defaultProps = {
    loading: false,
    children: null,
};

export default Loading;
