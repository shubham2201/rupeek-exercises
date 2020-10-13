function sum (x, y) {
    return x+y;
};

console.log(sum(2, 3));

const newSum = sum.bind({x:10, y});

console.log(newSum(2, 3));