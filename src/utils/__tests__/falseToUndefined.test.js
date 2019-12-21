import falseToUndefined from '../falseToUndefined';

const object = {
    lorem: true,
    ipsum: '',
    dolor: false,
};

describe('utility - falseToUndefined', () => {
    it('converts properly', () => {
        expect(falseToUndefined(object)).toStrictEqual({
            lorem: true,
            ipsum: '',
            dolor: undefined,
        });
    });
});
