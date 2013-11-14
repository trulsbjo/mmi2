/**
Logikk for next:
Trykk på kartet for å gå et sted videre
Tilstander til teller:
1: Startfase, bruke kan gjøre seg kjent med UI
2: Har fått et stykke, får beskjed om å legge til milepæl
3: Bruker har akkurat lagt til milepæl, kartet viser et milepæl symbol
*/

var teller = 1;
var finishedTaskOne = false;

function next(){
	teller++;
	if (teller == 2) {
		alert("Du har nå gått et lite stykke. Rett foran deg ser du det største treet du har sett i hele ditt liv. Du ønsker å gjøre andre oppmerksomme på dette store treet");
		$("#tid").text("tid: 17min");
		$("#strekning").text("strekning: 2km");
		$("#moh").text("m.o.h: 142");
		$("#bilde1").attr('src', 'img/track'+ teller +'.png');
	}
	else if(teller == 3 && finishedTaskOne){
		alert("Flott! Du har lagt til milepæl. Trykk på kartet for å fortsette");
		$("#bilde1").attr('src', 'img/track'+ teller +'.png');
	} else if(teller == 3){
		teller--;
		alert("Du må gjøre folk oppmerksomme på det store treet");
	}
	else if(teller == 4){
		alert("Du har kommet til veis ende, og ønsker å avslutte turen");
		$("#tid").text("tid: 57min");
		$("#strekning").text("strekning: 7km");
		$("#moh").text("m.o.h: 123");
		$("#bilde1").attr('src', 'img/track'+ teller +'.png');
	}
}

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
	$("#milepal").css({"display" : "none"});
	$("#endepunkt").css({"display" : "none"});
	$("#milepalform").css('z-index', 10);
	$("#milepalform").slideDown("fast");
	$("#bilde"+teller).prop('disabled', true);
}

function closeMilepal(){
	$("#milepalform").slideUp("fast");
	$("#add_landmark").css({"display" : "none"});
	$("#milepal").css({"display" : "none"});
	$("#endepunkt").css({"display" : "none"});
	$("#bilde"+teller).prop('disabled', false);
	blurMap(0);
	if (teller == 2) {
		finishedTaskOne = true;
		next();
	};
}

function closeEndepunkt(){
	$("#avsluttform").slideUp("fast"); 
	$("#bilde"+teller).prop('disabled', true);
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
		$("#add_landmark").slideDown("fast");
		$("#milepal").css({"display" : "inline"});
		$("#endepunkt").css({"display" : "inline"});
	} else {
		$("#add_landmark").slideUp("fast");
		$("#milepal").css({"display" : "none"});
		$("#endepunkt").css({"display" : "none"});
		blurMap(0);
	}
}

function centerpep(){
	$('.pep').css({"top":"50%", "left":"45%"});
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
	centerpep();
});

function openCamera(){
	alert("Denne funksjonen er ikke implementert");
}

var liDefault = $(".default");
	liEasy = $(".easy");
	liMedium = $(".medium");
	liHard = $(".hard");

function moveCircleToX(){
	$(".circle").css({
		"left":"-1px"
	});
	$(".one").css({"color":"#BD4349"});
	$(".two").css({"color":"#BD4349"});
	$(".three").css({"color":"#BD4349"});
	liDefault.show();
	liEasy.hide();
	liMedium.hide();
	liHard.hide();
}

function moveCircleToOne(){
	$(".circle").css({
		"left":"37px"
	});
	$(".one").css({"color":"white"});
	$(".two").css({"color":"#BD4349"});
	$(".three").css({"color":"#BD4349"});
	liDefault.hide();
	liEasy.show();
	liMedium.hide();
	liHard.hide();
}

function moveCircleToTwo(){
	$(".circle").css({
		"left":"82px"
	});
	$(".one").css({"color":"#BD4349"});
	$(".two").css({"color":"white"});
	$(".three").css({"color":"#BD4349"});
	liDefault.hide();
	liEasy.hide();
	liMedium.show();
	liHard.hide();
}

function moveCircleToThree(){
	$(".circle").css({
		"left":"132px"
	});
	$(".one").css({"color":"#BD4349"});
	$(".two").css({"color":"#BD4349"});
	$(".three").css({"color":"white"});
	liDefault.hide();
	liEasy.hide();
	liMedium.hide();
	liHard.show();
}