/**
 * Created by hao on 17-2-15.
 */
'use strict';
angular.module('articleDetail',['ngRoute'])
.component('articleDetail',{
  templateUrl: 'article-detail/article-detail.html',
  controller: ['$routeParams', '$http', function($routeParams, $http) {
    var self = this;
    $http.get('article-detail/'+$routeParams.articleId+'.json').then(function(response) {
      self.articleContent = response.data;
    }, function() {
      window.location.href='#!/articles';
    });
  }]
});
document.addEventListener('scroll', function() {
  if(document.body.scrollTop > document.querySelector('.article-detail .header').clientHeight) {
    document.querySelector('.top-title-shower').style.display="block";
    document.querySelector('.top-nav-bar').style.display="none";
  } else {
    document.querySelector('.top-title-shower').style.display="none";
    document.querySelector('.top-nav-bar').style.display="block";
  }
});