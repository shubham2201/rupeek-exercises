const fs = require('fs');
const path = require('path');

try{
    fs.writeFileSync( path.join(__dirname, 'hello.txt'), 'Hello Jee!!' );
    console.log('SuccessFull!!');
} catch(err) {
    console.log(err.data);
}

console.log('*****End******');