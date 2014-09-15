(function(){
  var app = angular.module('myBlog', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
             function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/articles');

    $stateProvider
        .state('articles-index', {
            url: '/articles',
            templateUrl: '/partials/admin/articles/index.html',
            controller: 'ArticlesIndexController'
        })
        .state('articles-new', {
            url: '/articles/new',
            templateUrl: '/partials/admin/articles/new.html',
            controller: 'ArticlesNewController'
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
