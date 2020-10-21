const PI = 3.14;

const rectArea = (a, b) => a*b;

const circleArea = r => PI*r*r;

const sqArea = (a) => rectArea(a, a);

module.exports = {
    sqArea,
    circleArea
}