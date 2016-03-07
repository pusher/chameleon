var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

//declare the task
gulp.task('sass', function(done) {
  gulp.src('./stylesheets/chameleon/chameleon.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 20 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest('./dist/'))
    .on('end', done);
});


gulp.task('sass:watch', function () {
  gulp.watch('./stylesheets/**/*.scss', ['sass']);
});