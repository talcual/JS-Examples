var vertices = [
	{lat: 25.774, lng: -80.190},
	{lat: 18.466, lng: -66.118},
	{lat: 32.321, lng: -64.757},
	{lat: 25.774, lng: -80.190}
];


var point = {lat:28.697, lng: -71.952};
//var point = {lat:41.418, lng: -4.130};

var intersections = 0; 
var vertices_count = vertices.length;

for (var i=1; i < vertices_count; i++) {
    var vertex1 = vertices[i-1]; 
    var vertex2 = vertices[i];
    if (vertex1.lng == vertex2.lng && vertex1.lng == point.lng && point.lat > Math.min(vertex1.lat, vertex2.lat) && point.lat < Math.max(vertex1.lat, vertex2.lat)) { // Checar si el punto está en un segmento horizontal
        return "boundarlng";
    }
    if (point.lng > Math.min(vertex1.lng, vertex2.lng) && point.lng <= Math.max(vertex1.lng, vertex2.lng) && point.lat <= Math.max(vertex1.lat, vertex2.lat) && vertex1.lng != vertex2.lng) { 
        var xinters = (point.lng - vertex1.lng) * (vertex2.lat - vertex1.lat) / (vertex2.lng - vertex1.lng) + vertex1.lat; 
        if (xinters == point.lat) { // Checar si el punto está en un segmento (otro que horizontal)
            return "boundarlng";
        }
        if (vertex1.lat == vertex2.lat || point.lat <= xinters) {
            intersections++; 
        }
    } 
} 

// Si el número de intersecciones es impar, el punto está dentro del poligono. 
if (intersections % 2 != 0) {
    console.log("inside");
} else {
    console.log("outside");
}