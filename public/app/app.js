(function() {
    angular.module('mainApp', ['ui.router', 'ngCookies'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('main', {
                    url: '/',
                    templateUrl: 'app/main/_index.html',
                    controller: 'HomeController',
                })
        });
}());
