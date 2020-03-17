import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ContentSection.module.scss';
import SectionTitle from '../typography/SectionTitle/SectionTitle';

const ContentSection = ({ messageId, variant, children, className, containerClassName }) => {
    return (
        <div
            className={cn(styles.wrapper, styles[variant], containerClassName)}
            data-aos="fade-up"
            data-aos-offset="300"
        >
            <SectionTitle messageId={messageId} light={variant === 'primary'} />
            <div className={cn(styles.contentWrapper, className)}>{children}</div>
        </div>
    );
};

ContentSection.propTypes = {
    messageId: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['blank', 'primary']),
    children: PropTypes.node.isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    containerClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

ContentSection.defaultProps = {
    variant: 'blank',
};

export default ContentSection;
