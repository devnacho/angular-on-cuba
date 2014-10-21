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
}


angular
  .module('app')
  .controller('IndexCtrl', IndexCtrl);
