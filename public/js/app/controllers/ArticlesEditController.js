function ArticlesEditController($scope, $state, $stateParams, Article){
  $scope.article = Article.get({ id: $stateParams.id }, function() {
  });

  $scope.save = function(){
    $scope.article.$save(function(data){
      $state.go('articles');
    });
  }
}

angular
  .module('myBlog')
  .controller('ArticlesEditController',
              ['$scope',  '$state', '$stateParams', 'Article', ArticlesEditController]);
