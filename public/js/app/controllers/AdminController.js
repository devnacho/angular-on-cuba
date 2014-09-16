function AdminController($scope, $rootScope){
  $scope.loading = true;

  $rootScope.$on("$stateChangeStart", function() {
    $scope.loading = true;
  });
  $rootScope.$on("$stateChangeSuccess", function() {
    $scope.loading = false;
  });

}

angular
  .module('myBlog')
  .controller('AdminController',
              ['$scope', '$rootScope', AdminController]);
