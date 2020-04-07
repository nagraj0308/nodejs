const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);


const os =require('os');
var tm = os.totalmem();
var fm = os.freemem();
console.log(tm+"  "+fm);



const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);
fs.readdir('./',function(err,files){
    if(err) console.log("Error",err);
    else console.log('Result',files,);
});


