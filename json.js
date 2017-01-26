"use strict"

var nombreDeUsuario = ""

 function usuarioBusca () {
  var nombreDeUsuario = $("input").val()

  $.ajax({
  url: "https://api.github.com/users/" + nombreDeUsuario,
  success : function(data) {
      $("#name").html(data.login)
      $("#repositorios").html(data.public_repos)
      $ ("#foto").attr('src', data.avatar_url)
  }
});
}

$("#boton").on("click", usuarioBusca)


