function AdminArticlesEditController($state, $stateParams, Article){
  this.article = Article.get({ id: $stateParams.id });
  var that = this;

  this.save = function(){
    that.article.$update(function(data){
      $state.go('articles');
    });
  }
}

angular
  .module('myBlog')
  .controller('AdminArticlesEditController',
              ['$state', '$stateParams', 'Article', AdminArticlesEditController]);
