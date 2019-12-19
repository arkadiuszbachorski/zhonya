import objectParser from '../objectParser';

const obj = {
    lorem: 'test',
    ipsum: 'test',
};

describe('utility - objectParser', () => {
    it('iterates through object values and sets it value', () => {
        const newObj = objectParser(obj, () => 'new');
        expect(newObj).toStrictEqual({
            lorem: 'new',
            ipsum: 'new',
        });
    });

    it('injects value to function', () => {
        const newObj = objectParser(obj, value => `${value}new`);
        expect(newObj).toStrictEqual({
            lorem: 'testnew',
            ipsum: 'testnew',
        });
    });
});
