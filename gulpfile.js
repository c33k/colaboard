var gulp = require('gulp');
var path = require('path');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');

var CTRL_BASE_PATH = 'control-app';

const paths = {
    images: path.join(CTRL_BASE_PATH, '/img/**/*'),
    css: path.join(CTRL_BASE_PATH, '/css/**/*'),
    libs: [
        path.join(CTRL_BASE_PATH,'node_modules/angular/angular.js'),
        path.join(CTRL_BASE_PATH,'node_modules/angular-ui-router/release/angular-ui-router.min.js'),
        path.join(CTRL_BASE_PATH,'node_modules/angular-animate/angular-animate.min.js'),
        path.join(CTRL_BASE_PATH,'node_modules/angular-aria/angular-aria.min.js'),
        path.join(CTRL_BASE_PATH,'node_modules/angular-messages/angular-messages.min.js'),
        path.join(CTRL_BASE_PATH,'node_modules/angular-material/angular-material.min.js')
    ],
    build: path.join(CTRL_BASE_PATH, 'build/')
};

gulp.task('clean', function() {
 return gulp.src(paths.build)
    .pipe(clean());
});

gulp.task('build', function() {
    // Copy images
    gulp.src(paths.images).pipe(gulp.dest(path.join(CTRL_BASE_PATH, '/build/img')));

    // Copy css
    gulp.src(paths.css).pipe(gulp.dest(path.join(CTRL_BASE_PATH, '/build/css')));

    // Copy external modules
    gulp.src(paths.libs).pipe(gulp.dest(path.join(CTRL_BASE_PATH, '/build/js')));
});

gulp.task('default', ['clean', 'build'], function() {

  gulp.src('control-app')
    .pipe(webserver({
        livereload: true,
        open: true
    }));

});