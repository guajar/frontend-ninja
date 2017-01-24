var $ = require('jquery');
var uiManager = require('./uiManager');
var SongsListManager = require('./SongsListManager');

$(document).ready(function() {

    // manejamos el clicke en el botón de nueva canción
   $("#new-song").on("click", function() {
       uiManager.toggleForm();       
   });

    // cargar las canciones
    SongsListManager.loadSongs();

});