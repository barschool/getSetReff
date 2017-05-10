var gulp = require('gulp');
var minify = require('gulp-minify');
var rename = require("gulp-rename");
 
gulp.task('compress', function() {
  gulp.src('getSetReff.js')
    .pipe(minify({
      ext:{
          src:'.js',
          min:'.min.js'
      },
      noSource: true,
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('rename', function(){
  gulp.src("getSetReff.min.js")
  .pipe(rename("getSetReff.min.js.txt"))
  .pipe(gulp.dest("./dist"));
})

gulp.task('default', ['compress', 'rename']);