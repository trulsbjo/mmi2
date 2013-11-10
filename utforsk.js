function goToTrips(){
	$("#difficultyPreference").show();
	$("#timePreference").show();
	$(".tabsInMiddle").show();
	$(".listInTab").show();
	$(".usersTab").css({"display" : "none"});
	$(".usersFromSearch").css({"display" : "none"});
}

function goToUsers(){
	$("#difficultyPreference").hide();
	$("#timePreference").hide();
	$(".tabsInMiddle").hide();
	$(".listInTab").hide();
	$(".usersTab").css({"display" : "inline"});
}


function showUsers(){
	$(".usersFromSearch").css({"display":"block"});
	$("#week91").prop('checked', false);
	$("#month92").prop('checked', true);
}


$("#sliderbarForTime").bind("slider:changed", function (event, data) {
  var value = parseInt(data.value);

  if(value==0){
  	$(".dragger").text("X");
  }
  else{
	  $(".dragger").text(value);
  }

  console.log(value);
});

$("#sliderbarForTime").bind("slider:ready", function (event, data) {
	$(".dragger").text("X");
});


function moveCircleToX(){
	$(".circle").css({
		"margin-left":"0px"
	});
}

function moveCircleToOne(){
	$(".circle").css({
		"margin-left":"28px"
	});
}

function moveCircleToTwo(){
	$(".circle").css({
		"margin-left":"62px"
	});
}

function moveCircleToThree(){
	$(".circle").css({
		"margin-left":"95px"
	});
}