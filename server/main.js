const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Hello");
        res.end();
    }else if(req.url==='/api/good'){
        res.write("Nagraj");
        res.end();
    }else if(req.url==='/api/fruits'){
        res.write(JSON.stringify([1,2,3,4,5,6,7,8,9]));
        res.end();
    }else{
        res.write("wrong api");
        res.end();
    }

});
var noc=0;
server.listen(3000);
console.log('Listening at 3000...');
server.on('connection',(hello)=>{
    noc++;
    console.log("there are "+noc+" connetion..");
});

