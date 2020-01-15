import React from 'react';
import PropTypes from 'prop-types';
import styles from './AnimatedClock.module.scss';
import useIntervalCounter from '../../hooks/useIntervalCounter';
import randomInteger from '../../utils/randomInteger';

const AnimatedClock = ({ transitionTime }) => {
    const counter = useIntervalCounter(transitionTime, randomInteger(0, 3600));

    const style = {
        '--counter': counter,
        '--transitionTime': `${transitionTime}ms`,
    };

    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.handHours} />
            <div className={styles.handMinutes} />
        </div>
    );
};

AnimatedClock.defaultProps = {
    transitionTime: 500,
};

AnimatedClock.propTypes = {
    transitionTime: PropTypes.number,
};

export default AnimatedClock;
