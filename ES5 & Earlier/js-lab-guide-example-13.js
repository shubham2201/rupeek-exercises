var find = (arr, num) => {
    let flag = false;

    for(let i=0;i<arr.length;i++)if(arr[i] === num)flag=true;
    return flag;
};

console.log(find([1, 2, 3, 4], 3));
console.log(find([1, 2, 3, 4], 5));