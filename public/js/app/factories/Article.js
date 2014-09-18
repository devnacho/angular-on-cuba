function Article($resource){
  return $resource('/api/articles/:id', {}, { });
}

angular
  .module('myBlog')
  .factory('Article',
              ['$resource', Article]);
