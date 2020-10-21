const fs = require('fs');
const path = require('path');

fs.writeFile( path.join(__dirname, 'hello.txt'), 'Hello Jee!!', ( err )=>{
    if(err){
        console.log(err.data);
        return;
    }

    console.log('SuccessFull!!');
})

console.log('*****End******');