angular.module('clockApp', [])
.controller('clockCtrl', ['$scope', '$interval', function($scope, $interval){
  var promise;
  $scope.second = 0;
  $scope.tenSec = 0;
  $scope.minute = 0;
  $scope.tenMin = 0;
  $scope.hours = 0;
  $scope.check = 'sec';
  $scope.countDown = function(){
    if($scope.hours === 0 && $scope.tenMin === 0 && $scope.minute === 0 && $scope.tenSec === 0 && $scope.second === 1){
      console.log('inside cancel if');
      $interval.cancel(promise);
    }
    if($scope.second > 0){
      $scope.second--;
    } else {
      if($scope.tenSec > 0){
        $scope.second = 9;
        $scope.tenSec--;
      } else {
        if($scope.minute > 0){
          $scope.second = 9;
          $scope.tenSec = 5;
          $scope.minute--;
        } else {
          if($scope.tenMin > 0){
            $scope.second = 9;
            $scope.tenSec = 5;
            $scope.minute = 9;
            $scope.tenMin--;
          } else {
            $scope.second = 9;
            $scope.tenSec = 5;
            $scope.minute = 9;
            $scope.tenMin = 5;
            $scope.hours--;
          }
        }
      }
    }
  }
  $scope.timer = function(){
    promise = $interval($scope.countDown, 1000);
  }
  $scope.increaseTime = function(){
    console.log('clicked up');
    console.log($scope.check);
    switch($scope.check){
      case 'sec':
        console.log('inside case sec');
        if($scope.second < 9){
          $scope.second++;
        } else {
          if($scope.tenSec < 5){
            $scope.second = 0;
            $scope.tenSec++;
          } else {
            if($scope.minute < 9){
              $scope.second = 0;
              $scope.tenSec = 0;
              $scope.minute++;
            } else {
              if($scope.tenMin < 5){
                $scope.second = 0;
                $scope.tenSec = 0;
                $scope.minute = 0;
                $scope.tenMin++;
              } else {
                $scope.second = 0;
                $scope.tenSec = 0;
                $scope.minute = 0;
                $scope.tenMin = 0;
                $scope.hours++;
              }
            }
          }
        }
        break;
      case 'min':
        if($scope.minute < 9){
          // $scope.second = 0;
          // $scope.tenSec = 0;
          $scope.minute++;
        } else {
          if($scope.tenMin < 5){
            $scope.second = 0;
            $scope.tenSec = 0;
            $scope.minute = 0;
            $scope.tenMin++;
          } else {
            $scope.second = 0;
            $scope.tenSec = 0;
            $scope.minute = 0;
            $scope.tenMin = 0;
            $scope.hours++;
          }
        }
        break;
      case 'hour': 
        $scope.hours++;
        break;
    }
  }
  $scope.decreaseTime = function(){

  }
}]);