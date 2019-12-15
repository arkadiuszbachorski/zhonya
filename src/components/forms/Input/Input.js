import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Input.module.scss';
import Label from '../Label/Label';
import Errors from '../Errors/Errors';
import Group from '../Group/Group';
import ColorPill from '../../ColorPill/ColorPill';

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
    label,
    icon,
    errors,
    groupSize,
    children,
}) => {
    const parsedId = id || name;

    let inputAttrs = {
        onChange,
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
        <Group
            value={value}
            groupSize={groupSize}
            className={[
                styles.group,
                value ? styles.active : null,
                errors.length > 0 ? styles.hasErrors : null,
                type === 'color' ? styles.color : null,
                className,
            ]}
        >
            {children}
            {icon && <FontAwesomeIcon icon={icon} />}
            <Label labelId={labelId} id={parsedId} label={label} />
            {input}
            {type === 'color' && (
                <>
                    <span className={styles.colorCode}>{value}</span>
                    <ColorPill className={styles.colorPill} color={value} />
                </>
            )}
            <Errors errors={errors} />
        </Group>
    );
};

Input.propTypes = {
    onChange: PropTypes.func,
    groupSize: PropTypes.oneOf(['large', 'small']),
    type: PropTypes.oneOf(['text', 'password', 'color']),
    textarea: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    value: PropTypes.string.isRequired,
    labelId: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.object]),
    errors: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    children: PropTypes.node,
};

Input.defaultProps = {
    children: undefined,
    onChange: null,
    type: 'text',
    textarea: false,
    disabled: false,
    readOnly: false,
    className: null,
    errors: [],
    icon: null,
    id: null,
    groupSize: null,
    labelId: null,
    label: null,
};

export default Input;
