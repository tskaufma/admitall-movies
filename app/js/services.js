'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  factory('movieData', ['$http', function($http) {
      var movieData = {};
      $http.get('../TKMovies.json').success(function(data) {
          movieData.movies = $.grep(data.docs, function(item, index) { 
              return item._id !== "config";
          });
          //data.date is in format 2013-11-01-16-17-21
          movieData.updatedDate = moment(data.date, "YYYY-MM-DD-HH-mm-ss").toDate();
      });
      return movieData;
  }])

