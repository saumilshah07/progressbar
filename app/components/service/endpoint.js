angular.module('myApp')
    .service('endpointService' ,[ '$http', function($http){

        this.getProgressBarData = function(){
            return '{"buttons":[34,39,-31,-14],"bars":[55,69,69,11],"limit":190}';
           //eturn $http.get("http://pb-api.herokuapp.com/bars");
        };










    }]);