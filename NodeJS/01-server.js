const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello world\n');
    res.write('how you doing?');
    res.end();
});

server.listen(3000, () => {
    console.log('server listing to 3000');
})