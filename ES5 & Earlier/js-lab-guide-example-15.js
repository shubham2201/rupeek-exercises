const square = x => x*x;
const cube = x => x*x*x;

const sum = (x, y, transform) => transform(x) + transform(y);

console.log(sum(2, 3, square));
console.log(sum(2, 3, cube));