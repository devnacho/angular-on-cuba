(function(){
  var app = angular.module('myBlog', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider',
             function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('');

    $stateProvider
        .state('new-article', {
            url: '/articles/new',
            templateUrl: '/js/app/partials/articles/new.html'
        })
  }]);


})();
