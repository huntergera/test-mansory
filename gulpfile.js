'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    wiredep = require('wiredep').stream,
    sourcemaps = require('gulp-sourcemaps'),
    gulpif = require('gulp-if'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    browserSync = require('browser-sync').create();

// build
gulp.task('build', function () {

    gulp.src('./app/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulp.dest('dist'));
});

// bower
gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory: './app/bower_components'
    }))
    .pipe(gulp.dest('./app'));
});

// browser-sync
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: './app'
    });

    gulp.watch('./app/less/**/*.less', ['less']);
    gulp.watch('./app/js/**/*.*').on('change', browserSync.reload);
    gulp.watch('./app/*.html').on('change', browserSync.reload);
});

// less
gulp.task('less', function() {
    return gulp.src('./app/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer(['last 3 version','> 5%']))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream());
});

// watch
gulp.task('watch', function () {
    
    gulp.watch('./src/less/*.less', [less]);
});

// default
gulp.task('default', ['serve']);