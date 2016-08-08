(function() {
  'use strict';


function TodoService ($http) {
  var API = 'https://tiny-tiny.herokuapp.com/collections/myTodo';

  function create(todo){
    return $http.post(API, todo).then(function (response) {
      return response.data;
    });
  }
  function retrieve(){
    return $http.get(API).then(function (response) {
      return response.data.splice(0, 10);
    });
  }


  function update(todo){
    return $http.put(API + '/' + todo._id, todo).then(function (response) {
      return response.data;
    });
  }
  function remove(todo){
      return $http.delete(API + '/' + todo._id).then(function (response) {
        return response.data;
      });
  }

  return {
    create: create,
    retrieve: retrieve,
    update: update,
    remove: remove
};
}

angular
  .module ('app')
  .factory ('TodoService', TodoService);

}());
