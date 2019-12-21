import objectParser from './objectParser';

const emptyStringToUndefined = object => objectParser(object, value => (value === '' ? undefined : value));

export default emptyStringToUndefined;
