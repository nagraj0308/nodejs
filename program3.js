const eventEmitter = require('events');
const emitter = new eventEmitter();
emitter.on('msg logged',function(msg) {
    console.log('Listener Called',msg);
});
emitter.emit('msg logged',{id:1,url:'http://'});