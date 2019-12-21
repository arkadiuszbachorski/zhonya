import pick from '../pick';

const object = {
    lorem: '1',
    ipsum: '2',
    sir: '3',
    dolor: '4',
};

describe('utility - pick', () => {
    it('gets wanted property from object', () => {
        const pickedFromObject = pick(object, ['dolor', 'sir']);

        expect(pickedFromObject).toStrictEqual({
            sir: '3',
            dolor: '4',
        });
    });

    it('doesnt throw errors if property doesnt exist', () => {
        const pickedFromObject = pick(object, ['ghost']);

        expect(pickedFromObject).toStrictEqual({});
    });
});
