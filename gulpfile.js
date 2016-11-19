// Include gulp
var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    browserSync = require('browser-sync').create(),
    spa         = require("browser-sync-spa"),
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

// Static Server + watching sass/html files
gulp.task('serve', function() {
    browserSync.use(
        spa({
            selector: "[masks]",
            history: {
                index: '/index.html'
            }
        })
    );
    
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch("./**/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['concat', 'minify']);
