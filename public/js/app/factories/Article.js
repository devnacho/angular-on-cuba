function Article($resource){
  return $resource('/api/articles/:id', { id: '@id' }, { });
}

angular
  .module('myBlog')
  .factory('Article',
              ['$resource', Article]);
