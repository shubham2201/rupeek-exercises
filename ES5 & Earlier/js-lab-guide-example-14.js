const foo = sum => {
    return sum(2, 3);
};

const findSum = (x, y) => x+y;

console.log(foo(findSum));