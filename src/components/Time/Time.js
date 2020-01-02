import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import secondsToTime from '../../utils/secondsToTime';
import styles from './Time.module.scss';

const Time = ({ time }) => {
    const { days, hours, seconds, minutes } = secondsToTime(time, false);
    return (
        <span className={styles.time}>
            {time >= 86400 && (
                <>
                    {days}
                    &nbsp;
                    <FormattedMessage id="timer.days" values={{ value: days }} />{' '}
                </>
            )}
            {time >= 3600 && (
                <>
                    {hours}
                    &nbsp;
                    <FormattedMessage id="timer.hours" values={{ value: hours }} />{' '}
                </>
            )}
            {time >= 60 && (
                <>
                    {minutes}
                    &nbsp;
                    <FormattedMessage id="timer.minutes" values={{ value: minutes }} />{' '}
                </>
            )}
            {seconds}
            &nbsp;
            <FormattedMessage id="timer.seconds" values={{ value: seconds }} />
        </span>
    );
};

Time.propTypes = {
    time: PropTypes.number.isRequired,
};

export default Time;
