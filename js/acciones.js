$(function(){
	var socket = io();
	$("#agrega").click(function(){
	    $titulo = $("input[name=titulo]").val();
	    $web = $("input[name=web]").val();
	    $clon = $("#post").clone();

	    var titulo = $clon.children("p").text($titulo);
	    var texto = $clon.children("#resumen").text($web);
	    socket.emit('pulsado', "pulsadoo");
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
    	alert(datos);
    });
});

