import {IncomingForm} from 'formidable';
import {createServer} from 'http';
import {rename} from 'fs';
import { error } from 'console';

// step 1: create an upload form.

// createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }).listen(8080);

// step: Parse the uploaded file to a temporary location.

// createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new IncomingForm();
//     form.parse(req, function(err, fields, files) {
//       res.writeHead('File uploaded successfully');
//       res.end();
//     });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);

// step 3: Save the file and move the file to a new location of your choice. 

createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/Emmanuel/' + files.filetoupload.originalFilename;
      rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
