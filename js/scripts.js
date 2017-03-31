var numberArray = [];

//Business Logic
var pingPong = function(numbers) {
  for (var i = 1; i <= numbers; i++) {
    result = i;
    if ((result % 3) === 0 && (result % 5) === 0) {
      result = "ping-pong";
    } else if ((result % 5) === 0) {
      result = "pong";
    } else if ((result % 3) === 0) {
      result = "ping";
    }
    numberArray.push(result);
  }
}
//Front End Logic
$(document).ready(function() {
  $("#mainform").submit(function(event){
    event.preventDefault();
    // clear output fields in div
    $("#word-output").text("");
    //send input to variable
    var numbers = $("#mainform input").val();
    pingPong(numbers);
    alert(result);
    // output starting and calculated values
    numberArray.forEach(function(result) {
      $("#word-output").append(result + "</br>");
    });
    numberArray = [];
  });
});
