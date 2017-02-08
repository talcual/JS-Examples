// Para este ejercicio necesitaremos istalar el modulo upnpserver
// npm install upnpserver --save
// si deseas ver la explicacion del codigo no se te olvide pasar por www.luistoscano.com

var Server = require("upnpserver");
 
var server = new Server({ hostname:'192.168.0.103' }, 
[
  '/home/disk1', { path: '/home/myDisk' } , { path: '/media/movies', mountPoint: '/My movies'}
]
);
 
server.start();