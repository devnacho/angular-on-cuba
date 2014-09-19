function ArticlesNewController($scope, Article, $state){
  $scope.article = new Article();

  $scope.save = function(){
    $scope.article.$save(function(data){
      $state.go('articles');
    });
  }
}

angular
  .module('myBlog')
  .controller('ArticlesNewController',
              ['$scope', 'Article', '$state', ArticlesNewController]);
