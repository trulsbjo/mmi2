function addToFavorite(){
	if($(".addToFavorite").attr("src")=="img/ikoner/favoritt_inaktiv.svg"){
		$(".addToFavorite").attr("src", "img/ikoner/favoritt_aktiv.svg");
	}
	else{
		$(".addToFavorite").attr("src", "img/ikoner/favoritt_inaktiv.svg");
	}
}


function startTracking(){
	$(".bar-title").remove();
	$(".bar-tab").remove();
	$(".slider").hide();
/*	$(".content").css({
		"background-image":"url('img/5min.png')",
		"-webkit-background-size": "cover",
  		"-moz-background-size": "cover",
 		"-o-background-size": "cover",
  		"background-size": "cover"
	}); */

	$(".avsluttTurButton").show();
	$("#0min").show();
	$(".datadisplay").show();
}

// function comment(){
// 	// var inputComment = $("#commentform");
// 	// 	commentButton = $("#commentbutton");
// 	// commentButton.click() {
// 	// 	inputComment.show();
// 	// }

// 	// $("#commentbutton").click(function(){
// 	// 	console.log('Trykket');
// 	// 	// $("#commentform").show();

// 	// });
// 	$("#commentbutton").click(function() {
// 	  $(this).hide();
// 	});
		
// };

$("#commentbutton").click(function() {
	  // $("#commentform").show();
	  // $("#submit_comment").show();
	  $("#testuser").show();
	  $(this).hide();
	  // $( "#commentform textarea" ).focus();
	  $("#usercomment").show();
	  $("#tesuser").show();
	  // $(this).hide();
});

// $("#submit_comment").click(function() {
// 	  $("#commentform textarea").hide();
// 	  $("#usercomment").show();
// 	  $(this).hide();
// });

function moveCircleToX2(){
	$(".circle").css({
		"left":"-1px",
		"border-color":"#BD4349"
	});
	$(".x").css({"background":"url(img/ikoner/sad_aktiv.png) -10px -9px no-repeat"});
	$(".normal").css({"background":"url(img/ikoner/normal.png) -12px -8px no-repeat"});
	$(".three").css({"background":"url(img/ikoner/happy.png) -11px -9px no-repeat"});
	$("#containerForDifficulty").css({"border-color":"#BD4349"});
	console.log("hurra");
}

// function moveCircleToOne(){
// 	$(".circle").css({
// 		"left":"37px",
// 		"border-color":"#BD4349"
// 	});
// 	$(".x").css({"background":"url(img/ikoner/sad_aktiv.svg) -7px 4px no-repeat", "background-size" : "50px"});
// 	$(".two").css({"background":"url(img/ikoner/normal.svg) -5px -4px no-repeat", "background-size" : "50px"});
// 	$(".three").css({"background":"url(img/ikoner/happy.svg) -5px -4px no-repeat" , "background-size" : "50px"});
// 	$("#containerForDifficulty").css({"border-color":"#BD4349"});
// }

function moveCircleToTwo2(){
	$(".circle").css({
		"left":"43px",
		"border-color":"#BD4349"
	});
	$(".x").css({"background":"url(img/ikoner/sad.png) -10px -9px no-repeat"});
	$(".normal").css({"background":"url(img/ikoner/normal_aktiv.png) -12px -8px no-repeat"});
	$(".three").css({"background":"url(img/ikoner/happy.png) -11px -9px no-repeat"});
	$("#containerForDifficulty").css({"border-color":"#BD4349"});
}

function moveCircleToThree2(){
	$(".circle").css({
		"left":"89px",
		"border-color":"#BD4349"
	});
	$(".x").css({"background":"url(img/ikoner/sad.png) -10px -9px no-repeat"});
	$(".normal").css({"background":"url(img/ikoner/normal.png) -12px -8px no-repeat"});
	$(".three").css({"background":"url(img/ikoner/happy_aktiv.png) -11px -9px no-repeat"});
	$("#containerForDifficulty").css({"border-color":"#BD4349"});
}


function goToUtforsk(){
/*	if(confirm("Er du sikker på at du vil avslutte turen?")){
		window.location.href = "utforsk.html"
	} */

	$("#avsluttTurForm").slideDown("fast");
}

function walkFiveMin(){
	$("#0min").hide();
	$("#fivemin").show();
	$("#tid").text("tid: 5min");
	$("#strekning").text("strekning: 0,5km");
	$("#moh").text("m.o.h: 123");
}

function peekMilestone(){
	$("#fivemin").hide();
	$("#fivemin_pop").show();
}

function walkTenMin(){
	$("#fivemin_pop").hide();
	$("#tenmin").show();
	$("#tid").text("tid: 10min");
	$("#strekning").text("strekning: 1km");
	$("#moh").text("m.o.h: 130");
}

function milestoneAvailable(){
	$("#tenmin").hide();
	$("#milestone_available").show();
	$("#tid").text("tid: 15min");
	$("#strekning").text("strekning: 1,1km");
	$("#moh").text("m.o.h: 135");
}

function showMilestoneForm(){
	$("#milepalform").slideDown("fast");
}

function closeMilepalpop() {
	$("#milestone_available").hide();
	$("#milestone_updated").show();
	$("#milepalform").slideUp("fast");
	$("#tid").text("tid: 17min");
	$("#strekning").text("strekning: 1,2km");
	$("#moh").text("m.o.h: 120");
}

function walkTwentyFiveMin(){
	$("#milestone_updated").hide();
	$("#twentyfivemin").show();
	$("#tid").text("tid: 25min");
	$("#strekning").text("strekning: 2,3km");
	$("#moh").text("m.o.h: 101");

}

function walkToFinish(){
	$("#twentyfivemin").hide();
	$("#finish_pop").show();
	$("#tid").text("tid: 35min");
	$("#strekning").text("strekning: 3,2km");
	$("#moh").text("m.o.h: 153");

}

function avsluttTurForm(){
	$("#avsluttTurForm").slideDown("fast");
}

function avsluttTur(){
	window.location.href = "Index.html"
}

// function pasteTextToCommentfield(){
// 	var tekst = $("#tekstfelt").val();
// 	$("#userText").text(tekst);
// }

function pasteAvsluttComment(){
	$("#complete_text").val("Artig tur!");
}


