/**
 * Created by hao on 17-2-14.
 */
'use strict';
angular.module('articles',[])
.component('articles', {
  templateUrl: 'articles/articles.html',
  controller: ['$http', function ($http) {
    var self = this;
    $http.get('articles/articles.json').then(function(response) {
      self.articles = response.data;
    });
  }
  ]
});