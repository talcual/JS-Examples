/*

http://www.luistoscano.com

Sencillo codigo para capturar las trazas enviadas
por un gps, solo se debe apuntar el gps a la ip y puerto
designados y empezar a capturar la informacion sobre este.

*/

var net = require('net');
var server = net.createServer(function(c) { //'connection' listener

  console.log('server connected');
  c.on('end', function() {
    console.log('server disconnected');
  });

  try{
    c.on('data',function(ds){
      console.log(ds.toString('utf-8'));
    });
  }catch(err){
    console.log(err);
  }


});

server.listen(8124, function(req, res) { //'listening' listener
  console.log('server bound');
});