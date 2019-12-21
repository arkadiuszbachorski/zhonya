import emptyStringToUndefined from '../emptyStringToUndefined';

const object = {
    lorem: null,
    ipsum: '',
    dolor: 'value',
};

describe('utility - emptyStringToUndefined', () => {
    it('converts properly', () => {
        expect(emptyStringToUndefined(object)).toStrictEqual({
            lorem: null,
            ipsum: undefined,
            dolor: 'value',
        });
    });
});
