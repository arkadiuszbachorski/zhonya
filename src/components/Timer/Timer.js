import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styles from './Timer.module.scss';
import AccentSubtitle from '../typography/AccentSubtitle/AccentSubtitle';
import digitalTimer from '../../utils/digitalTimer';

const Timer = ({ time }) => {
    const { days, hours, seconds, minutes } = digitalTimer(time);
    return (
        <div className={styles.wrapper}>
            {time >= 86400 && (
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
            {time >= 3600 && (
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
            {time >= 60 && (
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
