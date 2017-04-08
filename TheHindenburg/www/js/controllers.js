angular.module('app.controllers', ['firebase', 'ngCordova'])
  
.controller('pitScoutingCtrl', ['$scope', '$stateParams', '$firebaseArray',
function ($scope, $stateParams, $firebaseArray) {

  $scope.loadTeamsIntoMemory = function() {
    var refTeams = firebase.database().ref().child("Events/0/Teams/");
    $scope.teams = $firebaseArray(refTeams);   
  };
  $scope.loadTeamsIntoMemory();


  
  $scope.areFieldsDisabled = function() {
    return $scope.fieldsDisabled;
  }


  
  $scope.disableFields = function() {
    $scope.fieldsDisabled = true;
  }



  $scope.enableFields = function() {
    $scope.fieldsDisabled = false;
  }
  
  
  
  $scope.teamSelected = function() {
    $scope.updateField('Team');
    
    console.log("Loading data from Events/0/Pit Scouting/" + $scope.team.number);
    var refTeams = firebase.database().ref().child("Events/0/Pit Scouting/" + $scope.team.number);
    var teams = $firebaseArray(refTeams);
    teams.$loaded().then(function() {
      angular.forEach(teams, function(interview) {
        if (interview["Team Number"] == $scope.team.number) {
          $scope.resetFields();
          
          $scope.PQ3 = interview.PQ3;
          $scope.PQ6 = interview.PQ6;
          $scope.PQ10 = interview.PQ10;
          $scope.PQ13 = interview.PQ13;
          $scope.PQ14A = interview.PQ14A;
          $scope.PQ14B = interview.PQ14B;
          $scope.PQ14C = interview.PQ14C;
          $scope.PQ15 = interview.PQ15;
          $scope.PQ27A = interview.PQ27A;
          $scope.PQ27B = interview.PQ27B;
          $scope.PQ27C = interview.PQ27C;
          $scope.PQ30 = interview.PQ30;
          $scope.PQ31 = interview.PQ31;
        }
      })
    })
  }  



  $scope.updateField = function(fieldName) {
    var refInterviews = firebase.database().ref().child("Events/0/Pit Scouting/" + $scope.team.number);
    var interviews = $firebaseArray(refInterviews);
    interviews.$loaded().then(function() {
      if (interviews.length < 1) {
        $scope.disableFields();
        interviews.$add({"Team Number" : $scope.team.number}).then(function() {
          $scope.enableFields();
        })
      }
      
      if (fieldName == "PQ3") interviews[0].PQ3 = $scope.PQ3;
      if (fieldName == "PQ6") interviews[0].PQ6 = $scope.PQ6;
      if (fieldName == "PQ10") interviews[0].PQ10 = $scope.PQ10;
      if (fieldName == "PQ13") interviews[0].PQ13 = $scope.PQ13;
      if (fieldName == "PQ14A") interviews[0].PQ14A = $scope.PQ14A;
      if (fieldName == "PQ14B") interviews[0].PQ14B = $scope.PQ14B;
      if (fieldName == "PQ14C") interviews[0].PQ14C = $scope.PQ14C;
      if (fieldName == "PQ15") interviews[0].PQ15 = $scope.PQ15;
      if (fieldName == "PQ27A") interviews[0].PQ27A = $scope.PQ27A;
      if (fieldName == "PQ27B") interviews[0].PQ27B = $scope.PQ27B;
      if (fieldName == "PQ27C") interviews[0].PQ27C = $scope.PQ27C;
      if (fieldName == "PQ30") interviews[0].PQ30 = $scope.PQ30;
      if (fieldName == "PQ31") interviews[0].PQ31 = $scope.PQ31;
      if (fieldName == "PQ32") interviews[0].PQ32 = $scope.PQ32;
      
      interviews.$save(0);
    })
  }



/*
    Clear all fields and hide all of those except the team question after the 
    questioning is finished
*/
  $scope.submitPit = function() {
    $scope.team = 0;
    $scope.resetFields();
  };
   
   
   
  $scope.resetFields = function() {
    $scope.PQ3 = 0;
    $scope.PQ6 = 0;
    $scope.PQ10 = 0;
    $scope.PQ13 = 0;
    $scope.PQ14A = "false";
    $scope.PQ14B = "false";
    $scope.PQ14C = "false";
    $scope.PQ15 = 0;
    $scope.PQ27A = "false";
    $scope.PQ27B = "false";
    $scope.PQ27C = "false";
    $scope.PQ30 = 0;
    $scope.PQ31 = 0;
    $scope.PQ32 = "";
  }
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
  
  
  
  $scope.textEntered = function(fieldName) {
    //$scope[fieldName].replace(/[\n\r]/, '');
    $scope.EQ17.replace(/[\n\r]/, '');
  }
  
  
  
  $scope.incGearCount = function() {
      if (!$scope.TQ1) $scope.TQ1 = 0;
      $scope.TQ1 = $scope.TQ1 + 1;
      $scope.updateField('TQ1');
  }
  
  
  
  $scope.decGearCount = function() {
      if (!$scope.TQ1) $scope.TQ1 = 0;
      if ($scope.TQ1 > 0) {
        $scope.TQ1 = $scope.TQ1 - 1;
      }
      $scope.updateField('TQ1');
  }
  
  
  
  $scope.updateField = function(fieldName) {
    var refTeams = firebase.database().ref().child("Events/0/Matches/" + $scope.matchNum + "/Teams/" + $scope.team.number);
    var matches = $firebaseArray(refTeams);
    matches.$loaded().then(function() {
      if ((matches.length < 1) && $scope.allIdFieldsSelected() ) {
        if (fieldName == "AQ1") {
          matches.$add({"Student" : $scope.scout.name, "Team Number" : $scope.team.number, "Match Number" : $scope.matchNum, "AQ1" : $scope.AQ1});
        } else {
          matches.$add({"Student" : $scope.scout.name, "Team Number" : $scope.team.number, "Match Number" : $scope.matchNum});
        }
      } else {
      
        if (fieldName == "Scout" && $scope.allIdFieldsSelected()) matches[0].Student = $scope.scout.name;
        
        if (fieldName == "AQ1") {
          matches[0].AQ1 = $scope.AQ1;
          if (matches[0].AQ1 == 0) {
            //if the answer to AQ1 is no, then the same is true for AQ2-6
            matches[0].AQ2 = "0";
            matches[0].AQ3 = "0";
            matches[0].AQ5 = "0";
            matches[0].AQ10 = "0";
            $scope.AQ2 = "0";
            $scope.AQ3 = "0";
            $scope.AQ5 = "0";
            $scope.AQ10 = "0";
          }
        }
        if (fieldName == "AQ2") matches[0].AQ2 = $scope.AQ2;
        if (fieldName == "AQ3") matches[0].AQ3 = $scope.AQ3;
        if (fieldName == "AQ5") matches[0].AQ5 = $scope.AQ5;
        if (fieldName == "AQ10") matches[0].AQ10 = $scope.AQ10;
  
        if (fieldName == "TQ1") matches[0].TQ1 = $scope.TQ1;

        if (fieldName == "EQ11") matches[0].EQ11 = $scope.EQ11;
        if (fieldName == "EQ17") matches[0].EQ17 = $scope.EQ17.replace(/(\r\n|\n|\r)/gm," ");
  
        if (fieldName == "HQ12") matches[0].HQ12 = $scope.HQ12;
      }
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
  
  
  
  $scope.submitData = function() {
    $scope.updateField("AQ1");
    $scope.updateField("AQ2");
    $scope.updateField("AQ3");
    $scope.updateField("AQ5");
    $scope.updateField("AQ10");
    $scope.updateField("TQ1");
    $scope.updateField("EQ11");
    $scope.updateField("EQ17");
    $scope.updateField("HQ12");
  }
  
  
   
  /*
    Clear all fields and hide all of those except the team and match after a match
    concludes
  */
  $scope.clearData = function() {
    $scope.team = null;
    $scope.selectedRobot = null;
    $scope.matchNum = null;
    $scope.AQ1 = 0;
    $scope.AQ2 = 0;
    $scope.AQ3 = 0;
    $scope.AQ5 = 0;
    $scope.AQ8 = 0;
    $scope.AQ10 = 0;
    $scope.TQ1 = 0;
    $scope.EQ11 = 0;
    $scope.EQ17 = "";
    $scope.HQ12 = 0;
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
    var exportPitData = "Team #\tPQ3\tPQ6\tPQ10\tPQ13\tPQ14A\tPQ14B\tPQ14C\t";
    exportPitData += "PQ15\tPQ27A\tPQ27B\tPQ27C\tPQ30\tPQ31\r\n";
    
    var refPitScouting = firebase.database().ref().child("Events/0/Pit Scouting");
    var pitScouting = $firebaseArray(refPitScouting);
    pitScouting.$loaded().then(function(pitScouting) {
      angular.forEach(pitScouting, function(interviews) {
        angular.forEach(interviews, function(interview) {
          if (interview) {
            if (interview["Team Number"]) exportPitData += interview["Team Number"];
            exportPitData += "\t";
            if (interview.PQ3) exportPitData += interview.PQ3;
            exportPitData += "\t";
            if (interview.PQ6) exportPitData += interview.PQ6;
            exportPitData += "\t";
            if (interview.PQ10) exportPitData += interview.PQ10;
            exportPitData += "\t";
            if (interview.PQ13) exportPitData += interview.PQ13;
            exportPitData += "\t";
            if (interview.PQ14A) exportPitData += interview.PQ14A;
            exportPitData += "\t";
            if (interview.PQ14B) exportPitData += interview.PQ14B;
            exportPitData += "\t";
            if (interview.PQ14C) exportPitData += interview.PQ14C;
            exportPitData += "\t";
            if (interview.PQ15) exportPitData += interview.PQ15;
            exportPitData += "\t";
            if (interview.PQ27A) exportPitData += interview.PQ27A;
            exportPitData += "\t";
            if (interview.PQ27B) exportPitData += interview.PQ27B;
            exportPitData += "\t";
            if (interview.PQ27C) exportPitData += interview.PQ27C;
            exportPitData += "\t";
            if (interview.PQ30) exportPitData += interview.PQ30;
            exportPitData += "\t";
            if (interview.PQ31) exportPitData += interview.PQ31;
            exportPitData += "\r\n";
          }
        })
      })
    });
    
    
    var exportMatchData = "Team #\tMatch #\tScout\tAQ1\tAQ2\tAQ3\tAQ5\t";
    exportMatchData += "AQ8\tAQ10\tTQ1\tEQ11\tEQ17\tHQ12\r\n";

    var refMatches = firebase.database().ref().child("Events/0/Matches");
    var matches = $firebaseArray(refMatches);
    matches.$loaded().then(function(matches) {
      angular.forEach(matches, function(match) {
        var robotMatches = match["Teams"];
        angular.forEach(robotMatches, function(robotMatchWrapper) {
          angular.forEach(robotMatchWrapper, function(robotMatch) {
          
            if (robotMatch["Team Number"]) exportMatchData += robotMatch["Team Number"];
            exportMatchData += "\t";
            if (robotMatch["Match Number"]) exportMatchData += robotMatch["Match Number"];
            exportMatchData += "\t";
            if (robotMatch["Student"]) exportMatchData += robotMatch["Student"];
            exportMatchData += "\t";
            if (robotMatch["AQ1"]) exportMatchData += robotMatch["AQ1"];
            exportMatchData += "\t";
            if (robotMatch["AQ2"]) exportMatchData += robotMatch["AQ2"];
            exportMatchData += "\t";
            if (robotMatch["AQ3"]) exportMatchData += robotMatch["AQ3"];
            exportMatchData += "\t";
            if (robotMatch["AQ5"]) exportMatchData += robotMatch["AQ5"];
            exportMatchData += "\t";
            if (robotMatch["AQ8"]) exportMatchData += robotMatch["AQ8"];
            exportMatchData += "\t";
            if (robotMatch["AQ10"]) exportMatchData += robotMatch["AQ10"];
            exportMatchData += "\t";
            if (robotMatch["TQ1"]) exportMatchData += robotMatch["TQ1"];
            exportMatchData += "\t";
            if (robotMatch["EQ11"]) exportMatchData += robotMatch["EQ11"];
            exportMatchData += "\t";
            if (robotMatch["EQ17"]) exportMatchData += robotMatch["EQ17"];
            exportMatchData += "\t";
            if (robotMatch["HQ12"]) exportMatchData += robotMatch["HQ12"];
            exportMatchData += "\r\n";
          })  
        })
      })
    })
    .then(function() {
      //load the export data into the text field
      $scope.exportPitData = exportPitData;
      $scope.exportMatchData = exportMatchData;
    })
    .catch(function(error) {
      console.log("Error:", error);
    });
  }
  
  $scope.setNumMatches = function() {
    var refMatchNum = firebase.database().ref().child("Events/0");
    refMatchNum.update({"numMatches" : $scope.numMatches});
  }
  
}])

.controller('burgerMinderCtrl', ['$scope', '$stateParams', '$firebaseArray', '$cordovaFile', '$cordovaToast', '$interval',
  function ($scope, $stateParams, $firebaseArray, $cordovaFile, $cordovaToast, $interval) {
    
  /* This method will pull together an overview for each match, including the
   * match number, team number, scout name, and the % of the following questions
   * that have been answered: AQ1, AQ2, AQ3, AQ5, AQ8, AQ10, TQ1, EQ11, and HQ12 
   */
   

  $scope.refresh = function() {
    var refMatches = firebase.database().ref().child("Events/0/Matches");
    var matches = $firebaseArray(refMatches);
    $scope.matchOverviews = [];
    var thisMatchOverview = {};
    
    matches.$loaded().then(function(matches) { 
      angular.forEach(matches, function(match) { 
        var robotMatches = match["Teams"];
        angular.forEach(robotMatches, function(robotMatchWrapper) { 
          angular.forEach(robotMatchWrapper, function(robotMatch) { 
            if (robotMatch["Match Number"]) {
              thisMatchOverview = {};
              if (!$scope.matchOverviews[robotMatch["Match Number"]]) {
                $scope.matchOverviews[robotMatch["Match Number"]] = {'scouts': []};
              }
              thisMatchOverview = $scope.matchOverviews[robotMatch["Match Number"]];
              thisMatchOverview.matchNum = robotMatch["Match Number"];
              var scoutRecord = {};
              scoutRecord.name = robotMatch['Student'];
              scoutRecord.teamNum = robotMatch['Team Number'];
              
              //determine the % of critical questions answered
              var pctAnswered = 0;
              var unanswered = ["AQ1", "AQ2", "AQ3", "AQ5", "AQ8", "AQ10", "TQ1", "EQ11", "HQ12"];
              if (robotMatch.AQ1 != null) {
                var index = unanswered.indexOf("AQ1");
                if (index > -1) {
                  unanswered.splice(index, 1);
                }
                pctAnswered += 20;
              }
              if (robotMatch.AQ2 != null) {
                var index = unanswered.indexOf("AQ2");
                if (index > -1) {
                  unanswered.splice(index, 1);
                }
                pctAnswered += 10;
              }
              if (robotMatch.AQ3 != null) {
                var index = unanswered.indexOf("AQ3");
                if (index > -1) {
                  unanswered.splice(index, 1);
                }
                pctAnswered += 10;
              }
              if (robotMatch.AQ5 != null) {
                var index = unanswered.indexOf("AQ5");
                if (index > -1) {
                  unanswered.splice(index, 1);
                }
                pctAnswered += 10;
              }
              if (robotMatch.AQ8 != null) {
                var index = unanswered.indexOf("AQ8");
                if (index > -1) {
                  unanswered.splice(index, 1);
                }
                pctAnswered += 10;
              }
              if (robotMatch.AQ10 != null) {
                var index = unanswered.indexOf("AQ10");
                if (index > -1) {
                  unanswered.splice(index, 1);
                }
                pctAnswered += 10;
              }
              if (robotMatch.TQ1 != null) {
                var index = unanswered.indexOf("TQ1");
                if (index > -1) {
                  unanswered.splice(index, 1);
                }
                pctAnswered += 10;
              }
              if (robotMatch.EQ11 != null) {
                var index = unanswered.indexOf("EQ11");
                if (index > -1) {
                  unanswered.splice(index, 1);
                }
                pctAnswered += 10;
              }
              if (robotMatch.HQ12 != null) {
                var index = unanswered.indexOf("HQ12");
                if (index > -1) {
                  unanswered.splice(index, 1);
                }
                pctAnswered += 10;
              }

              scoutRecord.percent = pctAnswered;
              console.log("Unaswered questions: " + unanswered);
              scoutRecord.unanswered = unanswered;

              thisMatchOverview['scouts'].push(scoutRecord);
            }
          })
        })
        //console.log("8. matchOverviews after match added: " + JSON.stringify($scope.matchOverviews));
      })
    }).then(function() {
      //remove null values from the array
      $scope.matchOverviews = $scope.matchOverviews.filter(function(n){ return n != undefined }); 
    })
  }
  
  $scope.refresh();
  $interval($scope.refresh, 5000); 
  
}])
   
.controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) { }]);
 