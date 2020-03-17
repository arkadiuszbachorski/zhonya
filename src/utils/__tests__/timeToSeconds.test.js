import timeToSeconds from '../timeToSeconds';

describe('utility - timeToSeconds', () => {
    it('parses values to seconds', () => {
        expect(timeToSeconds(1, 0, 0, 0)).toBe(86400);
        expect(timeToSeconds(0, 1, 0, 20)).toBe(3620);
        expect(timeToSeconds(0, 24, 3, 20)).toBe(86600);
    });

    it('asserts nulls are 0', () => {
        expect(timeToSeconds(1, null, null, 1)).toBe(86401);
    });
});
