function AdminArticlesIndexController(Article){

    this.articles = Article.query();

    var that = this;

    this.remove = function (index) {
      that.articles[index].$remove();
      that.articles.splice(index, 1);
    }

    this.publish = function (index) {
      that.articles[index].$publish();
    }
}

angular
  .module('myBlog')
  .controller('AdminArticlesIndexController',
                ['Article', AdminArticlesIndexController]);
