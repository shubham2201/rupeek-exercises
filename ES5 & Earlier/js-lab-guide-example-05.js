const array = [1, 2, 3, 4, 5];

console.log(array.length);

array[0]++;

array[array.length - 1] += array[array.length-2];

array.push(6);

const newArray = [];

for(let i=0;i<array.length;i++)newArray.push(array[i]);

console.log(array);
console.log(newArray);