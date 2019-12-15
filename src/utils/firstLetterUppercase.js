const firstLetterUppercase = string => {
    const firstLetter = string.slice(0, 1).toUpperCase();
    const rest = string.slice(1);

    return firstLetter + rest;
};

export default firstLetterUppercase;
