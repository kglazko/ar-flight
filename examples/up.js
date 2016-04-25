var arDrone = require('..');
var http    = require('http');

var client = arDrone.createClient();
client.disableEmergency();

console.log('Connecting png stream ...');
var pngStream = client.getPngStream();

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'image/png'});
});

server.listen(8080, function() {
  console.log('Serving latest png on port 8080 ...');
  client.up(.5)
    });