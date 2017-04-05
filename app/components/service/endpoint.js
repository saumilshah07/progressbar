angular.module('myApp')
    .service('endpointService' ,[ '$http', function($http){

        this.getProgressBarData = function(){
            var j={"buttons":[34,39,-31,-14],"bars":[55,69,69,11],"limit":190};
            return JSON.stringify(j);
        };










    }]);
