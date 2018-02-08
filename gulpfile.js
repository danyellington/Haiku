var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;
var del = require('del');

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/haiku-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task("cssBuild", function() {
  gulp.src(['css/*.css'])
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('./build/css'))
});
gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
gulp.task("build", function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
