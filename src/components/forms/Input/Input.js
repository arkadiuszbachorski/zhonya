import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import Label from '../Label/Label';
import Errors from '../Errors/Errors';
import Group from '../Group/Group';
import ColorPill from '../../ColorPill/ColorPill';
import InputIcon from '../InputIcon/InputIcon';
import customPropTypes from '../../../customPropTypes';

const DEFAULT_VALUE = '!@#default_value000X000X0000123123123';

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
    select,
    options,
}) => {
    const typeColor = type === 'color';
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
        input = <textarea {...inputAttrs} value={value} />;
    } else if (select) {
        input = {
            ...inputAttrs,
            value,
        };
        input = (
            <select {...inputAttrs} defaultValue={DEFAULT_VALUE}>
                <option hidden style={{ display: 'none' }} value={DEFAULT_VALUE} />
                {options.map(option => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    } else {
        if (typeColor) {
            inputAttrs.value = inputAttrs.value || '#ffffff';
        }
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
                typeColor ? styles.color : null,
                input ? styles.hasIcon : null,
                textarea ? styles.isTextarea : null,
                className,
            ]}
        >
            {children}
            <InputIcon icon={icon} select={select} />
            <Label labelId={labelId} id={parsedId} label={label} />
            {input}
            {typeColor && (
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
    icon: customPropTypes.fontAwesomeIcon,
    errors: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    children: PropTypes.node,
    select: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any,
            label: PropTypes.any,
        }),
    ),
};

Input.defaultProps = {
    children: null,
    onChange: null,
    type: 'text',
    textarea: false,
    disabled: false,
    readOnly: false,
    select: false,
    className: null,
    errors: [],
    icon: null,
    id: null,
    groupSize: null,
    labelId: null,
    label: null,
    options: [],
};

export default Input;
