const EventEmitter = require('events');


console.log(__filename);
var url = "http://mylogger.io/log";

class Logger extends EventEmitter {

    log(message){
        // Send an HTTP request
        console.log(message);
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}



//exporting log method
//Can make it so that only the log method is exported instead of going through an empty object
//module.exports = log;
module.exports = Logger;