angular.module('app.controllers', ['firebase', 'ngCordova'])
  
.controller('pitScoutingCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

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
   
.controller('matchScoutingCtrl', ['$scope', '$stateParams', '$firebaseArray', '$firebase', function ($scope, $stateParams, $firebaseArray, $firebase) {
  
  //START TEST
  alert("Setting number of matches to " + $scope.numMatches);
  var refMatchNum = firebase.database().ref().child("Events/0/");
  refMatchNum.set({"numMatches" : $scope.numMatches});
  //END TEST

  $scope.loadTeamsIntoMemory = function() {
    var refTeams = firebase.database().ref().child("Events/0/Teams/");
    $scope.teams = $firebaseArray(refTeams);
  };
  $scope.loadTeamsIntoMemory();
  
   
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
  
  $scope.setNumMatches = function() {
    
  }
}])
   
.controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) { }]);
 