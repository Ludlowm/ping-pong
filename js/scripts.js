
//Front End Logic
$(document).ready(function() {

  $("#mainform").submit(function(event){
    event.preventDefault();


    var numberArray = [];
    var userInput = parseInt($("#input1").val());
    var total = 1;

    var tmpNum = "";
    for (i = 1; i <= userInput; i++) {
      tmpNum+= i + "<br>";
    }
    //show form
    $(".word-output").show();

    // clear output fields
    $("#yourStartnum").text("");

    // output starting and calculated values
    $("#yourStartnum").append(tmpNum);

  });
});



// //Business Logic
// var pingPong = function(userInput) {
//   for (i = 1; i <= userInput; i++) {
//     if (userInput % 3 === 0) {
//       wholestring.replace("ping");
//
//     }
//   }
// }
