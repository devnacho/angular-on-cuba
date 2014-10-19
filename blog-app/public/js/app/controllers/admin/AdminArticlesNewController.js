function AdminArticlesNewController($state, Article){
  this.article = new Article();
  var that = this;

  this.save = function(){
    that.article.$save(function(data){
      $state.go('articles');
    });
  }
}

angular
  .module('myBlog')
  .controller('AdminArticlesNewController',
              ['$state', 'Article', AdminArticlesNewController]);
