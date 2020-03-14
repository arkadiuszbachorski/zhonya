import Params from '../Params';

const init = {
    lorem: '',
    ipsum: false,
};

const newParams = {
    lorem: 'search',
    ipsum: false,
};

const params = new Params(init);

describe('utility - Params', () => {
    it('returns default parameters', () => {
        expect(params.default()).toEqual(init);
    });

    it('changes default value to undefined (to prevent sending them to API)', () => {
        const parsedParams = params.prepare(newParams);

        expect(parsedParams.lorem).not.toBeUndefined();
        expect(parsedParams.ipsum).toBeUndefined();
    });

    it('merges parsed params with second merge object', () => {
        const parsedParams = params.prepare(newParams, {
            ipsum: false,
            dolor: 'testing',
        });

        expect(parsedParams.lorem).not.toBeUndefined();
        expect(parsedParams.ipsum).not.toBeUndefined();
        expect(parsedParams.dolor).not.toBeUndefined();
    });

    it('checks if something has changed', () => {
        expect(params.hasChanged(newParams)).toBe(true);
        expect(params.hasChanged(init)).toBe(false);
    });
});
