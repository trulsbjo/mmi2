function addToFavorite(){
	if($(".addToFavorite").attr("src")=="img/star_empty.jpg"){
		$(".addToFavorite").attr("src", "img/star_filled.jpg");
	}
	else{
		$(".addToFavorite").attr("src", "img/star_empty.jpg");
	}
	
}