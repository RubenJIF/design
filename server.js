var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res){
	console.log("Iniciado!");
	var ruta_archivo = "."+((req.url=='/')?'/home.html':req.url);
	var extension = path.extname(ruta_archivo);
	var contentType = 'text/html';
	console.log(ruta_archivo);
	console.log(extension);
	switch(extension){
		case '.css':
			contentType = 'text/css';
			break;
		case '.js' : 
			contentType = 'text/javascript';
			break;
	}
	fs.exists(ruta_archivo, function(existe){
		if(existe){
			fs.readFile(ruta_archivo, function(error, contenido){
				if(error){
					res.writeHead(500);
					res.end();
				}else{
					res.writeHead(200, {'Content-Type' : contentType});
					res.write(contenido);
					console.log(contentType);
					res.end();
				}
			});
		}else{
			res.writeHead(404);
			res.end();
		}
	});
});
server.listen(9090);