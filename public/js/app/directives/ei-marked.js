function eiMarked() {
  return {
        restrict: 'AE',
        replace: 'true',
        scope: {
          toConvert: '=',
          preview: '='
        },
        link: function(scope, element, attrs) {
          scope.$watch("preview", function(newValue, oldValue) {
            if(scope.preview) {
              element.html(marked(scope.toConvert || ""));
            }
          });
        }
    };
};

angular
  .module('myBlog')
  .directive('eiMarked', eiMarked);
