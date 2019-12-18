import objectParser from './objectParser';

const nullToEmptyString = object => objectParser(object, value => (value === null ? '' : value));

export default nullToEmptyString;
