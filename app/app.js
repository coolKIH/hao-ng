'use strict';

angular.module('myWorld', ['ngRoute','homeOutlook', 'core.navigationBar', 'articles', 'intro', 'showcase'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/home',{
    template: '<home-outlook></home-outlook>'
  })
    .when('/articles',{
      template: '<articles></articles>'
    })
    .when('/intro',{
      template: '<intro></intro>'
    })
    .when('/showcase',{
      template: '<showcase></showcase>'
    })
    .otherwise('/home');
}]);