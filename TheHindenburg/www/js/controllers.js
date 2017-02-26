angular.module('app.controllers', ['firebase', 'ngCordova'])
  
.controller('pitScoutingCtrl', ['$scope', '$stateParams', '$firebaseArray',
function ($scope, $stateParams, $firebaseArray) {

  $scope.loadTeamsIntoMemory = function() {
    var refTeams = firebase.database().ref().child("Events/0/Teams/");
    $scope.teams = $firebaseArray(refTeams);   
  };
  $scope.loadTeamsIntoMemory();

/*
    Clear all fields and hide all of those except the team question after the 
    questioning is finished
*/

  $scope.submitPit = function() {
    $scope.PQ1 = "";
    $scope.PQ2 = 0;
    $scope.PQ3 = 0;
    $scope.PQ4 = 0;
    $scope.PQ5 = 0;
    $scope.PQ6 = 0;
    $scope.PQ7 = 0;
    $scope.PQ8 = 0;
    $scope.PQ9 = 0;
    $scope.PQ10 = 0;
    $scope.PQ11A = "false";
    $scope.PQ11B = "false";
    $scope.PQ11C = "false";
    $scope.PQ12A = "false";
    $scope.PQ12B = "false";
    $scope.PQ12C = "false";
    $scope.PQ12D = "false";
    $scope.PQ13 = 0;
    $scope.PQ14A = "false";
    $scope.PQ14B = "false";
    $scope.PQ14C = "false";
    $scope.PQ15 = 0;
    $scope.PQ16 = 0;
    $scope.PQ17 = 0;
    $scope.PQ18 = "";
    $scope.PQ19 = "";
    $scope.PQ20 = 1;
    $scope.PQ21 = 0;
    $scope.PQ22 = 0;
    $scope.PQ23 = 0;
    $scope.PQ24 = 0;
    $scope.PQ25A = "false";
    $scope.PQ25B = "false";
    $scope.PQ25C = "false";
    $scope.PQ25D = "false";
    $scope.PQ26 = "";
    $scope.PQ27A = "false";
    $scope.PQ27B = "false";
    $scope.PQ27C = "false";
    $scope.PQ28 = 0;
    $scope.PQ29 = "";
   };
}])
   
.controller('matchScoutingCtrl', ['$scope', '$stateParams', '$firebaseArray', '$firebaseObject', 
function ($scope, $stateParams, $firebaseArray, $firebaseObject) {
  
  $scope.loadNumMatches = function() {
    var ref = firebase.database().ref().child("Events/0/");
    var obj = $firebaseObject(ref);
    obj.$loaded().then(function() {
      $scope.numMatches = new Array(obj.numMatches);
    }).catch(function(error) {
      console.log("Error:", error);
    });
  }
  $scope.loadNumMatches();

  $scope.loadTeamsIntoMemory = function() {
    var refTeams = firebase.database().ref().child("Events/0/Teams/");
    $scope.teams = $firebaseArray(refTeams);
  };
  $scope.loadTeamsIntoMemory();
  
  $scope.loadScoutsIntoMemory = function() {
    var refScouts = firebase.database().ref().child("Events/0/Scouts/");
    $scope.scouts = $firebaseArray(refScouts);
  }
  $scope.loadScoutsIntoMemory();
  
  $scope.showIfButtonClicked = function(sectionName) {
    if (sectionName == $scope.buttonClicked) {
      if ($scope.allIdFieldsSelected()) {
        return true;
      }
    }
    return false;
  }
    
  $scope.buttonClick = function(buttonName) {
      $scope.buttonClicked = buttonName;
  }
  
  $scope.allIdFieldsSelected = function() {
    return (($scope.teamSelected == true) && ($scope.scoutSelected == true) && ($scope.matchNumSelected == true));
  }
  
  $scope.updateField = function(fieldName) {
    var refTeams = firebase.database().ref().child("Events/0/Matches/" + $scope.matchNum + "/Teams/");
    var matches = $firebaseArray(refTeams);
    matches.$loaded().then(function() {
      if ((matches.length < 1) && $scope.allIdFieldsSelected() ) {
        matches.$add({"Student" : $scope.scout.name, "Team Number" : $scope.team.number, "Match Number" : $scope.matchNum});
      }
      
      if (fieldName == "Scout" && $scope.allIdFieldsSelected()) matches[0].Student = $scope.scout.name;
      
      if (fieldName == "AQ1") matches[0].AQ1 = $scope.AQ1;
      if (fieldName == "AQ2") matches[0].AQ2 = $scope.AQ2;
      if (fieldName == "AQ3") matches[0].AQ3 = $scope.AQ3;
      if (fieldName == "AQ4") matches[0].AQ4 = $scope.AQ4;
      if (fieldName == "AQ5") matches[0].AQ5 = $scope.AQ5;
      if (fieldName == "AQ6") matches[0].AQ6 = $scope.AQ6;
      if (fieldName == "AQ7") matches[0].AQ7 = $scope.AQ7;
      if (fieldName == "AQ8") matches[0].AQ8 = $scope.AQ8;
      if (fieldName == "AQ9") matches[0].AQ9 = $scope.AQ9;

      if (fieldName == "TQ1") matches[0].TQ1 = $scope.TQ1;
      if (fieldName == "TQ2") matches[0].TQ2 = $scope.TQ2;
      if (fieldName == "TQ3") matches[0].TQ3 = $scope.TQ3;
      if (fieldName == "TQ4") matches[0].TQ4 = $scope.TQ4;
      if (fieldName == "TQ5") matches[0].TQ5 = $scope.TQ5;
      if (fieldName == "TQ6") matches[0].TQ6 = $scope.TQ6;
      if (fieldName == "TQ7") matches[0].TQ7 = $scope.TQ7;
      if (fieldName == "TQ8") matches[0].TQ8 = $scope.TQ8;
      if (fieldName == "TQ9") matches[0].TQ9 = $scope.TQ9;

      if (fieldName == "EQ1") matches[0].EQ1 = $scope.EQ1;
      if (fieldName == "EQ2") matches[0].EQ2 = $scope.EQ2;
      if (fieldName == "EQ3") matches[0].EQ3 = $scope.EQ3;
      if (fieldName == "EQ4") matches[0].EQ4 = $scope.EQ4;
      if (fieldName == "EQ5") matches[0].EQ5 = $scope.EQ5;
      if (fieldName == "EQ6") matches[0].EQ6 = $scope.EQ6;
      if (fieldName == "EQ7") matches[0].EQ7 = $scope.EQ7;
      if (fieldName == "EQ8") matches[0].EQ8 = $scope.EQ8;
      if (fieldName == "EQ9") matches[0].EQ9 = $scope.EQ9;
      if (fieldName == "EQ10") matches[0].EQ10 = $scope.EQ10;
      if (fieldName == "EQ11") matches[0].EQ11 = $scope.EQ11;
      if (fieldName == "EQ12") matches[0].EQ12 = $scope.EQ12;
      if (fieldName == "EQ13") matches[0].EQ13 = $scope.EQ13;
      if (fieldName == "EQ14") matches[0].EQ14 = $scope.EQ14;
      if (fieldName == "EQ15") matches[0].EQ15 = $scope.EQ15;
      if (fieldName == "EQ16") matches[0].EQ16 = $scope.EQ16;
      if (fieldName == "EQ17") matches[0].EQ17 = $scope.EQ17;

      if (fieldName == "HQ1") matches[0].HQ1 = $scope.HQ1;
      if (fieldName == "HQ2") matches[0].HQ2 = $scope.HQ2;
      if (fieldName == "HQ3") matches[0].HQ3 = $scope.HQ3;
      if (fieldName == "HQ4") matches[0].HQ4 = $scope.HQ4;
      if (fieldName == "HQ5") matches[0].HQ5 = $scope.HQ5.number;
      if (fieldName == "HQ6") matches[0].HQ6 = $scope.HQ6.number;
      if (fieldName == "HQ7") matches[0].HQ7 = $scope.HQ7.number;
      if (fieldName == "HQ8") matches[0].HQ8 = $scope.HQ8;
      if (fieldName == "HQ9") matches[0].HQ9 = $scope.HQ9;
      if (fieldName == "HQ10") matches[0].HQ10 = $scope.HQ10;
      if (fieldName == "HQ11") matches[0].HQ11 = $scope.HQ11;
      
      matches.$save(0);
    }).catch(function(error) {
      console.log("Error:", error);
    });
    
  }
  
  $scope.selectTeamMatchScout = function() {
    //Do something about a team/match#/scout having been selected
    if ($scope.team) {
      $scope.teamSelected = true;
    } else {
      $scope.teamSelected = false;
    }
    
    if ($scope.scout) {
      $scope.scoutSelected = true;
      $scope.updateField('Scout');
    } else {
      $scope.scoutSelected = false;
    }
    
    if ($scope.matchNum) {
      $scope.matchNumSelected = true;
    } else {
      $scope.matchNumSelected = false;
    }
    
  }
   
  /*
    Clear all fields and hide all of those except the team and match after a match
    concludes
  */
  $scope.submitMatch = function() {
    $scope.team = null;
    $scope.selectedRobot = null;
    $scope.match = null;
    $scope.AQ1 = 0;
    $scope.AQ2 = 0;
    $scope.AQ3 = 0;
    $scope.AQ4 = 0;
    $scope.AQ5 = 0;
    $scope.AQ6 = 0;
    $scope.AQ7 = 0;
    $scope.AQ8 = 0;
    $scope.AQ9 = 0;
    $scope.TQ1 = 0;
    $scope.TQ2 = 0;
    $scope.TQ3 = 0;
    $scope.TQ4 = 0;
    $scope.TQ5 = 0;
    $scope.TQ6 = 0;
    $scope.TQ7 = 0;
    $scope.TQ8 = 0;
    $scope.TQ9 = 0;
    $scope.EQ1 = 0;
    $scope.EQ2 = 0;
    $scope.EQ3 = 0;
    $scope.EQ4 = 0;
    $scope.EQ5 = 0;
    $scope.EQ6 = 0;
    $scope.EQ7 = 0;
    $scope.EQ8 = -1;
    $scope.EQ9 = -1;
    $scope.EQ10 = -1;
    $scope.EQ11 = 0;
    $scope.EQ12 = 0;
    $scope.EQ13 = 0;
    $scope.EQ14 = 0;
    $scope.EQ15 = 0;
    $scope.EQ16 = 0;
    $scope.EQ17 = "";
    $scope.HQ1 = 0;
    $scope.HQ2 = 0;
    $scope.HQ3 = 0;
    $scope.HQ4 = 0;
    $scope.HQ5 = 0;
    $scope.HQ6 = 0;
    $scope.HQ7 = 0;
    $scope.HQ8 = 0;
    $scope.HQ9 = 0;
    $scope.HQ10 = 0;
    $scope.HQ11 = 0;
  };
}])
   
.controller('synchronizeCtrl', ['$scope', '$stateParams', '$firebaseArray', '$cordovaFile', '$cordovaToast', 
  function ($scope, $stateParams, $firebaseArray, $cordovaFile, $cordovaToast) {
    
  $scope.importScouts = function() {
    alert("The scout-importing function is not available, yet");
  }
  
  $scope.importTeams = function() {
    alert("The team-importing function is not available, yet");
  }
  
  $scope.exportData = function() {
    //let the user know that data is exporting
    //$cordovaToast.showShortTop('Hang on... data is exporting');      
    
    //Create file name that includes the date the file was created
    var pitFilename = "PitExportFromHindenburg.csv";
    var filePath = "file:///storage/emulated/0/";
    
    //create the file to write to
    //create the header row
    /*
    var exportPitData = "PQ1\tPQ2\tPQ3\tPQ4\tPQ5\tPQ6\tPQ7\tPQ8\tPQ9\tPQ10\t";
    exportPitData += "PQ11A\tPQ11B\tPQ11C\tPQ12A\tPQ12B\tPQ12C\tPQ12D\tPQ13\t";
    exportPitData += "PQ14A\tPQ14B\tPQ14C\tPQ15\tPQ16\tPQ17\tPQ18\tPQ19\tPQ20\t";
    exportPitData += "PQ21\tPQ22\tPQ23\tPQ24\tPQ25A\tPQ25B\tPQ25C\tPQ25D\t";
    exportPitData += "PQ26\tPQ27A\tPQ27B\tPQ27C\tPQ28\tPQ29\r\n";
    
    var refTeams = firebase.database().ref().child("Events/0/Pit%20Scouting");
    var matches = $firebaseArray(refTeams);
    */
    
    /*
    
    */
    
    var exportMatchData = "Team #\tMatch #\tScout\tAQ1\tAQ2\tAQ3\tAQ4\tAQ5\t";
    exportMatchData += "AQ6\tAQ7\tAQ8\tAQ9\tTQ1\tTQ2\tTQ3\tTQ4\tTQ5\tTQ6\tTQ7\t";
    exportMatchData += "TQ8\tTQ9\tEQ1\tEQ2\tEQ3\tEQ4\tEQ5\tEQ6\tEQ7\tEQ8\tEQ9\t";
    exportMatchData += "EQ10\tEQ11\tEQ12\tEQ13\tEQ14\tEQ15\tEQ16\tEQ17\tHQ1\t";
    exportMatchData += "HQ2\tHQ3\tHQ4\tHQ5\tHQ6\tHQ7\tHQ8\tHQ9\tHQ10\tHQ11\r\n";

    var refMatches = firebase.database().ref().child("Events/0/Matches");
    var matches = $firebaseArray(refMatches);
    matches.$loaded().then(function(matches) {
      angular.forEach(matches, function(match) {
        var robotMatches = match["Teams"];
        angular.forEach(robotMatches, function(robotMatch) {
          if (robotMatch["Team Number"]) exportMatchData += robotMatch["Team Number"];
          if (robotMatch["Match Number"]) exportMatchData += robotMatch["Match Number"];
          if (robotMatch["Student"]) exportMatchData += robotMatch["Student"] + "\t";
          if (robotMatch["AQ1"]) exportMatchData += robotMatch["AQ1"] + "\t";
          if (robotMatch["AQ2"]) exportMatchData += robotMatch["AQ2"] + "\t";
          if (robotMatch["AQ3"]) exportMatchData += robotMatch["AQ3"] + "\t";
          if (robotMatch["AQ4"]) exportMatchData += robotMatch["AQ4"] + "\t";
          if (robotMatch["AQ5"]) exportMatchData += robotMatch["AQ5"] + "\t";
          if (robotMatch["AQ6"]) exportMatchData += robotMatch["AQ6"] + "\t";
          if (robotMatch["AQ7"]) exportMatchData += robotMatch["AQ7"] + "\t";
          if (robotMatch["AQ8"]) exportMatchData += robotMatch["AQ8"] + "\t";
          if (robotMatch["AQ9"]) exportMatchData += robotMatch["AQ9"] + "\t";
          if (robotMatch["TQ1"]) exportMatchData += robotMatch["TQ1"] + "\t";
          if (robotMatch["TQ2"]) exportMatchData += robotMatch["TQ2"] + "\t";
          if (robotMatch["TQ3"]) exportMatchData += robotMatch["TQ3"] + "\t";
          if (robotMatch["TQ4"]) exportMatchData += robotMatch["TQ4"] + "\t";
          if (robotMatch["TQ5"]) exportMatchData += robotMatch["TQ5"] + "\t";
          if (robotMatch["TQ6"]) exportMatchData += robotMatch["TQ6"] + "\t";
          if (robotMatch["TQ7"]) exportMatchData += robotMatch["TQ7"] + "\t";
          if (robotMatch["TQ8"]) exportMatchData += robotMatch["TQ8"] + "\t";
          if (robotMatch["TQ9"]) exportMatchData += robotMatch["TQ9"] + "\t";
          if (robotMatch["EQ1"]) exportMatchData += robotMatch["EQ1"] + "\t";
          if (robotMatch["EQ2"]) exportMatchData += robotMatch["EQ2"] + "\t";
          if (robotMatch["EQ3"]) exportMatchData += robotMatch["EQ3"] + "\t";
          if (robotMatch["EQ4"]) exportMatchData += robotMatch["EQ4"] + "\t";
          if (robotMatch["EQ5"]) exportMatchData += robotMatch["EQ5"] + "\t";
          if (robotMatch["EQ6"]) exportMatchData += robotMatch["EQ6"] + "\t";
          if (robotMatch["EQ7"]) exportMatchData += robotMatch["EQ7"] + "\t";
          if (robotMatch["EQ8"]) exportMatchData += robotMatch["EQ8"] + "\t";
          if (robotMatch["EQ9"]) exportMatchData += robotMatch["EQ9"] + "\t";
          if (robotMatch["EQ10"]) exportMatchData += robotMatch["EQ10"] + "\t";
          if (robotMatch["EQ11"]) exportMatchData += robotMatch["EQ11"] + "\t";
          if (robotMatch["EQ12"]) exportMatchData += robotMatch["EQ12"] + "\t";
          if (robotMatch["EQ13"]) exportMatchData += robotMatch["EQ13"] + "\t";
          if (robotMatch["EQ14"]) exportMatchData += robotMatch["EQ14"] + "\t";
          if (robotMatch["EQ15"]) exportMatchData += robotMatch["EQ15"] + "\t";
          if (robotMatch["EQ16"]) exportMatchData += robotMatch["EQ16"] + "\t";
          if (robotMatch["EQ17"]) exportMatchData += robotMatch["EQ17"] + "\t";
          if (robotMatch["HQ1"]) exportMatchData += robotMatch["HQ1"] + "\t";
          if (robotMatch["HQ2"]) exportMatchData += robotMatch["HQ2"] + "\t";
          if (robotMatch["HQ3"]) exportMatchData += robotMatch["HQ3"] + "\t";
          if (robotMatch["HQ4"]) exportMatchData += robotMatch["HQ4"] + "\t";
          if (robotMatch["HQ5"]) exportMatchData += robotMatch["HQ5"] + "\t";
          if (robotMatch["HQ6"]) exportMatchData += robotMatch["HQ6"] + "\t";
          if (robotMatch["HQ7"]) exportMatchData += robotMatch["HQ7"] + "\t";
          if (robotMatch["HQ8"]) exportMatchData += robotMatch["HQ8"] + "\t";
          if (robotMatch["HQ9"]) exportMatchData += robotMatch["HQ9"] + "\t";
          if (robotMatch["HQ10"]) exportMatchData += robotMatch["HQ10"] + "\t";
          if (robotMatch["HQ11"]) exportMatchData += robotMatch["HQ11"] + "\t";
        })
      })
    })
    .catch(function(error) {
      console.log("Error:", error);
    });
    
    var matchFilename = "MatchExportFromHindenburg.csv";
    $cordovaFile.writeFile(filePath, matchFilename, exportMatchData, true)
      .then(function (success) {
        console.log("Text successfully written to Match file");
      }, function (error) {
        console.log("Problem writing text to Match file");
        console.log("Error message: " + JSON.stringify(error));
      }
    );
  }
  
  /*
  $scope.exportDataCat5 = function() {
    Robot.all().then(function(robots) {
      for (var i=0; i<robots.length; i++) {          
        exportData1 += robots[i].name;
        exportData1 += "\t";
        exportData1 += robots[i].teamId;
        exportData1 += "\t";
        exportData1 += robots[i].spy;
        exportData1 += "\r\n";
      }
    }).then(function() {
      $cordovaFile.writeFile(filePath, pitFilename, exportData1, true)
        .then(function (success) {
          console.log("Text successfully written to Pit file");
        }, function (error) {
          console.log("Problem writing text to Pit file");
          console.log("Error message: " + JSON.stringify(error));
        });       
    });

    //Create the exported Robot Match data to write to a file
    var exportData2 = "match ID\trobot ID\tteam ID\t# boulders thru low goal in Auto\t";
    RobotMatch.all().then(function(matches) {
      for (var i=0; i<matches.length; i++) {
        exportData2 += matches[i].matchId;
        exportData2 += "\t";
        exportData2 += matches[i].spyComm1;
        exportData2 += "\r\n";
      }
    }).then(function() {
      var matchFilename = "MatchExportFromHindenburg.csv";
      $cordovaFile.writeFile(filePath, matchFilename, exportData2, true)
        .then(function (success) {
          console.log("Text successfully written to Match file");
        }, function (error) {
          console.log("Problem writing text to Match file");
          console.log("Error message: " + JSON.stringify(error));
        });
    })
  }
  */
  
  
  
  
  
  
  
  
  $scope.setNumMatches = function() {
    alert("Setting number of matches to " + $scope.numMatches);
    var refMatchNum = firebase.database().ref().child("Events/0");
    refMatchNum.update({"numMatches" : $scope.numMatches});
  }
  
}])
   
.controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) { }]);
 