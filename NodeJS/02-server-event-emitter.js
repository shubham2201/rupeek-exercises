const http = require('http');

const server = http.createServer();

server.on( 'request', (req, res) => {
    res.write('Hello world\n');
    res.write('how you doing?');
    res.end();
});

server.on( 'listening', () => {
    console.log( `server listining on ${port}`);
});

server.on( 'error', ( error ) => {
    console.log(`error occured: ${error.message}`);
})

const port = 3000;

server.listen(port);