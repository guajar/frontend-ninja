var $ = require('jquery');
var SongsService = require('./SongsService');

$('.new-song-form').on("submit", function() {
    var self = this;

    // validación rápida de inputs
    var inputs = $(this).find("input").each(function(i) {   //i = loop index    
        //para cada inputs dentro del form(this)
        var input = this;
        if (input.checkValidity() === false) {
            alert(input.validationMessage);
            input.focus();
            return false;
        }
    });  

    //Con todos los campos OK, guardamos en el Backend la canción
    var song = {
        artist: $("#artist").val(),
        title: $("#title").val(),
        audio_url: $("#audio_url").val(),
        cover_url: $("#cover_url").val()
    };

    // Antes de enviar el formulario, bloqueamos el botón de enviar
    $(this).find("button").text("Saving song...").attr("disabled", true);

    // Lo enviamos a Backend
    SongsService.save(song, function(data) {
        alert("Canción guardada correctamente");
        $(self).reset();   //Resetea el formulario
        $(self).find("button").text("Saving song...").attr("disabled", false);
    }, function(error) {
        alert("Se ha producido un error");
        $(self).find("button").text("Saving song...").attr("disabled", false);  //TODO: Refactorizar esto
    });

    return false;   //no queremos enviar el form nunca
});