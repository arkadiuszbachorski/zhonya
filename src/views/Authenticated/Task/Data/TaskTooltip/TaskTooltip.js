import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskTooltip.module.scss';
import Time from '../../../../../components/Time/Time';
import DateDisplay from '../../../../../components/DateDisplay/DateDisplay';

const TaskTooltip = ({ active, payload }) => {
    if (active) {
        const item = payload[0].payload;
        return (
            <div className={styles.container}>
                <p className={styles.time}>
                    <Time time={item.relative_time} cutMeaninglessData />
                </p>
                <p className={styles.description}>{item.short_description}</p>
                <p className={styles.date}>
                    <DateDisplay date={item.updated_at} preference="short" />
                </p>
            </div>
        );
    }

    return null;
};

TaskTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.oneOfType([PropTypes.array]),
};

TaskTooltip.defaultProps = {
    active: false,
    payload: [],
};

export default TaskTooltip;
