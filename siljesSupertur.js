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
	$("#backgroundMap5min").show();
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
	  $("#commentform").show();
	  $("#submit_comment").show();
	  $("#testuser").show();
	  $(this).hide();
	  $( "#commentform textarea" ).focus();
});

$("#submit_comment").click(function() {
	  $("#commentform textarea").hide();
	  $("#usercomment").show();
	  $(this).hide();
});

function moveCircleToX(){
	$(".circle").css({
		"left":"-1px",
		"border-color":"#BD4349"
	});
	$(".x").css({"color":"#BD4349"});
	$(".two").css({"color":"#DDD"});
	$(".three").css({"color":"#DDD"});
	$("#containerForDifficulty").css({"border-color":"#BD4349"});

}

function moveCircleToOne(){
	$(".circle").css({
		"left":"37px",
		"border-color":"#BD4349"
	});
	$(".x").css({"color":"#BD4349"});
	$(".two").css({"color":"#DDD"});
	$(".three").css({"color":"#DDD"});
	$("#containerForDifficulty").css({"border-color":"#BD4349"});
}

function moveCircleToTwo(){
	$(".circle").css({
		"left":"43px",
		"border-color":"#BD4349"
	});
	$(".x").css({"color":"#DDD"});
	$(".two").css({"color":"#BD4349"});
	$(".three").css({"color":"#DDD"});
	$("#containerForDifficulty").css({"border-color":"#BD4349"});
}

function moveCircleToThree(){
	$(".circle").css({
		"left":"89px",
		"border-color":"#BD4349"
	});
	$(".x").css({"color":"#DDD"});
	$(".two").css({"color":"#DDD"});
	$(".three").css({"color":"#BD4349"});
	$("#containerForDifficulty").css({"border-color":"#BD4349"});
}


function goToUtforsk(){
/*	if(confirm("Er du sikker på at du vil avslutte turen?")){
		window.location.href = "utforsk.html"
	} */

	$("#avsluttTurForm").slideDown("fast");
}

function showMilestone(){
	$("#backgroundMap5min").hide();
	$("#kultTreImage").show();
}

function backTo5minImage(){
	$("#kultTreImage").hide();
	$("#backgroundMap5min2").show();
}

function milestonePopup(){
	$("#backgroundMap5min2").hide();
	$("#kultTreImage2").show();
}

function showMilestoneForm(){
	$("#milepalform").slideDown("fast");
}

function avsluttTur(){
	alert("denne må implementeres");
}