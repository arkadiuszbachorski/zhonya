import roundTo from '../roundTo';

describe('utility - roundTo', () => {
    it('rounds correctly', () => {
        expect(roundTo(1.005, 2)).toBe(1.01);
        expect(roundTo(52.93)).toBe(53);
        expect(roundTo(52.93, 1)).toBe(52.9);
        expect(roundTo(1004.99, 1)).toBe(1005);
        expect(roundTo(192, -1)).toBe(190);
        expect(roundTo(192, -2)).toBe(200);
    });
});
