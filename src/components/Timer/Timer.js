import React from 'react';
import PropTypes from 'prop-types';
import styles from './Timer.module.scss';
import AccentSubtitle from '../typography/AccentSubtitle/AccentSubtitle';
import { FormattedMessage } from 'react-intl';

const secondsInDay = 86400;
const secondsInHour = 3600;
const secondsInMinute = 60;

const addZeroBefore = value => (value < 10 ? `0${value}` : value);

const Timer = ({ time }) => {
    let workTime = time;

    const days = Math.floor(workTime / secondsInDay);
    workTime -= days * secondsInDay;

    const hours = addZeroBefore(Math.floor(workTime / secondsInHour));
    workTime -= hours * secondsInHour;

    const minutes = addZeroBefore(Math.floor(workTime / secondsInMinute));
    workTime -= minutes * secondsInMinute;

    const seconds = addZeroBefore(workTime);

    return (
        <div className={styles.wrapper}>
            {time >= secondsInDay && (
                <>
                    <div className={styles.unit}>
                        <div className={styles.value}>{days}</div>
                        <div className={styles.caption}>
                            <AccentSubtitle tag="span">
                                <FormattedMessage id="timer.days" values={{ value: days }} />
                            </AccentSubtitle>
                        </div>
                    </div>
                    <div className={styles.separator}>:</div>
                </>
            )}
            {time >= secondsInHour && (
                <>
                    <div className={styles.unit}>
                        <div className={styles.value}>{hours}</div>
                        <div className={styles.caption}>
                            <AccentSubtitle tag="span">
                                <FormattedMessage id="timer.hours" values={{ value: hours }} />
                            </AccentSubtitle>
                        </div>
                    </div>
                    <div className={styles.separator}>:</div>
                </>
            )}
            {time >= secondsInMinute && (
                <>
                    <div className={styles.unit}>
                        <div className={styles.value}>{minutes}</div>
                        <div className={styles.caption}>
                            <AccentSubtitle tag="span">
                                <FormattedMessage id="timer.minutes" values={{ value: minutes }} />
                            </AccentSubtitle>
                        </div>
                    </div>
                    <div className={styles.separator}>:</div>
                </>
            )}
            <div className={styles.unit}>
                <div className={styles.value}>{seconds}</div>
                <div className={styles.caption}>
                    <AccentSubtitle tag="span">
                        <FormattedMessage id="timer.seconds" values={{ value: seconds }} />
                    </AccentSubtitle>
                </div>
            </div>
        </div>
    );
};

Timer.propTypes = {
    time: PropTypes.number.isRequired,
};

export default Timer;
