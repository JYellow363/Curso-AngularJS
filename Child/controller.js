var app = angular.module("MyFirstApp", []).run(function ($rootScope) {
  $rootScope.nombre = "Código Facilito";
});

app.controller("FirstController", function ($scope) {
  $scope.nombre = "CF";
  setTimeout(function () {
    $scope.$apply(function () {
      $scope.nombre = ":3";
    });
  }, 1000);
});

app.controller("ChildController", function ($scope) {});
