function eiClickToEdit() {
  return {
        restrict: 'AE',
        replace: 'false',
        templateUrl: '/js_partials/directives/ei_click_to_edit.html',
        scope: {
          editableText: '='
        },
        link: function(scope, element, attrs) {
          scope.edit = false;
          scope.originalText = scope.editableText;

          scope.saveEdit = function(){
            scope.originalText = scope.editableText;
            scope.edit = false;
          }

          scope.discardEdit = function(){
            scope.editableText = scope.originalText;
            scope.edit = false;
          }

        }
    };
};

angular
  .module('myBlog')
  .directive('eiClickToEdit', eiClickToEdit);