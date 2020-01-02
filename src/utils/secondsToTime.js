const secondsInDay = 86400;
const secondsInHour = 3600;
const secondsInMinute = 60;

const addZeroBefore = value => (value < 10 ? `0${value}` : value);

const secondsToTime = (time, prefix = true) => {
    let workTime = time;

    const days = Math.floor(workTime / secondsInDay);
    workTime -= days * secondsInDay;

    let hours = Math.floor(workTime / secondsInHour);
    workTime -= hours * secondsInHour;

    let minutes = Math.floor(workTime / secondsInMinute);
    workTime -= minutes * secondsInMinute;

    let seconds = workTime;

    if (prefix) {
        hours = addZeroBefore(hours);
        minutes = addZeroBefore(minutes);
        seconds = addZeroBefore(seconds);
    }

    return { days, hours, minutes, seconds };
};

export default secondsToTime;
