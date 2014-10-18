angular.module('app', []);

function MainCtrl ($scope) {
  $scope.myName = "Jorgelino";
}

angular
  .module('app')
  .controller('MainCtrl', MainCtrl);
