function ArticlesNewController($scope, Article){
  $scope.article = new Article();

  $scope.save = function(){
    $scope.article.$save();
  }
}

angular
  .module('myBlog')
  .controller('ArticlesNewController',
              ['$scope', 'Article', ArticlesNewController]);
