import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ inverted }) => (
    <svg width="121" height="147" viewBox="0 0 121 147" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M45.1142 55.0625L36.0914 44.25L5.47656 7.56283C3.3029 4.95802 5.15509 1 8.54771 1H112.452C115.845 1 117.697 4.95801 115.523 7.56282L78.5 51.9298L39.25 98.9649L5.47656 139.437C3.30289 142.042 5.15509 146 8.54771 146H112.452C115.845 146 117.697 142.042 115.523 139.437L75.5207 91.5L71.0093 86.0938L66.4978 80.6875"
            stroke={inverted ? 'white' : 'black'}
            strokeWidth="2"
        />
    </svg>
);

Logo.propTypes = {
    inverted: PropTypes.bool,
};

Logo.defaultProps = {
    inverted: false,
};

export default Logo;
