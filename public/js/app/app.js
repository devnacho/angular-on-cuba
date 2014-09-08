(function(){
  var app = angular.module('myBlog', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/admin');

    $stateProvider
        .state('new-article', {
            url: '/articles/new',
            templateUrl: '/js/app/partials/articles/new.html'
        })

        .state('reporting', {
            url: '/reporting',
            templateUrl: 'partials/partial-reporting.html'
        })

  });


})();
