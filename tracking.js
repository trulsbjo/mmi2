var teller = 1;
var filterVal = 'blur(0px)';

function exit(){
	var exitBoolean = confirm("Sikker på at du vil avslutte?");
	if(exitBoolean == true){
		$("#avsluttform").css('z-index', 10);
		$("#avsluttform").css({"display" : "inline"});
		$("#bilde"+teller).prop('disabled', true);
	} else {
		unBlurMap();
	}
}

function openMilepal(){
	blurMap();
	disableButton("avsluttknapp", true);
	$("#milepalform").css('z-index', 10);
	$("#milepalform").css({"display" : "inline"});
	$("#bilde"+teller).prop('disabled', true);
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

function showOptions(showBoolean){
	if(showBoolean){
		$("#milepal").css({"display" : "inline"});
		$("#endepunkt").css({"display" : "inline"});
	} else {
		$("#milepal").css({"display" : "none"});
		$("#endepunkt").css({"display" : "none"});
		centerPep();
	}

}

function centerPep(){
	$('.pep').css({"top": "50%", "left": "45%"});
}

$(document).ready(function(){
	$('.pep').pep({
		droppable: ".droppable",
		overlapFunction: function($a, $b){
			var rect1 = $a[0].getBoundingClientRect();
			var rect2 = $b[0].getBoundingClientRect();
			return (  rect2.left    > rect1.left  && 
				rect2.right   < rect1.right && 
				rect2.top     > rect1.top   && 
				rect2.bottom  < rect1.bottom  );
		},
		stop: function(ev, obj){
			if (obj.activeDropRegions.length != 0) {
				blurMap();
				if(obj.activeDropRegions[0].context.className == "droppable endepunkt pep-dpa"){
					exit();
				} else {
					openMilepal();
				}
			} else {
				showOptions(false);
			}
		},
		initiate: function(){
			showOptions(true);
		},
		useCSSTranslation: false
	});
});
