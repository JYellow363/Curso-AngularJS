var app = angular.module("ToDoList", ["LocalStorageModule"]);

app.factory("ToDoService", function (localStorageService) {
  var toDoService = {};
  toDoService.key = "angular-todoList";

  if (localStorageService.get(toDoService.key)) {
    toDoService.activities = localStorageService.get(toDoService.key);
  } else {
    toDoService.activities = [];
  }

  toDoService.addActivity = function (newActivity) {
    toDoService.activities.push(newActivity);
    toDoService.updateLocalStorage();
  };

  toDoService.updateLocalStorage = function() {
    localStorageService.set(toDoService.key, toDoService.activities);
  }

  toDoService.clean = function() {
    toDoService.activities = [];
    toDoService.updateLocalStorage();
    return toDoService.getAll();
  }

  toDoService.getAll = function() {
    return toDoService.activities;
  }

  toDoService.removeItem = function(item) {
    toDoService.activities = toDoService.activities.filter(function(activity) {
      return activity !== item
    });
    toDoService.updateLocalStorage();
    return toDoService.getAll();
  }

  return toDoService; 
});

app.controller("ToDoController", function ($scope, ToDoService) {

  $scope.newActivity = {};
  $scope.todo = ToDoService.getAll();

  $scope.addActivity = function() {
    ToDoService.addActivity($scope.newActivity);
    $scope.newActivity = {};
  };

  $scope.removeActivity = function(item) {
    $scope.todo = ToDoService.removeItem(item);
  }

  $scope.clean = function() {
    $scope.todo = ToDoService.clean();
  }


});
