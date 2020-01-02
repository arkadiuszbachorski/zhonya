const secondsInDay = 86400;
const secondsInHour = 3600;
const secondsInMinute = 60;

const addZeroBefore = value => (value < 10 ? `0${value}` : value);

const digitalTimer = time => {
    let workTime = time;

    const days = Math.floor(workTime / secondsInDay);
    workTime -= days * secondsInDay;

    const hours = addZeroBefore(Math.floor(workTime / secondsInHour));
    workTime -= hours * secondsInHour;

    const minutes = addZeroBefore(Math.floor(workTime / secondsInMinute));
    workTime -= minutes * secondsInMinute;

    const seconds = addZeroBefore(workTime);

    return { days, hours, minutes, seconds };
};

export default digitalTimer;
