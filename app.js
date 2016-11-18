angular.module('clockApp', [])
.controller('clockCtrl', ['$scope', function($scope){
  $scope.timer = 0;

  $scope.incrementTime = function(){
    $scope.timer += 1.00;
  }

  $scope.decrementTime = function(){
    if($scope.timer > 0){
      $scope.timer -= 1.00;  
    }
  }
}]);