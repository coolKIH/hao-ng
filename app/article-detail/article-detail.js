/**
 * Created by hao on 17-2-15.
 */
'use strict';
angular.module('articleDetail',['ngRoute'])
.component('articleDetail',{
  templateUrl: 'article-detail/article-detail.html',
  controller: ['$routeParams', function($routeParams) {
    this.articleId = $routeParams.articleId;
  }]
});