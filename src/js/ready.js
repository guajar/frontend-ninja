var $ = require('jquery');
var uiManager = require('./uiManager');
var SongsListManager = require('./SongsListManager');
var SongsService = require('./SongsService');
var Player = require('./Player');

$(document).ready(function() {

    // manejamos el clicke en el botón de nueva canción
   $("#new-song").on("click", function() {
       uiManager.toggleForm();       
   });

   // manejador de eventos del botón de borrar canciones
   $(".songs-list").on("click", ".delete-button", function() {
       var songId = $(this).data("id");     // recuperamos el id de la canción
       SongsListManager.deleteSong(songId);
   });

   // manejador de eventos del botón de play
   $(".songs-list").on("click", ".play-button", function() {
       var audioUrl = $(this).data("audioUrl");
       Player.play(audioUrl);
   });

   // cargar las canciones
   SongsListManager.loadSongs();

});