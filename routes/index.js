var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');

var Criteria = require('../models/injectors');
var Team = require('../models/injectors');

// When the browser requests the default site
// render the index page
router.get('/', function(req,res) {
  res.render('index');
});

// When the browser requests the login page
// render the login page
router.get('/login', function(req,res) {
  res.render('login');
});

// Render the judging panel page
router.get('/judging', function(req,res) {
  res.render('judging');
});

// Render the signup page
router.get('/signup', function(req,res) {
  res.render('signup');
});

// Render the scoreboard page
router.get('/scoreboard', function(req,res) {
  res.render('judges_scoreboard');
});

// Render the scores page
router.get('/scores', function(req,res) {
  res.render('scores');
});

// Render the participant scoreboard page
router.get('/participants_scoreboard', function(req,res) {
  res.render('participants_scoreboard');
});

// Render the judges scoreboard page
router.get('/judges_scoreboard', function(req,res) {
  res.render('judges_scoreboard');
});

// Handler for judging criteria
router.get('/c/:criteriaName', function(req,res) {
  var criteriaName = req.params.criteriaName;
  //console.log("ROUTE: getting data for: " + criteriaName);
  // Actual query
  Criteria.findOne({'name':criteriaName})
  .exec(function(error, htmlData) {
    //console.log("SCHEMA: Data found: ");
    //console.log(htmlData);
    if (error) utils.sendErrResponse(res, 500, "An error occurred retreiving test data");
      else {
        //console.log("ROUTE: Data: ");
        //console.log(htmlData);
        utils.sendSuccessResponse(res, {data:htmlData});
      }
  });
});

// Handler for teams queries
router.get('/t/', function(req,res) {
  var teamNames = req.params.teamName;
  Team.find({})
  .exec(function(error, teamNamesData) {
    if (error) utils.sendErrResponse(res, 500, "An error occurred retreiving team names data");
      else {
        console.log("ROUTE: Team names data: ");
        console.log(teamNamesData);
        utils.sendSuccessResponse(res, {data:teamNamesData});
      }
  });
});

module.exports = router;
