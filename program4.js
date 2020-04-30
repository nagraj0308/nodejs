const EE = require('events');
const Logger = require('./program4a');
var logger = new Logger();

logger.on('msg logged',(arg)=>{
    console.log('Listener called',arg);
});

logger.logger('Hellow');