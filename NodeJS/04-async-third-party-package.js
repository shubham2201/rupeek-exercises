const async = require( 'async' ); 


function one(callback) {
    setTimeout(function() {
        callback(null, 'one');
    }, 200);
};

function two(callback) {
    setTimeout(function() {
        callback(null, 'two');
    }, 100);
};

async.parallel( [one, two], (err, res) => {
    if( err ) {
        console.log( err );
        return;
    }

    console.log( res );
})