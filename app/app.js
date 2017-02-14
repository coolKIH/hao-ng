'use strict';

angular.module('myWorld', ['ngRoute','homeOutlook'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/home',{
    template: '<home-outlook></home-outlook>'
  })
    .otherwise('/home');
}]);