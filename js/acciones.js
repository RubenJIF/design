$(function(){
	var socket = io();
	$("#agrega").click(function(){
	    $titulo = $("input[name=titulo]").val();
	    $web = $("input[name=web]").val();
	    $clon = $("#post").clone();

	    var titulo = $clon.children("p").text($titulo);
	    var texto = $clon.children("#resumen").text($web);
	    /*var envio = {'titulo' : titulo,
	    			'texto' : texto};*/			
	    var envio = {
	    	'titulo' : $titulo,
	    	'texto' : $web
	    };
	    socket.emit('pulsado', envio);
	    //socket.emit('pulsado', "pulsadoo");

	    $clon.fadeIn(800);
	    $clon.prependTo("#posts");
		$("#agrega").attr("disabled",true);
		setTimeout(function(){
			$("#agrega").attr("disabled",false);
		},700);
	});
	$("#quick").click(function(){
		$("#add").slideToggle("fast");
	});
    socket.on('escribelo', function(datos){
	    $clon = $("#post").clone();
    	var titulo2 = $clon.children("p").text(datos.titulo);
	    var texto2 = $clon.children("#resumen").text(datos.texto);
	    /*$("body").focus(function(){
	    	$clon.fadeIn(800);
	    	console.log("asd");
	    });*/
	    $clon.prependTo("#posts");
    });
});

