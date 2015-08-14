
/*

Lectura de datos en dispositvos con protocolo SNMP habilitado.

*/


var snmp = require('snmp-native');

// Se crea una session de snmp.
var session = new snmp.Session();

// Conectamos con el dispositivo, colocando la ip o host del mismo
var session = new snmp.Session({ host: host , port: 161, community: community });


session.getSubtree({ oid: [1,3,6,1,2,1] }, function (error, varbinds) {
    if (error) {
        console.log('Fail :(');
    } else {
        varbinds.forEach(function (vb) {
            console.log(vb.oid + ' = ' + vb.value + ' (' + vb.type + ')');
        });
    }
});