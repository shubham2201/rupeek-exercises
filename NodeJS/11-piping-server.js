const fs = require( 'fs' );
const path = require( 'path' );
const http = require( 'http' );
const url = require( 'url' );

const server = http.createServer();

server.on( 'request', (req, res) => {

    let src = `.${req.url}`, dest = 'piping.txt';

    const rs = fs.createReadStream( path.join(__dirname, src) );
    const ws = fs.createWriteStream( path .join(__dirname, dest) );

    rs.pipe(ws);
    res.end(req.url);
});

server.listen(3000);
