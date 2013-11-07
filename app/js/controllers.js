'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MyCtrl1', ['$scope', 'movieList', function($scope, movieList) {
    $scope.movieData = movieList;
}])
.controller('MyCtrl2', ['$scope', 'movie', function($scope, movie) {
    $scope.movie = movie;
}]);

