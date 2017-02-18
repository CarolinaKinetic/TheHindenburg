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
  
  $scope.loadTeamsIntoMemory();

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
    alert("submitted the match");
  };
}])
   
.controller('synchronizeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
function ($scope, $stateParams) {

}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
function ($scope, $stateParams) {


}]);
 