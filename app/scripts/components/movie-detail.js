'use strict';

/**
 * @ngdoc function
 * @name angularComponentsPocApp.component:movieDetail
 * @description
 * # movieDetail
 * Component of the angularComponentsPocApp
 */

var controller = function() {
  var movieDetailCtrl = this;
};

angular.module('angularComponentsPocApp').component('movieDetail', {
    templateUrl: "views/components/movie-detail.html",
    controllerAs: "movieDetailCtrl",
    controller: [controller]
});