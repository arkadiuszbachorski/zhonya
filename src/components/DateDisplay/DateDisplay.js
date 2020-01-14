import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelativeTime, useIntl } from 'react-intl';
import formattedRelativeTimeFromDate from '../../utils/formattedRelativeTimeCount';
import useDatePreference, { availableDatePreferences } from '../../hooks/useDatePreference';

const DateDisplay = ({ date, preference }) => {
    const [savedPreference] = useDatePreference();
    const finalPreference = preference || savedPreference;
    const { formatDate } = useIntl();
    const long = formatDate(date, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        weekday: 'long',
    });

    return (
        <span title={long}>
            {finalPreference === 'relative' && (
                <FormattedRelativeTime
                    value={formattedRelativeTimeFromDate(date)}
                    numeric="auto"
                    updateIntervalInSeconds={10}
                />
            )}
            {finalPreference === 'short' &&
                formatDate(date, {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                })}
            {finalPreference === 'long' && long}
        </span>
    );
};

DateDisplay.propTypes = {
    date: PropTypes.string.isRequired,
    preference: PropTypes.oneOf(availableDatePreferences),
};

DateDisplay.defaultProps = {
    preference: null,
};

export default DateDisplay;
