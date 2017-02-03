var gulp = require('gulp');
var path = require('path');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var concatCss = require('gulp-concat-css');

var CTRL_BASE_PATH = 'sender';

const paths = {
    images: path.join(CTRL_BASE_PATH, '/img/**/*'),
    css: path.join(CTRL_BASE_PATH, '/app/**/*.css'),
    concatcss: '/css/app.css',
    build: path.join(CTRL_BASE_PATH, 'build/'),
    libs: [
        path.join(CTRL_BASE_PATH,'node_modules/angular/angular.js'),
        path.join(CTRL_BASE_PATH,'node_modules/angular-ui-router/release/angular-ui-router.min.js'),
        path.join(CTRL_BASE_PATH,'node_modules/angular-animate/angular-animate.min.js'),
        path.join(CTRL_BASE_PATH,'node_modules/angular-aria/angular-aria.min.js'),
        path.join(CTRL_BASE_PATH,'node_modules/angular-messages/angular-messages.min.js'),
        path.join(CTRL_BASE_PATH,'node_modules/angular-material/angular-material.min.js')
    ]
};

/* 
* Clean "build" folder
*/
gulp.task('clean', function() {
    return gulp.src(paths.build)
               .pipe(clean());
});

gulp.task('build', ['clean'], function() {
    // Copy images
    gulp.src(paths.images).pipe(gulp.dest(path.join(CTRL_BASE_PATH, '/build/img')));

    /* 
    * Get all CSSs files inside "app/", concatenate and copy into /build/css/app.css
    */
    gulp.src(paths.css)
        .pipe(concatCss(paths.concatcss))
        .pipe(gulp.dest( path.join(paths.build) ))

    // Copy external modules
    gulp.src(paths.libs).pipe(gulp.dest(path.join(CTRL_BASE_PATH, '/build/js')));
});

gulp.task('sender', ['build'], function() {

  gulp.src('sender')
    .pipe(webserver({
        livereload: true,
        open: true
    }));

});