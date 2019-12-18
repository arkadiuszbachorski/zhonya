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
});
