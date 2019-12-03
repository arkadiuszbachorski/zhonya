import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Input.module.scss';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ onChange, disabled, readOnly, textarea, type, value, className, name, id, label, icon, errors }) => {
    const parsedId = id || name;

    let inputAttrs = {
        onChange,
        className,
        disabled,
        readOnly,
        name,
        id: parsedId,
    };

    let input;

    if (textarea) {
        input = <textarea {...inputAttrs}>{value}</textarea>;
    } else {
        inputAttrs = { ...inputAttrs, type, value };
        input = <input {...inputAttrs} />;
    }

    return (
        <div className={cn(styles.group, value ? styles.active : null, className)}>
            {icon && <FontAwesomeIcon icon={icon} />}
            <label htmlFor={parsedId}>
                <FormattedMessage id={label} />
            </label>
            {input}
            {errors &&
                errors.map(item => (
                    <span key={item} className={styles.error}>
                        {item}
                    </span>
                ))}
        </div>
    );
};

Input.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.oneOf(['text']),
    textarea: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
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
    name: null,
    errors: [],
    icon: null,
};

export default Input;
