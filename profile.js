
// function follow() {
// 	$("#follow").addClass("active");
// };


// function follow(){
// 	if($("#followme").attr("src")=="img/ikoner/check.svg"){
// 		$("#followme").attr("src", "img/ikoner/check_aktiv.svg");
// 	}
// 	else{
// 		$("#followme").attr("src", "img/ikoner/check_inaktiv.svg");
// 	}
// }


// function followme(){
// 	if($("#follow").hasClass( "inaktiv" ){
// 		$("#follow").addClass( "aktiv" );

// 	}
// 	// else{
// 	// 	$("#followme").attr("src", "img/ikoner/check_inaktiv.svg");
// 	// }
// };

$("#follow.inaktiv").click(function(){
	$("#follow").addClass( "aktiv" );
	$("#follow").removeClass("inaktiv");
	$("#follow").text("følger");
})

