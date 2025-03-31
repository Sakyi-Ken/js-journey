import {readFile, appendFile, open, writeFile, unlink, rename} from 'fs';
import {createServer} from 'http';

createServer(function (req, res) {
  // read the file demofile.htm and return it to the client
  readFile('demofile.htm', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// add this line to the end of the file to or create it if the file does not exist and adds it.
appendFile('mynewfile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// open the file and do what the flag says 'w' (write)
// 'r' (read) 'a' (append)
// create a file if it does not exist and do what the flag says.
open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
}
)

// replace the content with the specified content if the file exists
// or create a new file with the specified content if it does not exist.
writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//delete the file mynewfile2.txt
unlink('mynewfile2.txt', function (err){
  if (err) throw err;
  console.log('File deleted!');
});

rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('file renamed!');
})