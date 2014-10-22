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
    },
    {
      title: "A very important draft that I'll publish some day",
      published: false
    },
    {
      title: "Another draft",
      published: false
    }
  ]

  var that = this;

  this.removeName = function (index) {
    that.names.splice(index, 1);
  }

}


angular
  .module('app')
  .controller('IndexCtrl', IndexCtrl);
