import PropTypes from 'prop-types';

export default {
    fontAwesomeIcon: PropTypes.shape({
        prefix: PropTypes.string,
        iconName: PropTypes.string,
        icon: PropTypes.array,
    }),
    errors: props => {
        const newProps = {};
        Object.entries(props).forEach(entries => {
            const [key, value] = entries;
            newProps[key] = PropTypes.arrayOf(value);
        });
        return PropTypes.shape(newProps);
    },
};
