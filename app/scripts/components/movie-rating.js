'use strict';

/**
 * @ngdoc function
 * @name angularComponentsPocApp.component:movieRating
 * @description
 * # movieRating
 * Component of the angularComponentsPocApp
 */

var controller = function() {
  var movieRatingCtrl = this;
  movieRatingCtrl.$onInit = function() {
    movieRatingCtrl.stars = new Array(movieRatingCtrl.rating);
  };

  movieRatingCtrl.$onChanges = function() {
    movieRatingCtrl.stars = new Array(movieRatingCtrl.rating);
  };
};

angular.module('angularComponentsPocApp').component('movieRating', {
    templateUrl: "views/components/movie-rating.html",
    bindings: {
      rating:"<"
    },
    controllerAs: "movieRatingCtrl",
    controller: [controller]
});