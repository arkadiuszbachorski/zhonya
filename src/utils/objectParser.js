const objectParser = (object, func) => {
    const newObject = {};
    Object.keys(object).forEach(key => {
        const value = object[key];
        newObject[key] = func(value);
    });

    return newObject;
};

export default objectParser;
