function ArticlesNewController($scope){
  $scope.newArticle = {};
}

angular
  .module('myBlog')
  .controller('ArticlesNewController',
              ['$scope', ArticlesNewController]);
