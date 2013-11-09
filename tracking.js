var teller = 1;
var filterValMap = 'blur(0px)';

function exit(){
	var exitBoolean = confirm("Sikker på at du vil avslutte?");
	if(exitBoolean == true){
		$("#avsluttform").css('z-index', 10);
		$("#avsluttform").css({"display" : "inline"});
		$("#bilde"+teller).prop('disabled', true);
	} else {
		blurMap(0);
	}
}

function openMilepal(){
	$("#milepalform").css('z-index', 10);
	$("#milepalform").css({"display" : "inline"});
	$("#bilde"+teller).prop('disabled', true);
}

function closeMilepal(){
	$("#milepalform").css({"display" : "none"});
	blurMap(0);
}

function blurMap(number){
	filterValMap = 'blur('+ number +'px)';
	$("#bilde"+teller).css({
		'filter': filterValMap,
		'-webkit-filter': filterValMap,
		'-moz-filter': filterValMap,
		'-o-filter': filterValMap,
		'-ms-filter': filterValMap
	});
	$(".datadisplay").css({
		'filter': filterValMap,
		'-webkit-filter': filterValMap,
		'-moz-filter': filterValMap,
		'-o-filter': filterValMap,
		'-ms-filter': filterValMap
	});
}


function showOptions(showBoolean){
	if(showBoolean){
		$("#milepal").css({"display" : "inline"});
		$("#endepunkt").css({"display" : "inline"});
	} else {
		$("#milepal").css({"display" : "none"});
		$("#endepunkt").css({"display" : "none"});
		blurMap(0);
	}

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
					obj.moveTo("45%","50%",false);
					obj.resetVelocityQueue();
					exit();
				} else {
					obj.moveTo("45%","50%",false);
					obj.resetVelocityQueue();
					openMilepal();
				}
			} else {
				obj.moveTo("45%","50%",false);
				obj.resetVelocityQueue();
				showOptions(false);
			}
		},
		initiate: function(ev, obj){
			blurMap(2);
			showOptions(true);
		},
		useCSSTranslation: false
	});
});

function openCamera(){
	alert("Denne funksjonen er ikke implementert");
}