function eiArticleEditor() {
  return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: '/js_partials/directives/ei_article_editor.html',
        scope: {
          content: '=',
          required: '='
        },
        link: function(scope, element, attrs) {
          scope.showHelp = false;
          scope.preview = false;
          scope.mdHints= { "Headers": [{syntax: "# H1", insertText: "# Insert your H1 here"},
                                        {syntax: "## H2", insertText: "## Insert your H2 here"},
                                        {syntax: "### H3", insertText: "### Insert your H3 here"},
                                        {syntax: "#### H4", insertText: "#### Insert your H4 here"},
                                        {syntax: "##### H5", insertText: "##### Insert your H5 here"},
                                        {syntax: "###### H6", insertText: "###### Insert your H6 here"}]
                          }

          scope.togglePreview = function(){
            scope.preview = !scope.preview;
          }

          scope.toggleHelp = function(){
            scope.showHelp = !scope.showHelp;
          }

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

angular
  .module('myBlog')
  .directive('eiArticleEditor', eiArticleEditor);
