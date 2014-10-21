function ArticlesIndexController(Article){

  this.articles = Article.query();

  this.articlesLimit = 2;

}

angular
  .module('myBlog')
  .controller('ArticlesIndexController',
                ['Article', ArticlesIndexController]);
