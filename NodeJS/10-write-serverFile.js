const http = require( 'http' );
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on( 'request', (req, res) => {
    let url = req.url;

    let operator = "", operand1="", operand2="";
    
    let i=1;
    for(i=1;i<url.length;i++) {
        if( url[i] == '/') {
            i++;
            break;
        }

        operator += url[i];
    }

    for(;i<url.length;i++) {
        if( url[i] == '/') {
            i++;
            break;
        }

        operand1 += url[i];
    }

    for(;i<url.length;i++) {
        if( url[i] == '/') {
            break;
        }

        operand2 += url[i];
    }

    if( operator === 'add') {
        fs.writeFile( path.join(__dirname, 'history.txt'), parseInt(operand2) + parseInt(operand1), ( err )=>{
            if(err){
                console.log(err.data);
                return;
            }
        
            res.end( parseInt(operand2) + parseInt(operand1));
        })
    }
})

server.listen(3000);