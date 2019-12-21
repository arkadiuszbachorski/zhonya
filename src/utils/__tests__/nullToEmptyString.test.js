import nullToEmptyString from '../nullToEmptyString';

const object = {
    lorem: null,
    ipsum: '',
    dolor: 'value',
};

describe('utility - nullToEmptyString', () => {
    it('converts properly', () => {
        expect(nullToEmptyString(object)).toStrictEqual({
            lorem: '',
            ipsum: '',
            dolor: 'value',
        });
    });
});
