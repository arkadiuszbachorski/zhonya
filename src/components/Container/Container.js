import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Container.module.scss';

const Container = ({ children, variant }) => {
    return <div className={cn(styles.container, ...variant.map(item => styles[item]))}>{children}</div>;
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.arrayOf(PropTypes.oneOf(['center', 'smallItems', 'marginTopLarge'])).isRequired,
};

export default Container;
