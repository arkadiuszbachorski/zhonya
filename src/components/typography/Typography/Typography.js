import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import cn from 'classnames';
import styles from './Typography.module.scss';

const Typography = ({ tag, children, messageId, variants, className }) => {
    const Tag = tag;
    const variantsStyled = variants.map(item => styles[item]);

    const tagChildren = children || <FormattedMessage id={messageId} />;

    return <Tag className={cn(variantsStyled, className)}>{tagChildren}</Tag>;
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
