'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
  filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
  }).

  // Create filter to parse dates
  filter('parseDate', function() {
      var result = function(dateStr, formatStr) {
          var date = null;
          if (formatStr === null) {
              date = moment(dateStr);
          } else {
              date = moment(dateStr, formatStr);
          }

          return date.toDate();
      }
      return result;
  }).

  // list of objects with a 'name' to a comma seperated list
  filter('listNames', function() {
      return function(list) {
        return list.map(function(item) {return item.name}).join(", ");
      };
  })
;


