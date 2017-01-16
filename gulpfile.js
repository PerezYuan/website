const gulp = require('gulp'),
    less = require('gulp-less'),
    webpack = require('gulp-webpack'),
    image = require('gulp-image'),
    del = require('del'),
    fs = require('fs');


gulp.task('jsmin', () => {
    return gulp.src('public/src/entry.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('public/dist/js'))
});

gulp.task('image', () => {
    return gulp.src('public/src/images/**')
        .pipe(image())
        .pipe(gulp.dest('public/dist/images'));
});

gulp.task('less', () => {
    return gulp.src('public/src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/dist/css'));
});

gulp.task('font', () => {
    return gulp.src('public/src/css/fonts/**')
        .pipe(gulp.dest('public/dist/css/fonts'))
})

gulp.task('default', ['jsmin','image', 'less', 'font'], () =>{});

gulp.watch('public/src/js/*.js', (event) => {
    gulp.run('jsmin');
});

gulp.watch('public/src/css/*.less', (event) => {
    gulp.run('less');
});