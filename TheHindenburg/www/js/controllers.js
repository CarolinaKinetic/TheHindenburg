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
          
          $scope.PQ1 = interview.PQ1;
          $scope.PQ2 = interview.PQ2;
          $scope.PQ3 = interview.PQ3;
          $scope.PQ4 = interview.PQ4;
          $scope.PQ5 = interview.PQ5;
          $scope.PQ6 = interview.PQ6;
          $scope.PQ7 = interview.PQ7;
          $scope.PQ8 = interview.PQ8;
          $scope.PQ9 = interview.PQ9;
          $scope.PQ10 = interview.PQ10;
          $scope.PQ11A = interview.PQ11A;
          $scope.PQ11B = interview.PQ11B;
          $scope.PQ11C = interview.PQ11C;
          $scope.PQ12A = interview.PQ12A;
          $scope.PQ12B = interview.PQ12B;
          $scope.PQ12C = interview.PQ12C;
          $scope.PQ12D = interview.PQ12D;
          $scope.PQ13 = interview.PQ13;
          $scope.PQ14A = interview.PQ14A;
          $scope.PQ14B = interview.PQ14B;
          $scope.PQ14C = interview.PQ14C;
          $scope.PQ15 = interview.PQ15;
          $scope.PQ16 = interview.PQ16;
          $scope.PQ17 = interview.PQ17;
          $scope.PQ18 = interview.PQ18;
          $scope.PQ19 = interview.PQ19;
          $scope.PQ20 = interview.PQ20;
          $scope.PQ21 = interview.PQ21;
          $scope.PQ22 = interview.PQ22;
          $scope.PQ23 = interview.PQ23;
          $scope.PQ24 = interview.PQ24;
          $scope.PQ25A = interview.PQ25A;
          $scope.PQ25B = interview.PQ25B;
          $scope.PQ25C = interview.PQ25C;
          $scope.PQ25D = interview.PQ25D;
          $scope.PQ26 = interview.PQ26;
          $scope.PQ27A = interview.PQ27A;
          $scope.PQ27B = interview.PQ27B;
          $scope.PQ27C = interview.PQ27C;
          $scope.PQ28 = interview.PQ28;
          $scope.PQ29 = interview.PQ29;
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
      
      if (fieldName == "PQ1") interviews[0].PQ1 = $scope.PQ1;
      if (fieldName == "PQ2") interviews[0].PQ2 = $scope.PQ2;
      if (fieldName == "PQ3") interviews[0].PQ3 = $scope.PQ3;
      if (fieldName == "PQ4") interviews[0].PQ4 = $scope.PQ4;
      if (fieldName == "PQ5") interviews[0].PQ5 = $scope.PQ5;
      if (fieldName == "PQ6") interviews[0].PQ6 = $scope.PQ6;
      if (fieldName == "PQ7") interviews[0].PQ7 = $scope.PQ7;
      if (fieldName == "PQ8") interviews[0].PQ8 = $scope.PQ8;
      if (fieldName == "PQ9") interviews[0].PQ9 = $scope.PQ9;
      if (fieldName == "PQ10") interviews[0].PQ10 = $scope.PQ10;
      if (fieldName == "PQ11A") interviews[0].PQ11A = $scope.PQ11A;
      if (fieldName == "PQ11B") interviews[0].PQ11B = $scope.PQ11B;
      if (fieldName == "PQ11C") interviews[0].PQ11C = $scope.PQ11C;
      if (fieldName == "PQ12A") interviews[0].PQ12A = $scope.PQ12A;
      if (fieldName == "PQ12B") interviews[0].PQ12B = $scope.PQ12B;
      if (fieldName == "PQ12C") interviews[0].PQ12C = $scope.PQ12C;
      if (fieldName == "PQ12D") interviews[0].PQ12D = $scope.PQ12D;
      if (fieldName == "PQ13") interviews[0].PQ13 = $scope.PQ13;
      if (fieldName == "PQ14A") interviews[0].PQ14A = $scope.PQ14A;
      if (fieldName == "PQ14B") interviews[0].PQ14B = $scope.PQ14B;
      if (fieldName == "PQ14C") interviews[0].PQ14C = $scope.PQ14C;
      if (fieldName == "PQ15") interviews[0].PQ15 = $scope.PQ15;
      if (fieldName == "PQ16") interviews[0].PQ16 = $scope.PQ16;
      if (fieldName == "PQ17") interviews[0].PQ17 = $scope.PQ17;
      if (fieldName == "PQ18") interviews[0].PQ18 = $scope.PQ18;
      if (fieldName == "PQ19") interviews[0].PQ19 = $scope.PQ19;
      if (fieldName == "PQ20") interviews[0].PQ20 = $scope.PQ20;
      if (fieldName == "PQ21") interviews[0].PQ21 = $scope.PQ21;
      if (fieldName == "PQ22") interviews[0].PQ22 = $scope.PQ22;
      if (fieldName == "PQ23") interviews[0].PQ23 = $scope.PQ23;
      if (fieldName == "PQ24") interviews[0].PQ24 = $scope.PQ24;
      if (fieldName == "PQ25A") interviews[0].PQ25A = $scope.PQ25A;
      if (fieldName == "PQ25B") interviews[0].PQ25B = $scope.PQ25B;
      if (fieldName == "PQ25C") interviews[0].PQ25C = $scope.PQ25C;
      if (fieldName == "PQ25D") interviews[0].PQ25D = $scope.PQ25D;
      if (fieldName == "PQ26") interviews[0].PQ26 = $scope.PQ26;
      if (fieldName == "PQ27A") interviews[0].PQ27A = $scope.PQ27A;
      if (fieldName == "PQ27B") interviews[0].PQ27B = $scope.PQ27B;
      if (fieldName == "PQ27C") interviews[0].PQ27C = $scope.PQ27C;
      if (fieldName == "PQ28") interviews[0].PQ28 = $scope.PQ28;
      if (fieldName == "PQ29") interviews[0].PQ29 = $scope.PQ29;
      
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
    var exportPitData = "Team #\tPQ1\tPQ2\tPQ3\tPQ4\tPQ5\tPQ6\tPQ7\tPQ8\tPQ9\t";
    exportPitData += "PQ10\tPQ11A\tPQ11B\tPQ11C\tPQ12A\tPQ12B\tPQ12C\tPQ12D\t";
    exportPitData += "PQ13\tPQ14A\tPQ14B\tPQ14C\tPQ15\tPQ16\tPQ17\tPQ18\t";
    exportPitData += "PQ19\tPQ20\tPQ21\tPQ22\tPQ23\tPQ24\tPQ25A\tPQ25B\tPQ25C\t";
    exportPitData += "PQ25D\tPQ26\tPQ27A\tPQ27B\tPQ27C\tPQ28\tPQ29\r\n";
    
    var refPitScouting = firebase.database().ref().child("Events/0/Pit Scouting");
    var pitScouting = $firebaseArray(refPitScouting);
    pitScouting.$loaded().then(function(pitScouting) {
      angular.forEach(pitScouting, function(interviews) {
        angular.forEach(interviews, function(interview) {
          if (interview) {
            if (interview["Team Number"]) exportPitData += interview["Team Number"];
            exportPitData += "\t";
            if (interview.PQ1) exportPitData += interview.PQ1;
            exportPitData += "\t";
            if (interview.PQ2) exportPitData += interview.PQ2;
            exportPitData += "\t";
            if (interview.PQ3) exportPitData += interview.PQ3;
            exportPitData += "\t";
            if (interview.PQ4) exportPitData += interview.PQ4;
            exportPitData += "\t";
            if (interview.PQ5) exportPitData += interview.PQ5;
            exportPitData += "\t";
            if (interview.PQ6) exportPitData += interview.PQ6;
            exportPitData += "\t";
            if (interview.PQ7) exportPitData += interview.PQ7;
            exportPitData += "\t";
            if (interview.PQ8) exportPitData += interview.PQ8;
            exportPitData += "\t";
            if (interview.PQ9) exportPitData += interview.PQ9;
            exportPitData += "\t";
            if (interview.PQ10) exportPitData += interview.PQ10;
            exportPitData += "\t";
            if (interview.PQ11A) exportPitData += interview.PQ11A;
            exportPitData += "\t";
            if (interview.PQ11B) exportPitData += interview.PQ11B;
            exportPitData += "\t";
            if (interview.PQ11C) exportPitData += interview.PQ11C;
            exportPitData += "\t";
            if (interview.PQ12A) exportPitData += interview.PQ12A;
            exportPitData += "\t";
            if (interview.PQ12B) exportPitData += interview.PQ12B;
            exportPitData += "\t";
            if (interview.PQ12C) exportPitData += interview.PQ12C;
            exportPitData += "\t";
            if (interview.PQ12D) exportPitData += interview.PQ12D;
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
            if (interview.PQ16) exportPitData += interview.PQ16;
            exportPitData += "\t";
            if (interview.PQ17) exportPitData += interview.PQ17;
            exportPitData += "\t";
            if (interview.PQ18) exportPitData += interview.PQ18;
            exportPitData += "\t";
            if (interview.PQ19) exportPitData += interview.PQ19;
            exportPitData += "\t";
            if (interview.PQ20) exportPitData += interview.PQ20;
            exportPitData += "\t";
            if (interview.PQ21) exportPitData += interview.PQ21;
            exportPitData += "\t";
            if (interview.PQ22) exportPitData += interview.PQ22;
            exportPitData += "\t";
            if (interview.PQ23) exportPitData += interview.PQ23;
            exportPitData += "\t";
            if (interview.PQ24) exportPitData += interview.PQ24;
            exportPitData += "\t";
            if (interview.PQ25A) exportPitData += interview.PQ25A;
            exportPitData += "\t";
            if (interview.PQ25B) exportPitData += interview.PQ25B;
            exportPitData += "\t";
            if (interview.PQ25C) exportPitData += interview.PQ25C;
            exportPitData += "\t";
            if (interview.PQ25D) exportPitData += interview.PQ25D;
            exportPitData += "\t";
            if (interview.PQ26) exportPitData += interview.PQ26;
            exportPitData += "\t";
            if (interview.PQ27A) exportPitData += interview.PQ27A;
            exportPitData += "\t";
            if (interview.PQ27B) exportPitData += interview.PQ27B;
            exportPitData += "\t";
            if (interview.PQ27C) exportPitData += interview.PQ27C;
            exportPitData += "\t";
            if (interview.PQ28) exportPitData += interview.PQ28;
            exportPitData += "\t";
            if (interview.PQ29) exportPitData += interview.PQ29;
            exportPitData += "\r\n";
          }
        })
      })
    });
    
    
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
          if (robotMatch["AQ4"]) exportMatchData += robotMatch["AQ4"];
          exportMatchData += "\t";
          if (robotMatch["AQ5"]) exportMatchData += robotMatch["AQ5"];
          exportMatchData += "\t";
          if (robotMatch["AQ6"]) exportMatchData += robotMatch["AQ6"];
          exportMatchData += "\t";
          if (robotMatch["AQ7"]) exportMatchData += robotMatch["AQ7"];
          exportMatchData += "\t";
          if (robotMatch["AQ8"]) exportMatchData += robotMatch["AQ8"];
          exportMatchData += "\t";
          if (robotMatch["AQ9"]) exportMatchData += robotMatch["AQ9"];
          exportMatchData += "\t";
          if (robotMatch["TQ1"]) exportMatchData += robotMatch["TQ1"];
          exportMatchData += "\t";
          if (robotMatch["TQ2"]) exportMatchData += robotMatch["TQ2"];
          exportMatchData += "\t";
          if (robotMatch["TQ3"]) exportMatchData += robotMatch["TQ3"];
          exportMatchData += "\t";
          if (robotMatch["TQ4"]) exportMatchData += robotMatch["TQ4"];
          exportMatchData += "\t";
          if (robotMatch["TQ5"]) exportMatchData += robotMatch["TQ5"];
          exportMatchData += "\t";
          if (robotMatch["TQ6"]) exportMatchData += robotMatch["TQ6"];
          exportMatchData += "\t";
          if (robotMatch["TQ7"]) exportMatchData += robotMatch["TQ7"];
          exportMatchData += "\t";
          if (robotMatch["TQ8"]) exportMatchData += robotMatch["TQ8"];
          exportMatchData += "\t";
          if (robotMatch["TQ9"]) exportMatchData += robotMatch["TQ9"];
          exportMatchData += "\t";
          if (robotMatch["EQ1"]) exportMatchData += robotMatch["EQ1"];
          exportMatchData += "\t";
          if (robotMatch["EQ2"]) exportMatchData += robotMatch["EQ2"];
          exportMatchData += "\t";
          if (robotMatch["EQ3"]) exportMatchData += robotMatch["EQ3"];
          exportMatchData += "\t";
          if (robotMatch["EQ4"]) exportMatchData += robotMatch["EQ4"];
          exportMatchData += "\t";
          if (robotMatch["EQ5"]) exportMatchData += robotMatch["EQ5"];
          exportMatchData += "\t";
          if (robotMatch["EQ6"]) exportMatchData += robotMatch["EQ6"];
          exportMatchData += "\t";
          if (robotMatch["EQ7"]) exportMatchData += robotMatch["EQ7"];
          exportMatchData += "\t";
          if (robotMatch["EQ8"]) exportMatchData += robotMatch["EQ8"];
          exportMatchData += "\t";
          if (robotMatch["EQ9"]) exportMatchData += robotMatch["EQ9"];
          exportMatchData += "\t";
          if (robotMatch["EQ10"]) exportMatchData += robotMatch["EQ10"];
          exportMatchData += "\t";
          if (robotMatch["EQ11"]) exportMatchData += robotMatch["EQ11"];
          exportMatchData += "\t";
          if (robotMatch["EQ12"]) exportMatchData += robotMatch["EQ12"];
          exportMatchData += "\t";
          if (robotMatch["EQ13"]) exportMatchData += robotMatch["EQ13"];
          exportMatchData += "\t";
          if (robotMatch["EQ14"]) exportMatchData += robotMatch["EQ14"];
          exportMatchData += "\t";
          if (robotMatch["EQ15"]) exportMatchData += robotMatch["EQ15"];
          exportMatchData += "\t";
          if (robotMatch["EQ16"]) exportMatchData += robotMatch["EQ16"];
          exportMatchData += "\t";
          if (robotMatch["EQ17"]) exportMatchData += robotMatch["EQ17"];
          exportMatchData += "\t";
          if (robotMatch["HQ1"]) exportMatchData += robotMatch["HQ1"];
          exportMatchData += "\t";
          if (robotMatch["HQ2"]) exportMatchData += robotMatch["HQ2"];
          exportMatchData += "\t";
          if (robotMatch["HQ3"]) exportMatchData += robotMatch["HQ3"];
          exportMatchData += "\t";
          if (robotMatch["HQ4"]) exportMatchData += robotMatch["HQ4"];
          exportMatchData += "\t";
          if (robotMatch["HQ5"]) exportMatchData += robotMatch["HQ5"];
          exportMatchData += "\t";
          if (robotMatch["HQ6"]) exportMatchData += robotMatch["HQ6"];
          exportMatchData += "\t";
          if (robotMatch["HQ7"]) exportMatchData += robotMatch["HQ7"];
          exportMatchData += "\t";
          if (robotMatch["HQ8"]) exportMatchData += robotMatch["HQ8"];
          exportMatchData += "\t";
          if (robotMatch["HQ9"]) exportMatchData += robotMatch["HQ9"];
          exportMatchData += "\t";
          if (robotMatch["HQ10"]) exportMatchData += robotMatch["HQ10"];
          exportMatchData += "\t";
          if (robotMatch["HQ11"]) exportMatchData += robotMatch["HQ11"];
          exportMatchData += "\r\n";
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
    alert("Setting number of matches to " + $scope.numMatches);
    var refMatchNum = firebase.database().ref().child("Events/0");
    refMatchNum.update({"numMatches" : $scope.numMatches});
  }
  
}])
   
.controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) { }]);
 