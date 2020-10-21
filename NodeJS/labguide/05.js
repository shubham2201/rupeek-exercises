// const { Script } = require('vm');

// function makeDir(dir) {
//     const fs = require('fs');
//     const path = require( 'path' );
//     var str = '<ul>';
//     let files = fs.readdirSync(dir);

//     for(let i in files){
//         let nextDir = path.join(dir, files[i]);
//         if( fs.lstatSync(nextDir).isDirectory() == true){
//             makeDir(nextDir);
//         } else {
//             str += '<li><a href="nextDir">String 1</a></li>';
//         }
//     }

//     str += '</ul>';
//     return str;
// }
// <script>var res = makeDir(__dirname)</script>
// document.querySelector("#root").innerHTML = res;


const fs = require('fs');
const path = require( 'path' );

function makeDir(dir) {

    console.log('***calling start ****');
    let files = fs.readdirSync(dir);
    console.log(files);

    for(let i=0; i<files.length; i++){
        let nextDir = path.join(dir, files[i]);
        if( fs.lstatSync(nextDir).isDirectory() == true){
            fs.appendFile('05-index.html', '<ul>', err => {
                if(err){
                    console.log(err)
                }
            });
            makeDir(nextDir);
            fs.appendFile('05-index.html', '</ul>', err => {
                if(err){
                    console.log(err)
                }
            });
        } else {
            fs.appendFile('05-index.html', `<li><a href="${nextDir}">${files[i]}</a></li>`, err => {
                if(err){
                    console.log(err);
                }
                
            });
        }
    }

    console.log('***calling ens ****');
}

fs.appendFile('05-index.html', '<ul>', err => {
    if(err){
        console.log(err)
    }
});
makeDir(__dirname);
fs.appendFile('05-index.html', '</ul>', err => {
    if(err){
        console.log(err)
    }
});


