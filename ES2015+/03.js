const sum = (...arr) => {
    let res = 0;
    arr.forEach(num => res += num);
    return res;
};

var result = sum( 1, 2, 3, 4 );
console.log( result ); // prints 10
var result = sum( 1, 2, 3, 4, 5 );
console.log( result ); // prints 15