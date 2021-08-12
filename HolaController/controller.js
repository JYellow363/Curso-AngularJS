var app = angular.module("MyFirstApp", []);

app.controller("FirstController", ["$scope", function (m) {
  m.nombre = "Jimena";
  m.nuevoComentario = {};
  m.comentarios = [
    {
      comentario: "Buen tutorial!",
      username: "codigofacilito",
    },
    {
      comentario: "Malísimo el tutorial",
      username: "otro_usuario",
    },
  ];
  m.agregarComentario = function() {
      m.comentarios.push(m.nuevoComentario);
      m.nuevoComentario = {};
  }
}]);
