const sum = ( arg ) => {
    let sum=0;

    arg.forEach(element => {
        sum += element;
    });

    return sum;
};

const doesExist = ( arg, check ) => {
    arg.forEach(element => {
        if( check === element ) {
            console.log( 'Found' );
            return;
        }
    });
};

module.exports = {
    sum,
    doesExist
};

console.log( __dirname );
console.log( __filename );