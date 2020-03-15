export default function roundTo(value, precision = 0) {
    if (precision === 0) {
        return Math.round(value);
    }
    const multiplier = 10 ** precision;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}
