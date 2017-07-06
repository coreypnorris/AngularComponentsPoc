'use strict';

/**
 * @ngdoc overview
 * @name angularComponentsPocApp
 * @description
 * # angularComponentsPocApp
 *
 * Main module of the application.
 */
angular
  .module('angularComponentsPocApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<movie-list></movie-list>',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
