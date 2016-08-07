(function() {
  'use strict';


function TodoController(TodoService){
    var crtl = this;  //allows to use proper this context
    crtl.list = [];

    function getTodos() {
        TodoService
        .retrieve()
        .then(function (response) {
            crtl.list = response;
      });
    }

    crtl.addTodo = function () {
      if (!crtl.newTodo) {
          return;
      }
      TodoService
      .create({
        title: crtl.newTodo,
        completed: false
      })
      .then(function (response) {
          crtl.list.unshift(response);
          crtl.newTodo = "";
      });
    };

    crtl.removeTodo = function (item, index) {
        TodoService
        .remove(item)
        .then(function (response) {
        crtl.list.splice(index, 1);
      });
    };

    crtl.updateTodo = function (item, index) {
      if (!item.title) {
        crtl.removeTodo(item, index);
          return;
      }
      TodoService
      .update(item);
    };

    crtl.getRemaining = function () {
          return crtl.list.filter(function (item) {
            return !item.completed; //should return array of items not completed
      });
    };

    crtl.toggleState = function (item) {
           item.completed = !item.completed;
           TodoService.update(item)
    };

    // crtl.toggleState = function (item) {
    //     TodoService
    //     .update(item)
    //     .then(function () {
    //
    //     }, function () {
    //       item.completed = !item.completed;
    //       });
    // };

    getTodos();

}

angular
  .module('app')
  .controller('TodoController', TodoController);

}());
