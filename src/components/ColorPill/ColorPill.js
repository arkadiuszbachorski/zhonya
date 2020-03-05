import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ColorPill.module.scss';
import start from '../../utils/start';

const ColorPill = ({ color, variant, className }) => {
    return (
        <div
            className={cn(styles.pill, variant ? styles[variant] : null, className)}
            style={{ '--pillColor': start(color, '#') }}
        />
    );
};

ColorPill.propTypes = {
    color: PropTypes.string,
    variant: PropTypes.oneOf(['horizontal', 'vertical']),
    className: PropTypes.string,
};

ColorPill.defaultProps = {
    color: '#fff',
    className: undefined,
    variant: undefined,
};

export default ColorPill;
