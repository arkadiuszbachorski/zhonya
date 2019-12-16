const nullToEmptyString = object => {
    const newObject = {};
    Object.keys(object).forEach(key => {
        const value = object[key];
        newObject[key] = value === null ? '' : value;
    });

    return newObject;
};

export default nullToEmptyString;
