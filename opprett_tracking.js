var teller = 1;
var filterVal = 'blur(0px)';

function next(){
	alert(teller);
	$("#"+ teller).hide();
	$("#"+ (teller + 1)).css({"display" : "inline"});
	teller++;
}

function openMilepal(){
	blurMap();
	disableButton("avsluttknapp", true);
	$("#milepalform").css('z-index', 2);
	$("#milepalform").css({"display" : "inline"});
	$("#bilde"+teller).prop('disabled', true);
	disableButton("avsluttknapp", true);
}

function closeMilepal(){
	$("#milepalform").css({"display" : "none"});
	$("#bilde"+teller).prop('disabled', false);
	unBlurMap();
	disableButton("avsluttknapp", false);
}

function setMilepal(){
	$("#milepalform").css({"display" : "none"});
	$("#bilde"+teller).prop('disabled', false);
	unBlurMap();
	disableButton("avsluttknapp", false);
	next();
}

function exit(){
	var exitBoolean = confirm("Sikker på at du vil avslutte?");
	if(exitBoolean == true){
		blurMap();
		$("#avsluttform").css('z-index', 2);
		$("#avsluttform").css({"display" : "inline"});
		$("#bilde"+teller).prop('disabled', true);
		disableButton("milepalknapp", true);
	} 
}

function disableButton(nameOfButton, booleanButton){
	$("#"+ nameOfButton).prop('disabled', booleanButton);
}

function unBlurMap(){
	filterVal = 'blur(0px)';
	$("#bilde"+teller).css({
		'filter': filterVal,
		'-webkit-filter': filterVal,
		'-moz-filter': filterVal,
		'-o-filter': filterVal,
		'-ms-filter': filterVal
	});
}

function blurMap(){
	filterVal = 'blur(2px)';
	$("#bilde"+teller).css({
		'filter': filterVal,
		'-webkit-filter': filterVal,
		'-moz-filter': filterVal,
		'-o-filter': filterVal,
		'-ms-filter': filterVal
	});
}