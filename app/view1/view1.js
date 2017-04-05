'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'endpointService',function($scope,endpointService) {

   // $scope.barData = endpointService.getProgressBarData();
    $scope.newvalue = 0;
    //Get bar data from endpoint
  /*
    endpointService.getProgressBarData()
        .then( function(response) {
          console.log(response.data);
          $scope.barData = response.data;
          console.log($scope.barData);

        }, function(error){

        }); */
   $scope.barData =  endpointService.getProgressBarData();
     
    $scope.updateNewValue = function (val) {

        $scope.$broadcast('progressBarNewValue',{
            newValue : val,
            barName  : $scope.selectedBar
        });

    }

}]);
