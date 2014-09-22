function ArticlesIndexController($scope, Article){
    $scope.articles = Article.query();

    $scope.remove = function (index) {
      $scope.articles[index].$remove();
      $scope.articles.splice(index, 1);
    }

}

angular
  .module('myBlog')
  .controller('ArticlesIndexController',
                ['$scope', 'Article', ArticlesIndexController]);
