angular.module('app', []);

function IndexCtrl(){
  this.articles = [
    {
      title: "Nepal's worst snowstorm disaster",
      published: true
    },
    {
      title: "Comet Siding Spring",
      published: true
    },
    {
      title: "Nikola Tesla",
      published: false
    }
  ]
}


angular
  .module('app')
  .controller('IndexCtrl', IndexCtrl);
