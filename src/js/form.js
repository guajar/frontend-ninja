var $ = require('jquery');

$('.new-song-form').on("submit", function() {

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

    $.ajax({
        url: "/api/songs/",        
        type: "post",       // post => Crear una canción
        data: song,
        success: function(data) {
            alert("Canción guardada correctamente");
        },
        error: function(error) {
            alert("Se ha producido un error");
            console.log("Error al guardar la canción", error);
        }
    });

    return false;   //no queremos enviar el form nunca
});