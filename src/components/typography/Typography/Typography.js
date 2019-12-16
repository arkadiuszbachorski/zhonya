import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styles from './Typography.module.scss';
import cn from 'classnames';

const Typography = ({ tag, children, messageId, variants, className }) => {
    const Tag = tag;
    const variantsStyled = variants.map(item => styles[item]);

    if (children) {
        return <Tag className={cn(variantsStyled, className)}>{children}</Tag>;
    }

    return (
        <Tag className={cn(variantsStyled, className)}>
            <FormattedMessage id={messageId} />
        </Tag>
    );
};

Typography.propTypes = {
    variants: PropTypes.arrayOf(
        PropTypes.oneOf([
            'uppercase',
            'muted',
            'center',
            'medium',
            'small',
            'noMargin',
            'weightNormal',
            'weightLight',
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
    children: null,
    messageId: null,
    className: null,
};

export default Typography;
