function ArticlesIndexController(Article){

  this.articles = Article.query();

}

angular
  .module('myBlog')
  .controller('ArticlesIndexController',
                ['Article', ArticlesIndexController]);
