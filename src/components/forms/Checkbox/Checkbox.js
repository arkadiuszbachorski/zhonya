import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Checkbox.module.scss';
import Label from '../Label/Label';
import Errors from '../Errors/Errors';
import Group from '../Group/Group';

const Checkbox = ({
    onChange,
    disabled,
    value,
    className,
    name,
    id,
    labelId,
    label,
    errors,
    groupSize,
    radio,
    finalValue,
    checked,
}) => {
    const parsedId = id || name;

    const type = radio ? 'radio' : 'checkbox';

    return (
        <Group
            groupSize={groupSize}
            className={cn([
                styles.group,
                errors.length > 0 ? styles.hasErrors : null,
                radio ? styles.radio : null,
                className,
            ])}
        >
            <input
                type={type}
                onChange={onChange}
                disabled={disabled}
                checked={finalValue ? finalValue === value : checked}
                name={name}
                id={parsedId}
                value={value}
            />
            <Label labelId={labelId} id={parsedId} label={label} />
            <Errors errors={errors} />
        </Group>
    );
};

Checkbox.propTypes = {
    radio: PropTypes.bool,
    onChange: PropTypes.func,
    groupSize: PropTypes.oneOf(['large', 'small']),
    disabled: PropTypes.bool,
    value: PropTypes.string,
    checked: PropTypes.bool,
    finalValue: PropTypes.bool,
    labelId: PropTypes.string,
    label: PropTypes.node,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    errors: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
};

Checkbox.defaultProps = {
    radio: false,
    onChange: null,
    disabled: false,
    className: null,
    errors: [],
    id: null,
    groupSize: null,
    labelId: null,
    label: null,
    value: undefined,
    checked: undefined,
    finalValue: undefined,
};

export default Checkbox;
