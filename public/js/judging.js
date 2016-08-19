$(document).ready(function(){
  $('.dropdown-toggle').dropdown();

  $('#criteriadiv').html(functionalitycriteria);

  populateTeamsDropdown();

  $('#teamdropdown li > a').click(function(){
    $('#text').text($(this).html());
  });

  $('#ratingdropdown li > a').click(function(){
    $('#ratingtext').text($(this).html());
  });

  $('#categorydropdown li > a').click(function(){
    $('#categorytext').text($(this).html());

    $("#criteriadiv").empty();

    switch($(this).html()) {
      case "Functionality":
      $('#criteriadiv').append(functionalitycriteria);
      break;
      case "UI/UX":
      $('#criteriadiv').append(uicriteria);
      break;

      case "Agile Methodology":
      queryCriteria("uicriteria");
      break;

      case "DevOps":
      $('#criteriadiv').append(devopscriteria);
      break;

      case "Testing":
      $('#criteriadiv').append(testcriteria);
      break;

      default:
      $('#criteriadiv').append(defaultcriteria);
    }

  });

});

// Queries the db for criteria
function queryCriteria(selectedCriteria) {

  $.get("/c/" + selectedCriteria, function(data){
    var htmldata = data.content.data.html;
    $('#criteriadiv').append(htmldata);
  });

}

// Queries the db for team names
function populateTeamsDropdown() {
  $.get("/t/", function(data) {
    var teamNames = data.content.data;
    $.each(teamNames, function(index, element) {
      console.log(element.name);
      $("#teamdropdown").append("<li><a>" + element.name + "</a></li>");
    });
  })
}

var functionalitycriteria = "<h1>Functionality Criteria</h1>"+
"<h4>All submissions must meet the following criteria to ensure that they adhere to a common, usable standard.</h4>"+
"<table><tr><th>Criteria</th><th>Description</th></tr>"+
"<tr><td>Containerization</td><td>can the software easily plugged in to existing software?</td></tr>" +
"<tr><td>Robustness</td><td>is there both an analytics component and a feedback mechanism?</td></tr>"+
"<tr><td>Intrusiveness</td><td>does the software balance its main goal of asking for user feedback with users want for unobtrusive software?</td></tr>"+
"<tr><td>Minimization</td><td>does the software stay out of the way of site content and user interaction?</td></tr></table>";

var uicriteria = "<h1>UI/UX Criteria</h1>" +
"<h4>All submissions must meet the following criteria to ensure that they adhere to a common, usable standard.</h4>"+
"<table><tr><th>Criteria</th><th>Description</th></tr>"+
"<tr><td>Actionable</td><td>the tasks and goals that the service is designed for are clear and easy to understand for users – e.g. do things look like their function? Is it obvious what to press and what not to?</td></tr>"+
"<tr><td>Consistent</td><td>consistency of IA, visual, and interaction design throughout the service</td></tr>"+
"<tr><td>Conten</td><td>appropriate content for the service</td></tr>"+
"<tr><td>Responsive</td><td>works well across platforms of Mobile and Laptop</td></tr>"+
"<tr><td>Flow</td><td>does the user know where to start on the page? Is the path from start to finish clearly defined?</td></tr>"+
"<tr><td>Information Architecture (IA)</td><td>good navigation; clear and consistently presented labels; precise and well defined iconography; orientation within the service is clear; links are obvious.</td></tr>"+
"<tr><td>Interface</td><td>the interface doesn’t get in the way of the content•	Purpose - clear what the service is supposed to let you achieve</td></tr>"
"<tr><td>Visual design</td><td>aesthetically pleasing visual design</td></tr></table>";

var agilecriteria = "placeholder";

var devopscriteria = "placeholder";

var testcriteria = "placeholder";

var defaultcriteria = "<h1>Criteria</h1>"+
"<h4>All submissions must meet the following criteria to ensure that they adhere to a common, usable standard.</h4>"+
"<table><tr><th>Criteria</th><th>Description</th></tr></table>";
