import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../Container/Container';
import Loading from '../Loading/Loading';

const LoadingOrChildren = ({ loading, children }) => {
    if (loading) {
        return (
            <Container variant={['marginTopLarge', 'center']}>
                <Loading />
            </Container>
        );
    }

    return children;
};

LoadingOrChildren.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node,
};

LoadingOrChildren.defaultProps = {
    loading: false,
    children: null,
};

export default LoadingOrChildren;
