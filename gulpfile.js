// Include gulp
var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
	gulpif = require('gulp-if');

// Concatenando JS
gulp.task('concat', function () {
    return gulp.src(['src/format-masks.component.js'])
        .pipe(concat('format-masks.component.js'))
        .pipe(ngAnnotate({ add: true, single_quotes: true }))
        .pipe(gulp.dest('dist/')
    );
});

gulp.task('minify', function () {
    return gulp.src(['src/format-masks.component.js'])
        .pipe(concat('format-masks.component.min.js'))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist/')
    );
});

gulp.task('default', ['concat', 'minify']);
