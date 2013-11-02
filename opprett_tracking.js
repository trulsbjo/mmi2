var teller = 1;

function next(){
	alert(teller);
	$("#"+ teller).hide();
	$("#"+ (teller + 1)).css({"display" : "inline"});
	teller++;
}

function openForm(){
	var filterVal = 'blur(2px)';
	$("#bilde"+teller).css({
		'filter': filterVal,
		'-webkit-filter': filterVal,
		'-moz-filter': filterVal,
		'-o-filter': filterVal,
		'-ms-filter': filterVal
	});
	$("#milepalform").css('z-index', 2);
	$("#milepalform").css({"display" : "inline"});
	$("#bilde"+teller).prop('disabled', true);
}

function closeForm(){
	var filterVal = 'blur(0px)';
	$("#bilde"+teller).css({
		'filter': filterVal,
		'-webkit-filter': filterVal,
		'-moz-filter': filterVal,
		'-o-filter': filterVal,
		'-ms-filter': filterVal
	});
	$("#milepalform").css({"display" : "none"});
	$("#bilde"+teller).prop('disabled', false);
}

function okForm(){
	var filterVal = 'blur(0px)';
	$("#bilde"+teller).css({
		'filter': filterVal,
		'-webkit-filter': filterVal,
		'-moz-filter': filterVal,
		'-o-filter': filterVal,
		'-ms-filter': filterVal
	});
	$("#milepalform").css({"display" : "none"});
	$("#bilde"+teller).prop('disabled', false);
	next();
}

function exit(){
}