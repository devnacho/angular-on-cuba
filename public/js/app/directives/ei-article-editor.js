var directive = function() {
  return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: '/partials/directives/ei_article_editor.html',
        scope: {
          content: '='
        },
        link: function(scope, element, attrs) {
          //scope.mdHeaders = ["# H1","## H2","### H3","#### H4","##### H5", "###### H6"];
          scope.mdHeaders = [{syntax: "# H1", insertText: "# Insert your H1 here"},
                            {syntax: "## H2", insertText: "## Insert your H2 here"},
                            {syntax: "### H3", insertText: "### Insert your H3 here"},
                            {syntax: "#### H4", insertText: "#### Insert your H4 here"},
                            {syntax: "##### H5", insertText: "##### Insert your H5 here"},
                            {syntax: "###### H6", insertText: "###### Insert your H6 here"}];

          scope.insert = function(syntax) {
            if(scope.content == undefined){
              scope.content = syntax.insertText;
            } else if(scope.content=== ""){
              scope.content += syntax.insertText;
            } else if(scope.content.slice(-1) === "\n"){
              scope.content += syntax.insertText;
            } else {
              scope.content += "\n"+ syntax.insertText;
            }
          };
        }
    };
};

angular.module('myBlog').directive('eiArticleEditor', directive);
