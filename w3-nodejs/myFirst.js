//var http = require('http');

import {createServer} from 'http';

createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! Hi there');
}).listen(8080);