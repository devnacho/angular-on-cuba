function eiMarked() {
  return {
        restrict: 'AE',
        replace: 'true',
        scope: {
          toConvert: '='
        },
        link: function(scope, element, attrs) {
          scope.$watch("toConvert", function(newValue, oldValue) {
            if(scope.toConvert) {
              element.html(marked(scope.toConvert));
            }
          });
        }
    };
};

angular
  .module('myBlog')
  .directive('eiMarked', eiMarked);
