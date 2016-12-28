const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      babel = require('gulp-babel');


gulp.task('jsmin', function() {
    return gulp.src(['public/src/**/*.js', '!public/src/lib/**'])
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});