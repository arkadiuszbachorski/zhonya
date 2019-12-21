const formattedRelativeTimeFromDate = time => {
    return (new Date(time).getTime() - new Date().getTime()) / 1000;
};

export default formattedRelativeTimeFromDate;
