

/*

Esta funcion permitira ejecutar consultas de xpath en un sitio, si lo injectas funcionara
perfecto, tambien lo puedes utilizar en un plugin de chrome para crear tu propio scraper asistido.


*/


if(typeof xpath != 'function'){
	var xpath = function(xpathToExecute){ 
		var result = []; 
		var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null ); 
		for ( var i=0 ; i < nodesSnapshot.snapshotLength; i++ ){ 
			result.push( nodesSnapshot.snapshotItem(i) ); 
		} 

		return result; 
	}
}

/*

se utiliza de la siguiente forma, devuelve un arreglo de los elementos que ha encontrado, 
el resto es jugar con la informacion.

*/

var asinx = xpath("//*/@data-asin");

