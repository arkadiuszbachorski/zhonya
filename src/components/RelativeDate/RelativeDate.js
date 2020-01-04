import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelativeTime, useIntl } from 'react-intl';
import formattedRelativeTimeFromDate from '../../utils/formattedRelativeTimeCount';

const RelativeDate = ({ date }) => {
    const { formatDate } = useIntl();
    return (
        <span
            title={formatDate(date, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                weekday: 'long',
            })}
        >
            <FormattedRelativeTime
                value={formattedRelativeTimeFromDate(date)}
                numeric="auto"
                updateIntervalInSeconds={10}
            />
        </span>
    );
};

RelativeDate.propTypes = {
    date: PropTypes.string.isRequired,
};

export default RelativeDate;
