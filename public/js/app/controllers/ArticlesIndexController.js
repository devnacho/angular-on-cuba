function ArticlesIndexController($scope){
    $scope.articles = [];
    $scope.articles = [{title: "My first blog post"},
                       {title: "I think this is quite interesting"}];
}

angular
  .module('myBlog')
  .controller('ArticlesIndexController',
                ['$scope', ArticlesIndexController]);
