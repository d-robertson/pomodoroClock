angular.module('clockApp', [])
.controller('clockCtrl', ['$scope', '$interval', function($scope, $interval){
  var timerPromise;
  var breakPromise;
  var paused = false;
  var timerSecond = 0;
  var timerTenSec = 0;
  var timerMinute = 0;
  var timerTenMin = 0;
  var timerHours = 0;
  var breakSecond = 0;
  var breakTenSec = 0;
  var breakMinute = 0;
  var breakTenMin = 0;
  var breakHours = 0;

  $scope.timerSecond = 0;
  $scope.timerTenSec = 0;
  $scope.timerMinute = 0;
  $scope.timerTenMin = 0;
  $scope.timerHours = 0;
  $scope.breakSecond = 0;
  $scope.breakTenSec = 0;
  $scope.breakMinute = 0;
  $scope.breakTenMin = 0;
  $scope.breakHours = 0;
  $scope.breakTime = false;
  $scope.timerCheck = 'sec';
  $scope.breakCheck = 'sec';

  $scope.increaseTimer = function(){
    // console.log('clicked up');
    // console.log($scope.timerCheck);
    switch($scope.timerCheck){
      case 'sec':
        // console.log('inside case sec');
        if($scope.timerSecond < 9){
          $scope.timerSecond++;
        } else {
          if($scope.timerTenSec < 5){
            $scope.timerSecond = 0;
            $scope.timerTenSec++;
          } else {
            if($scope.timerMinute < 9){
              $scope.timerSecond = 0;
              $scope.timerTenSec = 0;
              $scope.timerMinute++;
            } else {
              if($scope.timerTenMin < 5){
                $scope.timerSecond = 0;
                $scope.timerTenSec = 0;
                $scope.timerMinute = 0;
                $scope.timerTenMin++;
              } else {
                $scope.timerSecond = 0;
                $scope.timerTenSec = 0;
                $scope.timerMinute = 0;
                $scope.timerTenMin = 0;
                $scope.timerHours++;
              }
            }
          }
        }
        break;
      case 'min':
        if($scope.timerMinute < 9){
          $scope.timerMinute++;
        } else {
          if($scope.timerTenMin < 5){
            $scope.timerSecond = 0;
            $scope.timerTenSec = 0;
            $scope.timerMinute = 0;
            $scope.timerTenMin++;
          } else {
            $scope.timerSecond = 0;
            $scope.timerTenSec = 0;
            $scope.timerMinute = 0;
            $scope.timerTenMin = 0;
            $scope.timerHours++;
          }
        }
        break;
      case 'hour': 
        $scope.timerHours++;
        break;
    }
    timerSecond = $scope.timerSecond;
    timerTenSec = $scope.timerTenSec;
    timerMinute = $scope.timerMinute;
    timerTenMin = $scope.timerTenMin;
    timerHours = $scope.timerHours;
  }
  $scope.decreaseTimer = function(){
    // console.log('clicked down');
    // console.log($scope.timerCheck);
    switch($scope.timerCheck){
      case 'sec':
        // console.log('inside case sec');
        if($scope.timerSecond > 0){
          $scope.timerSecond--;
        } else {
          if($scope.timerTenSec > 0){
            $scope.timerSecond = 9;
            $scope.timerTenSec--;
          } else {
            if($scope.timerMinute > 0){
              $scope.timerSecond = 9;
              $scope.timerTenSec = 5;
              $scope.timerMinute--;
            } else {
              if($scope.timerTenMin > 0){
                $scope.timerSecond = 9;
                $scope.timerTenSec = 5;
                $scope.timerMinute = 9;
                $scope.timerTenMin--;
              } else {
                $scope.timerSecond = 9;
                $scope.timerTenSec = 5;
                $scope.timerMinute = 9;
                $scope.timerTenMin = 5;
                $scope.timerHours--;
              }
            }
          }
        }
        break;
      case 'min':
        if($scope.timerMinute > 0){
          $scope.timerMinute--;
        } else {
          if($scope.timerTenMin > 0){
            $scope.timerSecond = 9;
            $scope.timerTenSec = 5;
            $scope.timerMinute = 9;
            $scope.timerTenMin--;
          } else {
            $scope.timerSecond = 9;
            $scope.timerTenSec = 5;
            $scope.timerMinute = 9;
            $scope.timerTenMin = 5;
            $scope.timerHours--;
          }
        }
        break;
      case 'hour': 
        $scope.timerHours--;
        break;
    }
    timerSecond = $scope.timerSecond;
    timerTenSec = $scope.timerTenSec;
    timerMinute = $scope.timerMinute;
    timerTenMin = $scope.timerTenMin;
    timerHours = $scope.timerHours;
  }

  $scope.increaseBreak = function(){
    // console.log('clicked up');
    // console.log($scope.breakCheck);
    switch($scope.breakCheck){
      case 'sec':
        // console.log('inside case sec');
        if($scope.breakSecond < 9){
          $scope.breakSecond++;
        } else {
          if($scope.breakTenSec < 5){
            $scope.breakSecond = 0;
            $scope.breakTenSec++;
          } else {
            if($scope.breakMinute < 9){
              $scope.breakSecond = 0;
              $scope.breakTenSec = 0;
              $scope.breakMinute++;
            } else {
              if($scope.breakTenMin < 5){
                $scope.breakSecond = 0;
                $scope.breakTenSec = 0;
                $scope.breakMinute = 0;
                $scope.breakTenMin++;
              } else {
                $scope.breakSecond = 0;
                $scope.breakTenSec = 0;
                $scope.breakMinute = 0;
                $scope.breakTenMin = 0;
                $scope.breakHours++;
              }
            }
          }
        }
        break;
      case 'min':
        if($scope.breakMinute < 9){
          $scope.breakMinute++;
        } else {
          if($scope.breakTenMin < 5){
            $scope.breakSecond = 0;
            $scope.breakTenSec = 0;
            $scope.breakMinute = 0;
            $scope.breakTenMin++;
          } else {
            $scope.breakSecond = 0;
            $scope.breakTenSec = 0;
            $scope.breakMinute = 0;
            $scope.breakTenMin = 0;
            $scope.breakHours++;
          }
        }
        break;
      case 'hour': 
        $scope.breakHours++;
        break;
    }
    breakSecond = $scope.breakSecond;
    breakTenSec = $scope.breakTenSec;
    breakMinute = $scope.breakMinute;
    breakTenMin = $scope.breakTenMin;
    breakHours = $scope.breakHours;
  }
  $scope.decreaseBreak = function(){
    // console.log('clicked down');
    // console.log($scope.breakCheck);
    switch($scope.breakCheck){
      case 'sec':
        // console.log('inside case sec');
        if($scope.breakSecond > 0){
          $scope.breakSecond--;
        } else {
          if($scope.breakTenSec > 0){
            $scope.breakSecond = 9;
            $scope.breakTenSec--;
          } else {
            if($scope.breakMinute > 0){
              $scope.breakSecond = 9;
              $scope.breakTenSec = 5;
              $scope.breakMinute--;
            } else {
              if($scope.breakTenMin > 0){
                $scope.breakSecond = 9;
                $scope.breakTenSec = 5;
                $scope.breakMinute = 9;
                $scope.breakTenMin--;
              } else {
                $scope.breakSecond = 9;
                $scope.breakTenSec = 5;
                $scope.breakMinute = 9;
                $scope.breakTenMin = 5;
                $scope.breakHours--;
              }
            }
          }
        }
        break;
      case 'min':
        if($scope.breakMinute > 0){
          $scope.breakMinute--;
        } else {
          if($scope.breakTenMin > 0){
            $scope.breakSecond = 9;
            $scope.breakTenSec = 5;
            $scope.breakMinute = 9;
            $scope.breakTenMin--;
          } else {
            $scope.breakSecond = 9;
            $scope.breakTenSec = 5;
            $scope.breakMinute = 9;
            $scope.breakTenMin = 5;
            $scope.breakHours--;
          }
        }
        break;
      case 'hour': 
        $scope.breakHours--;
        break;
    }
    breakSecond = $scope.breakSecond;
    breakTenSec = $scope.breakTenSec;
    breakMinute = $scope.breakMinute;
    breakTenMin = $scope.breakTenMin;
    breakHours = $scope.breakHours;
  }

  $scope.timer = function(){
    if(!$scope.breakTime){
      console.log('not break time');
      if(timerPromise){
        // console.log('nope');
      } else {
        console.log('timer sec', timerSecond);
        if(paused){
          timerPromise = $interval($scope.timerCountDown, 1000);
        } else {
          $scope.timerSecond = timerSecond;
          $scope.timerTenSec = timerTenSec;
          $scope.timerMinute = timerMinute;
          $scope.timerTenMin = timerTenMin;
          $scope.timerHours = timerHours;
          timerPromise = $interval($scope.timerCountDown, 1000);
        }
      }
    } else {
      console.log('break time');
      if(breakPromise){
        // console.log('nope');
      } else {
        if(paused){
          breakPromise = $interval($scope.breakCountDown, 1000);
        } else {
          console.log('break sec', breakSecond);
          $scope.breakSecond = breakSecond;
          $scope.breakTenSec = breakTenSec;
          $scope.breakMinute = breakMinute;
          $scope.breakTenMin = breakTenMin;
          $scope.breakHours = breakHours;
          breakPromise = $interval($scope.breakCountDown, 1000);
        }
      }
    }
  }

  $scope.stopTimer = function(){
    paused = true;
    if(!$scope.breakTime){

      $interval.cancel(timerPromise);
      timerPromise = false;

    } else {

      $interval.cancel(breakPromise);
      breakPromise = false;
    }
  }

  $scope.timerCountDown = function(){
    console.log('timer timerCountDown');
    if($scope.timerHours === 0 && $scope.timerTenMin === 0 && $scope.timerMinute === 0 && $scope.timerTenSec === 0 && $scope.timerSecond === 1){
      // console.log('inside cancel if');
      $interval.cancel(timerPromise);
      $scope.breakTime = true;
      console.log('break: ', breakSecond);
      $scope.timerSecond = timerSecond + 1;
      $scope.timerTenSec = timerTenSec;
      $scope.timerMinute = timerMinute;
      $scope.timerTenMin = timerTenMin;
      $scope.timerHours = timerHours;
      breakPromise = false;
      $scope.timer();
    }
    if($scope.timerSecond > 0){
      console.log('if -- sec: ', $scope.timerSecond);
      $scope.timerSecond--;
    } else {
      if($scope.timerTenSec > 0){
        $scope.timerSecond = 9;
        $scope.timerTenSec--;
      } else {
        if($scope.timerMinute > 0){
          $scope.timerSecond = 9;
          $scope.timerTenSec = 5;
          $scope.timerMinute--;
        } else {
          if($scope.timerTenMin > 0){
            $scope.timerSecond = 9;
            $scope.timerTenSec = 5;
            $scope.timerMinute = 9;
            $scope.timerTenMin--;
          } else {
            $scope.timerSecond = 9;
            $scope.timerTenSec = 5;
            $scope.timerMinute = 9;
            $scope.timerTenMin = 5;
            $scope.timerHours--;
          }
        }
      }
    }
  }
  
  $scope.breakCountDown = function(){
    console.log('break breakCountDown');
    if($scope.breakHours === 0 && $scope.breakTenMin === 0 && $scope.breakMinute === 0 && $scope.breakTenSec === 0 && $scope.breakSecond === 1){
      // console.log('inside cancel if');
      $interval.cancel(breakPromise);
      $scope.breakTime = false;
      $scope.breakSecond = breakSecond + 1;
      $scope.breakTenSec = breakTenSec;
      $scope.breakMinute = breakMinute;
      $scope.breakTenMin = breakTenMin;
      $scope.breakHours = breakHours;
      console.log('timer: ', timerSecond);
      timerPromise = false;
      $scope.timer();
    }
    if($scope.breakSecond > 0){
      $scope.breakSecond--;
    } else {
      if($scope.breakTenSec > 0){
        $scope.breakSecond = 9;
        $scope.breakTenSec--;
      } else {
        if($scope.breakMinute > 0){
          $scope.breakSecond = 9;
          $scope.breakTenSec = 5;
          $scope.breakMinute--;
        } else {
          if($scope.breakTenMin > 0){
            $scope.breakSecond = 9;
            $scope.breakTenSec = 5;
            $scope.breakMinute = 9;
            $scope.breakTenMin--;
          } else {
            $scope.breakSecond = 9;
            $scope.breakTenSec = 5;
            $scope.breakMinute = 9;
            $scope.breakTenMin = 5;
            $scope.breakHours--;
          }
        }
      }
    }
  }

}]);

