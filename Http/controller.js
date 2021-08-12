var app = angular.module("MyFirstApp", []);

app.controller("FirstController", function ($scope, $http) {
  $scope.posts = [];
  $http.get("http://jsonplaceholder.typicode.com/posts").then(
    // success
    function (data) {
      console.log(data);
      $scope.posts = data.data;
      $scope.newPost = {};
    },
    // error
    function (err) {
      console.log(err);
    }
  );
  $scope.addPost = function () {
    $http
      .post("http://jsonplaceholder.typicode.com/posts", {
        title: $scope.newPost.title,
        body: $scope.newPost.body,
        userId: 1,
      })
      .then(
        // success
        function (data) {
          console.log(data.data);
          $scope.posts.push($scope.newPost);
          $scope.newPost = {};
        },
        // error
        function (err) {
          console.log(err);
        }
      );
  };
});
