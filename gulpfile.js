var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

function showDivider() {
  var i;

  for (i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === '--divider') {
      return true;
    }
  }

  return false;
}

var paths = {
  solutions: ['solution.js'],
  toolbox: 'test/toolbox/**/*.js'
};

gulp.task('test-toolbox', function () {
  return gulp.src(paths.toolbox)
    .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('test-solutions', function () {
  if (showDivider()) {
    console.log('<----------------->');
  }

  return gulp.src(paths.solutions)
    .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('test-solutions-watch', function () {
  gulp.watch(paths.solutions, ['test-solutions']);
});

gulp.task('live-tests', ['test-solutions', 'test-solutions-watch']);

gulp.task('default', ['live-tests']);