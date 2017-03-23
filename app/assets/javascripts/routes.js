angular.module('canonball').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider){
    $stateProvider
        .state('youtube', {
            url: '/youtube',
            templateUrl: 'youtube.html',
            controller: 'YoutubeController'
        })
        .state('twitch', {
            url: '/',
            templateUrl: 'twitch.html'
        });
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $urlRouterProvider.otherwise('home');
}])