function AdminArticlesIndexController(Article){
  this.articles = Article.query();
}

angular
  .module('myBlog')
  .controller('AdminArticlesIndexController',
                ['Article', AdminArticlesIndexController]);
