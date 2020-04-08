const EE = require('events');

class Logger extends EE{
    logger(msg){
        console.log('logger a',msg);
        this.emit('msg logged',{"msg":"hellow"});
    }
}
module.exports=Logger