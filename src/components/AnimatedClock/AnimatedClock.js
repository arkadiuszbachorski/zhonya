import React from 'react';
import PropTypes from 'prop-types';
import styles from './AnimatedClock.module.scss';
import useInterval from '../../hooks/useInterval';

const AnimatedClock = ({ transitionTime }) => {
    const [counter] = useInterval(transitionTime);

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
