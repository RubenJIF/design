var http = require('http');
var fs = require('fs');
var path = require('path');
var io  = require('socket.io')();

var server = http.createServer(function(req, res){
	console.log("Iniciado!");
	var ruta_archivo = "."+((req.url=='/')?'/home.html':req.url);
	var extension = path.extname(ruta_archivo);
	var contentType = 'text/html';
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
					res.end();
				}
			});
		}else{
			res.writeHead(404);
			res.end();
		}
	});
});
io.listen(server);
io.sockets.on('connection', function(socket){
	/*console.log('Usuario Conectado');
	socket.emit('responde', 'socket-connection');
	socket.on('consola', function(data){
		console.log(data);
	});
	io.sockets.emit('todos', "Hola a todos!!");*/
	socket.on('pulsado', function(data){
		console.log(data);
		socket.broadcast.emit('escribelo', data);
	});

});

server.listen(9090);