function eiTags() {
  return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: '/js_partials/directives/ei_tags.html',
        scope: {
          tags: '='
        },
        link: function(scope, element, attrs) {

        }
    };
};

angular
  .module('myBlog')
  .directive('eiTags', eiTags);
