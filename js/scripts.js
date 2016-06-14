
//business logic
var pingPongNumbers = function(input) {
  var pingPongArray =[];
  if ($("#number-input").val() <= 0){

  alert("Enter a positive number greater than 0!");
  return;
  }

  else {
   for (i=1; i<=input; i +=1){

    if ((i%3 !=0) && (i%5 !=0)){
      pingPongArray.push(i);
    }
    else if ((i%15===0)){
    pingPongArray.push("pingpong");

    }
    else if (i%5===0){
     pingPongArray.push("pong");
    }
    else if (i%3===0){
    pingPongArray.push("ping");
    }

  }
  return pingPongArray;
  }

  }

//user interface

$(document).ready( function() {
  $("form#blank-number").submit(function(event) {
    event.preventDefault();
    $('#output').empty();
  var potentialPingPong = parseInt($("#number-input").val());
  var answer = pingPongNumbers(potentialPingPong);

  if (answer === undefined || answer ===null){
    return;
  } else {
    $("#output").append("<li>" + answer + "</li>");
  }
  });
});
