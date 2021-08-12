var app = angular.module("mainModule", []);

app.controller("FirstController", function ($scope) {
  $scope.nombre = "Jimena";
  /*
  setTimeout(function () {
    $scope.nombre = "Código Facilito";
    console.log($scope.nombre);
    $scope.$digest();
  }, 2000);
  */
  /*
  setTimeout(function () {
    $scope.$apply(function () {
      $scope.nombre = "Código Facilito";
    });
  }, 2000);
  */
  document.querySelector("#mi_boton").addEventListener("click", function () {
    $scope.$apply(function () {
      $scope.nombre = "Código Facilito";
    });
  });
});
