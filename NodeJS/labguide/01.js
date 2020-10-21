const http = require( 'http' );
const url = require( 'url' );
var queryString = require( 'querystring' );

const server = http.createServer();

const port = 3000;

server.on( 'request' , (req, res) => {
    const address = `http://localhost:${port}${req.url}`;
    const parsedAddress = url.parse( req.url );
    const query = queryString.parse(parsedAddress.query);

    let operand1 = parseInt(query.x), operand2 = parseInt(query.y), operator=parsedAddress.pathname.substring(1);
 
    if(operator === 'add'){
        res.end((operand1 + operand2).toString());
    } else if(operator === 'subtract'){
        res.end((operand1 - operand2).toString());
    } else if(operator === 'multiply'){
        res.end((operand1 * operand2).toString());
    } else if(operator === 'divide'){
        res.end((operand1 / operand2).toString());
    } else {
        res.statusCode = 401;
        res.end('Wrong Operand ... Enter add, subtract, divide, myltiply!!');
    }
    
});

server.listen(port);