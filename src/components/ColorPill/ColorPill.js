import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ColorPill.module.scss';

const ColorPill = ({ color, variant, className }) => {
    return (
        <div
            className={cn(styles.pill, variant ? styles[variant] : null, className)}
            style={{ '--pillColor': color }}
        />
    );
};

ColorPill.propTypes = {
    color: PropTypes.string,
    variant: PropTypes.oneOf(['horizontal']),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

ColorPill.defaultProps = {
    color: '#fff',
    className: undefined,
    variant: undefined,
};

export default ColorPill;
