const max = (...arr) => {
    let res = arr[0];
    arr.forEach(num => {
        if(num > res) res = num;
    });
    return res;
};

console.log(max( 25, 65, 35, 45 ));
console.log(max( 25, 65, 35, 75, 45 ));