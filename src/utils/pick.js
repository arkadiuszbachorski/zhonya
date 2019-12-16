const pick = (object, props) => {
    const newObject = {};
    props.forEach(prop => {
        if (Object.prototype.hasOwnProperty.call(object, prop)) {
            newObject[prop] = object[prop];
        }
    });

    return newObject;
};

export default pick;
