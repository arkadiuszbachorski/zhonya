import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelativeTime, useIntl } from 'react-intl';
import formattedRelativeTimeFromDate from '../../utils/formattedRelativeTimeCount';
import useDatePreference, { availableDatePreferences } from '../../hooks/useDatePreference';

const DateDisplay = ({ date, preference }) => {
    const tzDate = new Date(`${date} UTC`);
    const [savedPreference] = useDatePreference();
    const finalPreference = preference || savedPreference;
    const { formatDate } = useIntl();
    const long = formatDate(tzDate, {
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
                    value={formattedRelativeTimeFromDate(tzDate)}
                    numeric="auto"
                    updateIntervalInSeconds={10}
                />
            )}
            {finalPreference === 'short' &&
                formatDate(tzDate, {
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
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    preference: PropTypes.oneOf(availableDatePreferences),
};

DateDisplay.defaultProps = {
    preference: null,
};

export default DateDisplay;
