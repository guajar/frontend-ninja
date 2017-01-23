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

    return false;   //no queremos enviar el form nunca
});