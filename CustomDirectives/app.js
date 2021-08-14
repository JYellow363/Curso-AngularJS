var app = angular.module("CustomDirective", []);

app.directive("backImg", function () {
  return function (scope, element, attrs) {
    attrs.$observe("backImg", function (value) {
      element.css({
        background: "url(" + value + ")",
        "background-size": "cover",
        "background-position": "center",
      });
    });
  };
});

app.directive("autoComplete", function () {
  function link(scope, element, attrs) {
    $(element).autocomplete({
      source: scope[attrs.autoComplete],
      select: function (ev, ui) {
        ev.preventDefault();
        if (ui.item) {
          console.log(ui.item.value);
          scope.optionSelected(ui.item.value);
        }
      },
      focus: function (ev, ui) {
        ev.preventDefault();
        $(this).val(ui.item.label);
      },
    });
  }
  return {
    link: link,
  };
});

app.controller("AppCtrl", function ($scope, $http) {
  $scope.repos = [];
  $scope.reposAux = [];

  $http.get("https://api.github.com/users/jyellow363/repos").then(
    // success
    function (data) {
      $scope.reposAux = data.data;
      for(var i = data.data.length - 1; i>=0; i--) {
        var repo = data.data[i];
        $scope.repos.push(repo.name);
      }
    },
    // error
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
