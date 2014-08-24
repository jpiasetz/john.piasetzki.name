'use strict';

/**
 * @ngdoc overview
 * @name johnpiasetzkinameApp
 * @description
 * # johnpiasetzkinameApp
 *
 * Main module of the application.
 */
angular
  .module('johnpiasetzkinameApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
