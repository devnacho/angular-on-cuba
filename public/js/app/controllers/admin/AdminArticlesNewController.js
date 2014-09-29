function AdminArticlesNewController($scope, $state, Article){
  $scope.article = new Article();

  $scope.save = function(){
    $scope.article.$save(function(data){
      $state.go('articles');
    });
  }
}

angular
  .module('myBlog')
  .controller('AdminArticlesNewController',
              ['$scope', '$state', 'Article', AdminArticlesNewController]);
