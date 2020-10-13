const exponentFactory = x => {
    const square = x => x*x;
    const cube = x => x*x*x;
    
    if(x===2)return square(5)
    else if(x===3)return cube(5);
    else return 5;
}


console.log(exponentFactory(2));
console.log(exponentFactory(3));
console.log(exponentFactory(4));