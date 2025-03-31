import {parse} from 'url';
import {createServer} from 'http';
import{readFile} from 'fs';

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = parse(adr, true);
console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2017&month=february'
console.log(q.query); // returns an object: { year: 2017, month: 'february' }
console.log(q.query.year); // returns '2017'
console.log(q.query.month); // returns 'february'

createServer(function (req, res) {
  var q = parse(req.url, true);
  var filename = '.' + q.pathname;

  readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log(filename);
    return res.end();
  });
}).listen(8080);