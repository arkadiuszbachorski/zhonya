import firstLetterUppercase from '../firstLetterUppercase';

describe('utility - firstLetterUppercase', () => {
    it('makes first letter uppercase', () => {
        expect(firstLetterUppercase('lorem')).toBe('Lorem');
    });
});
