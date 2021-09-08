var gulp       	 = require('gulp');
var sass       	 = require('gulp-sass');
var browserSync 	 = require('browser-sync').create();
var plumber 		 = require('gulp-plumber');

gulp.task('browser-sync', function(done) { 
  browserSync.init({
    server: { baseDir: './src' },
    notify: false
  });
  browserSync.watch('src/').on('change', browserSync.reload);
  
  done();
});	

gulp.task('sass', function(done){
  gulp.src('src/scss/*.scss')
    .pipe(plumber({
      errorHandler : function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(sass({errLogToConsole: true}))
    .pipe(sass({outputStyle: 'compact'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}));
  
  done();
});

gulp.task('watch', gulp.series('sass', 'browser-sync', function(done) {
  gulp.watch('src/**/*.*', gulp.series('sass'));
  
  done();
}));

gulp.task('default1', gulp.series('browser-sync', function(done) {
  done();
}));