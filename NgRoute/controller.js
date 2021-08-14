var app = angular.module("CustomDirective");

app.controller("ReposController", function ($scope, $http) {
  $scope.repos = [];
  $scope.reposAux = [];

  $http.get("https://api.github.com/users/twitter/repos").then(
    function (data) {
      $scope.reposAux = data.data;
      for(var i = data.data.length - 1; i>=0; i--) {
        var repo = data.data[i];
        $scope.repos.push(repo.name);
      }
    },
    function (err) {
      console.log(err);
    }
  );

  $scope.optionSelected = function (data) {
    $scope.$apply(function () {
      $scope.main_repo = data;
    });
  };
});

app.controller("RepoController", function ($scope, $http, $routeParams) {
  $scope.repo = {};
  $http.get("https://api.github.com/repos/twitter/"+$routeParams.name).then(
    function (data) {
      $scope.repo = data.data;
    },
    function (err) {
      console.log(err);
    }
  );
});