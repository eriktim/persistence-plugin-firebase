var gulp = require('gulp');
var eslint = require('gulp-eslint');
var paths = require('../paths');

// runs eslint on all .js files
gulp.task('lint', function() {
  return gulp.src([paths.source, paths.testSource])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
