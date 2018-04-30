var gulp = require('gulp');
//var plugins = require('gulp-load-plugins')();
var sass = require('gulp-sass'); 
var source = './sources'; // dossier de travail
var destination = './build'; // dossier à livrer

// Compilation de SASS vers CSS
//******************************************
gulp.task('sass', function () {
  return gulp.src('static/sources/scss/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('static/build/css/'));
});
