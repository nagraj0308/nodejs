const eventEmitter = require('events');
const emitter = new eventEmitter();

emitter.on('msg logged',function(msg){
    console.log('Listener Called',msg);
});
emitter.emit('msg logged',{"msg":"hellow"});

const log1 = require('./program3a');
log1('message');