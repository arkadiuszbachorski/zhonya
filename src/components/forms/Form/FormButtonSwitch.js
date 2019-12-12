import React from 'react';
import PropTypes from 'prop-types';
import ButtonCreate from '../../buttons/ButtonCreate/ButtonCreate';
import ButtonEdit from '../../buttons/ButtonEdit/ButtonEdit';

const FormButtonSwitch = ({ variant, loading }) => {
    switch (variant) {
        case 'create':
            return <ButtonCreate disabled={loading} type="submit" />;
        case 'edit':
            return <ButtonEdit disabled={loading} type="submit" />;
        case 'delete':
            // todo: Button with confirmation component
            return '';
        default:
            return null;
    }
};

FormButtonSwitch.propTypes = {
    variant: PropTypes.oneOf(['create', 'edit', 'delete']).isRequired,
    loading: PropTypes.bool,
};

FormButtonSwitch.defaultProps = {
    loading: false,
};

export default FormButtonSwitch;
