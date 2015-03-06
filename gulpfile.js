'use strict'

// mainly for dev use only
// for rainbow ipsum

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    rimraf = require('rimraf');


gulp.task('clean', function(cb) {
  rimraf('build', cb);
});

gulp.task('js', function() {
  gulp.src(['dev/vendor/jquery.js',
            'dev/vendor/jquery.cookie.js',
            'dev/vendor/fastclick.js',
            'dev/vendor/modernizr.js',
            'dev/vendor/placeholder.js',
            'dev/vendor/foundation.min.js'])
  .pipe(uglify())
  .pipe(concat('vendor.min.js'))
  .pipe(gulp.dest('build/js/'));

  gulp.src('dev/main.js')
  .pipe(uglify())
  .pipe(concat('main.min.js'))
  .pipe(gulp.dest('build/js/'))
  .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src('dev/css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'));
});

gulp.task('img', function() {
  gulp.src('dev/img/*.*')
    .pipe(gulp.dest('build/img'));
})

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
  gulp.watch(['dev/css/*.css'], ['css']);
  gulp.watch(['dev/img/*.**'], ['img']);
  gulp.watch(['index.html'], ['copy-html']);
});

gulp.task('build', ['clean'], function() {
  gulp.start('js', 'css', 'img', 'copy-html', 'minify-html');
});

gulp.task('default', ['serve','watch']);