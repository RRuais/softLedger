angular.module('mainApp')
    .factory('HomeFactory', ['$http', '$location', function($http, $location) {

        var factory = {}

        factory.getData = function(callback) {
            $http.get('/getData')
                .then(function(data) {
                    callback(data);
                })
                .catch((function(err) {
                  console.log(err);
                }))
        };

        factory.getRates = function(callback) {
          $http.get('/getRates')
              .then(function(rates) {
                  callback(rates);
              })
              .catch((function(err) {
                console.log(err);
              }))
        };

        return factory;
    }]);
