function AdminController($scope, $rootScope){
  $scope.loading = 0;

  $rootScope.$on("httpRequestStart", function() {
    $scope.loading += 1;
  });

  $rootScope.$on("httpRequestStop", function() {
    $scope.loading -= 1;
  });

}

angular
  .module('myBlog')
  .controller('AdminController',
              ['$scope', '$rootScope', AdminController]);
