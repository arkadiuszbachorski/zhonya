import React from 'react';
import PropTypes from 'prop-types';
import useStatisticsPreference from '../../../../../hooks/useStatisticsPreference';
import Time from '../../../../../components/Time/Time';

const TimeWithStatisticPreference = ({ time }) => {
    const {
        statisticsPreference: { cutMeaninglessData, showSeconds },
    } = useStatisticsPreference();

    if (showSeconds) {
        return `${time}s`;
    }

    return <Time time={time} cutMeaninglessData={cutMeaninglessData} />;
};

TimeWithStatisticPreference.propTypes = {
    time: PropTypes.number,
};

TimeWithStatisticPreference.defaultProps = {
    time: 0,
};

export default TimeWithStatisticPreference;
