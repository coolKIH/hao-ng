'use strict';

angular.module('myWorld', ['ngRoute','homeOutlook', 'core.navigationBar', 'articles', 'intro', 'showcase','articleDetail'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/home',{
    template: '<home-outlook></home-outlook>'
  })
    .when('/articles',{
      template: '<articles></articles>'
    })
    .when('/articles/:articleId',{
      template: '<article-detail></article-detail>'
    })
    .when('/intro',{
      template: '<intro></intro>'
    })
    .when('/showcase',{
      template: '<showcase></showcase>'
    })
    .otherwise('/home');
}]);