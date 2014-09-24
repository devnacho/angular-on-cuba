function Article($resource){
  return $resource('/api/articles/:id',
                   { id: '@id' },
                   {
                     update: { method: 'PUT',
                               transformRequest: function(data, headers) {
                                  delete data['id'];
                                  delete data['published_at'];
                                  delete data['created_at'];
                                  delete data['updated_at'];

                                  return angular.toJson(data);
                               }
                     }
                   });
}

angular
  .module('myBlog')
  .factory('Article',
              ['$resource', Article]);
