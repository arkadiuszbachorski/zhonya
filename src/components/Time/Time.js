import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import secondsToTime from '../../utils/secondsToTime';
import styles from './Time.module.scss';
import useTimePreference, { availableTimePreferences } from '../../hooks/useTimePreference';

const Time = ({ time, timePreference, cutMeaninglessData }) => {
    const [savedTimePreference] = useTimePreference();
    const finalTimePreference = timePreference || savedTimePreference;
    const { days, hours, seconds, minutes } = secondsToTime(time, finalTimePreference === 'short');

    const suffixIfMedium = element => `${element}${finalTimePreference === 'medium' ? '.medium' : ''}`;

    if (finalTimePreference === 'short') {
        return (
            <span className={styles.time}>
                {time >= 86400 && <>{days}:</>}
                {time >= 3600 && <>{hours}:</>}
                {minutes}:{seconds}
            </span>
        );
    }

    const cutIfLesserThan = value => {
        if (cutMeaninglessData) {
            return time < value;
        }

        return true;
    };

    return (
        <span className={styles.time}>
            {time >= 86400 && (
                <>
                    {days}
                    <FormattedMessage id={suffixIfMedium('timer.days')} values={{ value: days }} />
                </>
            )}
            {time >= 3600 && (
                <>
                    {hours}
                    <FormattedMessage id={suffixIfMedium('timer.hours')} values={{ value: hours }} />
                </>
            )}
            {time >= 60 && cutIfLesserThan(86400) && (
                <>
                    {minutes}
                    <FormattedMessage id={suffixIfMedium('timer.minutes')} values={{ value: minutes }} />
                </>
            )}
            {cutIfLesserThan(3600) && (
                <>
                    {seconds}
                    <FormattedMessage id={suffixIfMedium('timer.seconds')} values={{ value: seconds }} />
                </>
            )}
        </span>
    );
};

Time.propTypes = {
    time: PropTypes.number.isRequired,
    cutMeaninglessData: PropTypes.bool,
    timePreference: PropTypes.oneOf(availableTimePreferences),
};

Time.defaultProps = {
    timePreference: null,
    cutMeaninglessData: false,
};

export default Time;
