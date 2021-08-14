var app = angular.module("CustomDirective", []);

app.directive("backImg", function () {
  return function (scope, element, attrs) {
    attrs.$observe("backImg", function (value) {
      element.css({
        "background": "url(" + value + ")",
        "background-size": "cover",
        "background-position": "center",
      });
    });
  };
});

app.controller("AppCtrl", function ($scope, $http) {
  $scope.repos = [];

  $http.get("https://api.github.com/users/jyellow363/repos").then(
    // success
    function (data) {
      console.log(data);
      $scope.repos = data.data;
    },
    // error
    function (err) {
      console.log(err);
    }
  );
});
