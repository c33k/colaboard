var gulp = require('gulp');
var path = require('path');
var webserver = require('gulp-webserver');

gulp.task('default', function() {

  gulp.src('control-app')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
    
});