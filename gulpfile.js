const gulp       	 = require('gulp');
const sass       	 = require('gulp-sass')(require('sass'));
const browserSync  = require('browser-sync').create();
const plumber 		 = require('gulp-plumber');

gulp.task('browser-sync', function(done) { 
  browserSync.init({
    server: { baseDir: './src' },
    notify: false,
    port: 8080,
  });
  browserSync.watch('src/').on('change', browserSync.reload);
  
  done();
});

gulp.task('compile scss', function(done){
  gulp.src('src/scss/index.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('src/css'));

  done();
});

gulp.task('watch scss', function(done) {
  gulp.watch('src/scss/*.scss', gulp.series('compile scss'));
  
  done();
});

gulp.task('default', gulp.series('compile scss', gulp.parallel('watch scss', 'browser-sync')));