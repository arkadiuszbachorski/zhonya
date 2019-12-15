import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../forms/Checkbox/Checkbox';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

const ButtonWithConfirmation = ({ loading, className }) => {
    const [confirmed, setConfirmed] = useState(false);
    return (
        <>
            <Checkbox
                value="confirmed"
                labelId="deleteConfirmation"
                name="confirmed"
                onChange={e => setConfirmed(e.target.checked)}
            />
            <ButtonDelete type="submit" disabled={!confirmed || loading} className={className} />
        </>
    );
};

ButtonWithConfirmation.propTypes = {
    loading: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

ButtonWithConfirmation.defaultProps = {
    loading: false,
    className: undefined,
};

export default ButtonWithConfirmation;
