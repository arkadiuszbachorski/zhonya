const secondsInDay = 86400;
const secondsInHour = 3600;
const secondsInMinute = 60;

const timeToSeconds = (days, hours, minutes, seconds) => {
    return (
        (parseInt(days, 10) || 0) * secondsInDay +
        (parseInt(hours, 10) || 0) * secondsInHour +
        (parseInt(minutes, 10) || 0) * secondsInMinute +
        (parseInt(seconds, 10) || 0)
    );
};

export default timeToSeconds;
