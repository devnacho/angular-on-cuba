function ArticlesShowController($stateParams, Article){
  this.article = Article.get({ id: $stateParams.id });
}

angular
  .module('myBlog')
  .controller('ArticlesShowController',
                ['$stateParams', 'Article', ArticlesShowController]);

