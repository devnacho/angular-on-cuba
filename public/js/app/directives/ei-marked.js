var directive = function() {
  return {
        restrict: 'AE',
        replace: 'true',
        scope: {
          toConvert: '='
        },
        link: function(scope, element, attrs) {
          scope.$watch("toConvert", function(newValue, oldValue) {
            element.html(marked(scope.toConvert));
          });
        }
    };
};

angular.module('myBlog').directive('eiMarked', directive);
