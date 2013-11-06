function addToFavorite(){
	if($(".addToFavorite").attr("src")=="img/star_empty.jpg"){
		$(".addToFavorite").attr("src", "img/star_filled.jpg");
	}
	else{
		$(".addToFavorite").attr("src", "img/star_empty.jpg");
	}
}


function startTracking(){
	$(".bar-title").remove();
	$(".bar-tab").remove();
	$(".slider").hide();
	$(".content").css({
		"background-image":"url('img/supertur.png')",
		"-webkit-background-size": "cover",
  		"-moz-background-size": "cover",
 		"-o-background-size": "cover",
  		"background-size": "cover"
	});
	$(".avsluttTurButton").show();
}

function goToUtforsk(){
	if(confirm("Er du sikker på at du vil avslutte turen?")){
		window.location.href = "utforsk.html"
	}
}