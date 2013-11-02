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
		"background-image":"url('img/map.jpg')",
		"-webkit-background-size": "cover",
  		"-moz-background-size": "cover",
 		"-o-background-size": "cover",
  		"background-size": "cover"
	});
}