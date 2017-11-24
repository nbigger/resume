var gulp = require('gulp');

gulp.task('name', function() {
    //implementation of the task
});

gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('assets'))
});
