import randomInteger from '../randomInteger';

describe('utility - randomInteger', () => {
    it('returns integer', () => {
        const random = randomInteger(1, 5);

        expect(random % 1).toBe(0);
    });

    it('returns including and excluding number', () => {
        const random = randomInteger(2, 2);

        expect(random).toBe(2);
    });
});
