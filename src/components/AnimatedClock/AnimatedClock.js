import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AnimatedClock.module.scss';

const AnimatedClock = ({ transitionTime }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const clockInterval = setInterval(() => {
            setCounter(counter => counter + 1);
        }, transitionTime);

        return () => clearInterval(clockInterval);
    }, []);

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
