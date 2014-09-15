(function(){
  var app = angular.module('myBlog', ['ngAnimate','ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
             function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/admin/articles');

    $stateProvider
        .state('articles-new', {
            url: '/admin/articles/new',
            templateUrl: '/partials/admin/articles/new.html',
            controller: 'ArticlesNewController'
        })
        .state('articles-index', {
            url: '/admin/articles',
            templateUrl: '/partials/admin/articles/index.html',
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
