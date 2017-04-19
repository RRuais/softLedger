(function() {
    angular.module('mainApp')
        .controller('HomeController', ['$scope', '$cookies', '$filter', 'HomeFactory', function($scope, $cookies, $filter, hf) {

            $scope.getData = function() {
                hf.getData(function(data, err) {
                    if (err) {
                        console.log(err);
                    } else {
                        let companies = JSON.stringify(data.data);
                        $cookies.put('companies', companies);
                    }
                });
            };

            $scope.getData();

            $scope.getRates = function() {
                hf.getRates(function(data, err) {
                    if (err) {
                        console.log(err);
                    } else {
                        let rates = JSON.stringify(data.data.rates);
                        $cookies.put('rates', rates);
                    }
                });
            };

            $scope.getRates();

            $scope.fillTable = function() {
                let companies = JSON.parse($cookies.get('companies'));
                for (key in companies) {
                    companies[key] = $filter('currency')(companies[key], 'USD', 2)
                };
                $scope.companies = companies;
                let rates = JSON.parse($cookies.get('rates'));
                var exchangeRates = [];
                for (rate in rates) {
                    exchangeRates.push(rate)
                };
                $scope.exchangeRates = exchangeRates;
            };

            $scope.fillTable();

            $scope.changeRate = function() {
                let companies = JSON.parse($cookies.get('companies'));
                let rates = JSON.parse($cookies.get('rates'));
                var exchangeRates = [];
                for (rate in rates) {
                    if ($scope.selectedRate === rate) {
                        for (key in companies) {
                            companies[key] = rates[rate] * companies[key];
                            companies[key] = $filter('currency')(companies[key], $scope.selectedRate, 2)
                        };
                    }
                };
                $scope.companies = companies;
            };

            $scope.reset = function() {
                $scope.fillTable();
            };

            $scope.checkValue = function(value) {
                var number = Number(value.replace(/[^0-9\.-]+/g, ""));
                if (number < 0) {
                    var css = {
                        'color': 'red'
                    };
                    return css;
                } else {
                  var css = {
                      'color': 'black'
                  };
                  return css;
                }
            };


        }]); // End Main Controller
}()); // End Anonymous Function
