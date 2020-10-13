const square = x => x*x;
const cube = x => x*x*x;

const sum = (arr, transform) => {
    let res=0;

    for(let i=0;i<arr.length;i++) {
        res += transform(arr[i])
    }
    return res;
}

console.log(sum([2, 3], square));
console.log(sum([2, 3], cube));