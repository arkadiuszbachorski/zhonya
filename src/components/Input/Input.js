import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Input.module.scss';

const Input = ({
    onChange,
    disabled,
    readOnly,
    textarea,
    type,
    value,
    className,
    name,
    id,
    labelId,
    icon,
    errors,
    groupSize,
}) => {
    const parsedId = id || name;

    let inputAttrs = {
        onChange,
        className,
        disabled,
        readOnly,
        name,
        id: parsedId,
    };

    const hasErrors = errors.length > 0;

    let input;

    if (textarea) {
        input = <textarea {...inputAttrs}>{value}</textarea>;
    } else {
        inputAttrs = { ...inputAttrs, type, value };
        input = <input {...inputAttrs} />;
    }

    return (
        <div
            className={cn(
                styles.group,
                value ? styles.active : null,
                className,
                hasErrors ? styles.hasErrors : null,
                groupSize ? styles.groupLarge : null,
            )}
        >
            {icon && <FontAwesomeIcon icon={icon} />}
            <label htmlFor={parsedId}>
                <FormattedMessage id={labelId} />
            </label>
            {input}
            {hasErrors &&
                errors.map(item => (
                    <div key={item} className={styles.error}>
                        {item}
                    </div>
                ))}
        </div>
    );
};

Input.propTypes = {
    onChange: PropTypes.func,
    groupSize: PropTypes.oneOf(['large', 'small']),
    type: PropTypes.oneOf(['text', 'password']),
    textarea: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    value: PropTypes.string.isRequired,
    labelId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.object]),
    errors: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

Input.defaultProps = {
    onChange: () => {},
    type: 'text',
    textarea: false,
    disabled: false,
    readOnly: false,
    className: null,
    errors: [],
    icon: null,
    id: null,
    groupSize: null,
};

export default Input;
