function goToTrips(){
	$(".difficultyPreference").show();
	$(".timePreference").show();
	$(".tabsInMiddle").show();
	$(".listInTab").show();
	$(".usersTab").css({"display" : "none"});
}

function goToUsers(){
	$(".difficultyPreference").hide();
	$(".timePreference").hide();
	$(".tabsInMiddle").hide();
	$(".listInTab").hide();
	$(".usersTab").css({"display" : "inline"});
}


function showUsers(){
	$(".usersFromSearch").css({"display":"inline"});
	$("#week91").prop('checked', false);
	$("#month92").prop('checked', true);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
