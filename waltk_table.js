
/*

Luis Toscano.

Este sencillo codigo nos permitira recorrer una tabla 
y capturar el contenido de cada uno de los campos, 
podemos utilizarlo en conjunto con el atributo contenteditable
y realizar una tabla con una gran experiencia de usuario.

www.luistoscano.com

*/

var tbl = $('table#whatever tr').map(function() {
  return $(this).find('td').map(function() {
    return $(this).html();
  }).get();
}).get();