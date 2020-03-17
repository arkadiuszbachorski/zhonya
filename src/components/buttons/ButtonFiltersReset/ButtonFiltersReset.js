import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import styles from './ButtonFiltersReset.module.scss';

const ButtonFiltersReset = ({ className, visible, ...restProps }) => (
    <ButtonDelete
        className={cn(className, styles.button, visible ? styles.visible : null)}
        size="xsmall"
        {...restProps}
    />
);

ButtonFiltersReset.propTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool,
};

export default ButtonFiltersReset;
