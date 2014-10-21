angular.module('app', []);

function IndexCtrl(){
  this.articles = [
    {
      title: "Nepal's worst snowstorm disaster",
      published: false
    },
    {
      title: "Comet Siding Spring",
      published: false
    },
    {
      title: "Nikola Tesla",
      published: false
    }
  ]

  var that = this;

  this.removeName = function (index) {
    that.names.splice(index, 1);
  }

  this.publish = function (article) {
    article.published = true;
    article.published_at = new Date();
  }
}


angular
  .module('app')
  .controller('IndexCtrl', IndexCtrl);
