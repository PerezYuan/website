const gulp = require('gulp'),
    less = require('gulp-less'),
    webpack = require('gulp-webpack'),
    del = require('del');


gulp.task('jsmin', function() {
    return gulp.src('public/src/entry.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('public/dist/js'))
});

gulp.task('less', function () {
    return gulp.src('public/src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/dist/css'));
});

gulp.task('default', ['jsmin', 'less'], function() {});

gulp.watch('public/src/js/*.js', function(event) {
    gulp.run('jsmin');
});

gulp.watch('public/src/css/*.less', function(event) {
    gulp.run('less');
});