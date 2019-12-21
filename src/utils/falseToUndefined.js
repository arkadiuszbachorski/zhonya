import objectParser from './objectParser';

const falseToUndefined = object => objectParser(object, value => (value === false ? undefined : value));

export default falseToUndefined;
