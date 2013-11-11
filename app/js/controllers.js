'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MyCtrl1', ['$scope', '$filter', 'movieList', function($scope, $filter, movieList) {
    $scope.movieData = movieList;
    $scope.query = {};
    $scope.filteredItems = [];
    $scope.pager = {
        currentPage: 0,
        pageSize: 5,
        numberOfPages: function() {
            return Math.ceil($scope.filteredItems.length/$scope.pager.pageSize);
        },
        prevPage: function() {
            this.currentPage = this.currentPage - 1;
            if (this.currentPage < 0) 
                this.currentPage = 0;
        },
        nextPage: function() {
            this.currentPage = this.currentPage + 1;
            if (this.currentPage >= this.numberOfPages())
                this.currentPage = this.numberOfPages() - 1;
        },
        canPrev: function() {
            return this.currentPage > 0;
        },
        canNext: function() {
            return this.currentPage < this.numberOfPages() - 1;
        }
    };
    $scope.range = function (start, end) {
        var ret = [];
        if (!end) {
            end = start;
            start = 0;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
        return ret;
    };
    $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.movieData.movies, $scope.query);
        $scope.pager.currentPage = 0;
    };

    $scope.sort = {
        prop: 'name',
        display: 'Name',
        reverse: false,
        set: function(sortCriteria) {
            this.prop = sortCriteria.prop;
            this.display = sortCriteria.display;
            Foundation.libs.dropdown.close($('#sort-by-drop'));
        },
        toggleReverse: function() {
            this.reverse = !this.reverse;
        },
        criteria:  [{
            prop: 'name',
            display: 'Name'
        }, {
            prop: 'releaseDate',
            display: 'Release Date'
        }]
    };
    
    $scope.query.format = "";

    $scope.search();

}])
.controller('MyCtrl2', ['$scope', 'movie', function($scope, movie) {
    $scope.movie = movie;
}]);

