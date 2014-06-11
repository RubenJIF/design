$(function(){
	
	$("#agrega").click(function(){
	    $titulo = $("input[name=titulo]").val();
	    $web = $("input[name=web]").val();
	    $clon = $("#post").clone();

	    $clon.children("p").text($titulo);
	    $clon.children("#resumen").text($web);
	    $clon.fadeIn(800);
	    $clon.prependTo("#posts");
	    
	});

	$("#quick").click(function(){
		$("#add").slideToggle("fast");
	});
});

