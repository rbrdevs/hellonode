    
var http = require('http');
var s = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});
s.listen(8000);
console.log('Server running!');
