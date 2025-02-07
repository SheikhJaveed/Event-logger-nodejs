const os=require('os');
const fs=require('fs');

const EventEmitter=require('events');

class Logger extends EventEmitter{
    log(message){
        this.emit('message',{message});
    }
}

const logger=new Logger(); //creating an object of the Logger class
const logFile = `${__dirname}/eventlog.txt`;//file to store the logs
//this will create the eventlog.txt file in the same directory as the logger.js file

const logToFile=(event)=>{
    const logMessage=`${new Date().toISOString()} - ${event.message}\n`;
    fs.appendFileSync(logFile,logMessage);
}

logger.on('message',logToFile); //listening to the message event
//the above line is executed when the message event is emitted i.e on line 8 

setInterval(()=>{
    const memoryUsage=(os.freemem()/os.totalmem()) * 100;
    logger.log(`Current Memory Usage: ${memoryUsage.toFixed(2)}`);
},3000);

logger.log('Application Started'); //logging the message
logger.log('Application event occured'); //logging the message
