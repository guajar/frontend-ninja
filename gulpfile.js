var gulp = require('gulp');  //Import gulp
var sass = require('gulp-sass'); //Import sass
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();

//Definimos la tarea por defecto
gulp.task("default", ["compile-sass"], function() {

    // Arrancar eñ servidor Browser sync
    browserSync.init({
        server:"./"
    });

    //Cuando haya cambios en archivos scss, compila sass
    gulp.watch('./src/scss/*.scss', ['compile-sass']);

    //Cuando se cambie el HTML, Recargamos el navegador
    gulp.watch('./*.html', function() {
        browserSync.reload();
        notify().write("Navegador recargado");      //Mostramos notificación
    });     
});

gulp.task("compile-sass", function(){
    gulp.src('./src/scss/style.scss')  //Cargo el style.scss
    .pipe(sass().on('error', function(error) {  //Compilamos sass
        return notify().write(error);  //Si ocurre un error, mostramos notificación
    })) 
    .pipe(gulp.dest('./dist/'))   //Dejo el resultado en ./dist
    .pipe(browserSync.stream())   // Recargamos el CSS en el navegador
    .pipe(notify("SASS Compilado"));
});