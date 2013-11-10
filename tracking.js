/**
Logikk for next:
Trykk på kartet for å gå et sted videre
Tilstander til teller:
1: Startfase, bruke kan gjøre seg kjent med UI
2: Har fått et stykke, får beskjed om å legge til milepæl
3: Bruker har akkurat lagt til milepæl, kartet viser at milepæl symbol
*/

var teller = 1;
var filterValMap = 'blur(0px)';

function next(){
	teller++;
	if (teller == 2) {
		alert("Du har nå gått et lite stykke. Rett foran deg ser du det største treet du har sett i hele ditt liv. Du ønsker å gjøre andre oppmerksomme på dette store treet");
		$("#tid").text("tid: 17min");
		$("#strekning").text("strekning: 2km");
		$("#moh").text("m.o.h: 142");
	}
	else if(teller == 3){
		alert("Flott! Du har lagt til milepæl. Trykk på kartet for å fortsette");
	}
	else if(teller == 4){
		alert("Du har kommet til veis ende, og ønsker å avslutte turen");
	}
	$("#bilde1").attr('src', 'img/track'+ teller +'.png');
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
	$("#milepalform").css('z-index', 10);
	// $("#milepalform").css({"display" : "inline"});
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
		next();
	};
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
		$("#add_landmark").css({"display" : "block"});
		$("#milepal").css({"display" : "inline"});
		$("#endepunkt").css({"display" : "inline"});
	} else {
		$("#add_landmark").css({"display" : "none"});
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