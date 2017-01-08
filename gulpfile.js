const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    less = require('gulp-less');


gulp.task('jsmin', function() {
    return gulp.src(['public/src/**/*.js', '!public/src/lib/**'])
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});

gulp.task('less', function () {
    return gulp.src(['public/src/**/*.less', '!public/src/lib/**'])
        .pipe(less())
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('default', ['jsmin','less'], function() {
});

gulp.watch(['public/src/**/*.js','public/src/**/*.less'], function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('default');
});