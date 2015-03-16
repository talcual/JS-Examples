var fs = require("fs");

    fs.watch( '/node', function(event, targetfile){
		if(targetfile != null && event == 'rename'){
			console.log( targetfile, 'is', event);
			fs.stat(targetfile, function(err, stats) {
 		 	 console.log(stats);
			});
		}
	});
