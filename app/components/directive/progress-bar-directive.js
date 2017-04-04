/**
 * Created by saumil.shah on 30/03/2017.
 */
'use strict';

angular.module('myApp.progress-bar-directive', [])

    .directive('progressBar', [ function() {
        return {
            restrict: 'E',
            replace: 'true',
            scope :{
                value : '=',
                max : '=',
                newval : '=',
                position : '='
            },
            template: '<div class="progressBar" class="{{class}}"><div class="progress" ng-class="{ limitExcedColor: percentage >= 100 , defaultColor: percentage < 100 }" style="width:{{barWidth}}%; ">{{percentage}}%</div></div>',
            link: function(scope, element, attrs) {

                scope.percentage = parseInt(scope.value * 100 / scope.max);
                scope.barWidth = parseInt(scope.value * 100 / scope.max);

                scope.$on('progressBarNewValue',function(event,data){
                    if(data.barName == scope.position){
                       var total = scope.value + data.newValue;

                       if(total < 0){
                           scope.value = 0;
                           scope.barWidth = 0;
                           scope.percentage = 0;
                       } else {
                           scope.value = total;
                           scope.percentage = parseInt(scope.value * 100 / scope.max);
                           if(scope.percentage >= 100){
                              scope.barWidth = 100;
                          } else {
                               scope.barWidth = scope.percentage;
                           }
                       }
                    }
                });
            }
        };
    }]);
