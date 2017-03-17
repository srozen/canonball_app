angular.module('canonball').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider){
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'index.html'
        })
        .state('youtube', {
            url: '/youtube',
            templateUrl: 'youtube.html',
            controller: 'YoutubeController'
        })
        .state('twitch', {
            url: '/twitch',
            templateUrl: 'twitch.html'
        });
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $urlRouterProvider.otherwise('home');
}])