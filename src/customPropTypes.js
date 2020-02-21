import PropTypes from 'prop-types';

export default {
    fontAwesomeIcon: PropTypes.shape({
        prefix: PropTypes.string,
        iconName: PropTypes.string,
        icon: PropTypes.array,
    }),
};
