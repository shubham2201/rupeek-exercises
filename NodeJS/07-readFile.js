const fs = require( 'fs' );
const path = require( 'path' );

const fileName = process.argv[2];

//Non blocking
fs.readFile( path.join(__dirname, fileName), 'utf8', ( err, content ) => {
    if( err ){
        console.log(err.data);
        return;
    }

    console.log( content );
});