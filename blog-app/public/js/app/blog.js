(function(){
  var app = angular.module('myBlog', ['ngAnimate', 'ui.router', 'ngResource']);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
             function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('articles', {
            url: '/',
            templateUrl: '/js_partials/blog/articles/index.html',
            controller: 'ArticlesIndexController'
        })

  }]);

})();

