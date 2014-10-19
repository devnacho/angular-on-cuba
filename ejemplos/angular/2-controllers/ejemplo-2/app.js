angular.module('app', []);

function MainCtrl(){
  this.names = [
    "Juancho",
    "Pepe",
    "Cacho",
    "Josefo"
  ]

  var that = this;

  this.removeName = function (index) {
    that.names.splice(index, 1)
  }
}


angular
  .module('app')
  .controller('MainCtrl', MainCtrl);
