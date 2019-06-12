var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

gulp.task('minify-css', function(done){
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css'))
  done();
});

gulp.task('move-js', function(done){
  return gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js'))
  done();
});

gulp.task('htmlmin', function(done){
  return gulp.src('./src/*.html')
  .pipe(htmlmin({ 
    collapseWhitespace: true 
  }))
  .pipe(gulp.dest('dist/'))
  done();
});

gulp.task('fonts', function(done){
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
  done();
});

 gulp.task('tinypng', function (done) {
   gulp.src('./src/image/**/*.{png,jpg,jpeg}')
       .pipe(tinypng({
           key: '1CyDwihmRTS4JSRQbI03zSmd3LkTHlZZ',
       }))
       .pipe(gulp.dest('dist/image/'));
       done();
 });

gulp.task('default', gulp.parallel('minify-css', 'move-js', 'htmlmin', 'fonts', 'tinypng', function (done) {
  // do more stuff
  done();
}));