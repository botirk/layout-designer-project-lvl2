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
  gulp.src('src/scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(plumber.stop())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({ stream: true }));
  
  done();
});

gulp.task('watch scss', function(done) {
  gulp.watch('src/scss/*.scss', gulp.series('compile scss'));
  
  done();
});

gulp.task('default', gulp.parallel('compile scss', 'watch scss', 'browser-sync'));