import digitalTimer from '../digitalTimer';

const seconds = 35;
const minutes = 10;
const hours = 19;
const days = 2;

const time = seconds + minutes * 60 + hours * 60 * 60 + days * 60 * 60 * 24;

describe('utility - digitalTimer', () => {
    it('display exact values as expected', () => {
        const timer = digitalTimer(time);
        expect(timer.seconds).toBe(seconds);
        expect(timer.minutes).toBe(minutes);
        expect(timer.hours).toBe(hours);
        expect(timer.days).toBe(days);
    });

    it('values remain valid after 25 hours 1 minute and 95 seconds subtraction', () => {
        const timer = digitalTimer(time - (25 * 60 * 60 + 1 * 60 + 94));
        expect(timer.seconds).toBe('01');
        expect(timer.minutes).toBe(`08`);
        expect(timer.hours).toBe(18);
        expect(timer.days).toBe(1);
    });
});
