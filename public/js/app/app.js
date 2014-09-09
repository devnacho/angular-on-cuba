(function(){
  var app = angular.module('myBlog', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider',
             function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/articles');

    $stateProvider
        .state('articles-new', {
            url: '/articles/new',
            templateUrl: '/partials/articles/new.html',
            controller: 'ArticlesNewController'
        })
        .state('articles-index', {
            url: '/articles',
            templateUrl: '/partials/articles/index.html',
            controller: 'ArticlesIndexController'
        })
  }]);

  app.controller('ArticlesNewController', function($scope){
    $scope.newArticle = {};
  });

  app.controller('ArticlesIndexController', function($scope){
    $scope.articles = [];
    $scope.articles = [{title: "My first blog post"},
                       {title: "I think this is quite interesting"}];
  });

})();
