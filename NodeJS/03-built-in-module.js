const childProcess = require('child_process');

childProcess.exec( 'ls', (error, stdout, stderr) => {
    if( error ) {
        console.log(`got error: ${error}`);
        return;
    }

    console.log(stdout);
    console.log(strerr);
})