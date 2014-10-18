angular.module('app', []);

function MainCtrl(){
  this.names = [
    "Juancho",
    "Pepe",
    "Cacho",
    "Josefo"
  ]
}


angular
  .module('app')
  .controller('MainCtrl', MainCtrl);
