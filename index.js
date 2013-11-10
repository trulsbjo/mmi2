$(document).ready(function(){
	
});

function heis(){
	alert("create");
}

function hei(page){
	alert("hei");
	$('#'+ page + "reloaddiv").trigger("create");
}