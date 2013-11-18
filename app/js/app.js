'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/movies', {
        templateUrl: 'partials/partial1.html', 
        controller: 'MyCtrl1', 
        resolve: {
            movieList: ['movieData', function(movieData) {
                return movieData;
            }],
            formats: ['movieFormats', function(movieFormats) {
                return movieFormats;
            }]
        }
    });

    $routeProvider.when('/movie/:movieId', {
        templateUrl: 'partials/partial2.html', 
        controller: 'MyCtrl2',
        resolve: {
            movie: ['$route', 'movieFinder', function($route, movieFinder) {
                return movieFinder.getById($route.current.params.movieId);
            }]
        }
    });

    $routeProvider.when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/movies'});

    //$locationProvider.html5Mode(true);
  }]);
