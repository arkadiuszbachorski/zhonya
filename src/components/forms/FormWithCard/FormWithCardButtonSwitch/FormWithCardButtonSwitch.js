import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ButtonCreate from '../../../buttons/ButtonCreate/ButtonCreate';
import ButtonEdit from '../../../buttons/ButtonEdit/ButtonEdit';
import styles from './FormWithCardButtonSwitch.module.scss';
import ButtonWithConfirmation from '../../../buttons/ButtonWithConfirmation/ButtonWithConfirmation';

const FormWithCardButtonSwitch = ({ variant, loading }) => {
    switch (variant) {
        case 'create':
            return <ButtonCreate className={cn(styles.right, styles.margin)} disabled={loading} type="submit" />;
        case 'edit':
            return <ButtonEdit className={cn(styles.right, styles.margin)} disabled={loading} type="submit" />;
        case 'delete':
            return <ButtonWithConfirmation className={styles.margin} loading={loading} />;
        default:
            return null;
    }
};

FormWithCardButtonSwitch.propTypes = {
    variant: PropTypes.oneOf(['create', 'edit', 'delete']).isRequired,
    loading: PropTypes.bool,
};

FormWithCardButtonSwitch.defaultProps = {
    loading: false,
};

export default FormWithCardButtonSwitch;
