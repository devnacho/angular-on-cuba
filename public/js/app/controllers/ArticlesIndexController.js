function ArticlesIndexController($scope, Article){
    $scope.articles = Article.query();

    $scope.remove = function (index) {
      console.log($scope.articles[index]);
      $scope.articles[index].$remove();
    }

}

angular
  .module('myBlog')
  .controller('ArticlesIndexController',
                ['$scope', 'Article', ArticlesIndexController]);
