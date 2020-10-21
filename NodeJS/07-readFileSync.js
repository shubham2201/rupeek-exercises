const fs = require( 'fs' );
const path = require( 'path' );

const fileName = process.argv[2];

//blocking
try {
    const content = fs.readFileSync( path.join(__dirname, fileName), 'utf8' );
    console.log( content );
} catch( err ) {
    console.log( err.data );
}
