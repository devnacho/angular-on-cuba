angular.module('app', []);

function IndexCtrl(){
  this.articles = [
    {
      title: "Nepal's worst snowstorm disaster"
    },
    {
      title: "Comet Siding Spring"
    },
    {
      title: "Nikola Tesla"
    }
  ]

  var that = this;

  this.removeName = function (index) {
    that.names.splice(index, 1)
  }
}


angular
  .module('app')
  .controller('IndexCtrl', IndexCtrl);
