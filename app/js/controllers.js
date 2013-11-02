'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MyCtrl1', ['$scope', 'movieData', function($scope, movieData) {
    $scope.movieData = movieData;
    
}])
.controller('MyCtrl2', ['$scope', '$routeParams', 'movieData', function($scope, $routeParams, movieData) {
    $scope.movieId = $routeParams.movieId
    $scope.movieData = movieData;

}]);

