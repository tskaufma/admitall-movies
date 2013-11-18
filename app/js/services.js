'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '1.0.0').
  factory('movieData', ['$http', function($http) {
      return $http.get('../TKMovies.json').then(function(response) {
          var movieData = {};
          movieData.movies = $.grep(response.data.docs, function(item, index) { 
              return item._id !== "config";
          });
          //data.date is in format 2013-11-01-16-17-21
          movieData.updatedDate = moment(response.data.date, "YYYY-MM-DD-HH-mm-ss").toDate();
          return movieData;
      });
  }]).
  factory('movieFinder', ['movieData', function(movieData) {
      var movies = movieData;
      return {
          getById: function (movieId) {
              return movies.then(function (data) {
                  var movies = $.grep(data.movies, function(item, index) {
                      return item._id == movieId;
                  });
                  var movie = {};
                  if (movies.length > 0) {
                      movie = movies.shift();
                  }
                  return movie;
              });
          }
      };
  }]).
  factory('movieFormats', ['movieData', function(movieData) {
      return movieData.then(function (data) {
          var formats = {};
          formats["All Formats"] = "";
          data.movies.map(function(movie) {
              return movie.format;
          }).forEach(function(format) {
              formats[format] = format;
          });
          var retVal = [];
          console.log(formats);
          $.each(formats, function(index, value) {
            console.log("index: " + index + ", value: " + value);
            retVal.push({"label": index, "value": value}); 
          });
          return retVal;
      });
  }])
  ;

