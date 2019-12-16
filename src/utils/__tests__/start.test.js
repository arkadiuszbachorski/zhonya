import start from '../start';

describe('utility - start', () => {
    it('does nothing when string starts with wanted string', () => {
        expect(start('#ff0000', '#')).toBe('#ff0000');
    });

    it('adds wanted string to start when doesnt string start with wanted string', () => {
        expect(start('ff0000', '#')).toBe('#ff0000');
    });
});
