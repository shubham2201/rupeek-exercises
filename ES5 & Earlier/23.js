var numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];

numbers.sort((x, y) => x-y);
console.log(numbers);
numbers.push(37);
numbers.splice(numbers.length-2, 2);
numbers.splice(2, 2, 'Seven', 'Eight');
console.log( numbers.indexOf(23) );
console.log( numbers.indexOf(41) );

console.log(numbers);