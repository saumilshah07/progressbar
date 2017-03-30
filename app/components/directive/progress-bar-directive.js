/**
 * Created by saumil.shah on 30/03/2017.
 */
'use strict';

angular.module('myApp.progress-bar-directive', [])

    .directive('progressBar', [ function() {
        return {
            restrict: 'AE',
            replace: 'true',
            template: '<h3>Hello World!!</h3>'
        };
    }]);
