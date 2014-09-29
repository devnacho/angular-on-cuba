(function(){
  var app = angular.module('myBlog', ['ngAnimate','ui.router', 'ngResource']);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
             function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/articles');

    $stateProvider
        .state('articles', {
            url: '/articles',
            templateUrl: '/js_partials/admin/articles/index.html',
            controller: 'ArticlesIndexController'
        })
        .state('articles-new', {
            url: '/articles/new',
            templateUrl: '/js_partials/admin/articles/new.html',
            controller: 'ArticlesNewController'
        })
        .state('articles-edit', {
            url: '/articles/:id/edit',
            templateUrl: '/js_partials/admin/articles/edit.html',
            controller: 'ArticlesEditController'
        })

  }]);

})();
