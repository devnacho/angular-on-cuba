function ArticlesIndexController($scope, Article){
    $scope.articles = Article.query();
}

angular
  .module('myBlog')
  .controller('ArticlesIndexController',
                ['$scope', 'Article', ArticlesIndexController]);
