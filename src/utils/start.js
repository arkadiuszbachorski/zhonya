const start = (string, startString) => {
    if (!string.startsWith(startString)) {
        return `${startString}${string}`;
    }

    return string;
};

export default start;
