const fs = require( 'fs' );
const path = require( 'path' );
const http = require( 'http' );

const server = http.createServer();

server.on( 'request', (req, res) => {
    fs.readFile( `.${req.url}`, 'utf8', ( err, content ) => {
        if( err ){
            console.log(err.data);
            return;
        }
    
        res.end( content );
    });
});

server.listen(3000);