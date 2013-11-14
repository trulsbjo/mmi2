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
  	$(".dragger").text("").css({"color":"#BD4349"});
  	$("#dragtime").text("");
  	$("#drag").show();
  	$("#dragarrow").show();
  	$("#dragzero").hide();
  	$(".timeUnder50min").hide();
  	$(".default").show();
  }

  else if(value>=1000){
  	$(".dragger").text((value/1000) + "d").css({"color":"white"});
  	$("#drag").hide();
  	$("#dragarrow").hide();
	$("#dragzero").show();
	// $(".slider > .dragger").css({"margin-left":"-20px!important"});
  }

  else if(value>=100){
  	$(".dragger").text((value/100) + "t").css({"color":"white"});
  	$("#drag").hide();
  	$("#dragarrow").hide();
  	$("#dragzero").show();
  	$(".default").hide();
	$(".easy").hide();
	$(".medium").hide();
	$(".timeUnder50min").hide();
	$(".timeOver50min").show();
  }



  // else if(value<=60){
  // 	$("#dragtime").text((value) + "t");
  // }

  // else if(value>60){
  // 	$("#dragtime").text((value/10) + "d");
  // }

  else if(value>=5){
  	$(".dragger").text((value) + "m").css({"color":"white"});
  	$("#drag").hide();
  	$("#dragarrow").hide();
  	$("#dragzero").show();
	$(".default").hide();
	$(".easy").hide();
	$(".medium").hide();
	$(".timeOver50min").hide();
	$(".timeUnder50min").show(); 
  }

  else{
	  $(".dragger").text("").css({"color":"#BD4349"});
  	$("#dragtime").text("");
  	$("#drag").show();
  	$("#dragarrow").show();
  	$("#dragzero").hide();
  }

  $("#dragzero").click(function() {
  $("#sliderbarForTime").simpleSlider("setValue", 0);
});

  console.log(value);
});

$("#sliderbarForTime").bind("slider:ready", function (event, data) {
	$(".dragger").text("");
});

var liDefault = $(".default");
	liEasy = $(".easy");
	liMedium = $(".medium");
	liHard = $(".hard");


function moveCircleToX(){
	$(".circle").css({
		"left":"-1px"
	});
	$(".one").css({"color":"#BD4349"});
	$(".two").css({"color":"#BD4349"});
	$(".three").css({"color":"#BD4349"});
	liDefault.show();
	liEasy.hide();
	liMedium.hide();
	liHard.hide();
}

function moveCircleToOne(){
	$(".circle").css({
		"left":"37px"
	});
	$(".one").css({"color":"white"});
	$(".two").css({"color":"#BD4349"});
	$(".three").css({"color":"#BD4349"});
	liDefault.hide();
	liEasy.show();
	liMedium.hide();
	liHard.hide();
}

function moveCircleToTwo(){
	$(".circle").css({
		"left":"82px"
	});
	$(".one").css({"color":"#BD4349"});
	$(".two").css({"color":"white"});
	$(".three").css({"color":"#BD4349"});
	liDefault.hide();
	liEasy.hide();
	liMedium.show();
	liHard.hide();
}

function moveCircleToThree(){
	$(".circle").css({
		"left":"132px"
	});
	$(".one").css({"color":"#BD4349"});
	$(".two").css({"color":"#BD4349"});
	$(".three").css({"color":"white"});
	liDefault.hide();
	liEasy.hide();
	liMedium.hide();
	liHard.show();
}