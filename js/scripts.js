var numArray = []

//Front End Logic
$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var result = pingPong(userInput);
    alert(pingPong);
    $("#output").text(result);
  });
});






//Business Logic
var pingPong = function(result) {
  for (i = 1; i <= userInput; i++) {
    if (input % 3 === 0) {
      numArray.push();
    }
  }
}
