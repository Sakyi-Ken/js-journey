//var http = require('http');

import {createServer} from 'http';
import {myDateTime} from './myfirstModule.js';
//import {url} from 'url';
//var url = require('url');
import {parse} from 'url';

createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('The date and time are currently: ' + myDateTime());
  res.write(req.url);
  res.write(req.method);
  // var q = url.parse(req.url, true).query;
  var q = parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);