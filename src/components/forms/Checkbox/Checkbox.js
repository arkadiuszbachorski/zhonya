import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    icon,
    errors,
    groupSize,
    radio,
}) => {
    const parsedId = id || name;

    const type = radio ? 'radio' : 'checkbox';

    return (
        <Group
            value={value}
            groupSize={groupSize}
            className={[
                styles.group,
                value ? styles.checked : null,
                errors.length > 0 ? styles.hasErrors : null,
                radio ? styles.radio : null,
                className,
            ]}
        >
            <input type={type} onChange={onChange} disabled={disabled} name={name} id={parsedId} />
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
    value: PropTypes.string.isRequired,
    labelId: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.object]),
    errors: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

Checkbox.defaultProps = {
    radio: false,
    onChange: null,
    disabled: false,
    className: null,
    errors: [],
    icon: null,
    id: null,
    groupSize: null,
    labelId: null,
    label: null,
};

export default Checkbox;
