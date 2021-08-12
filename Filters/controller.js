var app = angular.module("mainModule", []).filter("removeHtml", function () {
  return function (texto) {
    return String(texto).replace(/<[^>]+>/gm, "");
  };
});

app.controller("FiltersController", function ($scope) {
  $scope.mi_html = "<p>Hola mundo</p>";
  $scope.mi_json = {
      title: "Hola",
      body: "Hola mundo"
  };
  $scope.costo = 2;
});
