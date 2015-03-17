/*

Script en nodejs que permite monitorear la llegada de correos electronico,
y mantener siempre informado al usuario, permite caracteristicas como marcar el correo como no leid
entre otros.

Dependencias 
 - mail-notifier
 - mailparser
 - socket.io ( por si quieres mandar las notificaciones a una web por html5)

http://www.luistoscano.com


*/

var fs = require("fs");
var notifier = require('mail-notifier');
var MailParser = require("mailparser").MailParser;
var io = require('socket.io')(8001);
var mp = new MailParser({
    streamAttachments: true
});

var imap = {
  user: "",
  password: "",
  host: "imap.gmail.com", // Gmail configuration, your server it's here.
  port: 993, // imap port
  tls: true,// use secure connection
  tlsOptions: { rejectUnauthorized: false },
  markSeen: false
};

notifier(imap).on('mail',function(mail){
	console.log(mail.headers.subject);
    io.emit('news', { hello: mail.headers.subject });
}).start();
