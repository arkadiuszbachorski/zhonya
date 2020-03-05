import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Typography from '../Typography/Typography';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ light, ...restProps }) => {
    return <Typography className={cn(styles.sectionTitle, light ? styles.light : null)} {...restProps} />;
};

SectionTitle.propTypes = {
    light: PropTypes.bool,
};

SectionTitle.defaultProps = {
    light: false,
    tag: 'h3',
};

export default SectionTitle;
