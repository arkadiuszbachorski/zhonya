import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Typography.module.scss';
import FormattedOrChildren from '../../FormattedOrChildren/FormattedOrChildren';

const Typography = ({ tag, children, messageId, variants, className }) => {
    const Tag = tag;
    const variantsStyled = variants.map(item => styles[item]);

    return (
        <Tag className={cn(variantsStyled, className)}>
            <FormattedOrChildren messageId={messageId}>{children}</FormattedOrChildren>
        </Tag>
    );
};

Typography.propTypes = {
    variants: PropTypes.arrayOf(
        PropTypes.oneOf([
            'primary',
            'muted',
            'uppercase',
            'lowercase',
            'center',
            'medium',
            'small',
            'noMargin',
            'weightNormal',
            'weightLight',
            'weightBold',
            'subtleSpacing',
        ]),
    ),
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
    children: PropTypes.node,
    messageId: PropTypes.string,
    className: PropTypes.string,
};

Typography.defaultProps = {
    variants: [],
    tag: 'h1',
};

export default Typography;
