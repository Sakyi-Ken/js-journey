import {createReadStream} from 'fs';

var rs = createReadStream('./demofile.txt', {encoding: 'utf8'});
rs.on('open', function() {
  console.log('The file is open');
})
rs.on('data', function(chunk) {
  console.log(chunk);
})
rs.on('error', function(err) {
  console.log(err);
})
rs.on('close', function() {
  console.log('The file is closed');
})
rs.on('end', function() {
  console.log('The file is finished');
})


import {EventEmitter} from 'events';
var eventEmitter = new EventEmitter();

// Create an event handler
var myEventHandler = function() {
  console.log("I hear a scream!");
}

// Assign the event handler to an event;
eventEmitter.addListener('scream', myEventHandler);

// Fire the 'scream' event;
eventEmitter.emit('scream');