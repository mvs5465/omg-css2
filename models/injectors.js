var mongoose = require('mongoose');

var CriteriaSchema = new mongoose.Schema({
  name: String,
  html: String
});

// Schema for judging criteria
CriteriaSchema.statics = {
  getCriteriaHTMLByName: function(name, cb) {
    console.log("SCHEMA: getting data for: " + name);
    this.findOne({'name':uicriteria}, function(error, htmlData) {
      console.log("SCHEMA: Data found: ");
      console.log(htmlData);
      if (error) cb(error);
      cb(null, htmlData);
    })
  }
};

var Criteria = mongoose.model('criteria', CriteriaSchema);
module.exports = Criteria;


// // Schema for team names
var TeamSchema = new mongoose.Schema({
  name: String
});

TeamSchema.statics = {
  getAllTeams: function(name, cb) {
    console.log("SCHEMA: getting data for all teams");
    this.find({}, function(error, teamNamesData) {
      console.log("SCHEMA: Data found: ");
      console.log(teamNamesData);
      if (error) cb(error);
      cb(null, teamNamesData);
    })
  }
};


var Team = mongoose.model('teams', TeamSchema);
module.exports = Team;
