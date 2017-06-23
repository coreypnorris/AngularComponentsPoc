'use strict';

/**
 * @ngdoc function
 * @name angularComponentsPocApp.component:movieList
 * @description
 * # movieList
 * Component of the angularComponentsPocApp
 */

var fetchMovies = function($http) {
  return $http.get("/json/movies.json")
    .then(function(response) {
      return response;
    });
};

var controller = function($http) {
  var movieListCtrl = this;
  movieListCtrl.$onInit = function() {
    movieListCtrl.movies = [];
    fetchMovies($http).then(function(response) {
      movieListCtrl.movies = response.data;
    });
  };

  movieListCtrl.upRating = function(movie) {
    if (movie.rating < 5) {
      movie.rating += 1;
    }
  };

  movieListCtrl.downRating = function(movie) {
    if (movie.rating > 1) {
      movie.rating -= 1;
    }
  };
};

angular.module('angularComponentsPocApp')
  .component('movieList', {
    templateUrl: "views/components/movie-list.html",
    controllerAs: "movieListCtrl",
    controller: ["$http", controller]
});