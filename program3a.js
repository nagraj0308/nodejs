const eventEmitter = require('events');
const emitter = new eventEmitter();

function logger(msg){
    console.log('Listener Called',msg);
    //emitter.emit('msg logged',{"msg":"hellow"});

}
module.exports=logger