'use strict'

// mainly for dev use only
// for rainbow ipsum

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rimraf = require('rimraf');


gulp.task('clean', function(cb) {
  rimraf('build', cb);
});

gulp.task('js', function() {
  gulp.src('dev/main.js')
  .pipe(uglify())
  .pipe(concat('main.min.js'))
  .pipe(gulp.dest('build/js/'))
  .pipe(connect.reload());
});

// Minify and smoosh together HTML
gulp.task('minify-html', function() {
  var opts = {
    comments: false,
    spare: true
  };

  gulp.src('build/')
    .pipe(minifyHTML(opts))
    .pipe(connect.reload())
});

// Task to copy HTML directly, without minifying
gulp.task('copy-html', function() {
  return gulp.src('index.html')
  .pipe(gulp.dest('build/'))
  .pipe(connect.reload())
});

gulp.task('serve', function() {
  return connect.server({
    root: 'build/',
    livereload: true
  });
});

gulp.task('watch', ['serve'], function() {
  gulp.watch(['dev/*.js'],['js']);
  gulp.watch(['index.html'], ['copy-html']);
});

gulp.task('build', ['clean'], function() {
  gulp.start('js', 'copy-html', 'minify-html');
});

gulp.task('default', ['serve','watch']);