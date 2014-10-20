(function(){
  var app = angular.module('myBlog', ['ngAnimate','ui.router', 'ngResource']);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$provide',
             function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $provide) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/articles');

    $stateProvider
        .state('articles', {
            url: '/articles',
            templateUrl: '/js_partials/articles/index.html',
            controller: 'AdminArticlesIndexController',
            controllerAs: 'index'
        })
        .state('articles-new', {
            url: '/articles/new',
            templateUrl: '/js_partials/articles/new.html',
            controller: 'AdminArticlesNewController',
            controllerAs: 'new'
        })
        .state('articles-edit', {
            url: '/articles/:id/edit',
            templateUrl: '/js_partials/articles/edit.html',
            controller: 'AdminArticlesEditController',
            controllerAs: 'edit'
        })

    $provide.factory('myHttpInterceptor', ['$q', '$rootScope', function($q, $rootScope){
      return {
        'request': function(config) {
          $rootScope.$broadcast("httpRequestStart")
          return config;
        },

        'response': function(response) {
          $rootScope.$broadcast("httpRequestStop")
          return response;
        }
      };
    }])


    $httpProvider.interceptors.push('myHttpInterceptor');

  }]);

})();
