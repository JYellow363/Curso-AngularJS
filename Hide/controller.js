var app = angular.module("MyFirstApp", []);

app.controller("FirstController", function ($scope, $http) {
  $scope.posts = [];
  $scope.loading = true;
  $http.get("http://jsonplaceholder.typicode.com/posts").then(
    // success
    function (data) {
      console.log(data);
      $scope.posts = data.data;
      $scope.loading = false;
    },
    // error
    function (err) {
      console.log(err);
      $scope.loading = false;
    }
  );
});
