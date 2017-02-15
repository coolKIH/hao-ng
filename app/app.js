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
(function() {
  var app = {};
  app.registerEventListeners = {
    documentScroll: (function() {
      document.addEventListener('scroll', function() {
        if(document.querySelector('.article-detail')) {
          if(document.body.scrollTop > document.querySelector('.article-detail .header').clientHeight) {
            document.querySelector('.top-title-shower').style.display="block";
          } else {
            document.querySelector('.top-title-shower').style.display="none";
          }
        }
      });
    })()
  };
})();