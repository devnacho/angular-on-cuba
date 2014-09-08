(function(){
  var app = angular.module('myBlog', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $urlRouterProvider.otherwise('');

    $stateProvider
        .state('new-article', {
            url: '/admin/articles/new',
            templateUrl: '/js/app/partials/articles/new.html'
        })
  });


})();
