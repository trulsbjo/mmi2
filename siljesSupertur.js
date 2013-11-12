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
	  $("#testuser").show();
	  $(this).hide();
	  $( "#commentform textarea" ).focus();

	});


function goToUtforsk(){
/*	if(confirm("Er du sikker på at du vil avslutte turen?")){
		window.location.href = "utforsk.html"
	} */

	$("#avsluttTurForm").show();
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