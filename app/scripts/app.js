'use strict';

angular.module('gitItApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/beach', {
        templateUrl: 'views/beach.html',
        controller: 'BeachCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
