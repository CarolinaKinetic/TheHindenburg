angular.module('app.controllers', [])
  
.controller('pitScoutingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
function ($scope, $stateParams) {

  $scope.loadTeamsIntoMemory = function() {
    $scope.teams = {
        'teams': [
        {
            'number': 3489,
            'name': 'Category 5'
        },
        {
            'number': 3490,
            'name': 'Viper Drive'
        },
        {
            'number': 342,
            'name': 'Burning Magnetos'
        },
        {
            'number': 8101,
            'name': 'Rookies'
        },
      ]
    };
  };
  
  
  $scope.loadTeamsIntoMemory2 = function() {
    $scope.teams = {
        'teams': [
        {
            'number': 3489,
            'name': 'Category 5'
        },
        {
            'number': 3490,
            'name': 'Viper Drive'
        },
        {
            'number': 342,
            'name': 'Burning Magnetos'
        },
        {
            'number': 8101,
            'name': 'Rookies'
        },
        {
            'number': 420,
            'name': 'Blaze it'
        },
      ]
    };
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
   
.controller('matchScoutingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
function ($scope, $stateParams) {

 $scope.loadTeamsIntoMemory = function() {
    $scope.data = {
        'teams': [
        {
            'number': 3489,
            'name': 'Category 5'
        },
        {
            'number': 3490,
            'name': 'Viper Drive'
        },
        {
            'number': 342,
            'name': 'Burning Magnetos'
        },
        {
            'number': 8101,
            'name': 'Rookies'
        },
      ]
    };
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
   
.controller('synchronizeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
function ($scope, $stateParams) {

}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
function ($scope, $stateParams) {


}]);
 