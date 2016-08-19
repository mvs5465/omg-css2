

function loadScores() {

  $("#scoresdiv").load("scores.csv");


}

$(document).ready(function() {
  console.log("This is working");
  loadScores();

});
