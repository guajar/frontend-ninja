var gulp = require('gulp');  //Importamos gulp
var sass = require('gulp-sass'); //Import sass

//definimos la tarea por defecto
gulp.task("default", function() {
    //Cuando haya cambios en style.scss, compila sass
    gulp.watch('./src/scss/style.scss', ['compile-sass']);
});

gulp.task("compile-sass", function(){
    gulp.src('./src/scss/style.scss')  //Cargo el style.scss
    .pipe(sass().on('error', sass.logError)) //compilo sass
    .pipe(gulp.dest('./dist/'));   //Dejo el resultado en ./
});