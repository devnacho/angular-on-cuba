var directive = function() {
  return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: '/partials/directives/ei_article_editor.html',
        scope: {
          content: '='
        }
    };
};

angular.module('myBlog').directive('eiArticleEditor', directive);
