(function(){
  var app = angular.module('myBlog', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider',
             function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/articles');

    $stateProvider
        .state('articles-new', {
            url: '/articles/new',
            templateUrl: '/js/app/partials/articles/new.html',
            controller: 'ArticlesNewController'
        })
        .state('articles-index', {
            url: '/articles',
            templateUrl: '/js/app/partials/articles/index.html',
            controller: 'ArticlesIndexController'
        })
  }]);

  app.controller('ArticlesNewController', function($scope){

  });

  app.controller('ArticlesIndexController', function($scope){

  });

})();
