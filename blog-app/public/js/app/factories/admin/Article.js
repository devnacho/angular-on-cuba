function Article($resource){
  return $resource('/api/admin/articles/:id/:action',
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
                      },
                      publish: { method: 'POST', params: { action: 'publish' } }
                   });
}

angular
  .module('myBlog')
  .factory('Article',
              ['$resource', Article]);
