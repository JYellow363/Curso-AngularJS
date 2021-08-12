var app = angular.module("ToDoList", ["LocalStorageModule"]);

app.controller("ToDoController", function ($scope, localStorageService) {
  if (localStorageService.get("angular-todoList")) {
    $scope.todo = localStorageService.get("angular-todoList");
  } else {
    $scope.todo = [];
  }
  $scope.newActivity = {};
  $scope.$watchCollection('todo', function() {
    localStorageService.set("angular-todoList", $scope.todo);
  });
  $scope.addActivity = function () {
    $scope.todo.push($scope.newActivity);
    $scope.newActivity = {};
  };
  $scope.clean = function () {
    $scope.todo = [];
  }
});
