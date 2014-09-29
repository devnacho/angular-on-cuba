function AdminArticlesIndexController($scope, Article){
    $scope.articles = Article.query();

    $scope.remove = function (index) {
      $scope.articles[index].$remove();
      $scope.articles.splice(index, 1);
    }

}

angular
  .module('myBlog')
  .controller('AdminArticlesIndexController',
                ['$scope', 'Article', AdminArticlesIndexController]);
