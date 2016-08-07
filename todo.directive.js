(function() {
  'use strict';



function todoApp() {
  return {
    restrict: 'E',
    controller: 'TodoController as todo',
    template: `
    <div class="todo">
      <form class="todo__form" ng-submit="todo.addTodo();">
        <input type="text" placeholder="Insert ya todo yahoo" ng-model="todo.newTodo">
      </form>
      <ul class="todo__list">
        <li ng-repeat="item in todo.list">
        <input type="checkbox" id="todo.{{ $index }}" ng-model="item.completed">
         <label ng-click="todo.toggleState(item)" class="toggle" for="todo-{{ $index }}"></label>
          <p ng-dblclick="showEditField = true;" ng-hide="showEditField">
            {{ item.title }}
          </p>
          <a href="" ng-click="todo.removeTodo(item, $index);">
            &#x02717;
          </a>
        </li>
      </ul>
      <p class="todo__remaining">
        <span ng-show="todo.getRemaining().length > 0">
          You gots {{ todo.getRemaining().length }} out of {{ todo.list.length }} items todo!
        </span>
        <span ng-show="todo.getRemaining().length === 0">
          You are doin work son!
        </span>
      </p>
    </div>
    `
  };
}

angular
  .module('app')
  .directive('todoApp', todoApp);


}());
