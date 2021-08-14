var app = angular.module("CustomDirective");

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