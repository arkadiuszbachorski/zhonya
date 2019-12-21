import formattedRelativeTimeFromDate from '../formattedRelativeTimeCount';

describe('util - formattedRelativeTimeCount', () => {
    it('works', () => {
        const oldDate = new Date();
        oldDate.setSeconds(oldDate.getSeconds() + 5);

        const relativeTime = formattedRelativeTimeFromDate(oldDate);

        expect(relativeTime).toBe(5);
    });
});
