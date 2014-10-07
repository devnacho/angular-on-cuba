function AdminArticlesEditController($scope, $state, $stateParams, Article){
  $scope.article = Article.get({ id: $stateParams.id }, function() {
  });

  $scope.save = function(){
    $scope.article.$update(function(data){
      $state.go('articles');
    });
  }
}

angular
  .module('myBlog')
  .controller('AdminArticlesEditController',
              ['$scope',  '$state', '$stateParams', 'Article', AdminArticlesEditController]);
