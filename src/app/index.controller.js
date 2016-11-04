(function () {
  'use strict';

  angular
    .module('angularFloatingPoint')
    .controller('IndexController', function ($scope,floatingPoint) {

      $scope.calculate = function () {
        $scope.result =$scope.num0*$scope.num1;
        $scope.prettyResult=floatingPoint.makePretty($scope.result)
      }

      $scope.num0=6.1;
      $scope.num1=6;
      $scope.calculate();

    });
})();
