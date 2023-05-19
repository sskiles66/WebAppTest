function sayHello(name){
    console.log("Hello" + name);
}

//sayHello("Stephen");



///setTimeout(); 
//clearTimeout();

//setInterval();
//clearInterval();

var message = '';

//console.log(global.message);

//console.log(module);

//exporting modules tutorial

//const logger = require('./logger.js');

//console.log(logger)

//logger.log('message');

//Paths Tutorial

const path = require('path');

var pathObject = path.parse(__filename);

//console.log(pathObject);


///OS tutorial

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

/*console.log(`Total memory: ${totalMemory}`);

console.log(`Free memory: ${freeMemory}`);
*/



//File System tutorial

const fs = require('fs');

//synchronus method

//const files = fs.readdirSync("./");

//console.log(files);

//Asynchronus method

/*fs.readdir('./', function(err, files) {
    if (err) console.log("Error", err);
    else console.log("Result", files);
});
*/





///Events tutorial

//class
const EventEmitter = require('events');


//Raised an event
//emitter.emit('messageLogged', {id: 1, url: 'http://'});


// Raise: logging {data: message}

/*emitter.on('messageLogged2', (arg) => {  // or e, or eventArg
    console.log("Listener called for logging", arg);
});

emitter.emit('messageLogged2', {id: 12, url: 'http://'});
*/

const Logger = require('./logger.js');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {  // or e, or eventArg
    console.log("Listener called", arg);
});

logger.log('message');


const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write("Hello World");
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
//server.on('connection', (socket) => {
    //console.log("New Connection");
//})



server.listen(3000);

console.log('Listening on port 3000');

