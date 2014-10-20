function AdminArticlesIndexController(Article){

    this.articles = Article.query();

    var that = this;

    this.remove = function (index) {
      that.articles[index].$remove();
      that.articles.splice(index, 1);
    }
}

angular
  .module('myBlog')
  .controller('AdminArticlesIndexController',
                ['Article', AdminArticlesIndexController]);
